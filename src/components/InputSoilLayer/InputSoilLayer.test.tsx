import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputSoilLayer, InputSoilLayerProps } from '.';

const func1 = jest.fn();
const func2 = jest.fn();

const props: InputSoilLayerProps = {
  depth: 10,
  layer: 3,
  onRemoveLayer: func1,
  onAddLayer: func2,
};

describe('<InputSoilLayer />', () => {
  it('should render', () => {
    renderTheme(<InputSoilLayer {...props} />);

    expect(
      screen.getByRole('button', { name: 'Adicionar Camada' }),
    ).toBeInTheDocument();
  });
  it('should add and remove layer', () => {
    renderTheme(<InputSoilLayer {...props} />);

    const closeArray = screen.queryAllByLabelText('CloseLayer');
    fireEvent.click(closeArray.pop());
    expect(func1).toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'Adicionar Camada' }));
    expect(func2).toHaveBeenCalled();
  });
  it('should render', () => {
    renderTheme(<InputSoilLayer />);

    expect(
      screen.getByRole('button', { name: 'Adicionar Camada' }),
    ).toBeInTheDocument();
  });
});
