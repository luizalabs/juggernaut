import { render } from '../../../shared/utils/test-utils';
import Home from '../page';

describe('Home page', () => {
  it('should render the TailWindExamples component', () => {
    const { getAllByText } = render(<Home />);
    expect(getAllByText(/tailwind/i).length).toBeGreaterThan(0);
  });

  it('should apply the pixelify-sans font', () => {
    const { getByTestId } = render(<Home />);
    const div = getByTestId('home-root');
    expect(div).toHaveStyle(
      'font-family: var(--font-pixelify-sans), monospace'
    );
  });
});
