export const ADD_HERO = "ADD_HERO";
export const DELETE_HERO = "DELETE_HERO";
export const EDIT_HERO = "EDIT_HERO";

export const addHeroAction = (hero) => {
  const id = Date.now().toString();
  return {
    type: ADD_HERO,
    payload: { id, ...hero },
  };
};

export const deleteHeroAction = (id) => {
  return {
    type: DELETE_HERO,
    payload: { id },
  };
};

export const editHeroAction = (id, hero) => {
  return {
    type: EDIT_HERO,
    payload: { id, ...hero },
  };
};
