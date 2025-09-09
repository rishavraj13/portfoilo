import "./globals.css";
import Bg from "@/components/ui/Bgc";
import Herosection from "@/components/Herosection";
import { NavbarDemo } from "@/components/ui/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body>
        <div>
          <Bg />

          <NavbarDemo />
          {/* <Herosection/> */}
        </div>
        {children}
      </body>
    </html>
  );
}
