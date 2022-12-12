import { ReachDate } from './ReachDate';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { getNextOrPrevDate } from '../../utils';

let date = getNextOrPrevDate(new Date(), false);
let onMonthChange = jest.fn();
type componentProps = {
  value: Date;
  onMonthChange: (
    isPreviousMonth: boolean,
    event:
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;
};

function Component(props: componentProps) {
  return (
    <ThemeProvider theme={theme}>
      <ReachDate value={props.value} onMonthChange={props.onMonthChange} />
    </ThemeProvider>
  );
}

describe('ReachDate', () => {
  describe('Basic tests', () => {
    it('should render month and year', async () => {
      const fixedDate = getNextOrPrevDate(new Date('2022-12-11'), false);
      render(<Component value={fixedDate} onMonthChange={onMonthChange} />);
      const month = await screen.findByText('January');
      const year = await screen.findByText('2023');

      expect(month).toBeInTheDocument();
      expect(year).toBeInTheDocument();
    });
  });

  describe('Mouse Actions', () => {
    it('should NOT fire event on button click if is disabled', async () => {
      render(<Component value={date} onMonthChange={onMonthChange} />);
      const button = await screen.findByTestId('button-prev');
      userEvent.click(button);

      expect(button.parentElement).toHaveAttribute('data-disabled', 'true');
      expect(onMonthChange).not.toHaveBeenCalled();
    });

    it('should fire event on click in the left button', async () => {
      const dateIncreased = getNextOrPrevDate(date, false);
      render(<Component value={dateIncreased} onMonthChange={onMonthChange} />);
      const button = await screen.findByTestId('button-prev');
      userEvent.click(button);

      expect(onMonthChange).toHaveBeenCalled();
    });

    it('should fire event on click in the right button', async () => {
      render(<Component value={date} onMonthChange={onMonthChange} />);
      const button = await screen.findByTestId('button-next');
      userEvent.click(button);

      expect(onMonthChange).toHaveBeenCalled();
    });
  });

  describe('Keyboard Actions', () => {
    it('should NOT fire event on left arrow press if is disabled', async () => {
      render(<Component value={date} onMonthChange={onMonthChange} />);
      const element = await screen.findByTestId('reach-date');
      element.focus();
      fireEvent.keyDown(element, { key: 'ArrowLeft' });

      expect(onMonthChange).not.toHaveBeenCalled();
    });

    it('should fire event on user pressing left arrow', async () => {
      const dateIncreased = getNextOrPrevDate(date, false);
      render(<Component value={dateIncreased} onMonthChange={onMonthChange} />);
      const element = await screen.findByTestId('reach-date');
      element.focus();
      fireEvent.keyDown(element, { key: 'ArrowLeft' });

      expect(onMonthChange).toHaveBeenCalled();
    });

    it('should fire event on user pressing right arrow', async () => {
      render(<Component value={date} onMonthChange={onMonthChange} />);
      const element = await screen.findByTestId('reach-date');
      element.focus();
      fireEvent.keyDown(element, { key: 'ArrowRight' });

      expect(onMonthChange).toHaveBeenCalled();
    });
  });
});
