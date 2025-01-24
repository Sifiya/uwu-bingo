import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen, cleanup } from '@solidjs/testing-library';
import { userEvent, UserEvent } from '@testing-library/user-event';
import { t, renderWrapped } from '@/utils/test.utils';

import { OTPLoginForm } from '../auth/otpLoginForm';

const { mockSignInWithOtp } = vi.hoisted(() => ({
  mockSignInWithOtp: vi.fn(),
}));
vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: {
      signInWithOtp: mockSignInWithOtp,
    }
  })
}));

let user: UserEvent;

describe('OTPLoginForm', () => {
  beforeEach(() => {
    user = userEvent.setup({ delay: null });
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  test('renders form elements correctly', async () => {
    renderWrapped(() => <OTPLoginForm />);

    const emailLabel = await screen.findByText(t('LOGIN_MODAL_FORM_EMAIL_LABEL'));
    const emailInput = screen.getByRole('textbox');
    const submitButton = screen.getByText(t('LOGIN_MODAL_BUTTON_EMAIL'));

    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('handles email input correctly', async () => {
    renderWrapped(() => <OTPLoginForm />);

    const emailInput = await screen.findByRole('textbox');
    await user.type(emailInput, 'new@example.com');

    expect(emailInput).toHaveValue('new@example.com');
  });

  test('handles form submission', async () => {
    mockSignInWithOtp.mockResolvedValue({
      data: { user: null },
      error: null
    });

    renderWrapped(() => <OTPLoginForm />);

    const emailInput = await screen.findByRole('textbox');
    await user.type(emailInput, 'new@example.com');
    await user.click(screen.getByText(t('LOGIN_MODAL_BUTTON_EMAIL')));

    expect(mockSignInWithOtp).toHaveBeenCalledTimes(1);
    expect(mockSignInWithOtp).toHaveBeenCalledWith({ email: 'new@example.com' });
  });

  test('displays error message when api returns error', async () => {
    mockSignInWithOtp.mockResolvedValue({
      data: null,
      error: { message: 'Test error message' }
    });

    renderWrapped(() => <OTPLoginForm />);

    const emailInput = await screen.findByRole('textbox');
    await user.type(emailInput, 'new@example.com');
    await user.click(screen.getByText(t('LOGIN_MODAL_BUTTON_EMAIL')));

    const errorTitle = await screen.findByText(t('LOGIN_MODAL_FORM_ERROR_TITLE'));
    const errorMessage = await screen.findByText('Test error message');

    expect(errorTitle).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays error message and disables button for invalid email', async () => {
    renderWrapped(() => <OTPLoginForm />);

    const emailInput = await screen.findByRole('textbox');
    const submitButton = screen.getByText(t('LOGIN_MODAL_BUTTON_EMAIL'));

    await user.type(emailInput, 'invalid-email');
    await user.click(submitButton);
    const validationError = await screen.findByText(t('INVALID_EMAIL_ERROR'));

    expect(validationError).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('disables submit button when email is empty', async () => {
    renderWrapped(() => <OTPLoginForm />);

    const submitButton = await screen.findByText(t('LOGIN_MODAL_BUTTON_EMAIL'));
    expect(submitButton).toBeDisabled();
  });
});
