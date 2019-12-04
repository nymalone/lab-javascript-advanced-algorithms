//class -> sintaxe sugar 
class StackDataStructure {
  constructor() { 
    //STACK PROPERTIES
    this.stackControl = []; //Should has an array to add the elements to the stack
    this.MAX_SIZE = 10; //Should has a max number of items to avoid the stack overflow
    this.size = 0; //Initial length of my array - to avoid to use .length
  }

  //STACK METHODS
  //Should has a method to check if the current stack is empty
  isEmpty() {
    return this.size === 0;
  }

  //Should has a method to check if we can push elements into the stack
  canPush() {
    return this.size < this.MAX_SIZE;
  }

  //Should has a method to push elements into the stack
  push(item) { //item é o parâmetro - o que vou inserir na minha stack 
    //preciso do this na frente para acessar o método da classe(this.canPush por ex) o parenteses é pq eu to invocando a funçao 
    //Should add the indicated element to the stack
    if (!this.canPush()) { return 'Stack Overflow'}; //fail fast

    this.stackControl[this.size] = item; //this.size é o tamanho da instancia naquele momento 
    this.size += 1;
    
    return this.stackControl
  }

  //Should has a method to take elements from the stack
  pop() {
    if (this.isEmpty()) {
      return 'Stack Underflow';
    }
    const lastItemIdx = this.size - 1; //descubro o idx do ultimo item 
    const lastItem = this.stackControl.splice(lastItemIdx,1)[0]; //vejo qual é o ultimo item do meu array e retiro...[0] é pra eu ver qual é o item removido -splice retorna array, o idx 0 vai ser o que eu removi-
    this.size -= 1;
    return lastItem;
    //isso tudo pra não sar o .pop -.-"
  }
}
