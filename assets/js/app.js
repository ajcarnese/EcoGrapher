$(document).ready(function(){

	var db;

	var selection1 = "";
	var selection2 = "";

	$(document).on('click', '.dataSet', function() {
		var bckgrdColor = $(this).css('background-color');
		console.log(bckgrdColor);

		if ($(this).css('background-color') !== (0, 0, 255)) {
			$(this).css('background-color', 'blue');
			$(this).css('color', 'white');			
		} else {
			$(this).css('background-color', 'white');
			$(this).css('color', 'black');			
		}


		console.log('you clicked: ' + $(this).text());
	});


	function getSpreadsheetData() {
		var url = 'https://sheets.googleapis.com/v4/spreadsheets/1swa7IJkys5J2UmZRswntYrvgo_lm7M9ADgW7W0mgC-o/values/Sheet1!A2:H115?majorDimension=COLUMNS&key=AIzaSyCWbVVxyblRIxU04_pxNh3g2WQXkXPAknE';

		$.getJSON(url).success(function(data) {


		}).error(function(message) {
			console.error('error' + message);
		}).complete(function(data) {
			console.log('completed!');
			console.log(data);

			db = data;
			console.log(db);
		});
	};


	$(document).on('click', '#graphBtn', function() {
		console.log("Clicked graphBtn.");
		getSpreadsheetData();
		drawGraph();
	});


	function drawGraph() {
    // Create the chart
	    Highcharts.chart('graph-well', {

	        title: {
	            text: 'Highcharts data from Google Spreadsheets'
	        },

	        data: {
	            googleSpreadsheetKey: '0AoIaUO7wH1HwdENPcGVEVkxfUDJkMmFBcXMzOVVPdHc'
	        },
	        exporting: {
            	enabled: false
        	}
	        

	    });
	};

	$(document).on('click', '#pdfButton', function() {
		console.log('Clicked DownloadPDF button.');
		

	        var chart = $('#graph-well').highcharts();
	        chart.exportChart({
	            type: 'application/pdf',
        	});



	});









// // EXAMPLE OF CREATING CHART WITH LOCAL DATA
// $(function () {
//     Highcharts.chart('container', {
//         title: {
//             text: 'Monthly Average Temperature',
//             x: -20 //center
//         },
//         subtitle: {
//             text: 'Source: WorldClimate.com',
//             x: -20
//         },
//         xAxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//         },
//         yAxis: {
//             title: {
//                 text: 'Temperature (°C)'
//             },
//             plotLines: [{
//                 value: 0,
//                 width: 1,
//                 color: '#808080'
//             }]
//         },
//         tooltip: {
//             valueSuffix: '°C'
//         },
//         legend: {
//             layout: 'vertical',
//             align: 'right',
//             verticalAlign: 'middle',
//             borderWidth: 0
//         },
//         series: [{
//             name: 'Tokyo',
//             data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
//         }, {
//             name: 'New York',
//             data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
//         }, {
//             name: 'Berlin',
//             data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
//         }, {
//             name: 'London',
//             data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
//         }]
//     });



}); // document.ready