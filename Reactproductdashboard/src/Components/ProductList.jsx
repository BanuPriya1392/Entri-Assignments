import ProductCard from "./ProductCard";
import products from "../Data/Products";
const ProductList = () => {
  return (
    <div className="container mx-auto px-4 pb-12">
      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
