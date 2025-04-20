import { FC } from "react";
import { PageContentProps } from "./types";
import { CssPageContent } from "./style";

const PageContent: FC<PageContentProps> = ({ children }: PageContentProps) => {
  return (
    <CssPageContent>
      <h1>Async Messages</h1>
      {children}
    </CssPageContent>
  );
};

export default PageContent;
