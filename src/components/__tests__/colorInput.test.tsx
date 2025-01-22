import { describe, test, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@solidjs/testing-library';

import { ColorInput } from '@/components/ui/colorInput';

describe('ColorInput', () => {
  afterEach(cleanup);

  test('should render component with provided props', () => {
    render(() => (
      <ColorInput
        label="Text color"
        name="text-color"
        value="#FF0000"
        onChange={() => {}}
      />
    ));

    const input = screen.getByLabelText('Text color');
    const label = screen.getByText('Text color');
    const value = screen.getByText('#FF0000');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'color');
    expect(input).toHaveAttribute('name', 'text-color');
    expect(input).toHaveValue('#ff0000');
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  test('should call onChange when value changes', async () => {
    const onChange = vi.fn();

    render(() => (
      <ColorInput
        label="Text color"
        name="text-color"
        value="#FF0000"
        onChange={onChange}
      />
    ));

    const input = screen.getByLabelText('Text color');
    await fireEvent.change(input, { target: { value: '#00FF00' } });

    expect(onChange).toHaveBeenCalledWith('#00ff00');
  });
});
