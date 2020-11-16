import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProducaoComponent } from './registro-producao.component';

describe('RegistroProducaoComponent', () => {
  let component: RegistroProducaoComponent;
  let fixture: ComponentFixture<RegistroProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProducaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
