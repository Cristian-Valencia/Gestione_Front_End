import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioCategoriaComponent } from './dettaglio-categoria.component';

describe('DettaglioCategoriaComponent', () => {
  let component: DettaglioCategoriaComponent;
  let fixture: ComponentFixture<DettaglioCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
