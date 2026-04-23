import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "react-toastify/dist/ReactToastify.css";
import "../../public/assets/fontawesome/all.min.css";
import "../../public/assets/fontawesome/sharp-solid.min.css";
import "../../public/assets/fontawesome/sharp-regular.min.css";
import "../../public/assets/scss/style.scss";
import Cursor from "@/components/utils/Cursor";
import {
  inter,
  mulish,
  newsreader,
  oldenburg,
  philosopher,
  sahitya,
} from "./font";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "eStudioapp",
  description: "Professional Developers",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mulish.variable} ${newsreader.variable} ${sahitya.variable} ${philosopher.variable} ${oldenburg.variable}`}
      >
        <Cursor />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
