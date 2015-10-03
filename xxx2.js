var job_site = "Shannon & Wilson Inc";
var hospital = "Harborview Medical Center";
var base_url = "https://www.google.com/maps/embed/v1/directions";
var api_key = "AIzaSyBWgoQ5uL9DVpsobFbK8y-eVBFewNzZnQE";
var query_params = {
  origin: job_site.trim().gsub(/\s+/g, '+'),
  destination: hospital.trim().gsub(/\s+/g, '+'),
  key: api_key,
};
var map_url = [base_url, query_string].join('?');
var map_iframe = document.createElement('iframe');
var map_attrs = {
  src: map_url,
  width: "600",
  height: "450",
  frameborder: "0",
  style: "border:0",
  allowfullscreen: "true",
};
map_attrs.keys().forEach(function (attr_name) {
  var attr_value = map_attrs[attr_name];
  map_iframe.attr(attr_name, attr_value);
});
$('body').append(map_attrs);
