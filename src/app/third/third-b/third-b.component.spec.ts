import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBComponent } from './third-b.component';

describe('ThirdBComponent', () => {
  let component: ThirdBComponent;
  let fixture: ComponentFixture<ThirdBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
