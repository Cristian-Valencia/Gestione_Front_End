import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategorieComponent } from './lista-categorie.component';

describe('ListaCategorieComponent', () => {
  let component: ListaCategorieComponent;
  let fixture: ComponentFixture<ListaCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
