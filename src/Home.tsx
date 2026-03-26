import { useEffect, useState } from "react";
import type { Restaurant } from "./types/restaurant";
import { getRestaurants } from "./services/api";
import FilterBar from "./Components/FIlterBar";
import RestaurantCard from "./Components/RestaurantCard";
import SkeletonCard from "./Components/SkeletonCard";

export default function Home() {
  const [data, setData] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);

  const [filters, setFilters] = useState({
    openNow: false,
    price: "",
    category: "",
  });

  useEffect(() => {
    setLoading(true);

    getRestaurants(filters.category)
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, [filters.category]);

  useEffect(() => {
    setVisibleCount(9);
  }, [filters]);

  const filteredData = data.filter((item) => {
    const matchOpen = filters.openNow ? item.is_open : true;

    const matchPrice = filters.price
      ? item.price === filters.price
      : true;

    return matchOpen && matchPrice;
  });

  if (loading)
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />

        {/* overlay blur */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* content */}
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Favorite Food 🍜
          </h1>

          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Discover the best restaurants, hidden gems,
            and trending food spots near you
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 mb-10 relative z-20">
        {/* CARD WRAPPER */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              Restaurants
            </h1>

            <p className="text-gray-500 mt-1">
              {filteredData.length} places found
            </p>
          </div>

          {/* FILTER */}
          <div className="mb-6">
            <FilterBar
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          {/* GRID */}
          {filteredData.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredData.slice(0, visibleCount).map((item) => (
                  <RestaurantCard
                    key={item.id}
                    data={item}
                  />
                ))}
              </div>

              {/* LOAD MORE */}
              <div className="mt-10 text-center">
                {visibleCount < filteredData.length ? (
                  <button
                    onClick={() =>
                      setVisibleCount((prev) => prev + 9)
                    }
                    className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
                  >
                    Load More
                  </button>
                ) : (
                  <p className="text-gray-400 text-sm">
                    🎉 You’ve seen it all!
                  </p>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No restaurants found 😢
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Try changing your filters
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}