import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isUserLogin = localStorage.getItem('user');
  if (isUserLogin != null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
