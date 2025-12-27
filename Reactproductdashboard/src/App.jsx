import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";

function App() {
  return (
    // Flexbox wrapper ensures footer stays at the bottom
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
