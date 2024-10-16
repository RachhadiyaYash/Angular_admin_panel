import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-b-d-sales',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './b-d-sales.component.html',
  styleUrls: ['./b-d-sales.component.css'],
})
export class BDSalesComponent implements OnInit {
  salesData: any[] = [];
  view: [number, number] = [450, 450];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  private salesDataSource = [
    { month: 'January', sales: 500 },
    { month: 'February', sales: 700 },
    { month: 'March', sales: 400 },
    { month: 'April', sales: 900 },
    { month: 'May', sales: 800 },
    { month: 'June', sales: 1000 },
    { month: 'July', sales: 1200 },
    { month: 'August', sales: 950 },
    { month: 'September', sales: 700 },
    { month: 'October', sales: 1300 },
    { month: 'November', sales: 1100 },
    { month: 'December', sales: 1400 },
  ];

  constructor() {}

  ngOnInit() {
    this.loadSalesData();
  }

  loadSalesData() {
    this.salesData = this.salesDataSource.map((data) => ({
      name: data.month,
      value: data.sales,
    }));
  }
}
