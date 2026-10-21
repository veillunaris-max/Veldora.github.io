// Mock Chart Data
const ctx = document.getElementById('resourceChart').getContext('2d');
const resourceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['10m ago', '8m ago', '6m ago', '4m ago', '2m ago', 'Now'],
        datasets: [{
            label: 'RAM Usage (GB)',
            data: [3.1, 3.5, 4.0, 4.1, 4.2, 4.2],
            borderColor: '#38bdf8',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 15,
                grid: { color: '#334155' },
                ticks: { color: '#94a3b8' }
            },
            x: {
                grid: { color: '#334155' },
                ticks: { color: '#94a3b8' }
            }
        },
        plugins: {
            legend: { labels: { color: '#f8fafc' } }
        }
    }
});

function triggerAction(action) {
    alert(action + " instruction sent to your 15GB server node.");
}

// Simple live randomizer mock
setInterval(() => {
    let currentRam = (4.0 + Math.random() * 0.5).toFixed(1);
    document.getElementById('ram-used').innerText = currentRam;
    
    let currentCpu = Math.floor(Math.random() * 30) + 5;
    document.getElementById('cpu-used').innerText = currentCpu;
}, 3000);
