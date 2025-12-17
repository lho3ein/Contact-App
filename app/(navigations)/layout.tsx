import Navbar from "@/Components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Navbar />
      <main>{children}</main>
      {/* footer */}
    </div>
  );
}
