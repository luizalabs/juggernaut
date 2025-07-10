import { formatDistanceToNow, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export class DateUtils {
  /**
   * Converte uma data para formato humanizado
   * @param date Data a ser convertida
   * @returns String humanizada (ex: "há 2 minutos")
   */
  static humanizeDate(date: Date): string {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR,
    });
  }

  /**
   * Formata uma data com padrão customizado
   * @param date Data a ser formatada
   * @param pattern Padrão de formatação (padrão: "dd/MM/yyyy")
   * @returns String formatada
   */
  static formatDate(date: Date, pattern = "dd/MM/yyyy"): string {
    return format(date, pattern, { locale: ptBR });
  }

  /**
   * Verifica se uma data é hoje
   * @param date Data a ser verificada
   * @returns Boolean indicando se é hoje
   */
  static isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }
}
