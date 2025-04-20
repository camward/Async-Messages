import { FC } from "react";
import Sidebar from "../Sidebar";
import PageContent from "../PageContent";
import { WrapperProps } from "./types";
import { CssWrapper } from "./style";

const Wrapper: FC<WrapperProps> = ({ children }: WrapperProps) => {
  return (
    <CssWrapper>
      <Sidebar />
      <PageContent>{children}</PageContent>
    </CssWrapper>
  );
};

export default Wrapper;
