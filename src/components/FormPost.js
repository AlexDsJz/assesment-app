import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";
import View from "components/FormPost.view";

function ProcessFormPost({ onCompleted = () => null, onError = () => null }) {
  const reqUsers = useQuery(`{ 
        users { 
        } 
    }`);
  const [callRomans, reqRomans] = usePost("/processes/decimal_to_roman", {
    onCompleted: () => 
        window.location.href = "/romans"
  });

  if (reqUsers.loading) return <Loading />;
  if (reqUsers.error) return "ERROR";

  const { users = [] } = reqUsers.data;
  const error = reqRomans.error ? "Ocurrió un error" : null;

  const onSubmit = (values) => {
    callRomans(values);
  };

  return <View 
        users={users} error={error}     
        onSubmit={onSubmit} />;
}

ProcessFormPost.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
};

export default ProcessFormPost;
