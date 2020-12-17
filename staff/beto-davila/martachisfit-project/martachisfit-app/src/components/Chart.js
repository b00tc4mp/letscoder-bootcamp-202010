import { Line, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = true

export default function Chart() {
    return <div>
        <Line
            data={{
                labels: ['01/01/20', '01/02/20', '01/03/20', '01/04/20', '01/05/20', '01/06/20', '01/07/20', '01/08/20', '01/09/20'],
                datasets: [
                    {
                        label: 'peso (Kg)',
                        data: [65, 66, 65, 65, 63.5, 62, 61, 60.5, 61],
                        backgroundColor: 'rgba(192, 192, 192, 0.4)',
                        borderColor: 'rgba(176, 224, 230, 1)',
                    }
                ],

            }}
            height={150}
            width={250}
            options={{
                defaultFontSize: '7',
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