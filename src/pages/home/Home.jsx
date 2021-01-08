import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import betmanJpg from "./betman.jpg";
import amazonJpg from "./amazon.jpg";

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

const Home = () => {
  const heroList = initialState.map((hero) => {
    // const images = hero.images.map((url, index) => (
    //   <img key={index} src={url} alt={`Photo of ${hero.nickname}`} />
    // ));

    return (
      <div key={hero.id} className="hero-list__item">
        <h3>
          Nickname:
          <Link to={`/hero/${hero.nickname}/${hero.id}`} className="link">
            {hero.nickname}
          </Link>
        </h3>
        <p>
          <b>Real name:</b> {hero.real_name}
        </p>
        <p>
          <b>Superpowers:</b> {hero.superpowers}
        </p>
        <p>
          <b>Catch phrase:</b> {hero.catch_phrase}
        </p>
        <p>
          <b>Description:</b> {hero.origin_description}
        </p>
        <div className="hero-list__image-list">
          <img src={betmanJpg} alt={`Photo of ${hero.nickname}`} />
          <img src={amazonJpg} alt={`Photo of ${hero.nickname}`} />
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

export default Home;
