const { point: turfPoint } = require('@turf/helpers')

export function point(lat: number, long: number) {
  const pt = turfPoint([lat, long])
  return pt
}

/** @plv8ify_volatility STABLE */
export function stablePoint(lat: number, long: number) {
  const pt = turfPoint([lat, long])
  return pt
}

export function stablePointAsString(lat: number, long: number) {
  const pt = JSON.stringify(turfPoint([lat, long]))
  return pt
}
