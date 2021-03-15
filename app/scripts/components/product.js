import React from "react";

const Product = ({ _id, picture, name, tags }) => (
  <header key={_id} align="start" className="product">
    <div className="image-container">
      <img src={picture} />
    </div>
    <div className="name-container">
      <span className="name">{name}</span>
      <div className="tags-container">
        <span className="tag">{tags.toString()}</span>
      </div>
    </div>
  </header>
);

export default Product;
