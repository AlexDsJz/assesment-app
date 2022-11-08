import React from "react";
import PropTypes from "prop-types";

const ShowCharacters = ({ characters, processId }) => (
  <div class="card">
    <div class="card-header justify-content-center p-5 border-bottom ">
      <h1 class="card-header-title text-primary"> Proceso {processId} </h1>{" "}
    </div>{" "}
    <div class="card-body p-5">
      <div class="row">
        <div class="col">
          <h2 class="font-italic text-center">Caracteres únicos</h2>
          <div class="justify-content-center align-items-center pt-5 pb-5 m-0">
            <h2 class="font-italic  text-center text-warning"> {characters.join("")} </h2>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
);

ShowCharacters.propTypes = {
  characters: PropTypes.array,
  processId: PropTypes.number,
};

export default ShowCharacters;
