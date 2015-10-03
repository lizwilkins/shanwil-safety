var location_string = "Harborview Medical Center";
var base_url = "https://maps.googleapis.com/maps/api/staticmap";
var api_key = "AIzaSyBWgoQ5uL9DVpsobFbK8y-eVBFewNzZnQE";
var query_params = {
  key: api_key,
  center: location_string.trim().gsub(/\s+/g, '+'),
  zoom: "13",
  size: "600x300",
  maptype: "roadmap",
};

// var markers = [
//   "color:blue|label:S|40.702147,-74.015794",
//   "color:green|label:G|40.711614,-74.012318",
//   "color:red|label:C|40.718217,-73.998284",
// ];

var query_string = $.param(query_params)
  .replace(/%2B/g, '+')
  .replace(/%2C/g, ',')
  .replace(/%3A/g, ':')
  .replace(/%5B%5D/g, '');

var url = [base_url, query_string].join('?');
