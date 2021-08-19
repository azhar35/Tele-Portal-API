import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdeviceformComponent } from './newdeviceform.component';

describe('NewdeviceformComponent', () => {
  let component: NewdeviceformComponent;
  let fixture: ComponentFixture<NewdeviceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdeviceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdeviceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
