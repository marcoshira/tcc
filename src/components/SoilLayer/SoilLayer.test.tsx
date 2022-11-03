import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SoilLayer, SoilLayerProps } from '.';

const func1 = jest.fn();
const func2 = jest.fn();
const func3 = jest.fn();

const props: SoilLayerProps = {
  index: 0,
  onLayerFormChangeSoil: func1,
  onLayerFormChangeDepth: func2,
  onRemoveLayer: func3,
};

describe('<SoilLayer />', () => {
  it('should render', () => {
    renderTheme(<SoilLayer {...props} />);

    expect(screen.getByText('Camada 1')).toBeInTheDocument();
    expect(
      screen.getByText('*Desconsidere o primeiro metro da primeira camada'),
    ).toBeInTheDocument();
    const soilDepth = screen.getByText('Profundidade:');
    const soil = screen.getByText('Areia Siltosa');
    fireEvent.change(soilDepth.nextSibling, { target: { value: 10 } });
    expect(func2).toHaveBeenCalledWith('10', 0);
    fireEvent.click(soil);
    expect(func1).toHaveBeenCalledWith({ subtype: '2', type: 'Areia' }, 0);
  });
  it('should render with default values', () => {
    renderTheme(<SoilLayer />);

    expect(screen.getByText('Camada 1')).toBeInTheDocument();
  });
});
