const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   const deliveryPerson = Object.values(order)[3].delivery.deliveryPerson;
//   const clientName = Object.values(order)[0];
//   const phoneNumber = Object.values(order)[1];
//   const completeAdress = Object.values(order)[2];

// console.log(`Olá ${deliveryPerson}, entrega para: ${clientName}, Telefone: ${phoneNumber}, ${completeAdress.street}, Nº: ${completeAdress.number}, AP: ${completeAdress.apartment}`);

// }

// customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const clientName = Object.values(order)[0];
  const orderValue = Object.values(order)[4];
  const orderPizzas = Object.keys(order)[3];
  const orderDrinks = Object.values(order)[3];


  console.log(`Olá ${clientName}, o total do seu pedido de ${orderPizzas} e ${orderDrinks} é R$ ${orderValue}`)

}

orderModifier(order);

const pessoa = Object.keys(order)

console.log(pessoa[3][1])