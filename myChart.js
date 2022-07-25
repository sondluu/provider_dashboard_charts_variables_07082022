function drawOverallNoomActivityChart(low_wks, high_wks) {

    // Load the Visualization API and the corechart package.
    google.charts.load("current", {packages:["corechart"]});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart0);


    
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart0() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
            ['Overall Status', 'Weeks'],
            ['High Weeks',     high_wks],
            ['Low Weeks',      low_wks]
        ]);
        
        
        // Set chart options
        var options = {
            title: 'Overall Noom Activity Level',
            backgroundColor: '#EBECFB',
            pieHole: 0.4,
            colors: ['#008000', '#FF0000'],
            pieSliceTextStyle: {
            color: 'white',
            fontSize: '9',
            },
        };
        
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('donutchart0'));
        chart.draw(data, options);
    }
}



function drawAnotherChart(low_wks, high_wks) {

}
