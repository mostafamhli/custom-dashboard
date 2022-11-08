import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import HC_exporting from 'highcharts/modules/exporting';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import * as Highcharts from "highcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"]
    };
  }

  ngOnInit() {
    HC_exporting(Highcharts);
    
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
  }

}
