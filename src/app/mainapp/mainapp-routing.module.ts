import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PostblogComponent } from './postblog/postblog.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs' },
  { path: 'profile', component: ProfileComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'write', component: PostblogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainappRoutingModule { }
