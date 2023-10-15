export default function Chip({ label }) {
  return (
    <div className='flex items-center justify-center h-10 px-4 rounded-full border border-black transition hover:bg-black hover:text-white'>
      {label}
    </div>
  )
}
