//Upack the data
const unpack2 = (data, key) => data.map(row => row[key])

//Extract data from CBE.csv(The coral bleaching events)
Plotly.d3.csv("csv/CBE.csv", coral_data => {
    const all = unpack3(coral_data, 'World')
    const aus = unpack3(coral_data, 'Australasia')
    const ind = unpack3(coral_data, 'Indian Ocean')
    const pac = unpack3(coral_data, 'Pacific')
    const year = unpack3(coral_data, 'Year')

    // create traces + traces/label layout
    var trace1 = {
        x: year,
        y: all,
        name: 'World',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>World<br>' + '<b>Year: </b>%{x}<br>' + '<b>Number of event: </b>%{y:.0f%}<extra></extra>',
    }

    var trace2 = {
        x: year,
        y: aus,
        name: 'Australasia',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>Australasia<br>' + '<b>Year: </b>%{x}<br>' + '<b>Number of event: </b>%{y:.0f%}<extra></extra>',
    }

    var trace3 = {
        x: year,
        y: ind,
        name: 'Indian Ocean',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>Indian Ocean<br>' + '<b>Year: </b>%{x}<br>' + '<b>Number of event: </b>%{y:.0f%}<extra></extra>',
    }

    var trace4 = {
        x: year,
        y: pac,
        name: 'Pacific',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>Pacific<br>' + '<b>Year: </b>%{x}<br>' + '<b>Number of event: </b>%{y:.0f%}<extra></extra>',
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
            //button 4
            {
                args: ['type', 'bar'],
                label: 'Bars',
                method: 'restyle'
            },


        ],

        //styling/the layout of the button
        direction: 'down',
        showactive: true,
        type: 'dropdown',
        x: 0.23,
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
                args: ['visible', [true, true, true, true]],
                label: 'All',
                method: 'restyle'

            },

            //button 2
            {
                args: ['visible', [false, true, false, false]],
                label: 'Australasia',
                method: 'restyle'

            },

            //button 3
            {
                args: ['visible', [false, false, true, false]],
                label: 'Indian Ocean',
                method: 'restyle'

            },

            //button 4
            {
                args: ['visible', [false, false, false, true]],
                label: 'Pacific',
                method: 'restyle'

            },

            //button 5
            {
                args: ['visible', [true, false, false, false,]],
                label: 'World',
                method: 'restyle'
            },



        ],
        //styling the layout of the button
        direction: 'down',
        showactive: true,
        type: 'dropdown',
        x: 0.1,
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
            x: 0.66,
            y: 1.05,
            xanchor: 'left',
            yanchor: 'bottom',
            text: '<b>1990-2016 Number of bleaching event</b>',
            font: {
                size: 20,
                color: '#FFCF9C'
            },
            showarrow: false
        },
        ],

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

            showline: true,
            linecolor: '#F7F7F7',
            linewidth: 2,
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
            title: '<b>Number of event</b>',
            color: '#F7F7F7'
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

        //Styling the legend
        showlegend: true,
        legend: {
            bgcolor: "#051622",
            font: {
                color: '#F7F7F7'
            }
        },

        //Call the buttons
        updatemenus: myUpdatemenus,
    }

    // Create data array
    var data = [trace1, trace2, trace3, trace4];

    // Draw graph to the html
    Plotly.newPlot('Chart2', data, layout)
})