import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import "../styles/ProductCard.css"; 

const ProductCard = ({ image, name, price, sizes = [], colors = [], stock }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  const [toastVisible, setToastVisible] = useState(false);

  const addProduct = () => {
    if (stock && stock <= 0) {
      return;
    }
    const productToAdd = {
      image,
      name,
      price,
      size: selectedSize,
      color: selectedColor,
      stock
    };
    dispatch(addCart(productToAdd));
    setToastVisible(true);
  };

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => setToastVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  return (
    <>
      <div className="card product-card">
        <img className="card-img-top product-image" src={image} alt={name} />

        <div className="card-body">
          <h5 className="card-title" title={name}>{name}</h5>
          <p className="option-label">More options available</p>
        </div>

        <div className="extra-options">
          {sizes.length > 0 && (
            <div className="mb-2">
              <label htmlFor="size-select">Size</label>
              <select
                id="size-select"
                className="form-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {sizes.map((size, i) => (
                  <option key={i} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
          {colors.length > 0 && (
            <div>
              <label htmlFor="color-select">Color</label>
              <select
                id="color-select"
                className="form-select"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {colors.map((color, i) => (
                  <option key={i} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="price-add-row">
          <div className="price">${price}</div>
          <button
            className="btn-add"
            onClick={addProduct}
            disabled={stock <= 0}
            aria-label={stock > 0 ? "Add To Cart" : "Out of Stock"}
            title={stock > 0 ? "Add To Cart" : "Out of Stock"}
          >
            {stock > 0 ? "ADD TO CART" : "OUT OF STOCK"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
