var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Songs',
            data: [
                {x: 2019.833333, y: 3703895074},
                {x: 2017, y: 3562543890},
                {x: 2018.833333, y: 2887241814},
                {x: 2019.333333, y: 2864791672},
                {x: 2018.75, y: 2808096550},
                {x: 2016.25, y: 2713922350},
                {x: 2021.5, y: 2665343922},
                {x: 2017, y: 2594040133},
                {x: 2016.333333, y: 2591224264},
                {x: 2016.666667, y: 2565529693},
                {x: 2017, y: 2559529074},
                {x: 2020.416667, y: 2557975762},
                {x: 2022.166667, y: 2513188493},
                {x: 2019.416667, y: 2484812918},
                {x: 2016.666667, y: 2420461338},
                {x: 2017.583333, y: 2355719893},
                {x: 2019.833333, y: 2322580122},
                {x: 2019.75, y: 2303033973},
                {x: 2017.416667, y: 2288695111},
                {x: 2012.333333, y: 2282771485},
                {x: 2014, y: 2280566092},
                {x: 2014.416667, y: 2236667932},
                {x: 2017.083333, y: 2204080728},
                {x: 1975.75, y: 2197010679},
                {x: 2018.666667, y: 2159346687},
                {x: 2013.666667, y: 2135158446},
                {x: 2019.583333, y: 2132335812},
                {x: 2015.833333, y: 2123309722},
                {x: 2013.583333, y: 2086124197},
                {x: 2013, y: 2011464183},
                {x: 2013.333333, y: 2009094673},
                {x: 2013, y: 1970673297},
                {x: 2011.583333, y: 1953533826},
                {x: 2015.333333, y: 1947371785},
                {x: 2017.166667, y: 1929770265},
                {x: 2017.416667, y: 1897517891},
                {x: 2021.333333, y: 1887039593},
                {x: 2021, y: 1858144199},
                {x: 2012, y: 1840364617},
                {x: 2002, y: 1829992958},
                {x: 2021.5, y: 1814349763},
                {x: 2012.75, y: 1813673666},
                {x: 2003.666667, y: 1806617704},
                {x: 2020.166667, y: 1802514301},
                {x: 2014.916667, y: 1791000570},
                {x: 2013, y: 1788326445},
                {x: 2020.75, y: 1763363713},
                {x: 2019.666667, y: 1759567999},
                {x: 1999, y: 1755214421},
                {x: 2020.666667, y: 1735441776}
              ],
            backgroundColor: 'rgba(75, 192, 192, 1)', // Green color
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            },
            y: {
                type: 'linear',
                position: 'left'
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'When were the top streamed songs of 2023 released?'
            }
        }
    }
});
