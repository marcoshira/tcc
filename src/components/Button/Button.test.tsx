import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Button, ButtonProps } from '.';
import { theme } from '../../styles/theme';

const props: ButtonProps = {
  disabled: false,
  children: 'Button',
};
const functeste = jest.fn();

describe('<Button />', () => {
  it('should render', () => {
    renderTheme(<Button {...props} />);

    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyleRule(
      'background',
      'inherit',
    );
  });

  it('should render disabled', () => {
    renderTheme(<Button disabled={true}>Button</Button>);

    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle(
      `background: ${theme.colors.grey}`,
    );
  });

  it('should render with onCLick', () => {
    renderTheme(<Button onClick={functeste}>Teste: 1</Button>);

    expect(
      screen.getByRole('button', { name: 'Teste: 1' }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Teste: 1' }));
    expect(functeste).toHaveBeenCalledTimes(1);
  });
});
