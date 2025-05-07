// Sample chart for loan tracking
const ctx = document.getElementById('loanChart').getContext('2d');
const loanChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Paid', 'Pending', 'Overdue'],
        datasets: [{
            label: 'Loan Status',
            data: [12, 5, 2],
            backgroundColor: [
                '#4CAF50',
                '#FFC107',
                '#F44336'
            ]
        }]
    }
});
