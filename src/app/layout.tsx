import "./globals.css";
import Bg from "@/components/ui/Bgc";
import { NavbarDemo } from "@/components/ui/Nav";
import { SpotlightNewDemo } from "@/components/ui/Spotlight";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-black"
    >
      <body>
        <div>
          
          <NavbarDemo />
          {/* <Herosection/> */}
        </div>
        {children}
      </body>
    </html>
  );
}
