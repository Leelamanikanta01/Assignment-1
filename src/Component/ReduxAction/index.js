import axios from "axios";

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/movies");
    dispatch({ type: "SET_MOVIES", payload: response.data });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
