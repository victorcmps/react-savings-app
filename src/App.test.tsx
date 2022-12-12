import { App } from './App';
import { render } from '@testing-library/react';

describe('AppComponent', () => {
  it('should be defined', () => {
    const component = render(<App />);

    expect(component).toBeDefined();
  });
});
