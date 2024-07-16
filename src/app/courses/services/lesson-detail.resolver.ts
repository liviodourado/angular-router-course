import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { LessonDetail } from "../model/lesson-detail";
import { CoursesService } from "./courses.service";

export const LessonDetailResolver: ResolveFn<LessonDetail> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  courses: CoursesService = inject(CoursesService)
): Observable<LessonDetail> => {
  const courseUrl = route.parent.paramMap.get("courseUrl"),
    lessonSeqNo = route.paramMap.get("lessonSeqNo");

  return courses.loadLessonDetail(courseUrl, lessonSeqNo);
};
