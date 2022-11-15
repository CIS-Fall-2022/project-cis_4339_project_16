<template>
    <div>
        <canvas id="graph"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import axios from "axios";

export default {
    name: 'DashGraph',
    data() {
        return {
            graphData: {},
        }
    },
    mounted() {
        let graphDataSets = []
        let graphlabels = []

        axios.get(
            import.meta.env.VITE_ROOT_API + `/dashboardData`
        ).then((resp) => {
            let data = resp.data
            for (const el of data) {

                // random color
                const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                const r = randomBetween(0, 255);
                const g = randomBetween(0, 255);
                const b = randomBetween(0, 255);
                const rgb = `rgb(${r},${g},${b})`;

                graphlabels.push(el.name)
                graphDataSets.push({
                    label: `Number of ${el.name}`,
                    data: [el.numClients],
                    backgroundColor: rgb,
                    borderColor: "#36495d",
                    borderWidth: 3
                })
            }
        }).then(() => {
            const ctx = document.getElementById('graph');
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: graphlabels,
                    datasets: graphDataSets,
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    padding: 25
                                }
                            }
                        ],

                    }
                }
            });
        })
    }
}

</script>