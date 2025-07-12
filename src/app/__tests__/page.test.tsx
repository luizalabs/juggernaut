import { render } from '../../shared/utils/test-utils';
import HomePage from '../page';

describe('App HomePage', () => {
  it('should render the Home component', () => {
    const { container } = render(<HomePage />);
    expect(container).toBeInTheDocument();
  });
});
