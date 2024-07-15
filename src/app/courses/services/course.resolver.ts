import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";

export const courseResolver: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  courses: CoursesService = inject(CoursesService),
  courseUrl = route.paramMap.get("courseUrl")
): Observable<Course> => {
  return courses.loadCourseByUrl(courseUrl);
};
