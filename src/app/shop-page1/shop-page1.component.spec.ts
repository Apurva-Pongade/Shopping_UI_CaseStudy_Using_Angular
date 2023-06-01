import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPage1Component } from './shop-page1.component';

describe('ShopPage1Component', () => {
  let component: ShopPage1Component;
  let fixture: ComponentFixture<ShopPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopPage1Component]
    });
    fixture = TestBed.createComponent(ShopPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
