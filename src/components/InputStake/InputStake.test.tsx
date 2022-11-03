import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputStake, InputStakeProps } from '.';

const func = jest.fn();

const props: InputStakeProps = {
  onFormChangeStake: func,
};

describe('<InputSoil />', () => {
  it('should render and match snapshot', () => {
    const { container } = renderTheme(<InputStake />);
    expect(
      screen.getByRole('radio', { name: 'Escavada em geral' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('should call function onChange', () => {
    renderTheme(<InputStake {...props} />);

    const type1 = screen.getByRole('radio', { name: 'Escavada em geral' });
    const type2 = screen.getByRole('radio', { name: 'Escavada (bentonita)' });
    const type3 = screen.getByRole('radio', { name: 'Hélice contínua' });
    const type4 = screen.getByRole('radio', { name: 'Raiz' });
    const type5 = screen.getByRole('radio', {
      name: 'Injetada sob altas pressões',
    });
    const type6 = screen.getByRole('radio', { name: 'Franki' });
    const type7 = screen.getByRole('radio', { name: 'Metálica' });
    const type8 = screen.getByRole('radio', { name: 'Pré-moldada' });

    expect(type1).toBeInTheDocument();
    fireEvent.click(type1);
    expect(func).toHaveBeenCalledWith(1);
    fireEvent.click(type2);
    expect(func).toHaveBeenCalledWith(2);
    fireEvent.click(type3);
    expect(func).toHaveBeenCalledWith(3);
    fireEvent.click(type4);
    expect(func).toHaveBeenCalledWith(4);
    fireEvent.click(type5);
    expect(func).toHaveBeenCalledWith(5);
    fireEvent.click(type6);
    expect(func).toHaveBeenCalledWith(6);
    fireEvent.click(type7);
    expect(func).toHaveBeenCalledWith(7);
    fireEvent.click(type8);
    expect(func).toHaveBeenCalledWith(8);
  });
});
