import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputHeader, InputHeaderProps } from '.';

const func = jest.fn();

const props: InputHeaderProps = {
  title: 'test',
  onClick: func,
};

describe('<InputHeader />', () => {
  it('should call a function onCLick', async () => {
    const { container } = renderTheme(<InputHeader {...props} />);

    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument();

    fireEvent.click(container.firstChild);
    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
});
