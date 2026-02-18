import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://contentrepurposehub.com"),
  title: {
    default: "ContentRepurposeHub",
    template: "%s | ContentRepurposeHub",
  },
  description: "Webinar repurposing service for coaches and consultants. All content optimized for Google and AI search.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="llms" href="/llms.txt" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
