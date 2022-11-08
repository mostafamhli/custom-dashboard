import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() label! : string;
  @Input() total! : string;
  @Input() percentage! : string;
  
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {}; // required


  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor:'',
        borderWidth:0,
        margin:[2,2,2,2],
        height:60
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend:{
        enabled:false
      },
      series: [{
        type:'line',
        data:[71, 78, 39, 66]
       }],
       xAxis:{
        labels:{
          enabled:false,
        },
        title:{
          text:'',
        },
        startOnTick:false,
        endOnTick:false,
       },
       yAxis:{
        labels:{
          enabled:false,
        },
        title:{
          text:'',
        },
        startOnTick:false,
        endOnTick:false,
       },
      //remove highcharts.com
      credits: {
        enabled: false
      },

      exporting: {
        enabled: false
      }
    };

    HC_exporting(Highcharts);
    
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
  }


}
