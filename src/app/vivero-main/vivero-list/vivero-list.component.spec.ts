/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViveroListComponent } from './vivero-list.component';

describe('ViveroListComponent', () => {
  let component: ViveroListComponent;
  let fixture: ComponentFixture<ViveroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViveroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViveroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
