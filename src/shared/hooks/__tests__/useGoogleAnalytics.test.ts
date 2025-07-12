import { renderHook, act } from '@testing-library/react';
import { useGoogleAnalytics } from '../useGoogleAnalytics';
import * as gtag from '@lib/gtag';

jest.mock('@lib/gtag', () => ({
  event: jest.fn(),
  isGAEnabled: jest.fn(() => true),
}));

const mockEvent = gtag.event as jest.MockedFunction<typeof gtag.event>;
const mockIsGAEnabled = gtag.isGAEnabled as jest.MockedFunction<
  typeof gtag.isGAEnabled
>;

describe('useGoogleAnalytics', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockIsGAEnabled.mockReturnValue(true);
  });

  it('should return analytics functions', () => {
    const { result } = renderHook(() => useGoogleAnalytics());

    expect(result.current).toHaveProperty('trackEvent');
    expect(result.current).toHaveProperty('trackButtonClick');
    expect(result.current).toHaveProperty('trackPageView');
    expect(result.current).toHaveProperty('trackError');
    expect(result.current).toHaveProperty('isEnabled');
  });

  it('should track button click events', () => {
    const { result } = renderHook(() => useGoogleAnalytics());

    act(() => {
      result.current.trackButtonClick('test-button');
    });

    expect(mockEvent).toHaveBeenCalledWith({
      action: 'click',
      category: 'button',
      label: 'test-button',
    });
  });

  it('should track custom events', () => {
    const { result } = renderHook(() => useGoogleAnalytics());

    const customEvent = {
      action: 'download',
      category: 'file',
      label: 'template.pdf',
      value: 1,
    };

    act(() => {
      result.current.trackEvent(customEvent);
    });

    expect(mockEvent).toHaveBeenCalledWith(customEvent);
  });

  it('should track page views', () => {
    const { result } = renderHook(() => useGoogleAnalytics());

    act(() => {
      result.current.trackPageView('home-page');
    });

    expect(mockEvent).toHaveBeenCalledWith({
      action: 'page_view',
      category: 'navigation',
      label: 'home-page',
    });
  });

  it('should track errors', () => {
    const { result } = renderHook(() => useGoogleAnalytics());

    act(() => {
      result.current.trackError('Test error', 'TestComponent');
    });

    expect(mockEvent).toHaveBeenCalledWith({
      action: 'error',
      category: 'exception',
      label: 'TestComponent: Test error',
    });
  });

  it('should track errors without page context', () => {
    const { result } = renderHook(() => useGoogleAnalytics());

    act(() => {
      result.current.trackError('Test error');
    });

    expect(mockEvent).toHaveBeenCalledWith({
      action: 'error',
      category: 'exception',
      label: 'Test error',
    });
  });

  it('should return correct enabled status', () => {
    const { result } = renderHook(() => useGoogleAnalytics());
    expect(result.current.isEnabled).toBe(true);
  });
});
