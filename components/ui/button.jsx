export default function Button( { label, style, mode } ) {
  return (
    <button className="flex h-12 px-4 justify-center items-center bg-black hover:bg-black/70 transition text-white">
      <span>{label}</span>
    </button>
  )
}
