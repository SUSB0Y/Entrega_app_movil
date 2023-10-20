import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeginningPage } from './beginning.page';

describe('BeginningPage', () => {
  let component: BeginningPage;
  let fixture: ComponentFixture<BeginningPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeginningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
