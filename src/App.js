import React from "react";
import "./App.css";
import SongList from "./components/Songlist";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/Newsong";
import UpdateForm from "./components/UpdateSong";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/add">
            <Form />
          </Route>
          <Route exact path="/">
            <SongList />
          </Route>
          <Route exact path="/update/:id">
            <UpdateForm />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
