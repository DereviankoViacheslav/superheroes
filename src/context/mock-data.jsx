import React, { createContext, useReducer } from "react";

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
    images: [],
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_HERO":
      return { ...state, isLoading: true };
    case "GET_HEROES":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        currentUser: action.payload,
      };
    case "GET_HERO":
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    case "DELETE_HERO":
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    case "EDIT_HERO":
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export const MockDataContext = createContext(initialState);

export const MockDataProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <MockDataContext.Provider value={value}>
      {children}
    </MockDataContext.Provider>
  );
};
