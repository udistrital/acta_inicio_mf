import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroActasComponent } from './registro-actas.component';

describe('RegistroActasComponent', () => {
  let component: RegistroActasComponent;
  let fixture: ComponentFixture<RegistroActasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroActasComponent]
    });
    fixture = TestBed.createComponent(RegistroActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
