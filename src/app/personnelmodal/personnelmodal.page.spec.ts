import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonnelmodalPage } from './personnelmodal.page';

describe('PersonnelmodalPage', () => {
  let component: PersonnelmodalPage;
  let fixture: ComponentFixture<PersonnelmodalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonnelmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
