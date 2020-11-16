import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFazendasComponent } from './listar-fazendas.component';

describe('ListarFazendasComponent', () => {
  let component: ListarFazendasComponent;
  let fixture: ComponentFixture<ListarFazendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFazendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFazendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
