import type { Restaurant } from "../types/restaurant";
import { useNavigate } from "react-router-dom";

type Props = {
  data: Restaurant;
};

export default function RestaurantCard({ data }: Props) {

    const navigate = useNavigate();

    // handle array / string
    const category = Array.isArray(data.categories)
        ? data.categories[0]
        : data.categories;

    const image = Array.isArray(data.photos)
        ? data.photos[0]
        : data.photos;

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            {/* Image */}
            <img
                src={image}
                alt={data.name}
                className="w-full h-40 object-cover"
            />

            <div className="p-4">
                {/* Title */}
                <h3 className="font-semibold text-sm mb-1">
                {data.name}
                </h3>

                {/* Rating */}
                <p className="text-yellow-500 text-sm">
                ⭐ {data.rating}
                </p>

                {/* Info */}
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>
                    {category} • {data.price}
                </span>
                <span
                    className={
                    data.is_open ? "text-green-600" : "text-red-500"
                    }
                >
                    ● {data.is_open ? "OPEN NOW" : "CLOSED"}
                </span>
                </div>

                {/* Button */}
                <button
                    onClick={() => navigate(`/restaurant/${data.id}`)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 text-sm font-semibold rounded hover:bg-blue-500"
                    >
                    LEARN MORE
                </button>
            </div>
        </div>
    );
}