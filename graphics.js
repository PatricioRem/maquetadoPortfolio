const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('language');


  const myChart = new Chart(ctx, {
    type: 'doughnut',
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Intención de voto 2022'
            }
        }
    },
    data: {
        labels: ['Peronistas', 'Radicales', 'Otros'],
        datasets: [{
            label: 'My First Dataset',
            data: [50, 35, 15],
            backgroundColor: [
              '#cc00ff',
              '#00b386',
              '#ff6666'
            ],
            hoverOffset: 4
        },
        {
            label: 'My Second Dataset',
            data: [79, 11, 10],
            backgroundColor: [
              '#cc00ff',
              '#00b386',
              '#ff6666'
            ],
            hoverOffset: 4
        }]
    },
});

var vida = 25;
var energia = 50;
  const myChart2 = new Chart(ctx2, {
    
    type: 'doughnut',
    data: {
        labels: ['Vida','Energía','Vacuum'],
        datasets: [{
            label: 'My First Dataset',
            data: [vida, 100 - vida],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(0, 128, 255)',
              'rgb(255, 255, 255)',
            ],
            hoverOffset: 4
        },
        {
            label: 'My Second Dataset',
            data: [energia, 100 - energia],
            backgroundColor: [
              'rgb(0, 128, 255)',
              'rgb(255, 255, 255)',
            ],
            hoverOffset: 4
        }]
    },
    
});



