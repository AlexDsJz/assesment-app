import React from "react";
import PropTypes from "prop-types";
import View from "components/ShowCharacters.view";
import { useGet } from "seed/api";
import { Loading } from "seed/helpers";

function ShowCharacters({ processId }) {
  const reqChars = useGet(`/processes/${processId}/characters`);

  if (reqChars.loading) return <Loading />;
  if (reqChars.error) return "Error";

  const data = reqChars.data;

  return <View characters={data} processId={processId} />;
}

ShowCharacters.propTypes = {
  processId: PropTypes.number.isRequired,
};

export default ShowCharacters;
