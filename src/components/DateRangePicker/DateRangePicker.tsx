import { useState } from "react";
import DatePickerSelector from "./DatePickerSelector";
import DatePickerShortcuts from "./DatePickerShortcuts";
import DateRangePickerForm from "./DateRangePickerForm";

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export default function DateRangePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [focusDate, setFocusDate] = useState(new Date());
  const [dateRange, setDateRange] = useState<DateRange>({
    start: null,
    end: null
  });

  const toggle = () => setIsOpen(!isOpen);

  const setNextFocusDate = () => {
    setFocusDate(new Date(focusDate.getFullYear(), focusDate.getMonth() + 1, 1));
  }

  const setPrevFocusDate = () => {
    setFocusDate(new Date(focusDate.getFullYear(), focusDate.getMonth() - 1, 1));
  }

  const onSelect = (date: Date) => {
    if (!dateRange.start || (dateRange.start && dateRange.end)) {
      setDateRange({
        start: date,
        end: null
      });
    } else {
      if (dateRange.start < date) {
        setDateRange({
          start: dateRange.start,
          end: date
        });
      } else {
        setDateRange({
          start: date,
          end: dateRange.start
        });
      }
    }
  }

  const setDateRangeWithShorcut = (date: Date) => {
    setDateRange({
      start: new Date(),
      end: date
    });
  }

  const handleKeyDown: React.KeyboardEventHandler = (event) => {
    if(isOpen){
      if(event.key === "ArrowLeft"){
        setPrevFocusDate();
      } else if (event.key === "ArrowRight") {
        setNextFocusDate();
      } else if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
  };

  const firstFocusDate = focusDate;
  const secondFocusDate = new Date(focusDate.getFullYear(), focusDate.getMonth() + 1, 1);
  
  return (
    <div 
      className="flex flex-col gap-4 items-start"
      onKeyDown={handleKeyDown}
    >
        <DateRangePickerForm 
          isActived={isOpen}
          dateRange={dateRange}
          onClick={toggle}
        />
        <div className={`relative w-[768px] flex flex-col bg-white border-[1px] border-light/5 rounded-xl ${isOpen ? 'top-0 opacity-100' : '-top-10 opacity-0'} transition-all`}>
          <div className="flex">
            <DatePickerSelector 
              focusDate={firstFocusDate}
              dateRange={dateRange}
              onPrevClick={setPrevFocusDate}
              onSelect={onSelect}
            />
            <DatePickerSelector 
              focusDate={secondFocusDate}
              dateRange={dateRange}
              onNextClick={setNextFocusDate}
              onSelect={onSelect}
            />
          </div>
          <DatePickerShortcuts onClick={setDateRangeWithShorcut}/>
        </div>
    </div>
  )
}