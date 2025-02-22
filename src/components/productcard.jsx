// write product card here
//eslint-disable-next-line
import React from "react";
import Button from "../components/button";

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  textAlign: "left",
  backgroundColor: "#fff",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  width: "250px",
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "5px",
  marginBottom: "12px",
};

const titleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "8px",
};

const priceStyle = {
  fontSize: "16px",
  color: "#28a745",
  marginBottom: "12px",
};

const Productcard = () => {
  // Static product details
  const productName = "Wireless Headphones";
  const productPrice = "$99.99";
  const productImage ="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_PDP_Image_Position_1__en-IN_919e8584-f2b2-422d-a165-7b2e69157f3f.jpg?v=1727249642";

  return (
    <div style={cardStyle}>
      <img src={productImage} alt={productName} style={imageStyle} />
      <h3 style={titleStyle}>{productName}</h3>
      <p style={priceStyle}>{productPrice}</p>
      <Button text="View Product" onClick={() => alert("Product Clicked")} />
    </div>
  );
};

export default Productcard;
