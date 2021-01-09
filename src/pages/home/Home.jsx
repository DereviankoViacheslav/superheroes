import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Image from "../../components/image";
import "./Home.css";

const Home = (props) => {
  const heroList = props.heroList.map((hero) => {
    return (
      <div key={hero.id} className="hero-list__item">
        <h2>{hero.id}</h2>
        <h3>
          Nickname:
          <Link to={`/hero/${hero.nickname}/${hero.id}`} className="link">
            {hero.nickname}
          </Link>
        </h3>
        <b>Real name:</b> {hero.real_name}
        <br />
        <b>Superpowers:</b> {hero.superpowers}
        <br />
        <b>Catch phrase:</b> {hero.catch_phrase}
        <br />
        <b>Description:</b> {hero.origin_description}
        <br />
        <div className="hero-list__image-list">
          {hero.images.map((url, index) => (
            <Image key={index} src={url} alt={`Photo of ${hero.nickname}`} />
          ))}
        </div>
      </div>
    );
  });

  return (
    <>
      <h1>Hero List</h1>
      <div className="hero-list">{heroList}</div>
    </>
  );
};

const mapStatetToProps = (state) => {
  return {
    heroList: state,
  };
};

export default connect(mapStatetToProps)(Home);
