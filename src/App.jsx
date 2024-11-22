import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "./store/actions";
import axios from "axios";
import Header from "./components/Header";
import Movie from "./components/Movie";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const datas = useSelector((state) => state.data); 
  const dispatch = useDispatch();

  const fetchMoviesApi = useCallback(
    (request = "movie") => {
      const url = import.meta.env.VITE_API_URL;
      const apiKey = import.meta.env.VITE_API_KEY;
      setLoading(true);
      axios
        .get(url, {
          params: {
            apikey: apiKey,
            s: request,
          },
        })
        .then((res) => {
          dispatch(setMovies(res.data.Search || []));
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 150);
        });
    },
    [dispatch]
  );

  useEffect(() => {
    fetchMoviesApi();
  }, [fetchMoviesApi]);

  return (
    <>
      <Header onSearch={fetchMoviesApi} />
      <h1 className="container my-4" style={{ color: "#112D4E", marginLeft: "20px" }}>
        Show Your Favorite Movies
      </h1>

      <div className="d-flex flex-wrap justify-content-center gap-4 mb-2">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          datas.map((movies) => <Movie key={movies.imdbID} poster={movies.Poster} title={movies.Title} year={movies.Year} />)
        )}
      </div>
    </>
  );
};

export default App;
