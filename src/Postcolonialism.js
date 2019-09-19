import React from "react";

class Postcolonialism extends React.Component {
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
        <h2>Postcolonialism</h2>
        <p>
          Path dependencies ravage the native lands of {indigenous}, {enslaved},
          and {othered} people in the postcolonial era.
        </p>
        <p>
          But such injustices have also shown themselves to be the case in these
          United States. For instance, {indigenous} people, for all of their
          efforts in the name of resistance, have lost many integral aspects of
          their cultures, traditions, and even languages through the systemic
          efforts by {race} people to integrate them in re-education
          institutions and boarding schools. {enslaved} descendants of enslaved{" "}
          {enslaved}s continue to face intense discrimination in {race} society,
          had thier cultures stolen from them (but created a new culture of
          their own that includes aspects of each ethnic group that makes up the{" "}
          {enslaved} diaspora), and even face distrust from {othered},{" "}
          {indigenous}, and other minority groups. In fact, postcolonial society
          reminisces colonial society so much that there is even the need for
          the "{enslaved} Lives Matter" movement, albeit with the competing "All
          Lives Matter" movement or "Blue Lives Matter" used as slogans to
          justify police brutality (and other forms of brutalization) exerted
          among {enslaved} and other ethnic and racial minority communities.
          This is a testament to the deep racial tensions at the heart of these
          United States which, not too long ago, encouraged and enforced
          segregation and discrimination against minority groups (primarily
          against {enslaved} people). Finally, while {enslaved} and {indigenous}{" "}
          communities often see {othered} people as "model minorities" (with the
          many attempts by {race} people to wedge divisions among minority
          communities), before the 1970's, {othered} people in the United States
          were often seen as lazy, uneducated people. This is due to the
          post-1970's spike in immigration from native {othered} lands.
        </p>
        <p>
          But from {homeland} to {newWorld}, {race} influence has stretched far
          beyond the borders of nearly any other civilization in history.
          However, this has had numerous consequences on the homelands of{" "}
          {indigenous}, {enslaved} and {othered} people. {indigenous} lands, for
          instance, have been decimated by colonial influence and, in many
          cases, {indigenous} people are actually the minority on their own
          lands, with nations like these United States containing a very small{" "}
          {indigenous} population in comparison to the majority {race} people,
          as well as {enslaved} and {othered} people. {enslaved} lands,
          meanwhile, became resource farms for {homeland}, having been colonized
          (to some degree) since the days that {enslaved} people were enslaved
          by {race} colonizers and sent to {newWorld}. Finally, even {othered}{" "}
          lands have been affected as colonization and allyship with {homeland}{" "}
          have shifted traditional {othered} cultures from those that respected
          their land and culture to those that are willing to sacrifice it all
          for capital gain - a remnant of colonial mentality now ingrained in{" "}
          {othered} cultures. Furthermore, especially among {indigenous} and{" "}
          {enslaved} populations, {religion} has spread to become the
          predominant religion in these their homelands and among the {enslaved}{" "}
          diaspora.
        </p>
      </article>
    );
  }
}

export default Postcolonialism;
