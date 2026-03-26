import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Restaurant } from "./types/restaurant";
import { getRestaurants, getReviews } from "./services/api";

type Review = {
  id: string;
  restaurant_id: string;
  username: string;
  user_image: string;
  rating: number;
  text: string;
};

export default function Detail() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getRestaurants(), getReviews(id!)])
      .then(([restaurants, reviewsData]) => {
        const found = restaurants.find(
          (item: Restaurant) => String(item.id) === String(id)
        );

        const filteredReviews = reviewsData.filter(
          (review: Review) =>
            String(review.restaurant_id) === String(id)
        );

        setRestaurant(found || null);
        setReviews(filteredReviews);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!restaurant) return <p className="p-6">Data not found</p>;

  const image = Array.isArray(restaurant.photos)
    ? restaurant.photos[0]
    : restaurant.photos || "https://via.placeholder.com/800x400";

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src={image}
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* content */}
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            {restaurant.name}
          </h1>

          <div className="flex items-center gap-3 mt-2">
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ {restaurant.rating}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                restaurant.is_open
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {restaurant.is_open ? "Open Now" : "Closed"}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 mt-8 space-y-8">
        {/* MAP */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">
            Location
          </h2>

          <div className="w-full h-[300px] rounded-xl overflow-hidden">
            <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              src={`https://www.google.com/maps?q=${restaurant.name}&output=embed`}
            />
          </div>
        </div>

        {/* REVIEWS */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              Customer Reviews
            </h2>

            <span className="text-sm text-gray-500">
              {reviews.length} reviews
            </span>
          </div>

          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
                >
                  {/* HEADER */}
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={review.user_image}
                      className="w-12 h-12 rounded-full object-cover border"
                    />

                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">
                        {review.username}
                      </p>

                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-yellow-500">
                          {"⭐".repeat(
                            Math.round(review.rating)
                          )}
                        </span>
                        <span className="text-gray-400">
                          {review.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-600 leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-6 text-center text-gray-500">
                No reviews yet
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}