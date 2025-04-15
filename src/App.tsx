import { Link } from "@admiral-ds/react-ui";
import "./App.css";

function App() {
  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link
        appearance="primary"
        href="https://admiralds.github.io/react-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        Admiral Storybook
      </Link>
    </>
  );
}

export default App;
