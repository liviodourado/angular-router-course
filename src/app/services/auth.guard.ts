import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthStore } from "./auth.store";

export const AuthGuard: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const auth: AuthStore = inject(AuthStore);
  const router: Router = inject(Router);
  return auth.isLoggedIn$.pipe(
    map((loggedIn) => (loggedIn ? true : router.parseUrl("/login")))
  );
};
