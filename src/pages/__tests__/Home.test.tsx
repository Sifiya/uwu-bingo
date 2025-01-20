import { describe, test, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';
import Home from '../Home';
import { TranslationProvider } from '@/i18n/TranslationProvider';

const HomeWithProvider = () => (
  <TranslationProvider>
    <Home />
  </TranslationProvider>
);

describe('Home', () => {
  test('render all text elements and button', async () => {
    render(() => <HomeWithProvider />);

    const title = await screen.findByText('Генератор бінго');
    expect(title).toBeInTheDocument();
    const description = screen.getByText('Cтворюйте персоналізовані бінго картки, діліться посиланням з друзями, заповнюйте прямо на сайті, отримуйте зображення, готові для публікації в соцмережах.');
    expect(description).toBeInTheDocument();
    const callToAction = screen.getByText('Щоб почати, натисніть на кнопку нижче');
    expect(callToAction).toBeInTheDocument();
    const button = screen.getByText('Створити бінго');
    expect(button).toBeInTheDocument();
  });
});
