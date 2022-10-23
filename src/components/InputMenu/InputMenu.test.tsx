import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputMenu, InputMenuProps } from '.';
import { InputSoil } from '../InputSoil';

const props: InputMenuProps = {
  children: <InputSoil />,
};

describe('<InputMenu />', () => {
  it('should render', () => {
    renderTheme(<InputMenu {...props} />);

    expect(screen.getByText('Areia')).toBeInTheDocument();
  });

  it('should render no height and opacity', () => {
    const { container } = renderTheme(<InputMenu {...props} />);

    expect(container.firstChild).toHaveStyle({
      height: '0px',
      opacity: '0',
    });

    expect(container).toMatchSnapshot();
  });

  it('should render the default height and opacity', () => {
    const { container } = renderTheme(<InputMenu {...props} display={true} />);

    expect(container.firstChild).toHaveStyle({
      height: '24rem',
      opacity: '1',
    });
  });

  it('should render small height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="small" />,
    );

    expect(container.firstChild).toHaveStyle({
      height: '15rem',
    });
  });

  it('should render mediumSmall height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="mediumSmall" />,
    );

    expect(container.firstChild).toHaveStyle({
      height: '24rem',
    });
  });

  it('should render big height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="big" />,
    );

    expect(container.firstChild).toHaveStyle({
      height: '28rem',
    });
  });

  it('should render huge height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="huge" />,
    );

    expect(container.firstChild).toHaveStyle({
      height: '32rem',
    });
  });
});
