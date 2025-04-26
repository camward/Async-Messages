import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, TooltipHoc } from "@admiral-ds/react-ui";
import { SystemLightModeOutline } from "@admiral-ds/icons";
import { SystemDarkModeOutline } from "@admiral-ds/icons";
import { DARK_THEME, LIGHT_THEME } from "@admiral-ds/react-ui";
import { ThemeContext } from "../../../ThemeContextProvider";
import { CssSidebar, CssSidebarTop, CssSidebarBottom, CssLink } from "./style";

const TooltipedButton = TooltipHoc(Button);

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const onClickHandler = (data: "LIGHT_THEME" | "DARK_THEME") => {
    if (data === "LIGHT_THEME") {
      setTheme(LIGHT_THEME);
    }

    if (data === "DARK_THEME") {
      setTheme(DARK_THEME);
    }
  };

  return (
    <CssSidebar>
      <CssSidebarTop>
        <CssLink>
          <Link to={`/web-socket`}>WebSocket</Link>
        </CssLink>
        <CssLink>
          <Link to={`/server-sent-events`}>Server-Sent Events</Link>
        </CssLink>
        <CssLink>
          <Link to={`/long-polling`}>Long Polling</Link>
        </CssLink>
        <CssLink>
          <Link to={`/web-transport`}>WebTransport</Link>
        </CssLink>
      </CssSidebarTop>
      <CssSidebarBottom>
        <TooltipedButton
          renderContent={() =>
            theme.name === "dark" ? "Светлая тема" : "Тёмная тема"
          }
          iconStart={
            theme.name === "dark" ? (
              <SystemLightModeOutline />
            ) : (
              <SystemDarkModeOutline />
            )
          }
          displayAsSquare
          appearance="secondary"
          dimension="m"
          onClick={() =>
            onClickHandler(theme.name === "dark" ? "LIGHT_THEME" : "DARK_THEME")
          }
        />
      </CssSidebarBottom>
    </CssSidebar>
  );
};

export default Sidebar;
