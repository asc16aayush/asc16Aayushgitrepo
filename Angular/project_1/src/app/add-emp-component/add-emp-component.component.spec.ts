import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpComponentComponent } from './add-emp-component.component';

describe('AddEmpComponentComponent', () => {
  let component: AddEmpComponentComponent;
  let fixture: ComponentFixture<AddEmpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmpComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
