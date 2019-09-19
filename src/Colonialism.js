import React from "react";

class Colonialism extends React.Component {
  render() {
    // Set the variables to their respective properties:
    let race = this.props.race;
    let indigenous = this.props.indigenous;
    let enslaved = this.props.enslaved;
    let othered = this.props.othered;
    let newWorld = this.props.newWorld;
    let homeland = this.props.homeland;
    let religion = this.props.religion;

    return (
      <article className="article">
        <h2>Colonialism</h2>
        <p>
          {race} people traveled from their homeland in {homeland} to {newWorld}{" "}
          and claimed it as their "New World". However, {indigenous} people
          already had ownership over these lands. Conflicts between the {race}{" "}
          colonizers and the indigenous {indigenous} peoples of {newWorld}{" "}
          resulted in armed conflicts well into the 20th century over land
          rights, with many civil suits over land rights still pending.
        </p>
        <p>
          However, colonization occurred at a global scale. In addition to lands
          belonging to {indigenous} people, {enslaved} people (who were
          enslaved) and to {othered} people (who have been othered in {race}{" "}
          society) were also stolen while, in many instances, {othered} people
          (seen as model minorities) utilized {race} economic theories to
          succeed, especially {othered} immigrants in the West.
        </p>
        <p>
          Colonization made it so that {race} influence became, not only a
          global phenomenon, but the current paradigm, even though (with the
          proliferation of concepts of human rights) {race} supremacy and rule
          over {indigenous}, {enslaved}, and {othered} homelands have taken more
          covert forms, including economic dependency. Everything from political
          ideology to the spread of {religion} (originally as a way to subjugate
          the non-{race} masses) were due to {race} supremacy and subsequent
          influence.
        </p>
        <p>
          In addition to cultural impacts, {race} supremacy also meant that
          resources on lands belonging to {indigenous}, {enslaved}, and even{" "}
          {othered} people were extracted by {race} people for capital gains.
          This formed the basis of capitalism in which indigenous {indigenous}{" "}
          lands and resources and {enslaved} people were simply seen as
          commodities without the necessity for the self-determination of either{" "}
          {indigenous} or {enslaved} people in the process. This conqueror
          mentality has become ingrained in this modern-day society and
          reinforces capitalistic ideals of conquerors vs. the conquerored and
          the dualities of winners and losers responsible for the many
          injustices that still occur around the world.
        </p>
      </article>
    );
  }
}

export default Colonialism;
