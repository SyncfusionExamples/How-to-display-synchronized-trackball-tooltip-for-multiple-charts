
import { Chart, DateTime, LineSeries, Tooltip, Crosshair } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, DateTime, Tooltip, Crosshair);

let chartData: any[] = [{ x: new Date(2000, 2, 11), y: 15 }, { x: new Date(2000, 9, 14), y: 20 },
    { x: new Date(2001, 2, 11), y: 25 }, { x: new Date(2001, 9, 16), y: 21 },
    { x: new Date(2002, 2, 7), y: 13 }, { x: new Date(2002, 9, 7), y: 18 },
    { x: new Date(2003, 2, 11), y: 24 }, { x: new Date(2003, 9, 14), y: 23 },
    { x: new Date(2004, 2, 6), y: 19 }, { x: new Date(2004, 9, 6), y: 31 },
    { x: new Date(2005, 2, 11), y: 39 }, { x: new Date(2005, 9, 11), y: 50 },
    { x: new Date(2006, 2, 11), y: 24 }];  
let Data1: any[] =[{ x: new Date(2000, 2, 11), y: 39 }, { x: new Date(2000, 9, 14), y: 30 },
    { x: new Date(2001, 2, 11), y: 28 }, { x: new Date(2001, 9, 16), y: 35 },
    { x: new Date(2002, 2, 7), y: 39 }, { x: new Date(2002, 9, 7), y: 41 },
    { x: new Date(2003, 2, 11), y: 45 }, { x: new Date(2003, 9, 14), y: 48 },
    { x: new Date(2004, 2, 6), y: 54 }, { x: new Date(2004, 9, 6), y: 55 },
    { x: new Date(2005, 2, 11), y: 57 }, { x: new Date(2005, 9, 11), y: 60 },
    { x: new Date(2006, 2, 11), y: 60 }];
let Data2 = [{ x: new Date(2000, 2, 11), y: 60 }, { x: new Date(2000, 9, 14), y: 55 },
        { x: new Date(2001, 2, 11), y: 48 }, { x: new Date(2001, 9, 16), y: 57 },
        { x: new Date(2002, 2, 7), y: 62 }, { x: new Date(2002, 9, 7), y: 64 },
        { x: new Date(2003, 2, 11), y: 57 }, { x: new Date(2003, 9, 14), y: 53 },
        { x: new Date(2004, 2, 6), y: 63 }, { x: new Date(2004, 9, 6), y: 50 },
        { x: new Date(2005, 2, 11), y: 66 }, { x: new Date(2005, 9, 11), y: 65 },
        { x: new Date(2006, 2, 11), y: 79 }];       
let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
        valueType: 'DateTime',
        skeleton: 'y',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Revenue',
            labelFormat: '{value}M',
            majorTickLines: { width: 0 },
            //minimum: 10, maximum: 80,
            lineStyle: { width: 0 },
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    series: [
        {
            type: 'Line',
            dataSource: chartData,
            xName: 'x', width: 2,name: 'John',
            yName: 'y',
            marker: {
            visible: true,
            }
        }, {
            type: 'Line',
            dataSource: Data1,
            xName: 'x', width: 2,
            yName: 'y', name: 'Andrew',
            marker: {
                visible: true
            }
        },{
            type: 'Line',
            dataSource: Data2,
            xName: 'x', width: 2,
            yName: 'y', name: 'Andrew',
            marker: {
                visible: true
            }
        },
    ],
       //Initializing Chart title
       title: 'Average Sales per Person',
    tooltip: {
        enable: true, shared: true
    },
    crosshair: { enable: true, lineType: 'Vertical' }

}, );
chart.appendTo('#container1');
let chartobj: Chart = new Chart({
    primaryXAxis: {
        minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
        valueType: 'DateTime',
        skeleton: 'y',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Revenue',
            labelFormat: '{value}M',
            majorTickLines: { width: 0 },
            minimum: 10, maximum: 80,
            lineStyle: { width: 0 },
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    series: [
        {
            type: 'Line',
            dataSource: chartData,
            xName: 'x', width: 2,name: 'John',
            yName: 'y',
            marker: {
            visible: true,
            }
        }, {
            type: 'Line',
            dataSource: Data1,
            xName: 'x', width: 2,
            yName: 'y', name: 'Andrew',
            marker: {
                visible: true
            }
        },{
            type: 'Line',
            dataSource: Data2,
            xName: 'x', width: 2,
            yName: 'y', name: 'Andrew',
            marker: {
                visible: true
            }
        },
    ],
       //Initializing Chart title
       title: 'Average Sales per Person',
    tooltip: {
        enable: true, shared: true
    },
    crosshair: { enable: true, lineType: 'Vertical' },
}, );
chartobj.appendTo('#container2');
   onmousemove = (args: MouseEvent) => {
   
    if (args.target["id"].indexOf('ChartAreaBorder') > -1) {
        let chart1 = document.getElementById('container1');
        let container1Bounds = chart1.getBoundingClientRect();
         mousemoveEvent(
             chart1,
             args.x,
             container1Bounds.top + (container1Bounds.height/2),
             args.x,
             container1Bounds.top + (container1Bounds.height/2)
           );
         let chart2 = document.getElementById('container2');
         let container2Bounds = chart2.getBoundingClientRect();
          mousemoveEvent(
             chart2,
             args.x,
             container2Bounds.top + (container2Bounds.height/2),
             args.x,
             container2Bounds.top + (container2Bounds.height/2)
           );
        }
    }

 let mousemoveEvent = (element:any, sx:any, sy:any, cx:any, cy:any): void =>{
    let mousemove = document.createEvent('MouseEvent');
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
 
