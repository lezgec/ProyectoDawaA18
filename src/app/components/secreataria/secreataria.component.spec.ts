import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecreatariaComponent } from './secreataria.component';

describe('SecreatariaComponent', () => {
  let component: SecreatariaComponent;
  let fixture: ComponentFixture<SecreatariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecreatariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecreatariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
