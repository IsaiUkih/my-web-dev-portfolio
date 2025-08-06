function changeParagraph(paraID) {
  // The below assignment will extract the element's "id", which we then
  // compare on a paragraph by paragraph approach.
  const paraContent = "<span style='color: red;'>content and appearance</span> have changed.";
  let paragraph = document.getElementById(paraID);

  // Determine which paragraph we're working with
  if (paraID === "para1") {
    paragraph.innerHTML = "Paragraph 1 " + paraContent;
  } else if (paraID === "para2") {
    paragraph.innerHTML = "Paragraph 2 " + paraContent;
  } else if (paraID === "para3") {
    paragraph.innerHTML = "Paragraph 3 " + paraContent;
  } else {
    console.warn("No paragraph found with ID: " + paraID);
    return;
  }

  console.log("The changeParagraph() function was called for paragraph with ID:  " + paraID);
}
