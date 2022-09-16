// 1 - No construtor da Subclass, o atributo isSuper deve ser setado como false. Você vai precisar utilizar o super.

// 2 - Dentro da função que recebe um objeto da Superclass como parâmetro, cheque o valor do atributo isSuper e imprima no console “Super!” se for true e “Sub!” se for false;

// class Superclass3 {
//   constructor(protected _isSuper: boolean = true) { }

//   public sayHello() {
//     console.log('Olá mundo!')
//   }

//   public get isSuper() {
//     return this._isSuper;
//   }
// }

// class Subclass3 extends Superclass3 {
//   constructor(_isSuper: boolean) {
//     super(_isSuper);
//   }

//   public get isSuper() {
//     return this._isSuper;
//   }
// }

// const objSup3 = new Superclass3(true);
// const objSub3 = new Subclass3(false);

// function myFunc(obj: Superclass3) {
//   obj.sayHello();
//   if(obj.isSuper) console.log('Super!!');
//   else console.log('Sub!!');
// }

// myFunc(objSup3);
// myFunc(objSub3);

class Superclass3 {
  constructor(readonly _isSuper: boolean = true) { }

  public sayHello() {
    console.log('Olá mundo!')
  }
}

class Subclass3 extends Superclass3 {
  constructor(_isSuper: boolean) {
    super(_isSuper);
  }
}

const objSup3 = new Superclass3();
const objSub3 = new Subclass3(false);

function myFunc(obj: Superclass3) {
  obj.sayHello();
  if(obj._isSuper) console.log('Super!!');
  else console.log('Sub!!');
}

myFunc(objSup3);
myFunc(objSub3);