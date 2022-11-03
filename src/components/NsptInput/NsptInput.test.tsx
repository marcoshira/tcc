import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NsptInput, NsptInputProps } from '.';

const func = jest.fn();

const props: NsptInputProps = {
  depth: 4,
  onSPTFormChange: func,
};

describe('<NsptInput />', () => {
  it('should render with default values', () => {
    renderTheme(<NsptInput />);

    expect(
      screen.queryByRole('spinbutton', { name: 'Nspt a 1m:' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('spinbutton', { name: 'Nspt a 2m:' }),
    ).not.toBeInTheDocument();
  });
  it('should render with correct amount of inputs', () => {
    renderTheme(<NsptInput {...props} />);

    expect(
      screen.queryByRole('spinbutton', { name: 'Nspt a 5m:' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('spinbutton', { name: 'Nspt a 6m:' }),
    ).not.toBeInTheDocument();
  });
  it('should call function on input change', () => {
    renderTheme(<NsptInput {...props} />);

    fireEvent.change(screen.queryByRole('spinbutton', { name: 'Nspt a 1m:' }), {
      target: { value: '12' },
    });
    expect(func).toHaveBeenCalledWith('12', 0);
    fireEvent.change(screen.queryByRole('spinbutton', { name: 'Nspt a 2m:' }), {
      target: { value: '2' },
    });
    expect(func).toHaveBeenCalledWith('2', 1);
    fireEvent.change(screen.queryByRole('spinbutton', { name: 'Nspt a 3m:' }), {
      target: { value: '3' },
    });
    expect(func).toHaveBeenCalledWith('3', 2);
    fireEvent.change(screen.queryByRole('spinbutton', { name: 'Nspt a 4m:' }), {
      target: { value: '4' },
    });
    expect(func).toHaveBeenCalledWith('4', 3);
  });
});
