import Commerce from "@chec/commerce.js";

const HEROKU_ENDPOINT = "https://colorwave-shop.herokuapp.com/commerce";
const CYCLIC_ENDPOINT = "https://ruby-comfortable-oyster.cyclic.app";

const BACKEND_ENDPOINT = process.env.NODE_ENV === "production" ? CYCLIC_ENDPOINT : "http://localhost:4242";

const listing = async () => {
  const { key } = await fetch(BACKEND_ENDPOINT, { method: "get" }).then((res) => res.json());
  try {
    if (key !== undefined) {
      const commerce = new Commerce(key);
      let { data } = await commerce.products.list({
        category_slugs: ["gaming", "sound"],
        limit: 200,
      });
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default listing;
