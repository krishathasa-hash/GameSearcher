//search form
const searchForm = document.querySelector("#searchForm");

if (searchForm) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}