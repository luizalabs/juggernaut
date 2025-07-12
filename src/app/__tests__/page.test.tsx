import { render } from '../../shared/utils/test-utils';
import HomePage from '../page';

describe('App HomePage', () => {
  it('deve renderizar o componente Home', () => {
    const { container } = render(<HomePage />);
    expect(container).toBeInTheDocument();
  });
});
