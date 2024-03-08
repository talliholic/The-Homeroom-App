export default function Textarea({
  onChange,
  autoFocus,
  name,
  cols,
  rows,
  children,
  required,
}) {
  return (
    <div className="input-group-column">
      <label htmlFor={name}>{name}</label>
      <textarea
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
        name={name}
        id={name}
        cols={cols ?? "30"}
        rows={rows ?? "10"}
        defaultValue={children}
      ></textarea>
    </div>
  )
}
