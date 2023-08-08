import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoListComponent } from './do-list.component';

describe('DoListComponent', () => {
  let component: DoListComponent;
  let fixture: ComponentFixture<DoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoListComponent]
    });
    fixture = TestBed.createComponent(DoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
