<template>
    <div id="app">
	<div style="border: 1px solid" @mousemove="onMouseMove">
	  <ejs-chart style='display:block' height="65%" align='center' id='chartcontainer1' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :crosshair='crosshair' :tooltip='tooltip' >
            <e-series-collection>
                <e-series :dataSource='chartData1' type='Line' xName='x' yName='y' name='John' :marker='marker' width=2> </e-series>
                <e-series :dataSource='chartData2' type='Line' xName='x' yName='y' name='Andrew' :marker='marker' width=2 > </e-series>
            </e-series-collection>
        </ejs-chart>
		 <ejs-chart style='display:block' height="65%" align='center' id='chartcontainer2' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :crosshair='crosshair' :tooltip='tooltip' >
            <e-series-collection>
                <e-series :dataSource='chartData1' type='Line' xName='x' yName='y' name='John' :marker='marker' width=2> </e-series>
                <e-series :dataSource='chartData2' type='Line' xName='x' yName='y' name='Andrew' :marker='marker' width=2 > </e-series>

            </e-series-collection>
        </ejs-chart>
		</div>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, Tooltip, DateTime, Crosshair, LineSeries, Legend } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

export default Vue.extend({
  name: 'app',
    data: function() {
       return {
	     chartData1 : [{ x: new Date(2000, 2, 11), y: 15 }, { x: new Date(2000, 9, 14), y: 20 },
{ x: new Date(2001, 2, 11), y: 25 }, { x: new Date(2001, 9, 16), y: 21 },
{ x: new Date(2002, 2, 7), y: 13 }, { x: new Date(2002, 9, 7), y: 18 },
{ x: new Date(2003, 2, 11), y: 24 }, { x: new Date(2003, 9, 14), y: 23 },
{ x: new Date(2004, 2, 6), y: 19 }, { x: new Date(2004, 9, 6), y: 31 },
{ x: new Date(2005, 2, 11), y: 39 }, { x: new Date(2005, 9, 11), y: 50 },
{ x: new Date(2006, 2, 11), y: 24 }],
      chartData2 : [{ x: new Date(2000, 2, 11), y: 39 }, { x: new Date(2000, 9, 14), y: 30 },
{ x: new Date(2001, 2, 11), y: 28 }, { x: new Date(2001, 9, 16), y: 35 },
{ x: new Date(2002, 2, 7), y: 39 }, { x: new Date(2002, 9, 7), y: 41 },
{ x: new Date(2003, 2, 11), y: 45 }, { x: new Date(2003, 9, 14), y: 48 },
{ x: new Date(2004, 2, 6), y: 54 }, { x: new Date(2004, 9, 6), y: 55 },
{ x: new Date(2005, 2, 11), y: 57 }, { x: new Date(2005, 9, 11), y: 60 },
{ x: new Date(2006, 2, 11), y: 60 }],
  primaryXAxis: {
            minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
            valueType: 'DateTime',
            skeleton: 'y',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },

      //Initializing Primary Y Axis
       primaryYAxis:
        {
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
        marker: { visible: true },

        tooltip: { enable: true, shared: true },

        crosshair: { enable: true, lineType: 'Vertical' },

        title: "Average Sales per Person"
    };
  },
  provide: {
       chart: [Tooltip, DateTime, Crosshair, LineSeries, Legend]
  },
  methods:{
    onMouseMove: function(args){
        if (args.target.id.indexOf('ChartAreaBorder') > -1) {
           var chart1 = document.getElementById('chartcontainer1');
           var container1Bounds = chart1.getBoundingClientRect();
            this.mousemoveEvent(
                chart1,
                args.x,
                container1Bounds.y + (container1Bounds.height/2),
                args.x,
                container1Bounds.y + (container1Bounds.height/2)
              );
            var chart2 = document.getElementById('chartcontainer2');
             var container2Bounds = chart2.getBoundingClientRect();
              this.mousemoveEvent(
                chart2,
                args.x,
                container2Bounds.y + (container2Bounds.height/2),
                args.x,
                container2Bounds.y + (container2Bounds.height/2)
              );
        }
    },
    mousemoveEvent: function(element, sx, sy, cx, cy) {
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
      
  }
});
</script>