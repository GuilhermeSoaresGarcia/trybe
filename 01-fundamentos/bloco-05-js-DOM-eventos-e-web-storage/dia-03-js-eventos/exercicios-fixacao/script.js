function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// Exercício 1: 
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  const individualDays = document.getElementById('days');

  for (i = 0; i < dezDaysList.length; i += 1) {
    const monthDez = dezDaysList[i];
    const createLi = document.createElement('li');
    createLi.className = 'day';
    createLi.innerHTML = monthDez;

    individualDays.appendChild(createLi);
  };
};

createDays();

// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

// Como adicionar uma classe? Fonte: https://www.w3schools.com/howto/howto_js_add_class.asp

function holidayClass() {
  const individualDays = document.getElementById('days');
  let holidays = [24, 25, 31];
  for (i = 0; i < holidays.length; i += 1) {
    individualDays.children[dezDaysList.indexOf(holidays[i])].classList.add('holiday');
  };
};

holidayClass();

// // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function fridayClass() {
  const individualDays = document.getElementById('days');
  let fridays = [4, 11, 18, 25];
  for (i = 0; i < fridays.length; i += 1) {
    individualDays.children[dezDaysList.indexOf(fridays[i])].classList.add('friday');
  };
};

fridayClass();


// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//     Adicione a este botão a ID "btn-holiday" .
//     Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButtonFeriados(feriados) {
  let divButtons = document.querySelector('.buttons-container');
  let button = document.createElement('button'); // FONTE: https://sebhastian.com/javascript-create-button/
  feriados = 'Feriados';
  button.innerHTML = feriados;
  button.id = 'btn-holiday';
divButtons.appendChild(button);
};

createButtonFeriados();



