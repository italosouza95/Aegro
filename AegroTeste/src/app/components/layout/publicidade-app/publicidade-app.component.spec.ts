import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadeAppComponent } from './publicidade-app.component';

describe('PublicidadeAppComponent', () => {
  let component: PublicidadeAppComponent;
  let fixture: ComponentFixture<PublicidadeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadeAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
