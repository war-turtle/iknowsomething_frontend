import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { IndividualBlogComponent } from './individual-blog/individual-blog.component';
import { WriteblogComponent } from './writeblog/writeblog.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'write', component: WriteblogComponent },
  { path: ':id', component: IndividualBlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
