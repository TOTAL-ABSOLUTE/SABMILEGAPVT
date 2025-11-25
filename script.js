function toggleSem(semId) {
  const semDiv = document.getElementById(semId);

  if (semDiv.style.display === "block") {
    // Hide if already open
    semDiv.style.display = "none";
  } else {
    // Hide all other semester divs first
    document.querySelectorAll(".sem-details").forEach(div => div.style.display = "none");
    // Show the selected one
    semDiv.style.display = "block";
  }
}
