// import { renderHook, act } from '@testing-library/react'
// import { useGoogleAnalytics } from '../useGoogleAnalytics'

// // Mock the gtag module
// jest.mock('@lib/gtag', () => ({
//   event: jest.fn(),
//   isGAEnabled: jest.fn(),
// }))

// describe('useGoogleAnalytics', () => {
//   beforeEach(() => {
//     jest.clearAllMocks()
//   })

//   it('should return analytics functions', () => {
//     const { result } = renderHook(() => useGoogleAnalytics())

//     expect(result.current).toHaveProperty('trackEvent')
//     expect(result.current).toHaveProperty('trackButtonClick')
//     expect(result.current).toHaveProperty('trackPageView')
//     expect(result.current).toHaveProperty('trackError')
//     expect(result.current).toHaveProperty('isEnabled')
//   })

//   it('should track button click events', () => {
//     const { event } = require('@lib/gtag')
//     const { result } = renderHook(() => useGoogleAnalytics())

//     act(() => {
//       result.current.trackButtonClick('test-button')
//     })

//     expect(event).toHaveBeenCalledWith({
//       action: 'click',
//       category: 'button',
//       label: 'test-button',
//     })
//   })

//   it('should track custom events', () => {
//     const { event } = require('@lib/gtag')
//     const { result } = renderHook(() => useGoogleAnalytics())

//     const customEvent = {
//       action: 'download',
//       category: 'file',
//       label: 'template.pdf',
//       value: 1,
//     }

//     act(() => {
//       result.current.trackEvent(customEvent)
//     })

//     expect(event).toHaveBeenCalledWith(customEvent)
//   })

//   it('should track page views', () => {
//     const { event } = require('@lib/gtag')
//     const { result } = renderHook(() => useGoogleAnalytics())

//     act(() => {
//       result.current.trackPageView('home-page')
//     })

//     expect(event).toHaveBeenCalledWith({
//       action: 'page_view',
//       category: 'navigation',
//       label: 'home-page',
//     })
//   })

//   it('should track errors', () => {
//     const { event } = require('@lib/gtag')
//     const { result } = renderHook(() => useGoogleAnalytics())

//     act(() => {
//       result.current.trackError('Test error', 'TestComponent')
//     })

//     expect(event).toHaveBeenCalledWith({
//       action: 'error',
//       category: 'exception',
//       label: 'TestComponent: Test error',
//     })
//   })

//   it('should track errors without page context', () => {
//     const { event } = require('@lib/gtag')
//     const { result } = renderHook(() => useGoogleAnalytics())

//     act(() => {
//       result.current.trackError('Test error')
//     })

//     expect(event).toHaveBeenCalledWith({
//       action: 'error',
//       category: 'exception',
//       label: 'Test error',
//     })
//   })

//   it('should return correct enabled status', () => {
//     const { isGAEnabled } = require('@lib/gtag')
//     isGAEnabled.mockReturnValue(true)

//     const { result } = renderHook(() => useGoogleAnalytics())

//     expect(result.current.isEnabled).toBe(true)
//   })
// })
