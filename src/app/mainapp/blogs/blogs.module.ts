import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { IndividualBlogComponent } from './individual-blog/individual-blog.component';
import { BlogsComponent } from './blogs.component';
import { WriteblogComponent } from './writeblog/writeblog.component';

@NgModule({
  declarations: [IndividualBlogComponent, BlogsComponent, WriteblogComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
