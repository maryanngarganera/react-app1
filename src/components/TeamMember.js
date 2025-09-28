import React from "react";

const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="team-member text-center">
      <div
        className="member-avatar mx-auto mb-3"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <i
            className="fas fa-user"
            style={{ fontSize: "48px", color: "#888" }}
          ></i>
        )}
      </div>
      <div className="member-name fw-bold">{name}</div>
      <div className="member-role ">{role}</div>
      <div className="member-description">{description}</div>
    </div>
  );
};

export default TeamMember;
