// 1 - Comente a criação da instância da Superclass.

// 2 - Comente a chamada da função que recebe o objeto do tipo Superclass como argumento.

// 3 - Faça a função receber não mais um objeto da Superclass, mas sim da Subclass.

// 4 - Crie, na Subclass, um método público chamado sayHello2.

// 5 - Chame o método sayHello dentro do método sayHello2.

// 6 - Mude a visibilidade do método sayHello de public para protected.

// 7 - Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método sayHello2.

// 8 - Mude a visibilidade do método sayHello de protected para private. O que acontece?

class Superclass2 {
  constructor(private isSuper: boolean = true) { }

  private sayHello() {
    console.log('Olá mundo!')
  }
}

class Subclass2 extends Superclass2 {
  public sayHello2() {
    this.sayHello
  }
}

// const objSup2 = new Superclass2();
const objSub2 = new Subclass2();


function myFunc2(obj: Subclass2) {
  obj.sayHello2();
}

// myFunc2(objSup2);
myFunc2(objSub2);