import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputDim, InputDimProps } from '.';

const func = jest.fn();
const func2 = jest.fn();
const func3 = jest.fn();

const props: InputDimProps = {
  onFormChangeArea: func,
  onFormChangeShape: func2,
  onFormChangeComp: func3,
};

describe('<InputDim />', () => {
  it('should render and match snapshot', () => {
    const { container } = renderTheme(<InputDim />);
    expect(
      screen.getByRole('spinbutton', { name: 'Profundidade do Fuste m' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should change input', () => {
    renderTheme(<InputDim {...props} />);
    const inputArea = screen.getByRole('spinbutton', {
      name: 'Diâmetro / Lado da Estaca m',
    });
    const inputLength = screen.getByRole('spinbutton', {
      name: 'Profundidade do Fuste m',
    });
    const inputShapeC = screen.getByRole('radio', {
      name: 'Circunferência',
    });
    const inputShapeQ = screen.getByRole('radio', {
      name: 'Quadrado',
    });

    fireEvent.change(inputArea, { target: { value: 123 } });
    fireEvent.change(inputLength, { target: { value: 125 } });
    fireEvent.click(inputShapeC);
    fireEvent.click(inputShapeQ);

    expect(inputArea).toHaveValue(123);
    expect(inputLength).toHaveValue(125);

    expect(func).toHaveBeenCalled();
    expect(func2).toHaveBeenCalledWith(1);
    expect(func2).toHaveBeenCalledWith(2);
    expect(func3).toHaveBeenCalled();
  });
});
