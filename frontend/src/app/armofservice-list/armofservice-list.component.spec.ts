import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmofserviceListComponent } from './armofservice-list.component';

describe('ArmofserviceListComponent', () => {
  let component: ArmofserviceListComponent;
  let fixture: ComponentFixture<ArmofserviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmofserviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmofserviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
