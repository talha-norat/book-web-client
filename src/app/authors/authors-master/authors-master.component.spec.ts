import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsMasterComponent } from './authors-master.component';

describe('AuthorsMasterComponent', () => {
  let component: AuthorsMasterComponent;
  let fixture: ComponentFixture<AuthorsMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
