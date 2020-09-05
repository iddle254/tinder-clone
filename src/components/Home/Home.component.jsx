import React, { useState, useEffect } from "react";
import TinderCards from "react-tinder-card";
import database from "../../firebase/firebase.js";
import Swipebuttons from "../Swipebuttons/Swipebuttons.component";
import "./home.styles.css";

function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="home">
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
      <Swipebuttons />
    </div>
  );
}

export default Home;
