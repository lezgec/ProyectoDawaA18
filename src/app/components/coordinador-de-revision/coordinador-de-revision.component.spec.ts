import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorDeRevisionComponent } from './coordinador-de-revision.component';

describe('CoordinadorDeRevisionComponent', () => {
  let component: CoordinadorDeRevisionComponent;
  let fixture: ComponentFixture<CoordinadorDeRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinadorDeRevisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinadorDeRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
