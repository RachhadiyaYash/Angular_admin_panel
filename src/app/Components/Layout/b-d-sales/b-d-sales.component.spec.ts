import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDSalesComponent } from './b-d-sales.component';

describe('BDSalesComponent', () => {
  let component: BDSalesComponent;
  let fixture: ComponentFixture<BDSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BDSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BDSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
