import { useCallback } from 'react';
import { event, isGAEnabled } from '@lib/gtag';

interface UseGoogleAnalyticsReturn {
  trackEvent: (params: {
    action: string;
    category: string;
    label?: string;
    value?: number;
  }) => void;
  trackButtonClick: (buttonName: string) => void;
  trackPageView: (pageName: string) => void;
  trackError: (error: string, page?: string) => void;
  isEnabled: boolean;
}

export function useGoogleAnalytics(): UseGoogleAnalyticsReturn {
  const trackEvent = useCallback(
    (params: {
      action: string;
      category: string;
      label?: string;
      value?: number;
    }) => {
      if (isGAEnabled()) {
        event(params);
      }
    },
    []
  );

  const trackButtonClick = useCallback(
    (buttonName: string) => {
      trackEvent({
        action: 'click',
        category: 'button',
        label: buttonName,
      });
    },
    [trackEvent]
  );

  const trackPageView = useCallback(
    (pageName: string) => {
      trackEvent({
        action: 'page_view',
        category: 'navigation',
        label: pageName,
      });
    },
    [trackEvent]
  );

  const trackError = useCallback(
    (error: string, page?: string) => {
      trackEvent({
        action: 'error',
        category: 'exception',
        label: `${page ? `${page}: ` : ''}${error}`,
      });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackButtonClick,
    trackPageView,
    trackError,
    isEnabled: isGAEnabled(),
  };
}
