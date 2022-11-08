import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() label! : string;
  @Input() total! : string;
  @Input() percentage! : string;
  
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {}; // required


  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
   
      chart: {
        type: 'column'
    },

    title: {
        text: 'Olympic Games all-time medal table, grouped by continent'
    },

    xAxis: {
        categories: ['Gold', 'Silver', 'Bronze']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Count medals'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.index;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        type:'line',
        name: 'Norway',
        data: [148, 133, 124],
        stack: 'Europe'
    }, {
      type:'line',
        name: 'Germany',
        data: [102, 98, 65],
        stack: 'Europe'
    }, {
      type:'line',
        name: 'United States',
        data: [113, 122, 95],
        stack: 'North America'
    }, {
      type:'line',
        name: 'Canada',
        data: [77, 72, 80],
        stack: 'North America'
    }]
    };

    HC_exporting(Highcharts);
    
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
  }


}
