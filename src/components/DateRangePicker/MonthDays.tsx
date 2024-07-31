import { isDateInBetweenRange, isDateStartOrEnd, isEqualDates } from "../../includes/date";
import { DateRange } from "./DateRangePicker";
import Day from "./Day";
import GhostDay from "./GhostDay";

interface Props {
  selectedRange: DateRange;
  date: Date;
  onSelect: (date: Date) => void;
}

export default function MonthDays(props: Props) {

  const getDays = (date: Date) => {
    const days = [];
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    for (let i = 1; i <= lastDate.getDate(); i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), i));
    }
    return days;
  }

  const getLastMonthFinalDays = (date: Date) => {
    const days = [];
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    for(let i = 0; i < firstDate.getDay(); i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), 1));
    }
    return days.reverse();
  }

  const isSelected = (date: Date) => {
    return isDateStartOrEnd(date, props.selectedRange);
  }

  const getBetweenState = (date: Date) => {
    const today = new Date();
    if(date >= today){
      const isInBetween = isDateInBetweenRange(date, props.selectedRange);
      if(isInBetween){
        const isAfterStart = isEqualDates(date, new Date(props.selectedRange.start!.getFullYear(), props.selectedRange.start!.getMonth(), props.selectedRange.start!.getDate() + 1));
        const isBeforeEnd = isEqualDates(date, new Date(props.selectedRange.end!.getFullYear(), props.selectedRange.end!.getMonth(), props.selectedRange.end!.getDate() - 1));
        if(date.getDay() === 0 || isAfterStart){
          return "start";
        }
        if(date.getDay() === 6 || isBeforeEnd){
          return "end";
        }
        return "between";
      }
    }
    
    return null;
  }
  
  return (
    <div className="grid grid-cols-7 gap-y-1">
      {getLastMonthFinalDays(props.date).map((_, i) => <GhostDay key={i}/>)}
      {getDays(props.date).map((day, i) => <Day 
        key={i}
        day={day}
        selected={isSelected(day)}
        betweenState={getBetweenState(day)}
        onClick={() => props.onSelect(day)}
      />)}
    </div>
  )
}