interface Props {
  onPrevClick?: () => void;
  onNextClick?: () => void;
  date: Date;
}

export default function DatePickerSelectorHeader(props: Props) {

  const getMonthName = (date: Date) => {
    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    return months[date.getMonth()];
  }

  return (
    <div className="flex items-center">
      {props.onPrevClick ? <button onClick={props.onPrevClick}>
        <img src="/arrow-left.png" alt="arrow-left" className="w-11 h-11" />
      </button> : <div className="w-11"></div>}
      <span className="flex flex-1 gap-[6px] justify-center">
        <span className="font-semibold">{getMonthName(props.date)} </span>
        <span className="text-light/7">—</span> 
        <span className="text-light/11">{props.date.getFullYear()}</span>
      </span>
      {props.onNextClick ? <button onClick={props.onNextClick}>
        <img src="/arrow-right.png" alt="arrow-right" className="w-11 h-11" />
      </button> : <div className="w-11"></div>}
    </div>
  )
}