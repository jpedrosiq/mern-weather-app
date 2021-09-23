import React from "react";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";

// Returns if currently is Daytime,
// based on sunset and sunrise times.
export const isDay = (time, sunset, sunrise) => {
  // Make sure we have non-zero values for those three times
  if (time && sunset && sunrise) {
    return sunrise <= time && time <= sunset;
  }
};

export const IsDayOrNightIcon = ({ isCurrentlyDay }) => {
  const icon = isCurrentlyDay ? SunIcon : MoonIcon;

  return (
    <img
      src={icon}
      alt="day-night-icon"
      style={{ height: "40px", width: "40px" }}
    />
  );
};