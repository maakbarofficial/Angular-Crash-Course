import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallingComponent } from './apicalling.component';

describe('ApicallingComponent', () => {
  let component: ApicallingComponent;
  let fixture: ComponentFixture<ApicallingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApicallingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApicallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
