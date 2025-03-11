const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  clearButton.style.display = "none";
});

searchInput.addEventListener("input", () => {
  clearButton.style.display = searchInput.value ? "block" : "none";
});
