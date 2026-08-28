import React from "react";
import HeaderSection7 from "../header/HeaderSection7";
import FooterSection8 from "../footer/FooterSection8";
type Props = {
  children: React.ReactNode;
};
const InnerLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderSection7 />
      {children}
      <FooterSection8 />
    </>
  );
};

export default InnerLayout;
