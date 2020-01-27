import axios from "axios";

// @route GET api/shows/favshows/:userId
// @desc Get user's favorite shows
// @access Private
export const getFavoriteShowsByUserId = async userId => {
  try {
    const response = await axios.get(
      `http://www.algolevel.com/api/shows/favshows/${userId}`
    );
    const favShows = response.data;
    return favShows;
  } catch (err) {
    console.log(err);
  }
};
