import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PopUpManager } from 'src/app/managers/popUpManager';
import { TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let popUpManager: jasmine.SpyObj<PopUpManager>;
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const popUpManagerSpy = jasmine.createSpyObj('PopUpManager', ['showErrorAlert']);
    const translateServiceSpy = jasmine.createSpyObj('TranslateService', ['instant']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: PopUpManager, useValue: popUpManagerSpy },
        { provide: TranslateService, useValue: translateServiceSpy },
      ],
    });

    guard = TestBed.inject(AuthGuard);
    popUpManager = TestBed.inject(PopUpManager) as jasmine.SpyObj<PopUpManager>;
    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate if menuPermisos is valid and path matches', () => {
    // Simula un menú válido en el localStorage
    const menuMock = [
      { Url: '/ruta-protegida', Params: {} }
    ];
    localStorage.setItem('menu', btoa(JSON.stringify(menuMock)));

    const routeMock: any = { params: {} };
    const stateMock: any = { url: '/ruta-protegida' };

    expect(guard.canActivate(routeMock, stateMock)).toBeTrue();
  });

  it('should not activate if menuPermisos is null', () => {
    localStorage.removeItem('menu');
    const routeMock: any = { params: {} };
    const stateMock: any = { url: '/ruta-protegida' };

    expect(guard.canActivate(routeMock, stateMock)).toBeFalse();
    expect(popUpManager.showErrorAlert).toHaveBeenCalled();
  });

  it('should not activate if path does not match', () => {
    const menuMock = [
      { Url: '/otra-ruta', Params: {} }
    ];
    localStorage.setItem('menu', btoa(JSON.stringify(menuMock)));

    const routeMock: any = { params: {} };
    const stateMock: any = { url: '/ruta-protegida' };

    expect(guard.canActivate(routeMock, stateMock)).toBeFalse();
    expect(popUpManager.showErrorAlert).toHaveBeenCalled();
  });
});
