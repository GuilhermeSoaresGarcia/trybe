const cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = '#00b068';

const emergencyTasks = document.querySelectorAll('.emergency-tasks, .emergency-tasks div');
for (let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = '#ffa084';
};

const emergencyTasksH3 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasksH3.length; i += 1) {
  emergencyTasksH3[i].style.backgroundColor = '#a500f4';
};

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks, .no-emergency-tasks div');
for (let i = 0; i < noEmergencyTasks.length; i += 1) {
  noEmergencyTasks[i].style.backgroundColor = '#f9dc5e';  
};

const noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasksH3.length; i += 1) {
    noEmergencyTasksH3[i].style.backgroundColor = 'black';
};

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#013533';