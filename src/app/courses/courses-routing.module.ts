import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../services/auth.guard";
import { CourseComponent } from "./course/course.component";
import { HomeComponent } from "./home/home.component";
import { LessonDetailComponent } from "./lesson/lesson-detail.component";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";
import { courseResolver } from "./services/course.resolver";
import { LessonDetailResolver } from "./services/lesson-detail.resolver";
import { LessonsResolver } from "./services/lessons.resolver";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":courseUrl",
    component: CourseComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        component: LessonsListComponent,
        resolve: {
          lessons: LessonsResolver,
        },
      },
      {
        path: "lessons/:lessonSeqNo",
        component: LessonDetailComponent,
        resolve: {
          lesson: LessonDetailResolver,
        },
      },
    ],
    resolve: {
      course: courseResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CoursesRoutingModule {}
