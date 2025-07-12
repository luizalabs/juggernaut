import GoogleAnalytics from '../GoogleAnalytics';
import * as gtag from '@lib/gtag';
import { render } from '../../../shared/utils/test-utils';

jest.mock('@lib/gtag', () => ({
  GA_TRACKING_ID: 'GA-TEST',
  pageview: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/test',
  useSearchParams: () => new Map([['q', '123']]),
}));

describe('GoogleAnalytics', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renderiza conteúdo quando GA_TRACKING_ID está definido', () => {
    const { container } = render(<GoogleAnalytics />);
    expect(container.innerHTML).toContain('window.dataLayer');
    expect(container.innerHTML).toContain('gtag');
    expect(container.innerHTML).toContain('GA-TEST');
  });

  it('componente está definido', () => {
    expect(GoogleAnalytics).toBeDefined();
    expect(typeof GoogleAnalytics).toBe('function');
  });

  it('executa pageview no tracker', () => {
    const mockPageview = gtag.pageview as jest.MockedFunction<
      typeof gtag.pageview
    >;
    render(<GoogleAnalytics />);
    expect(mockPageview).toHaveBeenCalled();
  });
});
