import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsServiceClass } from '../blogs.service';
import { response } from 'src/app/shared/response.model';

@Component({
  selector: 'app-individual-blog',
  templateUrl: './individual-blog.component.html',
  styleUrls: ['./individual-blog.component.scss']
})
export class IndividualBlogComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsServiceClass
  ) {}

  blogId: string;
  blog: any;

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('id'); // getting id from url params
    this.blogService.getBlog(this.blogId).subscribe((res: response) => {
      this.blog = res.data.blog;
      console.log(this.blog);
    });
  }
}
