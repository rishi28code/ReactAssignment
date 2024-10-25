import React from "react";

const PackageCard = ({ package: { title, duration, price, pickup, image }, onSave, saved, onClick }) => {
  // Inline styles
  const cardStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%", // Makes sure the card takes full width
    cursor: "pointer", // Changes cursor to pointer for clickable card
  };

  const imgStyle = {
    width: "100%", // Ensures the image covers the card
    height: "auto", // Maintains aspect ratio
  };

  const heartButtonStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "transparent",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 1,
  };

  const cardBodyStyle = {
    padding: "16px",
  };

  const titleStyle = {
    fontWeight: "bold",
  };

  const textStyle = {
    marginBottom: "8px",
  };

  const buttonStyle = {
    marginTop: "10px",
  };

  return (
    <div style={cardStyle} className="card" onClick={onClick}>
      <img src={image} style={imgStyle} className="card-img-top" alt={title} />
      <button 
        style={heartButtonStyle} 
        onClick={(e) => { 
          e.stopPropagation(); // Prevents click event from bubbling up to the card
          onSave(); 
        }}
        aria-label={saved ? "Unsave this package" : "Save this package"}
      >
        {saved ? "❤️" : "🤍"} {/* Heart emoji changes based on saved state */}
      </button>
      <div style={cardBodyStyle} className="card-body">
        <h5 style={titleStyle} className="card-title">{title}</h5>
        <p style={textStyle} className="card-text">{duration}</p>
        <p style={textStyle} className="card-text">Pickup: {pickup}</p>
        <p style={textStyle} className="card-text">
          Starts at <strong>{price}</strong> <br />
          <small>Excluding all taxes</small>
        </p>
        <a href="#" className="btn btn-primary" style={buttonStyle}>View Details</a>
      </div>
    </div>
  );
};

export default PackageCard;
