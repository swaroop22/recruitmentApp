import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementoptionComponent } from './advertisementoption.component';

describe('AdvertisementoptionComponent', () => {
  let component: AdvertisementoptionComponent;
  let fixture: ComponentFixture<AdvertisementoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
