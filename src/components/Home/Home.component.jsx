import React, { useState } from "react";
import TinderCards from "react-tinder-card";

import "./home.styles.css";

function Home() {
  const [people, setPeople] = useState([
    {
      name: "Asange",
      url:
        "https://images.unsplash.com/photo-1517402332981-cb32e3c072bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Enzo",
      url:
        "https://images.unsplash.com/photo-1541760866956-dcad73131a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  return (
    <div className="home__tindercardsContainer">
      {people.map((person) => (
        <TinderCards
          className="swipe"
          key={person.className}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${person.url})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCards>
      ))}
    </div>
  );
}

export default Home;
