import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Home } from '.';
import Modal from 'react-modal';

Modal.setAppElement(document.createElement('div'));
describe('<Home />', () => {
  it('should render', () => {
    renderTheme(<Home modalElement="div" />);

    const soil = screen.getByText('Areia Comum');
    fireEvent.click(soil);

    const stake = screen.getByText('Franki');
    fireEvent.click(stake);

    const inputArea = screen.getByRole('spinbutton', {
      name: 'Diâmetro / Lado da Estaca m',
    });
    fireEvent.change(inputArea, { target: { value: '12' } });
    const inputLength = screen.getByRole('spinbutton', {
      name: 'Profundidade do Fuste m',
    });
    fireEvent.change(inputLength, { target: { value: '2' } });
    const spt1 = screen.queryByRole('spinbutton', { name: 'Nspt a 1m:' });
    fireEvent.change(spt1, { target: { value: '20' } });
    const spt2 = screen.queryByRole('spinbutton', { name: 'Nspt a 2m:' });
    fireEvent.change(spt2, { target: { value: '20' } });
    const spt3 = screen.queryByRole('spinbutton', { name: 'Nspt a 3m:' });
    fireEvent.change(spt3, { target: { value: '20' } });

    const shapeInput = screen.queryByRole('radio', {
      name: 'Circunferência',
    });
    fireEvent.click(shapeInput);

    const soilInput = screen.queryByRole('radio', {
      name: 'Areia Argilosa',
    });
    fireEvent.click(soilInput);

    const soilDepth = screen.getByRole('spinbutton', {
      name: 'Profundidade: m',
    });
    fireEvent.change(soilDepth, { target: { value: 14 } });

    const btnLayer = screen.queryByRole('button', { name: 'Adicionar Camada' });
    fireEvent.click(btnLayer);

    const closeArray = screen.queryAllByLabelText('CloseLayer');
    fireEvent.click(closeArray.pop());

    const btn = screen.queryByRole('button', { name: 'Calcular' });
    fireEvent.click(btn);

    const closeModal = screen.queryByLabelText('Close Menu');
    fireEvent.click(closeModal);
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<Home />);
    expect(container).toMatchSnapshot();
  });
});
