import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, waitFor } from '@solidjs/testing-library';
import { userEvent, UserEvent } from '@testing-library/user-event';
import { t } from '@/utils/test.utils';

import Create from '../Create/Create';
import { TranslationProvider } from '@/i18n/TranslationProvider';

const { mockToPng } = vi.hoisted(() => ({
  mockToPng: vi.fn(),
}));

vi.mock('html-to-image', async (importOriginal) => {
  const actualModule = await importOriginal<typeof import('html-to-image')>();
  return {
    ...actualModule,
    __esModule: true,
    toPng: mockToPng,
  };
});

let user: UserEvent;

const CreateWithProvider = () => (
  <TranslationProvider>
    <Create />
  </TranslationProvider>
);

describe('Create page', () => {
  beforeEach(() => {
    user = userEvent.setup({ delay: null });
  });

  afterEach(cleanup);

  test('displays all basic page elements', async () => {
    render(() => <CreateWithProvider />);
    const title = await screen.findByText(t('CREATE_PAGE_TITLE'));
    expect(title).toBeInTheDocument();
  });

  test('correctly works editing bingo title', async () => {
    render(() => <CreateWithProvider />);
    const titleInput = await screen.findByLabelText(t('CREATE_FORM_INPUT_TITLE_LABEL'));
    await user.clear(titleInput);
    await user.click(titleInput);
    await user.paste('New bingo');

    await waitFor(() => {
      const updatedTitle = screen.getByText('New bingo');
      expect(updatedTitle).toBeInTheDocument();
    });
  });

  test('correctly works selecting and editing cell', async () => {
    render(() => <CreateWithProvider />);

    const firstCell = await screen.findByText('Cell 1');
    const cellInputTry1 = screen.queryByPlaceholderText(t('CREATE_FORM_INPUT_CELL_PLACEHOLDER'));
    expect(cellInputTry1).not.toBeInTheDocument();

    await user.click(firstCell);

    const cellInputTry2 = screen.getByPlaceholderText(t('CREATE_FORM_INPUT_CELL_PLACEHOLDER'));
    expect(cellInputTry2).toBeInTheDocument();

    await user.clear(cellInputTry2);
    await user.click(cellInputTry2);
    await user.paste('Новий текст');

    await waitFor(() => {
      const updatedCell = screen.getByText('Новий текст');
      expect(updatedCell).toBeInTheDocument();
    });
  });

  test('should enable slider when clicking on cell', async () => {
    render(() => <CreateWithProvider />);

    const slider = screen.queryByRole('slider');
    expect(slider).not.toBeInTheDocument();
    const cell = await screen.findByText('Cell 1');
    await user.click(cell);

    const sliders = screen.getAllByRole('slider');
    expect(sliders[0]).toBeInTheDocument();
    expect(sliders[0]).not.toHaveAttribute('data-disabled');
  });

  test('should create download link', async () => {
    render(() => <CreateWithProvider />);

    const downloadButton = await screen.findByText(t('CREATE_FORM_BUTTON_DOWNLOAD'));
    expect(downloadButton).toBeInTheDocument();

    mockToPng.mockResolvedValue('fake-data-url');

    await user.click(downloadButton);

    expect(mockToPng).toHaveBeenCalled();
  });
});
