import {
  format,
  parseISO
} from 'date-fns'

import { es } from 'date-fns/locale'

export function formatDate (date: string) {
  return format(parseISO(date), 'dd MMMM yyyy', { locale: es })
}
