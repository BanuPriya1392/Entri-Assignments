// Import required modules
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware to read JSON body
app.use(express.json());

// ---------------- GET METHOD ----------------
// Endpoint: /getProducts
// This will fetch all products from products.json

app.get("/getProducts", (req, res) => {
  // Read the products.json file
  fs.readFile("products.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }

    // Convert JSON string to JS object
    const products = JSON.parse(data);

    // Send response
    res.json(products);
  });
});

// ---------------- POST METHOD ----------------
// Endpoint: /addProduct
// Adds a new product into products.json

app.post("/addProduct", (req, res) => {
  const newProduct = req.body; // get product data from request body

  fs.readFile("products.json", "utf8", (err, data) => {
    let products = JSON.parse(data);

    // Add new product
    products.push(newProduct);

    // Write updated data back to file
    fs.writeFile("products.json", JSON.stringify(products, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error writing file");
      }

      res.send("Product added successfully");
    });
  });
});

// ---------------- DELETE METHOD ----------------
// Endpoint: /deleteProduct/:id
// Deletes product with given productId

app.delete("/deleteProduct/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  fs.readFile("products.json", "utf8", (err, data) => {
    let products = JSON.parse(data);

    // Filter products except the one to delete
    const updatedProducts = products.filter(
      (product) => product.productId !== productId,
    );

    // Save updated list
    fs.writeFile(
      "products.json",
      JSON.stringify(updatedProducts, null, 2),
      (err) => {
        if (err) {
          return res.status(500).send("Error deleting product");
        }

        res.send("Product deleted successfully");
      },
    );
  });
});

// ---------------- UPDATE METHOD ----------------
// Endpoint: /updateProduct/:id
// Updates description of product

app.put("/updateProduct/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  fs.readFile("products.json", "utf8", (err, data) => {
    let products = JSON.parse(data);

    // Find product
    const product = products.find((p) => p.productId === productId);

    if (product) {
      // Update description
      product.description = "Preferred by Both Vegetarians and Non Vegetarians";
    }

    // Save file again
    fs.writeFile("products.json", JSON.stringify(products, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error updating product");
      }

      res.send("Product updated successfully");
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
