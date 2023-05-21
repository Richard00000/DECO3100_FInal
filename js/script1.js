//Upack the data
const unpack1 = (data, key) => data.map(row => row[key])

//Extract data from ASTC.csv(Annual Surface Temperature Change)
Plotly.d3.csv("csv/ASTC.csv", surface_data => {
    const au = unpack1(surface_data, 'Australia')
    const ca = unpack1(surface_data, 'Canada')
    const chn = unpack1(surface_data, 'China Mainland')
    const jp = unpack1(surface_data, 'Japan')
    const nz = unpack1(surface_data, 'New Zealand')
    const uk = unpack1(surface_data, 'United Kingdom')
    const us = unpack1(surface_data, 'United States')
    const ta = unpack1(surface_data, 'Total average')
    const year = unpack1(surface_data, 'Years')

    //create traces + traces/label layout
    var trace1 = {
        x: year,
        y: au,
        name: 'Australia',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>Australia<br>' + '<b>Year: </b>%{x}<br>' + '<b>Temperature: </b>%{y:.3f%}°C<extra></extra>',
    }

    var trace2 = {
        x: year,
        y: ca,
        name: 'Canada',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>Canada<br>' + '<b>Year: </b>%{x}<br>' + '<b>Temperature: </b>%{y:.3f%}°C<extra></extra>',
    }

    var trace3 = {
        x: year,
        y: chn,
        name: 'China Mainland',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>China Mainland<br>' + '<b>Year: </b>%{x}<br>' + '<b>Temperature: </b>%{y:.3f%}°C<extra></extra>',
    }

    var trace4 = {
        x: year,
        y: jp,
        name: 'Japan',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>Japan<br>' + '<b>Year: </b>%{x}<br>' + '<b>Temperature: </b>%{y:.3f%}°C<extra></extra>',
    }

    var trace5 = {
        x: year,
        y: nz,
        name: 'New Zealand',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>New Zealand<br>' + '<b>Year: </b>%{x}<br>' + '<b>Temperature: </b>%{y:.3f%}°C<extra></extra>',
    }

    var trace6 = {
        x: year,
        y: uk,
        name: 'United Kingdom',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>United Kingdom<br>' + '<b>Year: </b>%{x}<br>' + '<b>Temperature: </b>%{y:.3f%}°C<extra></extra>',
    }

    var trace7 = {
        x: year,
        y: us,
        name: 'United States',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>United States<br>' + '<b>Year: </b>%{x}<br>' + '<b>Temperature: </b>%{y:.3f%}°C<extra></extra>',
    }

    var trace8 = {
        x: year,
        y: ta,
        name: 'Total average',
        mode: 'lines+markers',
        hovertemplate: '<b>Country: </b>Total average<br>' + '<b>Year: </b>%{x}<br>' + '<b>Temperature: </b>%{y:.3f%}°C<extra></extra>',
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

        //styling/the layout of the button
        direction: 'down',
        showactive: true,
        type: 'dropdown',
        x: 0.25,
        xanchor: 'middle',
        y: 1.12,
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
                args: ['visible', [true, true, true, true, true, true, true, true, true]],
                label: 'All',
                method: 'restyle'
            },


            //button 2
            {
                args: ['visible', [true, false, false, false, false, false, false, false, false]],
                label: 'Australia',
                method: 'restyle'
            },

            //button 3
            {
                args: ['visible', [false, true, false, false, false, false, false, false, false]],
                label: 'Canada',
                method: 'restyle'
            },

            //button 4
            {
                args: ['visible', [false, false, true, false, false, false, false, false, false]],
                label: 'China Mainland',
                method: 'restyle'
            },

            //button 5
            {
                args: ['visible', [false, false, false, true, false, false, false, false, false]],
                label: 'Japan',
                method: 'restyle'
            },

            //button 6
            {
                args: ['visible', [false, false, false, false, true, false, false, false, false]],
                label: 'New Zealand',
                method: 'restyle'
            },

            //button 7
            {
                args: ['visible', [false, false, false, false, false, true, false, false, false]],
                label: 'United Kingdom',
                method: 'restyle'
            },

            //button 8
            {
                args: ['visible', [false, false, false, false, false, false, true, false, false]],
                label: 'United States',
                method: 'restyle'
            },

            //button 9
            {
                args: ['visible', [false, false, false, false, false, false, false, true, false]],
                label: 'Total average',
                method: 'restyle'
            },
        ],
        //styling/the layout of the button
        direction: 'down',
        showactive: true,
        type: 'dropdown',
        x: 0.12,
        xanchor: 'middle',
        y: 1.12,
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
            text: '<b>1990-2022 Sea surface temperature</b>',
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
            title: '<b>Sea surfaace temperature(°C)</b>',
            color: '#F7F7F7'
        },

        //Styling the legend
        showlegend: true,
        legend: {
            bgcolor: "#051622",
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
    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];

    // Draw graph to the html
    Plotly.newPlot('Chart1', data, layout)

})