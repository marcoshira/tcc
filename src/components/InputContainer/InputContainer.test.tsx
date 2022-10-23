import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputContainer, InputContainerProps } from '.';
import { InputSoil } from '../InputSoil';

const props: InputContainerProps = {
  children: <InputSoil />,
  title: 'Tipo de Solo',
};

describe('<InputContainer />', () => {
  it('should render', () => {
    renderTheme(<InputContainer {...props} />);

    expect(screen.getByText('Areia')).toBeInTheDocument();
  });
  it('should handle click', () => {
    renderTheme(<InputContainer {...props} />);

    expect(screen.getByLabelText('InputMenu')).toHaveStyle({
      height: '0px',
      opacity: '0',
    });
    const header = screen.queryByRole('heading', { name: 'Tipo de Solo' });
    fireEvent.click(header);
    expect(screen.getByLabelText('InputMenu')).toHaveStyle({
      height: '24rem',
      opacity: '1',
    });
  });
});
