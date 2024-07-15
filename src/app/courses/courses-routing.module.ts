import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseComponent } from "./course/course.component";
import { HomeComponent } from "./home/home.component";
import { courseResolver } from "./services/course.resolver";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":courseUrl",
    component: CourseComponent,
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
