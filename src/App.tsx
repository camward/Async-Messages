import { useEffect, useState } from "react";
import styled from "styled-components";
import { Theme } from "@admiral-ds/react-ui";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CssWrapper = styled.div`
  color: ${(props) => (props.theme as Theme).color["Neutral/Neutral 90"]};
`;

const App = () => {
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowSkeleton(false);
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <CssWrapper>
      {showSkeleton ? (
        <Skeleton count={4} />
      ) : (
        <ul>
          <li>WebSocket</li>
          <li>Server-Sent Events</li>
          <li>Long Polling</li>
        </ul>
      )}
    </CssWrapper>
  );
};

export default App;
