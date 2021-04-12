import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallexTestmonilsComponent } from './parallex-testmonils.component';

describe('ParallexTestmonilsComponent', () => {
  let component: ParallexTestmonilsComponent;
  let fixture: ComponentFixture<ParallexTestmonilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallexTestmonilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallexTestmonilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
