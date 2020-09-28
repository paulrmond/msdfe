import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlastComponent } from './text-blast.component';

describe('TextBlastComponent', () => {
  let component: TextBlastComponent;
  let fixture: ComponentFixture<TextBlastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBlastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
