import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamviewComponent } from './teamview.component';

describe('TeamviewComponent', () => {
  let component: TeamviewComponent;
  let fixture: ComponentFixture<TeamviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
