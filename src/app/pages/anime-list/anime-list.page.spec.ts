import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimeListPage } from './anime-list.page';

describe('AnimeListPage', () => {
  let component: AnimeListPage;
  let fixture: ComponentFixture<AnimeListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
