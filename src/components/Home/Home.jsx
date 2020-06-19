import React from "react";
import PropTypes from "prop-types";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import FrontPage from "../../containers/FrontPage";

const Home = props => {
  return (
    <>
      <ScrollUpButton  ContainerClassName='scroll-up-ch'/>
      <FrontPage></FrontPage>
    </>
  );
};

Home.propTypes = {
  clearSearch: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired
    })
  })
};

export default Home;