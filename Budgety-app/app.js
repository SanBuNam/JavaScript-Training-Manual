// BUDGET CONTROLLER
var budgetController = (function(){

  // some code

})();


// UI CONTROLLER
var UIController = (function(){

  // Some code

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

  var ctrlAddItem = function(){
    // 1. Get the filed input data

    // 2. Add the item to the budget CONTROLLER

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
    console.log('It works')
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){
    if(event.keycode === 13 || event.which === 13){
      ctrlAddItem();
    }
  })

})(budgetController, UIController);