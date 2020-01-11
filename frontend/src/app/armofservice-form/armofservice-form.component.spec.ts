import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmofserviceFormComponent } from './armofservice-form.component';

describe('ArmofserviceFormComponent', () => {
  let component: ArmofserviceFormComponent;
  let fixture: ComponentFixture<ArmofserviceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmofserviceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmofserviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
