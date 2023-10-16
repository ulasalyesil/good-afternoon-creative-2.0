import '@/styles/globals.css'



export const metadata = {
  title: 'Good Afternoon Creative',
  description: 'Good Afternoon Creative is an Istanbul based design & strategy agency.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="items-center justify-center flex font-montreal">
      <body className="w-full border-x border-black flex items-center justify-center">{children}</body>
    </html>
  )
}
