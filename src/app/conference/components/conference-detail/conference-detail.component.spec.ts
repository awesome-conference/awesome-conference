import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceDetailComponent } from './conference-detail.component';

describe('ConferenceDetailComponent', () => {
  let component: ConferenceDetailComponent;
  let fixture: ComponentFixture<ConferenceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
