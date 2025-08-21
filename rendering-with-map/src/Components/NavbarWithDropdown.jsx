import React from "react";

const NavbarWithDropdown = () => {
  const menu = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    {
      id: 3,
      title: "Services",
      subMenu: [
        { id: 1, name: "Web Development", url: "/services/web" },
        { id: 2, name: "App Development", url: "/services/app" },
        { id: 3, name: "SEO", url: "/services/seo" },
      ],
    },
    { id: 4, title: "Contact", url: "/contact" },
  ];

  const listItems = menu.map((item) => (
    <li
      key={item.id}
      style={{
        listStyle: "none",
        position: "relative",
      }}
    >
      <a href={item.url} style={{ fontSize: "20px", textDecoration: "none" }}>
        {item.title}
      </a>
      {item.subMenu && (
        <ul
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {item.subMenu.map((sub) => (
            <li key={sub.id} style={{ listStyle: "none" }}>
              <a href={sub.url}>{sub.name}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <h1>Waqar</h1>
      <ul
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {listItems}
      </ul>
    </nav>
  );
};

export default NavbarWithDropdown;
