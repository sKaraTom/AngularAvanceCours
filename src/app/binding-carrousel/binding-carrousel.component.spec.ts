import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingCarrouselComponent } from './binding-carrousel.component';

describe('BindingCarrouselComponent', () => {
  let component: BindingCarrouselComponent;
  let fixture: ComponentFixture<BindingCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
