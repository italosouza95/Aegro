import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTalhaoComponent } from './cadastrar-talhao.component';

describe('CadastrarTalhaoComponent', () => {
  let component: CadastrarTalhaoComponent;
  let fixture: ComponentFixture<CadastrarTalhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarTalhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTalhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
