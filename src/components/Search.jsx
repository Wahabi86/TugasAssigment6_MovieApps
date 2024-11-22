import { useState } from "react";
import PropTypes from "prop-types";

function Search({ onSearch }) {
  const [request, setRequest] = useState("");

  const handleSearch = () => {
    onSearch(request);
  };

  return (
    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
      <div className="input-group mb-1">
        <input type="text" className="form-control" placeholder="Search..." aria-label="search" aria-describedby="search" value={request} onChange={(e) => setRequest(e.target.value)} />
        <button className="btn text-white" type="button" id="search" style={{ backgroundColor: "#41B06E" }} onClick={handleSearch}>
          SEARCH
        </button>
      </div>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
