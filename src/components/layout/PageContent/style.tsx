import styled from "styled-components";
import { Theme } from "@admiral-ds/react-ui";

const CssPageContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${(props) => (props.theme as Theme).color["Neutral/Neutral 00"]};
`;

export { CssPageContent };
