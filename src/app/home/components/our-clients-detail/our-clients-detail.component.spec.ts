import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientsDetailComponent } from './our-clients-detail.component';

describe('OurClientsDetailComponent', () => {
  let component: OurClientsDetailComponent;
  let fixture: ComponentFixture<OurClientsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurClientsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClientsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
