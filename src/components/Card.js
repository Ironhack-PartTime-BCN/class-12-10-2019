import React from "react";

const Card = ({ title = "Title", children }) => {
  return (
    <div className="Card">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
