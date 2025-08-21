import React from "react";

const ListRender = () => {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];
  const listItems = people.map((item) =><li>{item}</li>);
  return <ul>{listItems}</ul>;
};

export default ListRender;
