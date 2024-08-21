import React from "react";

const SideMenu = () => {
  const leftMenu = [
    {
      id: 1,
      name: "GAPs Data Repository",
      path: "/",
    },
    {
      id: 2,
      name: "Country Profiles & Infographics",
      path: "/country-list",
    },
    {
      id: 3,
      name: "Policy/Legislation Mapping",
      path: "/policy-legislation-map",
    },
    {
      id: 4,
      name: "Return Infrastructure",
      path: "/return-infrastructure",
    },
    {
      id: 5,
      name: "International Cooperation",
      path: "/international-cooperation",
    },
    {
      id: 6,
      name: "Statistics",
      path: "/",
      submenu: [
        {
          id: 1,
          name: "Stock of Irregular Migrants",
          path: "/statistics/stock-of-irregular-migrants",
        },
        {
          id: 2,
          name: "Asylum Applications",
          path: "/",
        },
        {
          id: 3,
          name: "Entry Refusals and Pushbacks",
          path: "/",
        },
        {
          id: 4,
          name: "Dublin Returns",
          path: "/statistics/dublin-returns",
        },
        {
          id: 5,
          name: "TCNs/Foreign Nationals Ordered to Leave",
          path: "/",
        },
        {
          id: 6,
          name: "Returns by Type",
        },
        {
          id: 7,
          name: "Returns by Citizenship",
          path: "/",
        },
        {
          id: 8,
          name: "Alternative/Various Categories (National)",
          path: "/",
        },
        {
          id: 9,
          name: "Readmitted Citizens",
          path: "/",
        },
      ],
    },
  ];
  return (
    <div className="flex h-max flex-col justify-between shadow-xl bg-white max-w-54 overflow-y-auto">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          {leftMenu.map((menuItem) => (
            <li key={menuItem.id} >
              {menuItem.submenu ? (
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium">{menuItem.name}</span>
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <ul className="mt-2 space-y-1 px-4">
                    {menuItem.submenu.map((submenuItem) => (
                      <li key={submenuItem.id}>
                        <a
                          href={submenuItem.path}
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          {submenuItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a
                  href={menuItem.path}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  {menuItem.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
