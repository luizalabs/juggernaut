import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toHaveStyle(css: string): R;
      toHaveTextContent(text: string): R;
      toBeVisible(): R;
      toBeDisabled(): R;
      toBeChecked(): R;
      toHaveValue(value: string | number): R;
      toHaveAttribute(name: string, value?: string): R;
    }
  }
}
