import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateschoolComponent } from './createschool.component';

describe('CreateschoolComponent', () => {
  let component: CreateschoolComponent;
  let fixture: ComponentFixture<CreateschoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateschoolComponent]
    });
    fixture = TestBed.createComponent(CreateschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
