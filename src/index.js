document.addEventListener("DOMContentLoaded", () => {
  // your code here
  


const input = document.querySelector('#new-task-description');
const form = document.querySelector('form');

form.addEventListener('submit', function(event){
  const ol = document.querySelector('#tasks')
  let li = document.createElement('li');
  li.textContent = input.value;
  ol.append(li);
  input.value = null;
  event.preventDefault();
});
});
