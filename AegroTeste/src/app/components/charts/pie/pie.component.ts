import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  @Input() public pieChartLabels: Label[] //[['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  @Input() public pieChartData: number[]  //[300, 500, 100];
  @Input() public pieChartType: ChartType = 'pie';
  @Input() public pieChartLegend = true;
  public pieChartPlugins = [];
  @Input() public pieChartColors = [
    {
      backgroundColor: ['rgba(1, 192, 90,0.5)', 'rgba(0, 95, 97,0.5)',
        'rgba(0, 63, 113,0.5)', 'rgba(28, 44, 52,0.5)',
        'rgba(254, 201, 62,0.5)',
        'rgba(253, 117, 59,0.5)',
        'rgba(30, 30, 32,0.5)'

      ],
    },
  ];
}
