import "@/styles/globals.css";

export const metadata = {
  title: "Contact Good Afternoon Creative",
  description:
    "Good Afternoon Creative is an Istanbul based design & strategy agency.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="items-center justify-center flex font-montreal bg-black"
    >
      <body className="w-full">
        {children}
      </body>
    </html>
  );
}
