import { DateRange } from "./DateRangePicker";

interface Props {
  isActived: boolean;
  dateRange: DateRange;
  onClick: () => void;
}

export default function DateRangePickerForm(props: Props){

  const hasDates = props.dateRange.start || props.dateRange.end;

  const formatDate = (date: Date | null) => {
    return date?.toLocaleDateString("pt-PT", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }

  return (
    <button 
      className="relative z-10 min-w-[260px] h-10 px-4 py-3 bg-white rounded-lg border-[1px] border-light/5 flex flex-row gap-4 items-center cursor-pointer" 
      onClick={props.onClick}
    >
      <img src="/calendar.png" alt="calendar" className="w-4 h-4" />
      {hasDates ? <span className="text-sm  flex gap-2">
        <span>{formatDate(props.dateRange.start)}</span>
        <span className="text-light/7">—</span> 
        <span>{formatDate(props.dateRange.end)}</span>
      </span> : <span className="text-light/10 text-sm">Select date</span>}
    </button>
  )
}