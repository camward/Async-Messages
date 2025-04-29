import styled from "styled-components";
import { Theme } from "@admiral-ds/react-ui";
import { MsgProps } from "./types";

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
  color: ${(props) => (props.theme as Theme).color["Neutral/Neutral 90"]};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CssFormMsg = styled.div<MsgProps>`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: ${(props) => (props.theme as Theme).color["Neutral/Neutral 20"]};
  border-radius: 4px;
  padding: 4px 8px;
  align-items: ${({ position }) => position === "left" ? "flex-start" : "flex-end"};

  & > span {
    &:first-child {
      font-size: 12px;
      color: ${(props) => (props.theme as Theme).color["Neutral/Neutral 40"]};
    }

    &:last-child {
      font-size: 14px;
    }
  }
`;

export { CssForm, CssFormButton, CssFormMessages, CssFormMsg };
