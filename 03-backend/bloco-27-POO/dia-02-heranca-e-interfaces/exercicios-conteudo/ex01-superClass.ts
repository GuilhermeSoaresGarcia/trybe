// 1 - Crie uma classe chamada Superclass.

// 2- A Superclass deve possuir um atributo público isSuper

// 3 - isSuper deve ser setado como true na inicialização.

// 4 - A Superclass deve possuir um método público chamado sayHello, que deve imprimir “Olá mundo!”.

// 5 - Crie uma classe chamada Subclass que herda da Superclass.

// 6 - Crie uma função myFunc fora do escopo da Subclass que recebe um objeto da Superclass.
//    6.1 - Dentro dessa função, chame o método sayHello do objeto passado como parâmetro.

// 7 - Crie um objeto da Superclass e outro da Subclass.

// 8 - Chame a função myFunc 2 vezes, passando os objetos criados.

class Superclass {
  constructor(private isSuper: boolean = true) { } // Qual o sentido desse "isSuper"?

  public sayHello() {
    console.log('Olá mundo!')
  }
}

class Subclass extends Superclass {
}

const objSup = new Superclass();
const objSub = new Subclass();


function myFunc(obj: Superclass) {
  obj.sayHello();
}

myFunc(objSup);
myFunc(objSub);