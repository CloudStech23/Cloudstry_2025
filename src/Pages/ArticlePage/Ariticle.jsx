import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { BiChevronRight } from "react-icons/bi";

export function Article() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div className="mt-[95px] px-6 py-8 max-w-4xl mx-auto">
      {/* Navigation Menu */}
      <div className="mb-8">
        <Menu>
          <MenuHandler>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-md">
              Explore Topics
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
                <MenuItem className="flex items-center justify-between hover:bg-blue-100 px-4 py-2 cursor-pointer rounded-md">
                  Nested Item
                  <BiChevronRight className="ml-2 text-gray-600" />
                </MenuItem>
              </MenuHandler>
              <MenuList className="bg-white shadow-lg rounded-md border border-gray-200">
                <MenuItem className="hover:bg-blue-100 py-2 px-4 cursor-pointer rounded-md">
                  Nested Item 1
                </MenuItem>
                <MenuItem className="hover:bg-blue-100 py-2 px-4 cursor-pointer rounded-md">
                  Nested Item 2
                </MenuItem>
                <MenuItem className="hover:bg-blue-100 py-2 px-4 cursor-pointer rounded-md">
                  Nested Item 3
                </MenuItem>
              </MenuList>
            </Menu>
            <MenuItem className="hover:bg-blue-100 px-4 py-2 cursor-pointer rounded-md">
              Menu Item 3
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      {/* Article Content */}
      <article className="prose prose-blue">
        <h1 className="text-3xl font-bold mb-4">
          How Dropdown Menus Enhance UX
        </h1>
        <p>
          Dropdown menus are essential UI components that improve navigation and
          structure in websites. They allow users to access sub-categories or
          deeper links without cluttering the interface.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">
          Nested Menus for Better Hierarchy
        </h2>
        <p>
          With support for nested dropdowns, like the example provided using
          Material Tailwind, developers can create multi-level navigation
          experiences suitable for documentation, product catalogs, or service
          categories.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Responsive Design Tips</h2>
        <p>
          When implementing dropdowns in an article layout, ensure they adapt
          well on mobile devices. Prefer hover-based opening on desktop and
          click/tap-based on mobile for best UX.
        </p>

        <p className="mt-6 italic text-gray-600">
          "A well-structured menu can make or break the first impression of your
          site."
        </p>
      </article>
    </div>
  );
}
