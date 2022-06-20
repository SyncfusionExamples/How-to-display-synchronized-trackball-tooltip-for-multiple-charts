import './index.css';
import * as React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend,
  Tooltip, LineSeries, DateTime, Crosshair } from '@syncfusion/ej2-react-charts';
import { john, andrew, thomas } from './trackball-data';

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
export class App extends React.Component<{}, {}> {

  chartInstance1: ChartComponent | null | undefined;
  chartInstance2: ChartComponent | null | undefined;

  render() {
    return (<div className='control-pane'>
      <div className='control-section' onMouseMove={(e) => this.onMouseMove(e)} >
        <ChartComponent id='chart1'
          ref={chart => this.chartInstance1 = chart}
          primaryXAxis={{
            minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
            valueType: 'DateTime', skeleton: 'y', lineStyle: { width: 0 },
            majorGridLines: { width: 0 }, edgeLabelPlacement: 'Shift'
          }} 
          chartArea={{ border: { width: 0 } }}
          primaryYAxis={{
            title: 'Revenue', labelFormat: '{value}M', majorTickLines: { width: 0 },
            minimum: 10, maximum: 80, lineStyle: { width: 0 },
          }} 
          title='Average Sales per Person' tooltip={{ enable: true, shared: true }} 
          crosshair={{ enable: true, lineType: 'Vertical' }}>
          <Inject services={[LineSeries, DateTime, Tooltip, Crosshair, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={john} xName='x' yName='y' width={2} name='John' type='Line' marker={{ visible: true }}>
            </SeriesDirective>
            <SeriesDirective dataSource={andrew} xName='x' yName='y' width={2} name='Andrew' type='Line' marker={{ visible: true }}>
            </SeriesDirective>
            <SeriesDirective dataSource={thomas} xName='x' yName='y' width={2} name='Thomas' type='Line' marker={{ visible: true }}>
            </SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>

        <ChartComponent id='chart2'
          ref={chart1 => this.chartInstance2 = chart1}
          primaryXAxis={{
            minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
            valueType: 'DateTime', skeleton: 'y', lineStyle: { width: 0 },
            majorGridLines: { width: 0 }, edgeLabelPlacement: 'Shift'
           }} 
          chartArea={{ border: { width: 0 } }}
          primaryYAxis={{
            title: 'Revenue', labelFormat: '{value}M', majorTickLines: { width: 0 },
            minimum: 10, maximum: 80, lineStyle: { width: 0 },
          }} 
          title='Average Sales per Person' tooltip={{ enable: true, shared: true }} 
          crosshair={{ enable: true, lineType: 'Vertical' }}>
          <Inject services={[LineSeries, DateTime, Tooltip, Crosshair, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={john} xName='x' yName='y' width={2} name='John' type='Line' marker={{ visible: true }}>
            </SeriesDirective>
            <SeriesDirective dataSource={andrew} xName='x' yName='y' width={2} name='Andrew' type='Line' marker={{ visible: true }}>
            </SeriesDirective>
            <SeriesDirective dataSource={thomas} xName='x' yName='y' width={2} name='Thomas' type='Line' marker={{ visible: true }}>
            </SeriesDirective>
          </SeriesCollectionDirective>
       </ChartComponent>
      </div>
    </div>);
  }


  public container1Bounds: any;
  public container2Bounds: any;
  public onMouseMove(args: any): void {
    if (args.target.id.indexOf('ChartAreaBorder') > -1) {
      let chart: any = document.getElementById('chart1');
      this.container1Bounds = chart.getBoundingClientRect();
      this.mousemoveEvent(
        chart,
        args.pageX,
        this.container1Bounds.y + (this.container1Bounds.height / 2),
        args.pageX,
        this.container1Bounds.y + (this.container1Bounds.height / 2)
      );
      let chart2: any = document.getElementById('chart2');
      this.container2Bounds = chart2.getBoundingClientRect();
      this.mousemoveEvent(
        chart2,
        args.pageX,
        this.container2Bounds.y + (this.container2Bounds.height / 2),
        args.pageX,
        this.container2Bounds.y + (this.container2Bounds.height / 2)
      );
    }
  };
  public mousemoveEvent(element: any, sx: any, sy: any, cx: any, cy: any) {
    let mouse = document.createEvent('MouseEvents');
    mouse.initMouseEvent(
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

    element.dispatchEvent(mouse);
  }
}


