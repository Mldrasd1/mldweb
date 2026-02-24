import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = localFont({
  src: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-latin.woff2",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "MLDRASD — Appointment Booking",
  description: "Premium appointment booking system by MLDRASD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased app-bg`}>
        <ThemeProvider>
          <Header />
          <main className="pt-4">
            {children}
          </main>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
