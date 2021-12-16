import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveComponentComponent } from './recursive-component.component';

describe('RecursiveComponentComponent', () => {
  let component: RecursiveComponentComponent;
  let fixture: ComponentFixture<RecursiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
