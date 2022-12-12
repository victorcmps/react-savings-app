import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { Menu } from './Menu';
import { render, screen } from '@testing-library/react';

function Component() {
  return (
    <ThemeProvider theme={theme}>
      <Menu></Menu>
    </ThemeProvider>
  );
}

describe('Menu', () => {
  it('should render component', async () => {
    render(<Component />);
    const menu = await screen.findByAltText('Origin Logo');

    expect(menu).toBeInTheDocument();
  });
});
