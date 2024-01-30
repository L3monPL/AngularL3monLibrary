import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3monLibraryComponent } from './l3mon-library.component';

describe('L3monLibraryComponent', () => {
  let component: L3monLibraryComponent;
  let fixture: ComponentFixture<L3monLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L3monLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(L3monLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
