import React, { Fragment, useState, useEffect } from "react";
import { getFavoriteShowsByUserId } from "../utils/apiRequests";

const ProfileHome = props => {
  const { render, userId } = props;
  const [favShows, setFavShows] = useState(null);

  useEffect(() => {
    getFavoriteShowsByUserId(userId).then(data => {
      setFavShows(data);
    });
  }, [userId]);

  return <Fragment>{render(favShows)}</Fragment>;
};

export default ProfileHome;
