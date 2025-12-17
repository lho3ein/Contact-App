import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TodoContextWrapper } from "@/Components/Context/TodoContext";
import Provider from "@/Components/Provider";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Contact-App-Hossein Khalili",
  description: "Project For University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <TodoContextWrapper>{children}</TodoContextWrapper>
        </Provider>
      </body>
    </html>
  );
}
