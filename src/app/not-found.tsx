import ErrorMain from "@/components/main/ErrorMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eStudiosApp 404",
  description: "Página no encontrada",
};
export default function NotFound() {
  return <ErrorMain />;
}
