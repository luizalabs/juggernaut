import { DateUtils } from '../date';

describe('DateUtils', () => {
  describe('humanizeDate', () => {
    it('deve retornar string humanizada para datas passadas', () => {
      const date = new Date(Date.now() - 60 * 1000); // 1 minuto atrás
      const result = DateUtils.humanizeDate(date);
      expect(result).toMatch(/há 1 minuto/);
    });
  });

  describe('formatDate', () => {
    it('deve formatar a data no padrão dd/MM/yyyy', () => {
      const date = new Date('2023-07-12T04:00:00Z');
      const result = DateUtils.formatDate(date);
      expect(result).toBe('12/07/2023');
    });

    it('deve aceitar padrão customizado', () => {
      const date = new Date('2023-07-12T04:00:00Z');
      const result = DateUtils.formatDate(date, 'yyyy-MM-dd');
      expect(result).toBe('2023-07-12');
    });
  });

  describe('isToday', () => {
    it('deve retornar true para data de hoje', () => {
      const date = new Date();
      expect(DateUtils.isToday(date)).toBe(true);
    });

    it('deve retornar false para data diferente de hoje', () => {
      const date = new Date('2000-01-01T00:00:00Z');
      expect(DateUtils.isToday(date)).toBe(false);
    });
  });
});
