$(function() {
    console.log("doc is ready");
  
    $("#btnGetFacts").click(function() {
      let someOtherVariable;
  
      let thisString = "something else and another thing";
  
      // Check if someOtherVariable is defined
      if (someOtherVariable !== undefined) {
        thisString += someOtherVariable + " more string";
      } else {
        thisString += " undefined more string";
      }
  
      thisString += "<br><h3>'this is just messy'</h3>";
  
      // Check if someOtherVariable is defined
      if (someOtherVariable !== undefined) {
        thisString += someOtherVariable + " more string";
      } else {
        thisString += " undefined more string";
      }
  
      thisString += '<br><h3>"this is just messy"</h3>';
  
      // Include 'single quotes' and "double quotes"
      thisString += ` here is a string and guess what else I want to do? I want to '<strong>single quotes</strong>' and "<em>double quotes</em>"`;
  
      // Append the generated string to the 'output' div
      $('#output').html(thisString);
  
      // Call the new function and display the result
      let modifiedString = manipulateString(thisString);
      $('#output').append('<br><h3>Modified String:</h3>' + modifiedString);
    });
  });
  
  function getCoolNameFacts(name) {
    console.log('in my function');
    $('#btnGetFacts').append("<h3>appending</h3");
    return "super cool";
  }
  
  function manipulateString(inputString) {
    // Add your custom string manipulation logic here
    return inputString.toUpperCase();
  }
  