import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputSoil } from '.';

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
});
