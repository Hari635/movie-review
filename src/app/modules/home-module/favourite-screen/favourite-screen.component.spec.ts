import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteScreenComponent } from './favourite-screen.component';

describe('FavouriteScreenComponent', () => {
  let component: FavouriteScreenComponent;
  let fixture: ComponentFixture<FavouriteScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
