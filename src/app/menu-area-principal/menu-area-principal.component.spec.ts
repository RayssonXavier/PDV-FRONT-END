import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAreaPrincipalComponent } from './menu-area-principal.component';

describe('MenuAreaPrincipalComponent', () => {
  let component: MenuAreaPrincipalComponent;
  let fixture: ComponentFixture<MenuAreaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAreaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAreaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
