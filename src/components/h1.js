export default function Input(props = { children: "" }) {
  return (
    <input type="text" placeholder={props.children} />
  )
}