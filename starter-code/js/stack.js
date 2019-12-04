const stack = new StackDataStructure();
console.log(stack);

//getting the parent
const ulStack = document.getElementById("stack"); //criando os LI dentro da UL com id stack

//creating li elements based on MAX_SIZE - inverted
for (let i = stack.MAX_SIZE; i > 0; i -= 1) {
  //for ao contrario para criar 10 li
  console.log(i);
  const newLi = document.createElement("li"); //criando o element LI
  newLi.classList.add("list-group-item", "list-group-item-dark"); //criando o LI cm a classe
  newLi.dataset.stack = i; //dataset ??
  ulStack.appendChild(newLi); //colocando os LI no parent UL com o appendChild
}

//getting the button
const addStackButton = document.getElementById("add-stack");
//getting the input
const addInput = document.getElementById("add-element-stack");

//onclick recebe uma funçao pq quando X evento for disparado ele vai executar
addStackButton.onclick = () => {
  //getting the value from input
  let {
    value //com o value crio variavel com o mesmo nome da propriedade que pego do meu input (ex: name, value, ...)
  } = addInput; //a partir de um momento que eu tenho um objeto eu posso descontruir ele pra obter o valor sem ter que ficar usando value all the times
  
  if (stack.canPush()) {
    //defining the nest number of the li element
  const nextLiNum = stack.size + 1;
  //gettin the correct li element
  const liStack = document.querySelector(`li[data-stack="${nextLiNum}"]`); 
  //adding to the dom the value in the li element
  liStack.innerHTML = value;
  //pushing to stack so we can update the size properly
  stack.push(value);
  //clearing out the form value
  addInput.value = '';
} else { 
  let message = 'stack overflow';
  console.log('not here');
  
  if (!value) {
    message = 'please, choose a value!'
  };

  //getting last li element so we can use on insert before method 
  const lastLi = document.querySelector(`li[data-stack="${stack.MAX_SIZE}"]`); 
  // creating new li element for stack overflow
  const newLi = document.createElement("li"); 
  newLi.classList.add("list-group-item", "list-group-item-danger"); 
  newLi.innerHTML = 'stack overflow';
  // inserting the stack overflow li element in the dom 
  ulStack.insertBefore(newLi, lastLi);
  // removing new li element after few milliseconds 
  setTimeout(() => ulStack.removeChild(newLi), 500);
  }
}