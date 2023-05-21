//Upack the data
const unpack3 = (data, key) => data.map(row => row[key])

//Extract data from CIMSL(The Change in Mean Sea Levels).csv
Plotly.d3.csv("csv/CIMSL.csv", sea_level_data => {
    const atl = unpack3(sea_level_data, 'Atlantic Ocean')
    const so = unpack3(sea_level_data, 'Southern Ocean')
    const all = unpack3(sea_level_data, 'World')
    const year = unpack3(sea_level_data, 'Year')

    // create traces + traces/label layout
    var trace1 = {
        x: year,
        y: atl,
        name: 'Atlantic Ocean',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>Atlantic Ocean<br>' + '<b>Year: </b>%{x}<br>' + '<b>Sea Level: </b>%{y:.2f%}mm<extra></extra>',
    }

    var trace2 = {
        x: year,
        y: so,
        name: 'Southern Ocean',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>Southern Ocean<br>' + '<b>Year: </b>%{x}<br>' + '<b>Sea Level: </b>%{y:.2f%}mm<extra></extra>',
    }

    var trace3 = {
        x: year,
        y: all,
        name: 'World',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>World<br>' + '<b>Year: </b>%{x}<br>' + '<b>Sea Level: </b>%{y:.2f%}mm<extra></extra>',
    }

    // Adding buttons
    var myUpdatemenus = [{

        buttons: [

            //button 1
            {
                args: ['mode', 'lines+markers'],
                label: 'Lines & markers',
                method: 'restyle'
            },

            //button 2
            {
                args: ['mode', 'lines'],
                label: 'Lines',
                method: 'restyle'
            },

            //button 3
            {
                args: ['mode', 'markers'],
                label: 'Markers',
                method: 'restyle'
            },

        ],

        //styling the layout of the button
        direction: 'down',
        showactive: true,
        type: 'dropdown',
        x: 0.25,
        xanchor: 'middle',
        y: 1.1,
        yanchor: 'top',
        bgcolor: '#051622',
        bordercolor: '#FFCF9C',
        font: {
            color: '#FFCF9C'
        }

    },

    {
        //Second button
        buttons: [

            //button 1
            {
                args: ['visible', [true, true, true]],
                label: 'All',
                method: 'restyle'
            },

            //button 2
            {
                args: ['visible', [true, false, false]],
                label: 'Atlantic Ocean',
                method: 'restyle'
            },

            //button 3
            {
                args: ['visible', [false, true, false]],
                label: 'Southern Ocean',
                method: 'restyle'
            },

            //button 4
            {
                args: ['visible', [false, false, true]],
                label: 'World',
                method: 'restyle'
            },

        ],
        //styling/the layout of the button
        direction: 'down',
        showactive: true,
        type: 'dropdown',
        x: 0.12,
        xanchor: 'middle',
        y: 1.1,
        yanchor: 'top',
        bgcolor: '#051622',
        bordercolor: '#FFCF9C',
        font: {
            color: '#FFCF9C'
        }
    }]

    // desgin layout
    var layout = {

        //Set the background color of the graph
        paper_bgcolor: '#051622',
        plot_bgcolor: '#051622',

        //Styling the text of the annotations
        annotations: [{
            xref: 'paper',
            yref: 'paper',
            x: 0.7,
            y: 1.05,
            xanchor: 'left',
            yanchor: 'bottom',
            text: '<b>2000-2022 Sea level</b>',
            font: {
                size: 20,
                color: '#FFCF9C'
            },
            showarrow: false
        }],

        //Styling the x-axis text and add the tick and show the x-axis line
        xaxis: {
            autotick: true,
            ticks: 'outside',
            tickwidth: 5,
            tickcolor: '#FFCF9C',

            showline: true,
            linecolor: '#F7F7F7',
            linewidth: 1,
            ticklen: 5,
            color: '#F7F7F7'
        },

        //Styling the y-axis text and add the tick and show the y-axis line
        yaxis: {
            autotick: true,
            ticks: 'outside',
            tickwidth: 4,
            tickcolor: '#FFCF9C',

            zeroline: true,
            zerolinecolor: '#FFCF9C',
            zerolinewidth: 3,

            showline: true,
            linecolor: '#F7F7F7',
            linewidth: 1,
            ticklen: 5,
            title: 'Seawater depth(mm)',
            color: '#F7F7F7'
        },

        //Styling the legend
        showlegend: true,
        legend: {
            bgcolor: '#051622',
            font: {
                color: '#F7F7F7'
            }
        },

        //The style for the hover/label
        hovermode: 'closest',
        hoverlabel: {
            bgcolor: "#051622",
            bordercolor: "#051622",
            font: {
                size: 15,
                color: '#FFCF9C'
            }
        },

        //Call the buttons
        updatemenus: myUpdatemenus,
    }

    // Create data array
    var data = [trace1, trace2, trace3];

    // Draw graph to the html
    Plotly.newPlot('Chart3', data, layout)
})