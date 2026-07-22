"use client";

const localTime = new Date().toLocaleTimeString();

function LocalTime() {
  return <div>{localTime}</div>;
}

export default LocalTime;
