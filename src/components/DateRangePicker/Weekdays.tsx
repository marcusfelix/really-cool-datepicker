export default function Weekdays(){
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="flex flex-row gap-1 text-xs font-mono h-12 text-light/10">
      {weekdays.map((day, i) => <span className="flex-1 flex items-center justify-center" key={i}>{day}</span>)}
    </div>
  )
}