// Return which element of 'array' is closest to the given latitude/longitude.
// Models the Earth as a perfect sphere.
var findClosestLocation = function (lat, lng, array) {
  var closest;
  var closest_dist = Number.MAX_VALUE;
  for (var i = 0; i < array.length; i += 1) {
    // Convert both points to radians.
    var lat_rad = radians(lat);
    var lng_rad = radians(lng);
    var lat2_rad = radians(array[i].latitude);
    var lng2_rad = radians(array[i].longitude);
    // Use the "Spherical Law of Cosines" formula.
    var dist = Math.acos(Math.sin(lat_rad) * Math.sin(lat2_rad) +
      Math.cos(lat_rad) * Math.cos(lat2_rad) *
      Math.cos(lng2_rad - lng_rad));
    if (dist < closest_dist) {
      closest = array[i];
      closest_dist = dist;
    }
  }
  return closest;
};