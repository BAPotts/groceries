// Business Logic
function transformGroceryList(arrayParameter) {
  let newArray = [];
  arrayParameter.forEach(function(groceryItem) {
    groceryItem = groceryItem.charAt(0).toUpperCase() + groceryItem.slice(1);
    newArray.push(groceryItem);
  })
  return newArray.sort();
}

//UI logic
$(document).ready(function() {
  $("button#addInput").click(function() {
    $("div#formInputs").append("<input type='text'>");
  });

  $("form#groceryList").submit(function() {
    $("#result").empty();
    event.preventDefault();
    let groceryList = [];
    $("div#formInputs > input").each(function() {
      if($(this).val())
      {
        groceryList.push($(this).val());
      }
    });

    let transformedList = transformGroceryList(groceryList);

    transformedList.forEach(function(item){
      $("#result").append("<li>" + item + "</li>");
    });
  });
});
