import { Line, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = true

export default function Chart({ weightHistory }) {

    let dates = []
    let weights = []

    weightHistory.forEach(({ modifiedAt, weight }) => {
        dates.push(modifiedAt)
        weights.push(weight)
    })

    return <div>
        <Line
            data={{
                labels: dates,
                datasets: [
                    {
                        label: 'peso (Kg)',
                        data: weights,
                        backgroundColor: 'rgba(192, 192, 192, 0.4)',
                        borderColor: 'rgba(176, 224, 230, 1)',
                    }
                ],

            }}
            height={150}
            width={250}
            options={{
                defaultFontSize: '8',
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false,
                            }
                        }
                    ]
                },
                legend: {
                    labels: {
                        fontSize: 9
                    }
                }
            }}
        />
    </div>
}