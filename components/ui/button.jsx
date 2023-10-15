export default function Button( { label, style, mode } ) {

  const styles = {
    'dark': "flex h-12 px-4 justify-center items-center bg-black hover:bg-black/70 transition text-white",
    'light': "flex h-12 px-4 justify-center items-center bg-white hover:bg-white/70 transition text-black border-2 border-black"
  }
  return (
    <button className={styles[style]}>
      <span>{label}</span>
    </button>
  )
}
