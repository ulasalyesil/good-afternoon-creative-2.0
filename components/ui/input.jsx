export default function Input({ type, name, placeholder, value, onChange }) {
  return (
    <input
    type={type}
    name={name}
    id={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-80 sm:w-full h-10 pl-2 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-black focus:border-transparent border border-neutral-500 text-black focus:text-white"
  />
  )
}

