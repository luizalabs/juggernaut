import { DateUtils } from '../date';

describe('DateUtils', () => {
  describe('humanizeDate', () => {
    it('should return humanized string for past dates', () => {
      const date = new Date(Date.now() - 60 * 1000); // 1 minute ago
      const result = DateUtils.humanizeDate(date);
      expect(result).toMatch(/há 1 minuto/);
    });
  });

  describe('formatDate', () => {
    it('should format date in dd/MM/yyyy pattern', () => {
      const date = new Date('2023-07-12T04:00:00Z');
      const result = DateUtils.formatDate(date);
      expect(result).toBe('12/07/2023');
    });

    it('should accept custom pattern', () => {
      const date = new Date('2023-07-12T04:00:00Z');
      const result = DateUtils.formatDate(date, 'yyyy-MM-dd');
      expect(result).toBe('2023-07-12');
    });
  });

  describe('isToday', () => {
    it('should return true for today date', () => {
      const date = new Date();
      expect(DateUtils.isToday(date)).toBe(true);
    });

    it('should return false for date different from today', () => {
      const date = new Date('2000-01-01T00:00:00Z');
      expect(DateUtils.isToday(date)).toBe(false);
    });
  });
});
