import axios from "axios";

const BASE_URL = "https://69c51c0a8a5b6e2dec2bd41a.mockapi.io/restaurant/api/";

export const getRestaurants = async (category?: string) => {
  let url = `${BASE_URL}/restaurants`;

  if (category) {
    url += `?categories=${category}`;
  }

  const res = await axios.get(url);
  return res.data;
};

export const getRestaurantById = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/restaurants/${id}`);
  return res.data;
};

export const getReviews = async (restaurantId: string) => {
  const res = await fetch(
    `${BASE_URL}/reviews?restaurant_id=${restaurantId}`
  );
  return res.json();
};