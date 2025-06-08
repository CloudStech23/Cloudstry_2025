import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { BiChevronRight } from "react-icons/bi";

export function NestedMenu() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu>
      <MenuHandler>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-md">
          Menu
        </Button>
      </MenuHandler>
      <MenuList className="min-w-[200px] bg-white shadow-lg rounded-md border border-gray-200">
        <MenuItem className="hover:bg-blue-100 px-4 py-2 cursor-pointer rounded-md">
          Menu Item 1
        </MenuItem>
        <MenuItem className="hover:bg-blue-100 px-4 py-2 cursor-pointer rounded-md">
          Menu Item 2
        </MenuItem>
        <Menu
          placement="right-start"
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={15}
        >
          <MenuHandler>
            <MenuItem className="flex items-center justify-center hover:bg-blue-100 px-4 py-2 cursor-pointer rounded-md">
              Nested Item
              <BiChevronRight className="ml-2 text-gray-600" />
            </MenuItem>
          </MenuHandler>
          <MenuList className="  bg-white shadow-lg rounded-md border border-gray-200">
            <MenuItem className="hover:bg-blue-100   py-2 cursor-pointer rounded-md">
              Nested Item 1
            </MenuItem>
            <MenuItem className="hover:bg-blue-100   py-2 cursor-pointer rounded-md">
              Nested Item 2
            </MenuItem>
            <MenuItem className="hover:bg-blue-100   py-2 cursor-pointer rounded-md">
              Nested Item 3
            </MenuItem>
          </MenuList>
        </Menu>
        <MenuItem className="hover:bg-blue-100 px-4 py-2 cursor-pointer rounded-md">
          Menu Item 3
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
