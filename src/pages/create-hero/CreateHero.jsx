import React from "react";
import { connect } from "react-redux";
import { addHeroAction } from "../../store";
import Form from "../../components/form";
import "./CreateHero.css";

const CreateHero = (props) => {
  const initialData = {
    nickname: "",
    real_name: "",
    superpowers: "",
    origin_description: "",
    catch_phrase: "",
    images: [],
  };

  const createHero = (hero) => {
    props.addHero(hero);
  };

  return (
    <div className="create-hero">
      <h2>Create Hero</h2>
      <Form initialData={initialData} sendData={createHero} />
    </div>
  );
};

const mapDispatchToProps = {
  addHero: addHeroAction,
};

export default connect(null, mapDispatchToProps)(CreateHero);
