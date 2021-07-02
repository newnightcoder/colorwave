// Import the Commerce module
import Commerce from "@chec/commerce.js";

// Create a Commerce instance
const commerce = new Commerce(process.env.REACT_APP_CHEC_KEY);

const listing = async () => {
  let { data } = await commerce.products.list();
  return data;
};

export default listing;
