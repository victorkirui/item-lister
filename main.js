const form =document.getElementById('my-form');
const ul = document.getElementById('itemlist');
const filter = document.querySelector('.filter');

//delete event
ul.addEventListener('click',deleteItem);
//add item event
form.addEventListener('submit',addItem);
//filter event
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('newItem');

  const li = document.createElement("li");
  li.className = 'liststyle';
  if(newItem.value != " "){
    var text = document.createTextNode(newItem.value);
  }
  li.appendChild(text);

  //create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'close';
  deleteBtn.appendChild(document.createTextNode('x'));
  li.appendChild(deleteBtn);

  ul.appendChild(li);
  //clear input
  newItem.value = " ";
}

//delete item
function deleteItem(e){
  if(e.target.classList.contains('close')){
    if(confirm('Are you sure?')){
      var item = e.target.parentElement;
      item.style.display = 'none';
    }else{
      item.style.display = 'block';
    }
  }
}

//filter search items
function filterItems(e){
  var searchedItem = e.target.value.toLowerCase();
  //get list items
  var items = ul.getElementsByTagName('li');
  const itemsArr = Array.from(items);
  itemsArr.forEach(item => {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(searchedItem) != -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  })
}