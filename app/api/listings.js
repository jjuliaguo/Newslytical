import client from "./client";

const endpoint="/listings"

//get all posted news from server
const getListings = () =>client.get(endpoint);

export default {
    getListings,
};