import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { MediaModule } from "../../common/media/media.module";
import { RouterModule, Routes } from "@angular/router";
import { PanigationModule } from "../../common/panigation/panigation.module";
import { BaseService } from "../../service/base";
import { CommonModule } from "@angular/common";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BlogCreateComponent } from "./blog-create/blog-create.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "create",
    component: BlogCreateComponent,
  },
  {
    path: "blog/:blog_id",
    component: BlogDetailComponent,
  },
  {
    path: "blog/:blog_id/edit",
    component: BlogCreateComponent,
  },
];
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MediaModule,
    PanigationModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [],
  declarations: [HomeComponent, BlogDetailComponent, BlogCreateComponent],
  providers: [BaseService],
})
export class HomeModule {}
