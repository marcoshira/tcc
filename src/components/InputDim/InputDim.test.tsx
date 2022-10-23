import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputDim } from '.';

describe('<InputSoil />', () => {
  it('should render and match snapshot', () => {
    const { container } = renderTheme(<InputDim />);
    expect(
      screen.getByRole('spinbutton', { name: 'Área da Ponta m²' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should change input', () => {
    renderTheme(<InputDim />);
    const inputArea = screen.getByRole('spinbutton', {
      name: 'Área da Ponta m²',
    });
    const inputPeri = screen.getByRole('spinbutton', {
      name: 'Perímetro do Fuste m',
    });
    const inputLength = screen.getByRole('spinbutton', {
      name: 'Comprimento do Fuste m',
    });

    fireEvent.change(inputArea, { target: { value: 123 } });
    fireEvent.change(inputPeri, { target: { value: 124 } });
    fireEvent.change(inputLength, { target: { value: 125 } });

    expect(inputArea).toHaveValue(123);
    expect(inputPeri).toHaveValue(124);
    expect(inputLength).toHaveValue(125);
  });
});
