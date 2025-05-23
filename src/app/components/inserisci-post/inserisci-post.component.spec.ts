import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciPostComponent } from './inserisci-post.component';

describe('InserisciPostComponent', () => {
  let component: InserisciPostComponent;
  let fixture: ComponentFixture<InserisciPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserisciPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
