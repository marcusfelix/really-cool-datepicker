interface Props {
  name: string;
  onClick: () => void;
}

export default function Button(props: Props){

  return (
    <button className="py-3 px-4 text-sm text-light/10 border-[1px] border-light/5 rounded-lg" onClick={props.onClick}>{props.name}</button>
  )
}