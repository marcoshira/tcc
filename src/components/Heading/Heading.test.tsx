import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.huge,
      'text-transform': 'none',
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render correct media query', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase', () => {
    renderTheme(
      <Heading uppercase size="big">
        texto
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(
      <Heading as="h6" size="medium">
        texto
      </Heading>,
    );

    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>texto</Heading>);
    expect(container).toMatchSnapshot();
  });
});
