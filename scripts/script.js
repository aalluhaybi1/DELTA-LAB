$(function() {
  console.log("Script is running");

  $("#btnGetFacts").click(function() {
      console.log("Button clicked");

      let userName = $("#userName").val();

      let thisString = "Hello, " + (userName || "Undefined") + "!";
      thisString += "<br><h3>'this is just messy'</h3>";
      thisString += ` here is a string and guess what else I want to do? I want to '<strong>single quotes</strong>' and "<em>double quotes</em>"`;

      $('#output').html(thisString);

      let modifiedString = manipulateString(thisString);
      $('#output').append('<br><h3>Modified String:</h3>' + modifiedString);
  });
});

function manipulateString(inputString) {
  return inputString.toUpperCase();
}
