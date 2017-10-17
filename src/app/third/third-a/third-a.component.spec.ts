import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdAComponent } from './third-a.component';

describe('ThirdAComponent', () => {
  let component: ThirdAComponent;
  let fixture: ComponentFixture<ThirdAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
