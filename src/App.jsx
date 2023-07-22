import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const polarAreaPieChart = () => {
    
    const options = {
        responsive: true,
        animation: {
            duration: 2000 // set the duration of the animation in milliseconds
        },
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
    };

    const data = {
        labels: ['Property', 'Water', 'Trade', "Advertisement"],
        datasets: [
            {
                label: 'Module Wise Payments',
                data: [12, 19, 13, 5],
                backgroundColor: [
                    '#22C55E',
                    '#6366F1',
                    '#EC4899',
                    '#FFA500'
                ],
            },
        ],
    };
    return (
        <>
            <div className="pie-chart-container">
                <h2 className="text-2xl font-bold mb-2">Pie Chart</h2>
                <div className="relative">

                    <div className='font-semibold text-center py-4'>Module Wise Transactions</div>
                    <Doughnut data={data} options={options} className='h-56'/>
                </div>
            </div>
        </>
    )
}

export default polarAreaPieChart
