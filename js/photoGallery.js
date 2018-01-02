function filterDataTitleByTagAttribute(id, tag, attr) {
  var input, filter, collection, i, element;
  input = document.getElementById(id);
  filter = input.value.toUpperCase();
  collection = document.getElementsByTagName(tag);
  for (i = 0; i < collection.length; i++) {
    element = collection[i];
    if (element.getAttribute(attr) != null &&
      element.getAttribute(attr).toUpperCase().indexOf(filter) > -1) {
      collection[i].style.display = "";
    } else {
      collection[i].style.display = "none";
    }
  }
}

// Run javascript after DOM is initialized
$(document).ready(function () {
  $('#search-photo').hideseek();

  $('#search-photo').on("_after", function () {
    filterDataTitleByTagAttribute("search-photo", "a", "data-title");
  });
});