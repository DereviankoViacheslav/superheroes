import React from "react";
import { connect } from "react-redux";
import { editHeroAction } from "../../store";
import Form from "../../components/form";
import "./EditHero.css";

const EditHero = (props) => {
  const { id, ...initialData } = props.hero;
  const editHero = (hero) => {
    props.editHero(id, hero);
  };

  return (
    <div className="edit-hero">
      <h2>Edit Hero</h2>
      <Form initialData={initialData} sendData={editHero} />
    </div>
  );
};

const mapStatetToProps = (state, props) => {
  return {
    hero: state.find(({ id }) => id === props.match.params.heroId),
  };
};

const mapDispatchToProps = {
  editHero: editHeroAction,
};

export default connect(mapStatetToProps, mapDispatchToProps)(EditHero);
