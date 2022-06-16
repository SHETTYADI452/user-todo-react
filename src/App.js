import React from "react";
import Home from "./Components/Home";
import { UserDetails } from "./Components/UserDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoadingContextProvider } from "./Contexts/Loading";
import { UsersContextProvider } from "./Contexts/Users";
import { TodoContextProvider } from "./Contexts/Todo";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <LoadingContextProvider>
          <TodoContextProvider>
            <UsersContextProvider>
              <Router>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/userdetail-todo/:id"
                  component={UserDetails}
                />
              </Router>
            </UsersContextProvider>
          </TodoContextProvider>
        </LoadingContextProvider>
      </header>
    </div>
  );
}

export default App;
