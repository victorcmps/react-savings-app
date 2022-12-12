import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';

type componentProps = {
  children: React.ReactNode;
  className?: string;
};

function Component(props: componentProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button className={props.className}>{props.children}</Button>
    </ThemeProvider>
  );
}

describe('Button', () => {
    it('should render with children', async () => {
      render(<Component>Button</Component>);
      const button = await screen.findByText('Button');

      expect(button).toBeInTheDocument();
    });

    it('should render with children and className', async () => {
      render(<Component className="test">Button</Component>);
      const button = await screen.findByText('Button');

      expect(button).toHaveClass('test');
    });
});
