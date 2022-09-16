// 1 - No construtor da Subclass, o atributo isSuper deve ser setado como false. Você vai precisar utilizar o super.

// 2 - Dentro da função que recebe um objeto da Superclass como parâmetro, cheque o valor do atributo isSuper e imprima no console “Super!” se for true e “Sub!” se for false;



class Superclass3 {
  constructor(public isSuper: boolean = true) { }

  public sayHello() {
    console.log('Olá mundo!')
  }
}

class Subclass3 extends Superclass3 {
  // constructor() {
    // super(Superclass3 = false)
  // }
}


const objSup3 = new Superclass3();
const objSub3 = new Subclass3();


function myFunc(obj: Superclass3) {
  obj.sayHello();
  if(obj.isSuper) console.log('Super!!');
  else console.log('Sub!!');

}

myFunc(objSup3);
myFunc(objSub3);