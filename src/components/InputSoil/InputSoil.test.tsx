import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputSoil, InputSoilProps } from '.';

const functeste = jest.fn();

const props: InputSoilProps = {
  onFormChangeSoil: functeste,
  index: 1,
};

describe('<InputSoil />', () => {
  it('should render the correct input subtype', () => {
    renderTheme(<InputSoil />);

    const type1 = screen.getByText('Areia');
    const type2 = screen.getByText('Silte');
    const type3 = screen.getByText('Argila');

    expect(type1).toBeInTheDocument();
    expect(type2).toBeInTheDocument();
    expect(type3).toBeInTheDocument();

    fireEvent.click(type1);
    expect(
      screen.getByRole('radio', { name: 'Areia Siltosa' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('radio', { name: 'Silte Comum' }),
    ).not.toBeInTheDocument();

    fireEvent.click(type2);
    expect(
      screen.getByRole('radio', { name: 'Silte Comum' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('radio', { name: 'Argila Comum' }),
    ).not.toBeInTheDocument();

    fireEvent.click(type3);
    expect(
      screen.getByRole('radio', { name: 'Argila Siltosa' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('radio', { name: 'Areia Comum' }),
    ).not.toBeInTheDocument();
  });
  it('should call function onChange Areia', () => {
    renderTheme(<InputSoil {...props} />);

    const AreiaCom = screen.getByRole('radio', { name: 'Areia Comum' });
    const AreiaSilt = screen.getByRole('radio', { name: 'Areia Siltosa' });
    const AreiaSilArg = screen.getByRole('radio', {
      name: 'Areia Siltoargilosa',
    });
    const AreiaArg = screen.getByRole('radio', { name: 'Areia Argilosa' });
    const AreiaArgSil = screen.getByRole('radio', {
      name: 'Areia Argilossiltosa',
    });

    fireEvent.click(AreiaCom);
    expect(functeste).toHaveBeenCalledWith({ subtype: '1', type: 'Areia' });
    fireEvent.click(AreiaSilt);
    expect(functeste).toHaveBeenCalledWith({ subtype: '2', type: 'Areia' });
    fireEvent.click(AreiaSilArg);
    expect(functeste).toHaveBeenCalledWith({ subtype: '3', type: 'Areia' });
    fireEvent.click(AreiaArg);
    expect(functeste).toHaveBeenCalledWith({ subtype: '4', type: 'Areia' });
    fireEvent.click(AreiaArgSil);
    expect(functeste).toHaveBeenCalledWith({ subtype: '5', type: 'Areia' });
  });
  it('should call function onChange Silte', () => {
    renderTheme(<InputSoil {...props} />);
    fireEvent.click(screen.getByText('Silte'));

    const Comum = screen.getByRole('radio', { name: 'Silte Comum' });
    const Arenoso = screen.getByRole('radio', { name: 'Silte Arenoso' });
    const Arenoargiloso = screen.getByRole('radio', {
      name: 'Silte Arenoargiloso',
    });
    const Argiloso = screen.getByRole('radio', { name: 'Silte Argiloso' });
    const Argiloarenoso = screen.getByRole('radio', {
      name: 'Silte Argiloarenoso',
    });

    fireEvent.click(Comum);
    expect(functeste).toHaveBeenCalledWith({ subtype: '1', type: 'Silte' });
    fireEvent.click(Arenoso);
    expect(functeste).toHaveBeenCalledWith({ subtype: '2', type: 'Silte' });
    fireEvent.click(Arenoargiloso);
    expect(functeste).toHaveBeenCalledWith({ subtype: '3', type: 'Silte' });
    fireEvent.click(Argiloso);
    expect(functeste).toHaveBeenCalledWith({ subtype: '4', type: 'Silte' });
    fireEvent.click(Argiloarenoso);
    expect(functeste).toHaveBeenCalledWith({ subtype: '5', type: 'Silte' });
  });
  it('should call function onChange Argila', () => {
    renderTheme(<InputSoil {...props} />);
    fireEvent.click(screen.getByText('Argila'));

    const Comum = screen.getByRole('radio', { name: 'Argila Comum' });
    const Arenosa = screen.getByRole('radio', { name: 'Argila Arenosa' });
    const Arenossiltosa = screen.getByRole('radio', {
      name: 'Argila Arenossiltosa',
    });
    const Siltosa = screen.getByRole('radio', { name: 'Argila Siltosa' });
    const Siltoarenosa = screen.getByRole('radio', {
      name: 'Argila Siltoarenosa',
    });

    fireEvent.click(Comum);
    expect(functeste).toHaveBeenCalledWith({ subtype: '1', type: 'Argila' });
    fireEvent.click(Arenosa);
    expect(functeste).toHaveBeenCalledWith({ subtype: '2', type: 'Argila' });
    fireEvent.click(Arenossiltosa);
    expect(functeste).toHaveBeenCalledWith({ subtype: '3', type: 'Argila' });
    fireEvent.click(Siltosa);
    expect(functeste).toHaveBeenCalledWith({ subtype: '4', type: 'Argila' });
    fireEvent.click(Siltoarenosa);
    expect(functeste).toHaveBeenCalledWith({ subtype: '5', type: 'Argila' });
  });
  it('should call function onChange Type', () => {
    renderTheme(<InputSoil {...props} />);

    //Selected 1
    fireEvent.click(screen.getByText('Areia Comum'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '1', type: 'Areia' });

    fireEvent.click(screen.getByText('Silte'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '1', type: 'Silte' });

    fireEvent.click(screen.getByText('Argila'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '1', type: 'Argila' });

    fireEvent.click(screen.getByText('Areia'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '1', type: 'Areia' });

    //Selected 2
    fireEvent.click(screen.getByText('Areia Siltosa'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '2', type: 'Areia' });

    fireEvent.click(screen.getByText('Silte'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '2', type: 'Silte' });

    fireEvent.click(screen.getByText('Argila'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '2', type: 'Argila' });

    fireEvent.click(screen.getByText('Areia'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '2', type: 'Areia' });

    //Selected 3
    fireEvent.click(screen.getByText('Areia Siltoargilosa'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '3', type: 'Areia' });

    fireEvent.click(screen.getByText('Silte'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '3', type: 'Silte' });

    fireEvent.click(screen.getByText('Argila'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '3', type: 'Argila' });

    fireEvent.click(screen.getByText('Areia'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '3', type: 'Areia' });

    //Selected 4
    fireEvent.click(screen.getByText('Areia Argilosa'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '4', type: 'Areia' });

    fireEvent.click(screen.getByText('Silte'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '4', type: 'Silte' });

    fireEvent.click(screen.getByText('Argila'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '4', type: 'Argila' });

    fireEvent.click(screen.getByText('Areia'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '4', type: 'Areia' });

    //Selected 5
    fireEvent.click(screen.getByText('Areia Argilossiltosa'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '5', type: 'Areia' });

    fireEvent.click(screen.getByText('Silte'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '5', type: 'Silte' });

    fireEvent.click(screen.getByText('Argila'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '5', type: 'Argila' });

    fireEvent.click(screen.getByText('Areia'));
    expect(functeste).toHaveBeenCalledWith({ subtype: '5', type: 'Areia' });
  });
});
