export default function FilterBar({ filters, setFilters }: any) {
  return (
    <div className="flex gap-4 mb-6">
      {/* Open Now */}
      <button
        onClick={() =>
          setFilters((prev: { openNow: any; }) => ({
            ...prev,
            openNow: !prev.openNow,
          }))
        }
        className={`px-4 py-2 rounded ${
          filters.openNow ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        Open Now
      </button>

      {/* Price */}
      <select
        value={filters.price}
        onChange={(e) =>
          setFilters((prev: any) => ({
            ...prev,
            price: e.target.value,
          }))
        }
        className="border px-4 py-2 rounded"
      >
        <option value="">All Price</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
      </select>

      {/* Category */}
      <select
        value={filters.category}
        onChange={(e) =>
          setFilters((prev: any) => ({
            ...prev,
            category: e.target.value,
          }))
        }
        className="border px-4 py-2 rounded"
      >
        <option value="">All Category</option>
        <option value="Japanese">Japanese</option>
        <option value="Indonesian">Indonesian</option>
        <option value="Fast Food">Fast Food</option>
        <option value="Cafe">Cafe</option>
      </select>
    </div>
  );
}