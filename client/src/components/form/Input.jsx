export default function Input({
  name,
  type,
  value,
  ongoingValue,
  autoFocus,
  required,
  onChange,
}) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name}:</label>
      <input
        autoFocus={autoFocus}
        name={name}
        type={type}
        onChange={onChange}
        id={name}
        value={ongoingValue}
        defaultValue={value}
        required={required}
      />
    </div>
  )
}
