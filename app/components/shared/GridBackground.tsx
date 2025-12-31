import React from "react";

const GridBackGround = () => {
  return (
    <div
      className="grid-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#F2F2F2",
        backgroundImage: `linear-gradient(to right, #232323 1px, transparent 1px),
                         linear-gradient(to bottom, #232323 1px, transparent 1px)`,
        backgroundSize: "47.6px 47.6px",
        opacity: 0.08,
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
};

export default GridBackGround;
