var john = [{ x: new Date(2000, 2, 11), y: 15 }, { x: new Date(2000, 9, 14), y: 20 },
{ x: new Date(2001, 2, 11), y: 25 }, { x: new Date(2001, 9, 16), y: 21 },
{ x: new Date(2002, 2, 7), y: 13 }, { x: new Date(2002, 9, 7), y: 18 },
{ x: new Date(2003, 2, 11), y: 24 }, { x: new Date(2003, 9, 14), y: 23 },
{ x: new Date(2004, 2, 6), y: 19 }, { x: new Date(2004, 9, 6), y: 31 },
{ x: new Date(2005, 2, 11), y: 39 }, { x: new Date(2005, 9, 11), y: 50 },
{ x: new Date(2006, 2, 11), y: 24 }];
var andrew = [{ x: new Date(2000, 2, 11), y: 39 }, { x: new Date(2000, 9, 14), y: 30 },
{ x: new Date(2001, 2, 11), y: 28 }, { x: new Date(2001, 9, 16), y: 35 },
{ x: new Date(2002, 2, 7), y: 39 }, { x: new Date(2002, 9, 7), y: 41 },
{ x: new Date(2003, 2, 11), y: 45 }, { x: new Date(2003, 9, 14), y: 48 },
{ x: new Date(2004, 2, 6), y: 54 }, { x: new Date(2004, 9, 6), y: 55 },
{ x: new Date(2005, 2, 11), y: 57 }, { x: new Date(2005, 9, 11), y: 60 },
{ x: new Date(2006, 2, 11), y: 60 }];
var thomas = [{ x: new Date(2000, 2, 11), y: 60 }, { x: new Date(2000, 9, 14), y: 55 },
{ x: new Date(2001, 2, 11), y: 48 }, { x: new Date(2001, 9, 16), y: 57 },
{ x: new Date(2002, 2, 7), y: 62 }, { x: new Date(2002, 9, 7), y: 64 },
{ x: new Date(2003, 2, 11), y: 57 }, { x: new Date(2003, 9, 14), y: 53 },
{ x: new Date(2004, 2, 6), y: 63 }, { x: new Date(2004, 9, 6), y: 50 },
{ x: new Date(2005, 2, 11), y: 66 }, { x: new Date(2005, 9, 11), y: 65 },
{ x: new Date(2006, 2, 11), y: 79 }];

    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
            valueType: 'DateTime',
            skeleton: 'y',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Revenue',
            labelFormat: '{value}M',
            majorTickLines: { width: 0 },
            minimum: 10, maximum: 80,
            lineStyle: { width: 0 },
        },
        chartArea: { border: { width: 0 } },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: john,
                name: 'John',
                xName: 'x', width: 2,
                yName: 'y',
                marker: { visible: true }
            },
            {
                type: 'Line',
                dataSource: andrew,
                name: 'Andrew',
                xName: 'x', width: 2,
                yName: 'y',
                marker: { visible: true }
            },
            {
                type: 'Line',
                dataSource: thomas,
                name: 'Thomas',
                xName: 'x', width: 2,
                yName: 'y',
                marker: { visible: true }
            }
        ],
        //Initializing Tooltip and Crosshair
        tooltip: { enable: true, shared: true },
        crosshair: { enable: true, lineType: 'Vertical' },
        //Initializing Chart Title
        title: 'Average Sales per Person',

    
});
chart.appendTo('#element');

        var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
            valueType: 'DateTime',
            skeleton: 'y',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Revenue',
            labelFormat: '{value}M',
            majorTickLines: { width: 0 },
            minimum: 10, maximum: 80,
            lineStyle: { width: 0 },
        },
        chartArea: { border: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: john,
                name: 'John',
                xName: 'x', width: 2,
                yName: 'y',
                marker: { visible: true }
            },
            {
                type: 'Line',
                dataSource: andrew,
                name: 'Andrew',
                xName: 'x', width: 2,
                yName: 'y',
                marker: { visible: true }
            },
            {
                type: 'Line',
                dataSource: thomas,
                name: 'Thomas',
                xName: 'x', width: 2,
                yName: 'y',
                marker: { visible: true }
            }
        ],
        //Initializing Tooltip and Crosshair
        tooltip: { enable: true, shared: true },
        crosshair: { enable: true, lineType: 'Vertical' },
        //Initializing Chart Title
        title: 'Average Sales per Person',
});
chart.appendTo('#element2');
 
  function mousemove(e) {
   
    if (e.target["id"].indexOf('ChartAreaBorder') > -1) {
     
        var chart1 = document.getElementById('element');
        console.log("hello",chart1);
         var container1Bounds = chart1.getBoundingClientRect();
         console.log("hai",container1Bounds);
         console.log("height",container1Bounds.y);
         console.log("y",container1Bounds.height);
         mousemoveEvent(
             chart1,
             e.x,
             container1Bounds.y + (container1Bounds.height/2),
             e.x,
             container1Bounds.y + (container1Bounds.height/2)
           );
         var chart2 = document.getElementById('element2');
          var container2Bounds = chart2.getBoundingClientRect();
          
           mousemoveEvent(
             chart2,
             e.x,
             container2Bounds.y + (container2Bounds.height/2),
             e.x,
             container2Bounds.y + (container2Bounds.height/2)
           );
   
    }
};

 var mousemoveEvent = function(element, sx, sy, cx, cy) {
    var mousemove = document.createEvent('MouseEvent');
    mousemove.initMouseEvent(
      'mousemove',
      true,
      false,
      window,
      1,
      sx,
      sy,
      cx,
      cy,
      false,
      false,
      false,
      false,
      0,
      null
    );
   element.dispatchEvent(mousemove);
  
  }


 