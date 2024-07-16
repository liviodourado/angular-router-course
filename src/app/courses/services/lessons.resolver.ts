import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { LessonSummary } from "../model/lesson-summary";
import { CoursesService } from "./courses.service";

export const LessonsResolver: ResolveFn<LessonSummary[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  courses: CoursesService = inject(CoursesService),
  courseUrl = route.paramMap.get("courseUrl")
): Observable<LessonSummary[]> => {
  return courses.loadAllCourseLessonsSummary(courseUrl);
};
