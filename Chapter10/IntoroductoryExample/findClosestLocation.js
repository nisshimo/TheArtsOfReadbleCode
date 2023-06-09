var spherical_distance = function (lat1, lng1, lat2, lng2) {
  var lat1_rad = radians(lat1);
  var lng1_rad = radians(lng1);
  var lat2_rad = radians(lat2);
  var lng2_rad = radians(lng2);
  // Use the "Spherical Law of Cosines" formula.
  return Math.acos(Math.sin(lat1_rad) * Math.sin(lat2_rad) +
    Math.cos(lat1_rad) * Math.cos(lat2_rad) *
    Math.cos(lng2_rad - lng1_rad))
}

var findClosestLocation = function (lat, lng, array) {
  var closest;
  var closest_dist = Number.MAX_VALUE;
  for (var i = 0; i < array.length; i += 1) {
    var dist = spherical_distance(lat, lng, array[i].latitude, array[i].longitude);
    if (dist < closest_dist) {
      closest = array[i];
      closest_dist = dist;
    }
  }
  return closest;
};