import { useState } from "react";
import TreeView from "./Components/TreeView";
import menus from "./Components/data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TreeView menus={menus} />
    </>
  );
}

export default App;
