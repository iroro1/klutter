import { Open_Sans, DM_Sans } from "next/font/google";
import StoreContext from "./context/StoreContext";
import "./globals.css";

const labrada = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Kutter",
  description: "Don't need it, Don't keep it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[labrada.className]}>
        <StoreContext>{children}</StoreContext>
      </body>
    </html>
  );
}
