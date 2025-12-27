const ProductCard = ({ title, price, category, inStock, image }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        {/* Conditional Rendering: Expensive Product Badge */}
        {price > 1000 && (
          <span className="absolute top-2 left-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
            Premium Choice
          </span>
        )}
      </div>

      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs font-semibold text-indigo-500 uppercase">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2">
          {title}
        </h3>
        <p className="text-2xl font-black text-gray-900 mb-4">
          ₹{price.toLocaleString()}
        </p>

        {/* Conditional Rendering: Stock Status Badge */}
        <div className="mt-auto">
          {inStock ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              In Stock
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Sold Out ❌
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
