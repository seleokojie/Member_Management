/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SarangbangComponent } from './Sarangbang.component';

describe('SarangbangComponent', () => {
  let component: SarangbangComponent;
  let fixture: ComponentFixture<SarangbangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarangbangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarangbangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
