import TreeView from "./Components/TreeView";
import menus from "./Components/data";
import "./index.css";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      import {useLocation} from "react-router-dom";
      <TreeView menus={menus} />
      <div style={{ marginLeft: "270px", padding: "2rem" }}>
        <Routes>
          <Route path="*" element={<Page />} />
        </Routes>
      </div>
    </>
  );
}
function Page() {
  const location = useLocation();

  return (
    <div>
      <h1>
        Your current Page is:{" "}
        {location.pathname === "/" ? "Home" : location.pathname.slice(1)}
      </h1>
      <h2> This is the content for this route.</h2>
    </div>
  );
}

export default App;
