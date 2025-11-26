import { format, formatDistanceToNow } from "date-fns";
import { pt } from "date-fns/locale";

export function formatDateTime(rawDate: string) {
  const date = new Date(rawDate);
  return format(date, "dd/mm/yyyy 'at HH'h'mm", {
    locale: pt,
  });
}

export function formatRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, {
    locale: pt,
    addSuffix: true,
  });
}
