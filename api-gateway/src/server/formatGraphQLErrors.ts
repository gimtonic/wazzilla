// @ts-ignore
import _ from "lodash";
import { GraphQLError } from "graphql";

const formatGraphQLErrors = (error: GraphQLError) => {
  const errorDetails = _.get(error, "originalError.response.body");
  try {
    if (errorDetails) return JSON.parse(errorDetails);
  } catch (e) {
    console.log(e);
  }

  return error;
};

export default formatGraphQLErrors;
