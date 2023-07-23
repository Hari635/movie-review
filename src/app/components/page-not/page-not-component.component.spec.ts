import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotComponentComponent } from './page-not-component.component';

describe('PageNotComponentComponent', () => {
  let component: PageNotComponentComponent;
  let fixture: ComponentFixture<PageNotComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
