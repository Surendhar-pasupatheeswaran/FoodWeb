import { UserServiceService } from './service/user-service.service';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserServiceService);
  if (userService.isLoggedIn()) {
    // Add your logic here for when the user is logged in
    return true;
  }
  // Add your logic here for when the user is not logged in
  return false;
};
