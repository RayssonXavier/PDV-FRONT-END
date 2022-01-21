import { TestBed } from '@angular/core/testing';

import { GuardaTelaLoginService } from './guarda-tela-login.service';

describe('GuardaTelaLoginService', () => {
  let service: GuardaTelaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardaTelaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
