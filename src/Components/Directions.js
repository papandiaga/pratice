import React from "react";

function Directions() {
  return (
    <div className="Directions">
      <ol>
        <li>
          Create ButtonCards for all items in the data stored in state.{" "}
          <b>HINT</b>: Map throught the data and make a card for each item
        </li>
        <li>Render the data stored in state in the cards</li>
        <li>
          Create a function to return a list of all students that have names
          that start with a M. Call this function when the FIND button below is
          clicked
        </li>
      </ol>
    </div>
  );
}

export default Directions;
