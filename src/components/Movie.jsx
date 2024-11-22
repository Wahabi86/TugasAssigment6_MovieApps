import PropTypes from "prop-types";

function Movie({ poster, title, year }) {
  return (
    <div className="card border border-bottom-0 border-dark-subtle shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{ cursor: "pointer", width: "300px", transition: "transform 0.3s ease" }}>
      <img src={poster} className="card-img-top" alt={title} style={{ height: "373px", width: "100%" }} />
      <div className="card-body" style={{ backgroundColor: "#112D4E", fontWeight: "bold" }}>
        <p className="card-text text-white text-center">{title}</p>
        <p className="card-text text-white text-center">{year}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};


export default Movie;
