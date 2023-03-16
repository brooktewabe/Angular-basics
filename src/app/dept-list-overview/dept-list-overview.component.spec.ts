import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptListOverviewComponent } from './dept-list-overview.component';

describe('DeptListOverviewComponent', () => {
  let component: DeptListOverviewComponent;
  let fixture: ComponentFixture<DeptListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptListOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
