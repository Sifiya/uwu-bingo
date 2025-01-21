import { describe, test, expect, vi, afterEach } from 'vitest';
import { fireEvent, render, screen, cleanup } from '@solidjs/testing-library';

import { NumberSlider } from '@/components/ui/numberSlider';

describe('NumberSlider', () => {
  afterEach(cleanup);

  test('should render with provided min and max', () => {
    render(() => <NumberSlider min={1} max={10} step={0.1} value={5} onChange={() => {}} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('min', '1');
    expect(slider).toHaveAttribute('max', '10');
    expect(slider).toHaveAttribute('step', '0.1');
  });

  test('should accept value and onChange', async () => {
    const onChange = vi.fn();
    render(() => <NumberSlider min={1} max={10} value={5} onChange={onChange} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('step', '1');
    expect(slider).toHaveValue('5');
    await fireEvent.change(slider, { target: { value: '7' } });
    expect(onChange).toHaveBeenCalledWith(7);
  });
});
