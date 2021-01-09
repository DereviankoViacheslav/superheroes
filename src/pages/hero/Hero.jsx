import React from "react";
import { Link } from "react-router-dom";
import { deleteHeroAction } from "../../store";
import { connect } from "react-redux";
import Image from "../../components/image";
import "./Hero.css";

const Hero = ({ hero, deleteHero }) => {
  const removeHero = () => {
    deleteHero(hero.id);
  };

  return (
    <>
      <div className="hero">
        <div className="hero__controls">
          <Link to={`/edit-hero/${hero.nickname}/${hero.id}`} className="link">
            Edit hero
          </Link>
          <Link to="/" className="link" onClick={removeHero}>
            Delete hero
          </Link>
        </div>
        <h3>{hero.id}</h3>
        <h3>Nickname: {hero.nickname}</h3>
        <div>
          <b>Real name:</b> {hero.real_name}
        </div>
        <div>
          <b>Superpowers:</b> {hero.superpowers}
        </div>
        <div>
          <b>Catch phrase:</b> {hero.catch_phrase}
        </div>
        <div>
          <b>Description:</b> {hero.origin_description}
        </div>
        <div className="hero__image-list">
          {hero.images.map((url, index) => (
            <Image key={index} src={url} alt={`Photo of ${hero.nickname}`} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStatetToProps = (state, props) => {
  return {
    hero: state.find(({ id }) => id === props.match.params.heroId),
  };
};

const mapDispatchToProps = {
  deleteHero: deleteHeroAction,
};

export default connect(mapStatetToProps, mapDispatchToProps)(Hero);
