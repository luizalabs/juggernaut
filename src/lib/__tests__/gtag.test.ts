// import { pageview, event, isGAEnabled } from '../gtag';

// const mockGtag = jest.fn();

// describe('gtag utilities', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//     // Reset window.gtag
//     Object.defineProperty(window, 'gtag', {
//       value: mockGtag,
//       writable: true,
//     });
//   });

//   describe('pageview', () => {
//     it('should call gtag with correct parameters', () => {
//       const url = new URL('https://example.com/test');

//       pageview(url);

//       expect(mockGtag).toHaveBeenCalledWith('config', 'G-TEST123456', {
//         page_path: url,
//       });
//     });

//     it('should not call gtag when window.gtag is not available', () => {
//       // @ts-ignore
//       delete window.gtag;

//       const url = new URL('https://example.com/test');
//       pageview(url);

//       expect(mockGtag).not.toHaveBeenCalled();
//     });
//   });

//   describe('event', () => {
//     it('should call gtag with correct event parameters', () => {
//       const eventParams = {
//         action: 'click',
//         category: 'button',
//         label: 'test-button',
//         value: 1,
//       };

//       event(eventParams);

//       expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
//         event_category: 'button',
//         event_label: 'test-button',
//         value: 1,
//       });
//     });

//     it('should handle optional parameters', () => {
//       const eventParams = {
//         action: 'click',
//         category: 'button',
//       };

//       event(eventParams);

//       expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
//         event_category: 'button',
//         event_label: undefined,
//         value: undefined,
//       });
//     });

//     it('should not call gtag when window.gtag is not available', () => {
//       // @ts-ignore
//       delete window.gtag;

//       const eventParams = {
//         action: 'click',
//         category: 'button',
//       };

//       event(eventParams);

//       expect(mockGtag).not.toHaveBeenCalled();
//     });
//   });

//   describe('isGAEnabled', () => {
//     it('should return true when GA_TRACKING_ID is set and window is available', () => {
//       const result = isGAEnabled();
//       expect(result).toBe(true);
//     });

//     it('should return false when GA_TRACKING_ID is empty', () => {
//       // Mock empty GA_TRACKING_ID
//       jest.doMock('../gtag', () => ({
//         ...jest.requireActual('../gtag'),
//         GA_TRACKING_ID: '',
//       }));

//       const { isGAEnabled: isGAEnabledMocked } = require('../gtag');
//       const result = isGAEnabledMocked();
//       expect(result).toBe(false);
//     });
//   });
// });
