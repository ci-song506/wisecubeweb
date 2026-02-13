import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WiseCube Technology - Enterprise Infrastructure Advisory Partner",
  description: "WiseCube Technology designs and delivers high-performance compute, AI infrastructure, and enterprise systems — engineered, tested, and optimised for real-world workloads across Asia Pacific.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "WiseCube Technology - Enterprise Infrastructure Advisory Partner",
    description: "WiseCube Technology designs and delivers high-performance compute, AI infrastructure, and enterprise systems — engineered, tested, and optimised for real-world workloads across Asia Pacific.",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
