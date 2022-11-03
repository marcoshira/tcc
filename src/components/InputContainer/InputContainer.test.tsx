import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputContainer, InputContainerProps } from '.';
import { InputDim } from '../InputDim';

const func = jest.fn();

const props: InputContainerProps = {
  children: <InputDim onFormChangeComp={func} />,
  title: 'Dimensões da Estaca',
};

describe('<InputContainer />', () => {
  it('should render', () => {
    renderTheme(<InputContainer {...props} />);

    expect(screen.getByText('Dimensões da Estaca')).toBeInTheDocument();
  });
  it('should handle click', () => {
    const { container } = renderTheme(
      <InputContainer {...props} errorMessage="oi" red={true} />,
    );

    expect(screen.getByLabelText('InputMenu')).toHaveStyle({
      height: '0px',
      opacity: '0',
    });
    const header = screen.queryByRole('heading', {
      name: 'Dimensões da Estaca',
    });
    fireEvent.click(header);
    expect(screen.getByLabelText('InputMenu')).toHaveStyle({
      height: '24rem',
      opacity: '1',
    });

    const inputLength = screen.getByRole('spinbutton', {
      name: 'Profundidade do Fuste m',
    });
    fireEvent.change(inputLength, { target: { value: null } });
    fireEvent.blur(container.firstChild);

    const span = screen.getByText('oi');
    expect(span).toBeInTheDocument();
  });
});
