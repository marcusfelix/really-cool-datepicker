import { DateRange } from "../components/DateRangePicker/DateRangePicker";

export const isEqualDates = (a: Date, b: Date) => {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export const isDateInBetweenRange = (date: Date, range: DateRange) => {
  return range.start && range.end && date > range.start && date < range.end
}

export const isDateStartOrEnd = (date: Date, range: DateRange) => {
  return range.start !== null && range.start.toDateString() === date.toDateString() || range.end !== null && range.end.toDateString() === date.toDateString();
}