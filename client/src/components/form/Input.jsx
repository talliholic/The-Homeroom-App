export default function Input({ name, type, value, autoFocus, required }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name}:</label>
      <input
        autoFocus={autoFocus}
        name={name}
        type={type}
        id={name}
        defaultValue={value}
        required={required}
      />
    </div>
  )
}
