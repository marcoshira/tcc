import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NsptInput, NsptInputProps } from '.';

const props: NsptInputProps = {
  title: 'any',
};

describe('<NsptInput />', () => {
  it('should render', () => {
    renderTheme(<NsptInput {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
