import { Component, OnInit } from '@angular/core';
import { BlogsServiceClass } from './blogs.service';
import { response } from 'src/app/shared/response.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  private page = 1; // Increase when scrolling down

  private blogs = [];

  constructor(private blogService: BlogsServiceClass) { }

  ngOnInit() {
    this.blogService.getAllBlogs(this.page)
      .subscribe(
        (res: response) => {
          res.data.blogs.forEach(blog => {
            // this.blogs.push(blog);
          });
          console.log(this.blogs);
        },
        (err) => {
          console.log(err.message);
        }
      );
  }

}
