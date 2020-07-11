$(function() {
    //create a function to add items to the shopping list
     $('#js-shopping-list-form').on('submit', function(event) {
       //prevent default form refresh
       event.preventDefault()
      //gather the form submission
      let newItem = $('#shopping-list-entry').val();
      //add new item to the shopping list
      $('.shopping-list').append('<li><span class="shopping-item">' + newItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></li>');
      //clear form after submission
      $('#shopping-list-entry').val(null);
        });
    
        //create a function to check and uncheck(using toggle) items on the shopping list
    
        //when check button is clicked...
        $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
          //... the specific button clicked will add/remove the 'shopping-item__checked' class to/from that item
          $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        });
    
        //create a function to remove items from the shopping list
        
        //when the delete button is clicked...
        $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
          //... the specific button is clicked will remove the item from the list
          let removeItem = $(event.currentTarget).parent().parent();
          removeItem.remove();
        });
      });