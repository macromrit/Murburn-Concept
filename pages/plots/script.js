/* document.addEventListener('DOMContentLoaded', () => {
    fetch('pca_datapoints.json')
        .then(response => response.json())
        .then(data => {
            createScatterPlot(data);
        })
        .catch(error => console.error('Error loading data:', error));
});

function createScatterPlot(data) {
    const traceMurzyme = {
        x: data.murzyme_x,
        y: data.murzyme_y,
        mode: 'markers',
        type: 'scatter',
        name: 'Murzymes',
        marker: { color: 'red' }
    };

    const traceNonMurzyme = {
        x: data.non_murzyme_x,
        y: data.non_murzyme_y,
        mode: 'markers',
        type: 'scatter',
        name: 'Non-Murzymes',
        marker: { color: 'blue' }
    };

    const plotData = [traceMurzyme, traceNonMurzyme];

    const layout = {
        title: 'PCA Plot',
        xaxis: { title: 'X Axis' },
        yaxis: { title: 'Y Axis' },
    };

    Plotly.newPlot('plot1', plotData, layout);
}
 */

document.addEventListener('DOMContentLoaded', () => {
    const plots = ['plot1', 'plot2', 'plot3', 'plot4', 'plot5', 'plot6', 'plot7'];

    plots.forEach((plot) => {
        createScatterPlot(plot);
    });
});

function createScatterPlot(plotId) {
    const trace1 = {
        x: Array.from({length: 50}, () => Math.random() * 100),
        y: Array.from({length: 50}, () => Math.random() * 100),
        mode: 'markers',
        type: 'scatter',
        name: 'Murzyme',
        marker: { color: 'red' }
    };

    const trace2 = {
        x: Array.from({length: 50}, () => Math.random() * 100),
        y: Array.from({length: 50}, () => Math.random() * 100),
        mode: 'markers',
        type: 'scatter',
        name: 'Non-Murzyme',
        marker: { color: 'blue' }
    };

    const data = [trace1, trace2];

    const layout = {
        title: 'Scatter Plot',
        xaxis: { title: 'X Axis' },
        yaxis: { title: 'Y Axis' },
    };

    Plotly.newPlot(plotId, data, layout);
}

