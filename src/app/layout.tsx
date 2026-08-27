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
  title: "eStudiosApp — Soluciones cloud y software a medida",
  description: "Desarrollo de software, infraestructura cloud e inteligencia artificial aplicada. Trabajamos con empresas e inmobiliarias en Argentina y el exterior.",
  icons: {
    icon: "/favicon.ico",
  },
};

import WhatsAppButton from "@/components/utils/WhatsAppButton";

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
        <WhatsAppButton />
        <ToastContainer />
      </body>
    </html>
  );
}
