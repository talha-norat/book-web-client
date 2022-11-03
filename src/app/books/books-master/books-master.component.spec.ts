import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksMasterComponent } from './books-master.component';

describe('BooksMasterComponent', () => {
  let component: BooksMasterComponent;
  let fixture: ComponentFixture<BooksMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
