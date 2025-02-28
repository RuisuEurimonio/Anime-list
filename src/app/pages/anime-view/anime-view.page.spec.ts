import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimeViewPage } from './anime-view.page';

describe('AnimeViewPage', () => {
  let component: AnimeViewPage;
  let fixture: ComponentFixture<AnimeViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
