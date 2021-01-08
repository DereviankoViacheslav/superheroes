import React from "react";
import "./Hero.css";
import betmanJpg from "../home/betman.jpg";
import amazonJpg from "../home/amazon.jpg";

const initialState = [
  {
    id: "123",
    nickname: "Superman",
    real_name: "Clark Kent",
    superpowers:
      "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    origin_description:
      "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
    catch_phrase:
      "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: [],
  },
  {
    id: "1234",
    nickname: "Superman",
    real_name: "Clark Kent",
    superpowers:
      "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    origin_description:
      "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
    catch_phrase:
      "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: [],
  },
  {
    id: "1235",
    nickname: "Superman",
    real_name: "Clark Kent",
    superpowers:
      "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    origin_description:
      "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
    catch_phrase:
      "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: [],
  },
  {
    id: "1236",
    nickname: "Superman",
    real_name: "Clark Kent",
    superpowers:
      "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    origin_description:
      "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
    catch_phrase:
      "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: [],
  },
  {
    id: "1237",
    nickname: "Superman",
    real_name: "Clark Kent",
    superpowers:
      "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    origin_description:
      "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
    catch_phrase:
      "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: ["./betman.jpg", "./amazon.jpg"],
  },
];

const Hero = (props) => {
  const heroId = props.match.params.heroId;
  // console.log(props);
  // console.log(props.match.params.heroId);
  const hero = initialState.find(({id}) => id === heroId);
  return (
    <>
      <div className="hero">
        <h2>hero.id = {heroId}</h2>
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
          <img src={betmanJpg} alt={`Photo of ...`} />
          <img src={amazonJpg} alt={`Photo of ...`} />
        </div>
      </div>
    </>
  );
};

export default Hero;
