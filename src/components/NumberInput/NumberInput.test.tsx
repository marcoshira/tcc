import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NumberInput, NumberInputProps } from '.';

const func = jest.fn();

const props: NumberInputProps = {
  title: 'Area',
  onInputChange: func,
  un: 'm²',
  placeholder: '9',
};

describe('<NumberInput />', () => {
  it('should render and call a function on input change', () => {
    renderTheme(<NumberInput {...props} />);

    fireEvent.change(screen.queryByRole('spinbutton'), {
      target: { value: '12' },
    });
    expect(func).toHaveBeenCalledWith('12');
    expect(screen.getByText('m²')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('9')).toBeInTheDocument();
  });
  it('should render with default values and match snapshot', () => {
    const { container } = renderTheme(<NumberInput />);

    expect(screen.getByText('m')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
