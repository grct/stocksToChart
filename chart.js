
// ░█████╗░██╗░░██╗░█████╗░██████╗░████████╗░░░░░██╗░██████╗
// ██╔══██╗██║░░██║██╔══██╗██╔══██╗╚══██╔══╝░░░░░██║██╔════╝
// ██║░░╚═╝███████║███████║██████╔╝░░░██║░░░░░░░░██║╚█████╗░
// ██║░░██╗██╔══██║██╔══██║██╔══██╗░░░██║░░░██╗░░██║░╚═══██╗
// ╚█████╔╝██║░░██║██║░░██║██║░░██║░░░██║░░░╚█████╔╝██████╔╝
// ░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═════╝░

const ctx = document.getElementById('myChart').getContext('2d');
const ord = 100;

// newChart genera un nuovo Grafico usando i dati nei parametri
function newChart(ticker, prices, dates){
    document.getElementById('title').style.display = 'none';
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets:
            [{
                label: [ticker],
                order: ord,
                radius: 0,
                fill: true,
                data: prices,
                color: [colors[0]],
                backgroundColor: [
                    gradients[0]
                ],
                borderColor: [ 
                    'rgba(165, 133, 255, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            interaction: {
                mode: 'nearest',
                intersect: false,
                mode: 'index',
            },
            scales: {
                y: {
                    min: 0,
                    // stacked: true,
                    ticks: {
                        callback: function(value, index, ticks) {
                            return '$' + Math.round(value);
                        }
                    },
                    beginAtZero: true,
                    grid: {
                        color: '#181824',
                        display: true
                    }
                },
                x: {
                    // Combino chartjs con luxonjs
                    type: 'time',
                    time: {
                        unit: 'day',
                    },
                    grid: {
                        color: '#181824',
                        display: false
                    },
                }
            },
            plugins: {
                zoom: {
                    limits: {
                        y: {min: 0},
                    },
                    zoom: {
                        
                        wheel: {
                            enabled: true,
                        },
                        mode: 'y',
                    
                    }
                },
            },
        }
    });
    document.getElementById('from').disabled = true;
    document.getElementById('to').disabled = true;
    return myChart;
}

function addData(chart, label, data, n) {
    const newDataset = {
        label: label,
        data: data,
        color: colors[n-1],
        fill: true,
        backgroundColor: [gradients[n-1]],
        borderColor: colors[n-1],
        radius: 0,
        borderWidth: 2,
        order: ord-n,
    }
    chart.data.datasets.push(newDataset);
    chart.update();
}

// Pura estetica del grafico

var gradient = ctx.createLinearGradient(0, 0, 0, 600);
gradient.addColorStop(0, 'rgba(165, 133, 255,0)');
gradient.addColorStop(0.5, 'rgba(165, 133, 255,0.1)');
gradient.addColorStop(1, 'rgba(165, 133, 255,0.8)');

var gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
gradient2.addColorStop(0, 'rgba(238,231,255,0)');
gradient2.addColorStop(0.5, 'rgba(238,231,255,0.1)');
gradient2.addColorStop(1, 'rgba(238,231,255,0.8)');

var gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
gradient3.addColorStop(0, 'rgba(0, 255, 255 ,0)');
gradient3.addColorStop(0.5, 'rgba(0, 255, 255 ,0.1)');
gradient3.addColorStop(1, 'rgba(0, 255, 255 ,0.8)');

var gradient4 = ctx.createLinearGradient(0, 0, 0, 600);
gradient4.addColorStop(0, 'rgba(99, 253, 110,0)');
gradient4.addColorStop(0.5, 'rgba(99, 253, 110 ,0.1)');
gradient4.addColorStop(1, 'rgba(99, 253, 110 ,0.8)');

var gradients = [gradient, gradient2, gradient3, gradient4];

var colors = ['rgba(165, 133, 255,1)', 'rgba(238,231,255, 1)', 'rgba(0, 255, 255 ,1)', 'rgba(99, 253, 110 ,1)'];