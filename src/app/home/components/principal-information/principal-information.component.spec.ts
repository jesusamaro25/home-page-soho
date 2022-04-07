import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalInformationComponent } from './principal-information.component';

describe('PrincipalInformationComponent', () => {
  let component: PrincipalInformationComponent;
  let fixture: ComponentFixture<PrincipalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
