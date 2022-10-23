import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NumberInput, NumberInputProps } from '.';

const props: NumberInputProps = {
  title: 'any',
};

describe('<NumberInput />', () => {
  it('should render', () => {
    renderTheme(<NumberInput {...props} />);

    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
