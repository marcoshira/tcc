import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Wrapper } from '.';

describe('<Wrapper />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <Wrapper>
        <p>oiu</p>
      </Wrapper>,
    );

    expect(container).toMatchSnapshot();
  });
});
