import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseComponent } from "./course/course.component";
import { HomeComponent } from "./home/home.component";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";
import { courseResolver } from "./services/course.resolver";
import { LessonsResolver } from "./services/lessons.resolver";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":courseUrl",
    component: CourseComponent,
    children: [
      {
        path: "",
        component: LessonsListComponent,
        resolve: {
          lessons: LessonsResolver,
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
