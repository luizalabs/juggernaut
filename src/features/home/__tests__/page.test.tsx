import { render } from '../../../shared/utils/test-utils';
import Home from '../page';

describe('Home page', () => {
  it('deve renderizar o componente TailWindExamples', () => {
    const { getAllByText } = render(<Home />);
    // Verifica se existe pelo menos um elemento com o texto "tailwind"
    expect(getAllByText(/tailwind/i).length).toBeGreaterThan(0);
  });

  it('deve aplicar a fonte pixelify-sans', () => {
    const { getByTestId } = render(<Home />);
    const div = getByTestId('home-root');
    expect(div).toHaveStyle(
      'font-family: var(--font-pixelify-sans), monospace'
    );
  });
});
