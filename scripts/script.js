$(function() {
  console.log("Script is running");

  $("#btnGetFacts").click(function() {
    console.log("Button clicked");

    let userName = $("#userName").val();

    let thisString = "Hello, " + (userName || "Undefined") + "!";
    thisString += "<br><h3>'This is my fun Game'</h3>";

    // Counting the number of letters in userName
    let letterCount = (userName || "").replace(/[^a-zA-Z]/g, "").length;
    thisString += ` Your have (${letterCount}) letter `;

    $('#output').html(thisString);

    let modifiedString = manipulateString(thisString);
    $('#output').append('<br><h3>Modified String:</h3>' + modifiedString);
  });
});

function manipulateString(inputString) {
  return inputString.toUpperCase();
}
