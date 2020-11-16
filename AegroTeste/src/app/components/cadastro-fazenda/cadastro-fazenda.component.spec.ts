import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFazendaComponent } from './cadastro-fazenda.component';

describe('CadastroFazendaComponent', () => {
  let component: CadastroFazendaComponent;
  let fixture: ComponentFixture<CadastroFazendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFazendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFazendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
