

export default function Mybtn(props = { onClick: () => { }, color: "" }) {

  return (
    <>
      <button style={{ background: props.color }} onClick={e => { props.onClick(e) }}>{props.children}</button>
    </>
  )
}