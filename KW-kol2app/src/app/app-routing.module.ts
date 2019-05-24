import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KWBlogComponent} from "./kw-blog/kw-blog.component";
import {KWBlogItemComponent} from "./kw-blog-item/kw-blog-item.component";

const routes: Routes = [
  {
    path:"blog",
    component:KWBlogComponent
  },
  {
    path:"blog/item",
    component:KWBlogItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
