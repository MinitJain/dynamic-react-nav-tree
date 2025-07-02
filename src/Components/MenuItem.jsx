import MenuList from "./MenuList";
import { useState } from "react";

const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for this item's children

  const handleToggleChildren = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children?.length ? (
          <span onClick={handleToggleChildren}>{isExpanded ? "-" : "+"}</span>
        ) : null}
      </div>
      {item && item.children?.length > 0 && isExpanded ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
