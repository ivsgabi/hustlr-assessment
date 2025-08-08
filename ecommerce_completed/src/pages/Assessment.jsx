import React, { useEffect, useState } from "react";
import { Footer, Navbar, ProductCard } from "../components";

const Assessment = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/1");
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Johana GABA Assessment</h1>
        <hr />
        <p className="lead text-center fs-6">
          Hello,<br />
          Welcome to my Hustlr Frontend Developer Assessment.<br />
          This is the result of my work on the given task within 1 hour. I tried to respect the time constraint as much as possible, so some features are missing to reach a 100% completion.<br />
          Here are the improvements I would have implemented to have a perfect completion of the task:<br />
          - Added toast notifications to confirm when a product is added to the cart.<br />
          - Fixed the product title display in the cart.<br />
          - Fixed quantity incrementing correctly when adding the same product multiple times.<br />
          Even though the API didn’t provide options like sizes or colors, I added these fields in the Product Card component to demonstrate how such options could be handled.<br />
          For more details about my implementation, please refer to the README file.
        </p>
        <h2 className="text-center py-4">My Product Card</h2>
        <div className="d-flex justify-content-center">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            {loading ? (
              <p>Loading product...</p>
            ) : (
              <ProductCard
                image={product.image}
                name={product.title}
                price={product.price}
                colors={["Black", "Red", "Beige"]} 
                stock={product.rating.count}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Assessment;

// {[product.sizes]}
// colors={[product.colors]} 