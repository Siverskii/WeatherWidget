const direction = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
];
function degConverter(deg) {
  const wind = Math.round(deg / 22.5);
  return direction[wind % 16];
}

export { degConverter };
