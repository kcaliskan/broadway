import React, { Fragment } from "react";

// Components
import ProfileHome from "./components/ProfileHome/ProfileHome";
import FavoriteShows from "./components/FavoriteShows/FavoriteShows";
import Loading from "./components/Loading/Loading";

// Root styling css
import "./main.css";

function App() {
  return (
    <Fragment>
      <ProfileHome
        userId="broadwaycom"
        render={data => (
          <Fragment>
            {data === null ? <Loading /> : <FavoriteShows shows={data} />}
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default App;
