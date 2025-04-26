import styled from "styled-components";
import { Theme } from "@admiral-ds/react-ui";

const CssSidebar = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid;
  border-color: ${(props) => (props.theme as Theme).color["Neutral/Neutral 20"]};
  background-color: ${(props) => (props.theme as Theme).color["Neutral/Neutral 00"]};
`;

const CssSidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`;

const CssSidebarBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
  margin-bottom: 16px;
`;

const CssLink = styled.div`
  padding: 0 16px;
  box-sizing: border-box;
  cursor: pointer;

  & > a {
    text-decoration: none;
    color: ${(props) => (props.theme as Theme).color["Primary/Primary 60 Main"]};

    &:hover {
      color: ${(props) => (props.theme as Theme).color["Primary/Primary 70"]};
    }

    &:active {
      color: ${(props) => (props.theme as Theme).color["Primary/Primary 80"]};
    }
  }
`;

export { CssSidebar, CssSidebarTop, CssSidebarBottom, CssLink };
