import React, { Fragment, useState, useEffect } from "react";
import styles from "./FavoriteShows.module.css";

const FavoriteShows = props => {
  const { shows } = props;
  const [favShows, setFavShows] = useState(shows);

  useEffect(() => {
    setFavShows(shows);
    sortPlayingShows();
  }, [shows]);

  //This function filters the shows which have both "broadway" and "play" as categories
  const sortPlayingShows = () => {
    const playingShowsArr = favShows.filter(show => {
      let broadway = false;
      let play = false;

      for (const category of show.category) {
        if (category === "broadway") broadway = true;

        if (category === "play") play = true;
      }

      if (broadway && play) return show;
    });
    sortShowsByRating(playingShowsArr);
  };

  //This function sorts shows, descending, by rating
  const sortShowsByRating = showsArr => {
    const showsOrderedByRating = [];
    const showRatings = showsArr.map(show => show.rating);
    const orderedRatings = showRatings
      .sort((a, b) => b - a)
      .filter((a, b) => showRatings.indexOf(a) === b);

    for (const rating of orderedRatings) {
      for (const show of showsArr) {
        if (show.rating === rating) showsOrderedByRating.push(show);
      }
    }
    setFavShows(showsOrderedByRating);
  };

  // This function responsible for rendering shows
  const renderShows = favShows.map((show, i) => (
    <Fragment>
      <li key={show.id} className={styles.container__posterContainer}>
        <img
          className={styles.container__posterContainer__poster}
          src={show.poster}
          alt={show.title}
        />
      </li>

      <li key={i} className={styles.container__showDetails}>
        <div className={styles.container__showTitle}>
          <h1>{show.title}</h1>
        </div>
        <div className={styles.container__runningTime}>{show.runningTime}</div>
        <a href="#" className={styles.container__buyTicketBtn}>
          Buy Tickets
        </a>
        <span className={styles.container__orSpn}>or</span>
        <a href="#" className={styles.container__learnMoreBtn}>
          Learn More
        </a>
      </li>
    </Fragment>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h1 className={styles.container__header__title}>Favorite Shows</h1>
      </div>
      <ul className={styles.container__showsList}>{renderShows}</ul>
    </div>
  );
};

export default FavoriteShows;
