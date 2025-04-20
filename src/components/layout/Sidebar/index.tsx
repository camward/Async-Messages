import { Link } from "react-router-dom";
import { CssSidebar, CssSidebarTop, CssSidebarBottom, CssLink } from "./style";

const Sidebar = () => {
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
      <CssSidebarBottom>&copy;</CssSidebarBottom>
    </CssSidebar>
  );
};

export default Sidebar;
