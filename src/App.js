import React from "react";
import Header from "./components/Header/Header.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.component";
import ChatScreen from "./components/Chatscreen/Chatscreen.component";
import "./App.css";
import Chats from "./components/Chats/Chats.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/chats"
            render={() => (
              <>
                <Header backButton="/" />
                <Chats />
              </>
            )}
          />
          <Route
            exact
            path="/chat/:person"
            render={() => (
              <>
                <Header backButton="/chat" />
                <ChatScreen />
              </>
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Header />
                <Home />
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
