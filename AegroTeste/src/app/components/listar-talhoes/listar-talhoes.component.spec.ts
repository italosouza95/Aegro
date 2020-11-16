import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTalhoesComponent } from './listar-talhoes.component';

describe('ListarTalhoesComponent', () => {
  let component: ListarTalhoesComponent;
  let fixture: ComponentFixture<ListarTalhoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTalhoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTalhoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
