function newItem() {
  let li = $('<li></li>');
  let text = $('#input').val();

  li.append(text);

  if (text === '') {
    alert('You must write a to do');
  } else {
    $('#list').append(li);
  }

  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteItem);

  function deleteItem() {
    li.addClass('delete');
  }

  $('#list').sortable();
}
