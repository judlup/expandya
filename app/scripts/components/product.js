import React from "react";

const Product = ({ _id, picture, name, tags }) => (
  <header key={_id} align="start" className="product">
    <div className="image-container">
      <img src={picture} />
    </div>
    <div className="name-container">
      <span className="name">{name}</span>
      <a href="#">Read More</a>
      <div className="tags-container">
        {tags.map((tag, i) => (
          <span className="tag" key={i}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </header>
);

export default Product;
