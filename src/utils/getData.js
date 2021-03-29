import initialState from "../data/data";

const getData = async (id) => {
  if (id) {
    return initialState.results[id - 1];
  }
  return initialState;
};

export default getData;
