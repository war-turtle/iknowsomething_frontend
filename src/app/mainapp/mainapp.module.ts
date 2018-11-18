import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainappRoutingModule } from './mainapp-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PostblogComponent } from './postblog/postblog.component';

@NgModule({
  declarations: [ProfileComponent, BlogsComponent, PostblogComponent],
  imports: [
    CommonModule,
    MainappRoutingModule
  ]
})
export class MainappModule { }
