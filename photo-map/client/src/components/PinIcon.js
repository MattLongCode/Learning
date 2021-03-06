import React from "react";
import PlaceTwoTone from "@material-ui/icons/PlaceTwoTone";

const placeTwoToneIcon = ({ size, color, onClick }) => (
  <PlaceTwoTone onClick={onClick} style={{ fontSize: size, color }} />
);

export default placeTwoToneIcon;
