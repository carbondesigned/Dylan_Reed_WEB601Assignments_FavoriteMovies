import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentDialogueComponent } from './add-content-dialogue.component';

describe('AddContentDialogueComponent', () => {
  let component: AddContentDialogueComponent;
  let fixture: ComponentFixture<AddContentDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContentDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
