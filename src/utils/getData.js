import initialState from "../data/data";

console.log(initialState);

// const getData = async (id) => {
//   const apiUrl = id ? `${API}${id}` : API;
//   try {
//     const response = await apiUrl;
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Fetch error: ", error);
//   }
// };

const getData = async (id) => {
  const data = id ? `${initialState}${id}` : initialState;
  return data;
};

export default getData;
