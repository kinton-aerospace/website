import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/hooks/ScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinton Aerospace | Long-Range Hybrid Fixed-Wing SAR & Military Drones",
  description:
    "Kinton Aerospace engineers and manufactures industry-leading long-range hybrid fixed-wing UAVs for critical Search & Rescue (SAR), maritime patrol, and defense operations.",
  keywords: [
    "Kinton Aerospace",
    "Hybrid Fixed Wing Drone",
    "Military UAV",
    "Search and Rescue Drones",
    "Long-range VTOL UAV",
    "Autonomous Defense Aviation",
    "Maritime Reconnaissance Drone",
  ],
  authors: [{ name: "Kinton Aerospace Engineering" }],
  openGraph: {
    title: "Kinton Aerospace | Autonomous Hybrid Flight Systems",
    description:
      "Next-generation hybrid VTOL fixed-wing drones engineered for extreme endurance SAR and defense missions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#090B0E] text-[#F1F5F9] antialiased selection:bg-[#00E5FF] selection:text-black`}
      >
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
