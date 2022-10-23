import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputStake } from '.';

describe('<InputSoil />', () => {
  it('should render and match snapshot', () => {
    const { container } = renderTheme(<InputStake />);
    expect(
      screen.getByRole('radio', { name: 'Escavada em geral' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
