// importação da biblioteca
const Redux = require('redux');

// criação da store
// const store = Redux.createStore();

/* definição de um estado inicial padrão (sem isso, 
o estado inicial do redux é 'undefined')*/
const INITIAL_STATE = {
  login: false,
  email: "",
  // omelete: false,
  instructions: "",
};

/* a função reducer com o estado como parâmetro 
(e atribuindo o estado inicial que definimos) */
// function reducer(state = INITIAL_STATE) {
//   return state;
// };



const fazerLogin = (email) => (
  {
    type: 'LOGIN',
    email,
  }
);

const fazerOmelete = (instructions) => (
  {
    type: 'OMELETE',
    instructions,
  }
);


const reducer = (state = INITIAL_STATE, action) => {
  const {type, email, instructions} = action;
  if (type === 'LOGIN') {
    return { ...state, login: !state.login, email, }
  }
  if (action.type === 'OMELETE') {
    return { ...state, instructions, }
  } else {
    return state;
  }
};

// a criação do store com a função reducer sendo chamada (não entendi isso direito ainda e essa porcaria fica indo pra cima e pra baixo toda hora...)
const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('teste@email.com'));
store.dispatch(fazerOmelete('Não se faz omelete sem quebrar alguns ovos, bro...'));

console.log(store.getState());
