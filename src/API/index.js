import Commerce from "@chec/commerce.js";

const commerce = new Commerce(process.env.REACT_APP_CHEC_KEY);

const listing = async () => {
  try {
    let { data } = await commerce.products.list();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default listing;
