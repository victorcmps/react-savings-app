import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { Card } from './Card';
import { render, screen } from '@testing-library/react';

type componentProps = {
  children: React.ReactNode;
  className?: string;
};

function Component(props: componentProps) {
  return (
    <ThemeProvider theme={theme}>
      <Card className={props.className}>{props.children}</Card>
    </ThemeProvider>
  );
}

describe('Card', () => {
    it('should render with children', async () => {
      render(<Component><p>This is a paragraph</p></Component>);
      const card = await screen.findByText('This is a paragraph');

      expect(card).toBeInTheDocument();
    });

    it('should render with children and className', async () => {
      render(<Component className="cardTest"><p>This is a paragraph</p></Component>);
      const card = await screen.findByText('This is a paragraph');

      expect(card.parentElement).toHaveClass('cardTest');
    });
});
