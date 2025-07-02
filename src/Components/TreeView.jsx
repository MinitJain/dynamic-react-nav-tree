// nested data structure
// dynamic navigation menu
// tree view navigation

import MenuList from "./MenuList";

// firstly the tree view component gets called then
// it further calls the MenuList
//then the menuList even further calls the MenuItem

const TreeView = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
