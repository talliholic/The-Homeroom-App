export default function Select({ name, value, options, nav, onChange }) {
  return (
    <div className={nav ? "input-group-nav" : "input-group"}>
      <label htmlFor={name}>{name}</label>
      <select onChange={onChange} name={name} id={name} value={value ?? ""}>
        {options &&
          options.map(option => (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          ))}
      </select>
    </div>
  )
}
