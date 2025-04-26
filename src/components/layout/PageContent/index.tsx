import { FC } from "react";
import { T } from "@admiral-ds/react-ui";
import { PageContentProps } from "./types";
import { CssPageContent } from "./style";

const PageContent: FC<PageContentProps> = ({ children }: PageContentProps) => {
  return (
    <CssPageContent>
      <T font="Header/H4" as="h4">
        Async Messages
      </T>
      {children}
    </CssPageContent>
  );
};

export default PageContent;
