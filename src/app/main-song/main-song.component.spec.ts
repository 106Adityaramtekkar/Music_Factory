import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSongComponent } from './main-song.component';

describe('MainSongComponent', () => {
  let component: MainSongComponent;
  let fixture: ComponentFixture<MainSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
