import styled from "styled-components";
import { Theme } from "@admiral-ds/react-ui";

const CssForm = styled.div`
  width: 400px;
  height: 400px;
  overflow: auto;
  margin-top: 8px;
`;

const CssFormMessages = styled.div`
  font-size: 14px;
  color: ${(props) => (props.theme as Theme).color["Neutral/Neutral 90"]};
`;

export { CssForm, CssFormMessages };
