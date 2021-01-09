import { createStore } from "redux";
import * as actions from "./heroes.actions";

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
    images: [
      "https://imgtest.mir24.tv/uploaded/images/crops/2018/December/870x489_0x6_detail_crop_f5a363c940799cf0289129b498fd9999437b7beb5ef00b5eaab3d7eeaca64849.jpg",
      "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/03/150903150823_ancient_hippolyta_amazon_624x351_warnerbros.jpg",
    ],
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
    images: [
      "https://imgtest.mir24.tv/uploaded/images/crops/2018/December/870x489_0x6_detail_crop_f5a363c940799cf0289129b498fd9999437b7beb5ef00b5eaab3d7eeaca64849.jpg",
      "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/03/150903150823_ancient_hippolyta_amazon_624x351_warnerbros.jpg",
    ],
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
    images: [
      "https://imgtest.mir24.tv/uploaded/images/crops/2018/December/870x489_0x6_detail_crop_f5a363c940799cf0289129b498fd9999437b7beb5ef00b5eaab3d7eeaca64849.jpg",
      "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/03/150903150823_ancient_hippolyta_amazon_624x351_warnerbros.jpg",
    ],
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
    images: [
      "https://imgtest.mir24.tv/uploaded/images/crops/2018/December/870x489_0x6_detail_crop_f5a363c940799cf0289129b498fd9999437b7beb5ef00b5eaab3d7eeaca64849.jpg",
      "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/03/150903150823_ancient_hippolyta_amazon_624x351_warnerbros.jpg",
    ],
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
    images: [
      "https://imgtest.mir24.tv/uploaded/images/crops/2018/December/870x489_0x6_detail_crop_f5a363c940799cf0289129b498fd9999437b7beb5ef00b5eaab3d7eeaca64849.jpg",
      "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/03/150903150823_ancient_hippolyta_amazon_624x351_warnerbros.jpg",
    ],
  },
];

const heroListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DELETE_HERO:
      return state.filter(({ id }) => id !== action.payload.id);
    case actions.ADD_HERO:
      return [{ ...action.payload }, ...state];
    case actions.EDIT_HERO:
      return state.map((hero) =>
        hero.id === action.payload.id ? action.payload : { ...hero }
      );
    default:
      return state;
  }
};

export const store = createStore(heroListReducer);
