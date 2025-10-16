import React from "react";

const UserCard = ({ name, age, bio }) => {
  const cardStyle = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "20px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    margin: "10px auto"
  };

  const nameStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#333"
  };

  const ageStyle = {
    color: "#555",
    fontSize: "1em"
  };

  const bioStyle = {
    marginTop: "10px",
    fontSize: "0.9em",
    color: "#666"
  };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={ageStyle}>Age: {age}</div>
      <div style={bioStyle}>{bio}</div>
    </div>
  );
};

export default UserCard;
"# -2400032192-skillInsemExam-01" 
