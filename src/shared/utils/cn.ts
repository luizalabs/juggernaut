import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes CSS de forma inteligente
 * Resolve conflitos entre classes do Tailwind CSS
 * @param inputs - Classes CSS a serem combinadas
 * @returns String com classes combinadas e otimizadas
 *
 * @example
 * cn('px-2 py-1', 'px-4') // resultado: 'py-1 px-4'
 * cn('text-red-500', condition && 'text-blue-500') // condicional
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
