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
      height: '18rem',
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
  it('should render spt < 6 height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="spt" depth={2} />,
    );

    expect(container.firstChild).toHaveStyle({
      height: '18rem',
    });
  });
  it('should render spt < 8 height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="spt" depth={7} />,
    );

    expect(container.firstChild).toHaveStyle({
      height: '21rem',
    });
  });
  it('should render spt < 10 height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="spt" depth={8} />,
    );

    expect(container.firstChild).toHaveStyle({
      height: '24rem',
    });
  });
  it('should render spt > 10 height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="spt" depth={14} />,
    );
    expect(container.firstChild).toHaveStyle({
      height: '36rem',
    });
  });
  it('should render 0 layer height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="layer" layer={0} />,
    );

    expect(container.firstChild).toHaveStyle({
      height: '3rem',
    });
  });
  it('should render layer height ', () => {
    const { container } = renderTheme(
      <InputMenu {...props} display={true} size="layer" layer={5} />,
    );

    expect(container.firstChild).toHaveStyle({
      height: '169rem',
    });
  });
});
