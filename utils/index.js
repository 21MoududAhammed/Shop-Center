const { products } = require("@/data");

export const getCategoryBasedProducts = (name) => {
  let result;
  if (name !== "all") {
    result = products.filter((item) => item.category === name);
    if (result.length > 0) {
      return result;
    } else {
      return [];
    }
  } else {
    return products;
  }
};


