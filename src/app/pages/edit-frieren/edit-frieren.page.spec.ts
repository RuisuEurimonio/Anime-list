import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditFrierenPage } from './edit-frieren.page';

describe('EditFrierenPage', () => {
  let component: EditFrierenPage;
  let fixture: ComponentFixture<EditFrierenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFrierenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
