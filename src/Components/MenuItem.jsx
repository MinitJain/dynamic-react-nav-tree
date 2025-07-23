import MenuList from "./menuList";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const hasChildren = item?.children?.length > 0;

  const handleToggleChildren = () => {
    setIsExpanded(!isExpanded);
  };

  const isActive = location.pathname.includes(item.to);

  return (
    <li style={{ backgroundColor: isActive ? "#475569" : "transparent" }}>
      <div>
        <Link
          to={item.to.startsWith("/") ? item.to : `/${item.to}`}
          style={{ color: "#f1f5f9", textDecoration: "none", flex: 1 }}
        >
          <p>{item.label}</p>
        </Link>

        {hasChildren && (
          <span onClick={handleToggleChildren}>{isExpanded ? "-" : "+"}</span>
        )}
      </div>

      {hasChildren && isExpanded && <MenuList list={item.children} />}
    </li>
  );
};

export default MenuItem;
