import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/**
 * Sample for  Stacked water fall chart
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public john: Object[] = [
      { x: new Date(2000, 2, 11), y: 15 }, { x: new Date(2000, 9, 14), y: 20 },
      { x: new Date(2001, 2, 11), y: 25 }, { x: new Date(2001, 9, 16), y: 21 },
      { x: new Date(2002, 2, 7), y: 13 }, { x: new Date(2002, 9, 7), y: 18 },
      { x: new Date(2003, 2, 11), y: 24 }, { x: new Date(2003, 9, 14), y: 23 },
      { x: new Date(2004, 2, 6), y: 19 }, { x: new Date(2004, 9, 6), y: 31 },
      { x: new Date(2005, 2, 11), y: 39 }, { x: new Date(2005, 9, 11), y: 50 },
      { x: new Date(2006, 2, 11), y: 24 }
  ];
  public andrew: Object[] = [
      { x: new Date(2000, 2, 11), y: 39 }, { x: new Date(2000, 9, 14), y: 30 },
      { x: new Date(2001, 2, 11), y: 28 }, { x: new Date(2001, 9, 16), y: 35 },
      { x: new Date(2002, 2, 7), y: 39 }, { x: new Date(2002, 9, 7), y: 41 },
      { x: new Date(2003, 2, 11), y: 45 }, { x: new Date(2003, 9, 14), y: 48 },
      { x: new Date(2004, 2, 6), y: 54 }, { x: new Date(2004, 9, 6), y: 55 },
      { x: new Date(2005, 2, 11), y: 57 }, { x: new Date(2005, 9, 11), y: 60 },
      { x: new Date(2006, 2, 11), y: 60 }
  ];
  public thomas: Object[] = [
      { x: new Date(2000, 2, 11), y: 60 }, { x: new Date(2000, 9, 14), y: 55 },
      { x: new Date(2001, 2, 11), y: 48 }, { x: new Date(2001, 9, 16), y: 57 },
      { x: new Date(2002, 2, 7), y: 62 }, { x: new Date(2002, 9, 7), y: 64 },
      { x: new Date(2003, 2, 11), y: 57 }, { x: new Date(2003, 9, 14), y: 53 },
      { x: new Date(2004, 2, 6), y: 63 }, { x: new Date(2004, 9, 6), y: 50 },
      { x: new Date(2005, 2, 11), y: 66 }, { x: new Date(2005, 9, 11), y: 65 },
      { x: new Date(2006, 2, 11), y: 79 }
  ];
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
      minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
      valueType: 'DateTime',
      skeleton: 'y',
      lineStyle: { width: 0 },
      majorGridLines: { width: 0 },
      edgeLabelPlacement: 'Shift'
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
      title: 'Revenue',
      labelFormat: '{value}M',
      majorTickLines: { width: 0 },
      minimum: 10, maximum: 80,
      lineStyle: { width: 0 },
  };
  public chartArea: Object = {
      border: {
          width: 0
      }
  };
  public container1Bounds : any;
  public container2Bounds : any;
  public onMouseMove(args:any){
      if (args.target.id.indexOf('ChartAreaBorder') > -1) {
         let chart1: any = document.getElementById('chartcontainer1');
          this.container1Bounds = chart1.getBoundingClientRect();
          this.mousemoveEvent(
              chart1,
              args.x,
              this.container1Bounds.y + (this.container1Bounds.height/2),
              args.x,
              this.container1Bounds.y + (this.container1Bounds.height/2)
            );
          let chart2: any = document.getElementById('chartcontainer2');
            this.container2Bounds = chart2.getBoundingClientRect();
            this.mousemoveEvent(
              chart2,
              args.x,
              this.container2Bounds.y + (this.container2Bounds.height/2),
              args.x,
              this.container2Bounds.y + (this.container2Bounds.height/2)
            );
      }
  };
  public mousemoveEvent(element:any, sx:any, sy:any, cx:any, cy:any) {
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
   // custom code end
  public title: string = 'Average Sales per Person';
  public marker: Object = { visible: true };
  public tooltip: Object = { enable: true, shared: true };
  public crosshair: Object = { enable: true, lineType: 'Vertical' };
  constructor() {
      //code
  };

}