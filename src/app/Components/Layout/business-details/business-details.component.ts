import { Component } from '@angular/core';
import { BDSalesComponent } from '../b-d-sales/b-d-sales.component';

@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [BDSalesComponent],
  templateUrl: './business-details.component.html',
  styleUrl: './business-details.component.css',
})
export class BusinessDetailsComponent {}
