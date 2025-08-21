import React from "react";

const ArrayofObj = () => {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "MK3eW3A",
      img: "	https://i.imgur.com/MK3eW3As.jpg",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "mynHUSa",
      img: "https://i.imgur.com/mynHUSas.jpg",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "bE7W1ji",
      img: "https://i.imgur.com/bE7W1jis.jpg",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "IOjWm71",
      img: "	https://i.imgur.com/lrWQx8ls.jpg",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "lrWQx8l",
      img: "	https://i.imgur.com/IOjWm71s.jpg",
    },
  ];
  const chemists = people
    .filter((person) => person.profession == "chemist")
    .map((person) => (
      <li key={person.id} style={{display:"flex", gap:"10px",alignItems:"center"}} >
        <img src={person.img} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));

  const allPersons = people.map((person) => (
    <li key={person.id} style={{display:"flex", gap:"10px",alignItems:"center"}} >
      <img src={person.img} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return(
  <>
  <h1>Chemists:</h1>
  <ul>{chemists}</ul>
  <h1>All Persons:</h1>
  <ul>{allPersons}</ul>
  </>
)};

export default ArrayofObj;
