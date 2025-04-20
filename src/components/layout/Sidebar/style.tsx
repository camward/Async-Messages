import styled from "styled-components";

const CssSidebar = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-bottom: 8px;
`;

const CssLink = styled.div`
  padding: 0 16px;
  box-sizing: border-box;
  cursor: pointer;
`;

export { CssSidebar, CssSidebarTop, CssSidebarBottom, CssLink };
