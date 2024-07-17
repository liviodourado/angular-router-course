import { inject } from "@angular/core";
import { CanLoadFn, Route, Router, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { AuthStore } from "./auth.store";
export const CanLoadAuthGuard: CanLoadFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const auth: AuthStore = inject(AuthStore);
  const router: Router = inject(Router);

  return auth.isLoggedIn$.pipe(
    first(),
    tap((loggedIn) => {
      if (!loggedIn) {
        router.navigateByUrl("/login");
      }
    })
  );
};
