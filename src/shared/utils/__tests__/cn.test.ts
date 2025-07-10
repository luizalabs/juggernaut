import { cn } from '../cn';

describe('cn utility', () => {
  it('should merge class names correctly', () => {
    const result = cn('base-class', 'additional-class');
    expect(result).toBe('base-class additional-class');
  });

  it('should handle conditional classes', () => {
    const result = cn(
      'base-class',
      true && 'conditional-class',
      false && 'hidden-class'
    );
    expect(result).toBe('base-class conditional-class');
  });

  it('should handle undefined and null values', () => {
    const result = cn('base-class', undefined, null, 'valid-class');
    expect(result).toBe('base-class valid-class');
  });

  it('should merge conflicting Tailwind classes', () => {
    const result = cn('p-4', 'p-6');
    expect(result).toBe('p-6');
  });

  it('should handle arrays of class names', () => {
    const result = cn(['base-class', 'array-class'], 'additional-class');
    expect(result).toBe('base-class array-class additional-class');
  });

  it('should handle objects with boolean values', () => {
    const result = cn({
      'base-class': true,
      'conditional-class': false,
      'active-class': true,
    });
    expect(result).toBe('base-class active-class');
  });

  it('should handle complex combinations', () => {
    const isActive = true;
    const size = 'large';

    const result = cn(
      'button',
      {
        'button-active': isActive,
        'button-inactive': !isActive,
      },
      size === 'large' && 'button-large',
      'final-class'
    );

    expect(result).toBe('button button-active button-large final-class');
  });

  it('should return empty string for no arguments', () => {
    const result = cn();
    expect(result).toBe('');
  });
});
