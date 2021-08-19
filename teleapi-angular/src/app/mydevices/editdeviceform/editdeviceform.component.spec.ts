import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeviceformComponent } from './editdeviceform.component';

describe('EditdeviceformComponent', () => {
  let component: EditdeviceformComponent;
  let fixture: ComponentFixture<EditdeviceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdeviceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdeviceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
