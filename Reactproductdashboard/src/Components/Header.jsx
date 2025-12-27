const Header = () => {
  return (
    <header className="bg-pink-300 text-white shadow-md p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">
          🛒 ShopEasy Dashboard
        </h1>
        <div className="hidden md:flex space-x-4">
          <span className="cursor-pointer hover:text-indigo-200">
            All Products
          </span>
          <span className="cursor-pointer hover:text-indigo-200">
            Categories
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
