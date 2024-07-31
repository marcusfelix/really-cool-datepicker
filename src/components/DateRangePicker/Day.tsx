interface Props {
  day: Date;
  selected: boolean;
  betweenState: "start" | "end" | "between" | null;
  onClick: () => void;
}

export default function Day(props: Props) {
  const now = new Date();
  const isToday = now.toDateString() === props.day.toDateString();
  const isAfterToday = props.day >= new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0);
  
  const getBetweenStateBg = () => {
    switch(props.betweenState) {
      case "start":
        return "bg-gradient-to-r from-transparent to-[#F3F3F3]";
      case "end":
        return "bg-gradient-to-r from-[#F3F3F3] to-transparent";
      case "between":
        return "bg-[#F3F3F3]";
      default:
        return "";
    }
  }

  const onClick = () => {
    if(!isAfterToday) return;
    props.onClick();
  }

  return (
    <button className={`flex-1 flex flex-col items-center justify-center h-12 w-12 font-mono text-light/10 ${!isAfterToday ? 'opacity-50' : 'text-black'} ${getBetweenStateBg()} ${props.selected ? '!bg-black text-white rounded-xl' : ''}`} onClick={onClick}>
      <div className="h-1"></div>
      <span className="text-sm">{props.day.getDate()}</span>
      {isToday ? <div className="h-1 w-1 rounded-full bg-black"></div> : <div className="h-1"></div>}
    </button>
  )
}