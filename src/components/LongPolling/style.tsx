import styled from "styled-components";
import { Theme } from "@admiral-ds/react-ui";

const CssForm = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const CssFormButton = styled.div`
  width: auto;
`;

const CssFormMessages = styled.div`
  font-size: 14px;
  color: ${(props) => (props.theme as Theme).color["Neutral/Neutral 90"]};
`;

export { CssForm, CssFormButton, CssFormMessages };
