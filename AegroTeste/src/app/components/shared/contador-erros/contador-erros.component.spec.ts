import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorErrosComponent } from './contador-erros.component';

describe('ContadorErrosComponent', () => {
  let component: ContadorErrosComponent;
  let fixture: ComponentFixture<ContadorErrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorErrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
