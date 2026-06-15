import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { User } from '../../models/user';

export const adminGuard: CanActivateFn = () => {
  const storage = inject(LocalStorageService);
  const router = inject(Router);

  const rawUser = storage.get('user');
  const user: User | null = rawUser ? JSON.parse(rawUser) : null;

  if (user?.role === 'admin') {
    return true;
  }

  return router.createUrlTree(['/home']);
};
