import Search from "./Search";
import PropTypes from "prop-types";

function Header({ onSearch }) {
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#112D4E", fontWeight: "bold", cursor: "pointer" }}>
        <div className="container">
          <a className="navbar-brand text-white">Bicode Movie</a>
          <Search onSearch={onSearch} />
        </div>
      </nav>
    </>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
