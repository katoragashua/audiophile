import data from "./data.json";
console.log(data);

export const getProducts = async () => {
  // try {
  //   const response = await fetch(`/src/data.json`);
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch products");
  //   }
  //   const data = await response.json();
    
  //   return data;
  // } catch (error) {
  //   console.error(error);
  //   return error;
  // }
  return data;
};

export const getProduct = async (id) => {
  // try {
  //   const response = await fetch(`/src/data.json`);
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch products");
  //   }
  //   const data = await response.json();
  //   const product = data.find((product) => product.id === id);
  //   return product;
  // } catch (error) {
  //   console.error(error);
  //   return error;
  // }
  return data.find((product) => product.id === id);
};
