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
  title: "Kinton Aerospace | Long-Endurance Hybrid-Electric SAR UAS",
  description:
    "Kinton Aerospace is building a 30-hour hybrid-electric fixed-wing UAS for search-and-rescue and disaster response — covering vast areas when it matters most.",
  keywords: [
    "Kinton Aerospace",
    "Search and Rescue Drone",
    "Hybrid Electric UAS",
    "Fixed Wing SAR Aircraft",
    "Disaster Response UAV",
    "Long Endurance Drone",
    "BVLOS UAS Oregon",
    "Aid Delivery Drone",
  ],
  authors: [{ name: "Kinton Aerospace Engineering" }],
  openGraph: {
    title: "Kinton Aerospace | Eyes in the Sky for the Hours That Matter Most",
    description:
      "A 30-hour hybrid-electric fixed-wing aircraft built for search-and-rescue and disaster response — scouting for survivors and delivering aid directly to them.",
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
