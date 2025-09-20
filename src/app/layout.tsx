import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Header from "./header/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose weights you need
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "One For All Coffee",
  description: "One For All Coffee is a hidden gem located at 241 King St E, Hamilton, ON. This café is celebrated for its exceptional selection of coffee beans, particularly its medium roasts that boast balanced flavors and rich body. Customers rave about the authentic espresso experience and unique offerings like the Oat Milk Flat White and the Peanut Cloud drink. The inviting atmosphere paired with friendly, attentive service enhances each visit, making it a favorite spot for both quick coffee breaks and leisurely afternoons. Whether you're a coffee aficionado or just seeking a cozy café, One For All Coffee promises an upscale experience with every sip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
