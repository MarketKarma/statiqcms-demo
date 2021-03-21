import React from "react";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <p>
        <i>
          All data is provided by&nbsp;
          <a
            href="https://www.themoviedb.org/documentation/api"
            target="
        __blank"
          >
            TMBD
          </a>
        </i>
      </p>
      <Search />
    </div>
  );
}

export default App;
