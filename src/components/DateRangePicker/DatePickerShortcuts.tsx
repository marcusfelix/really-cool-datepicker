import Button from "../Button/Button"

interface Props {
  onClick: (value: Date) => void;
}

export default function DatePickerShortcuts(props: Props) {
  const shortcuts = [7, 15, 30, 90]
  
  const getDate = (days: number) => {
    let now = new Date()
    now.setDate(now.getDate() + days);
    return now;
  }

  return (
    <div className="flex px-6 py-4 gap-4">
      {shortcuts.map((days, i) => <Button 
        key={i}
        name={`${days} days`}
        onClick={() => props.onClick(getDate(days))}
      />)}
    </div>
  )
}
  