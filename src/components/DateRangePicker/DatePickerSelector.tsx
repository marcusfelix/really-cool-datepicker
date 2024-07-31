import DatePickerSelectorHeader from "./DatePickerSelectorHeader";
import { DateRange } from "./DateRangePicker";
import MonthDays from "./MonthDays";
import Weekdays from "./Weekdays";

interface Props {
  focusDate: Date;
  dateRange: DateRange;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  onSelect: (date: Date) => void;
}

export default function DatePickerSelector(props: Props) {

  return <div className="p-6 flex flex-col gap-1 flex-1">
    <DatePickerSelectorHeader
      date={props.focusDate}
      onNextClick={props.onNextClick}
      onPrevClick={props.onPrevClick}
    />
    <Weekdays/>
    <MonthDays 
      selectedRange={props.dateRange}
      date={props.focusDate}
      onSelect={props.onSelect}
    />
  </div>
}