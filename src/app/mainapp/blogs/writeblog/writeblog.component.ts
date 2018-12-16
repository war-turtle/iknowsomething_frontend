import { Component, OnInit } from '@angular/core';
import { BlogsServiceClass } from '../blogs.service';

declare var M;

@Component({
  selector: 'app-writeblog',
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.scss']
})
export class WriteblogComponent implements OnInit {
  title = '';
  content = '';

  constructor(private blogService: BlogsServiceClass) { }

  ngOnInit() {
  }

  titleChange(value: string) {
    this.title = value;
  }

  contentChange(value: string) {
    this.content = value;
  }

  onSubmit() {
    if (this.title === '' || this.content === '') {
      M.toast({ html: 'Please Enter Something Valid' });
    } else {
      this.blogService.submitBlog({
        token: sessionStorage.getItem('token'),
        title: this.title,
        content: this.content
      }).subscribe((res) => {
        M.toast({ html: res.message });
      }, (err) => {
        M.toast({ html: err.message });
      });
    }
  }
}
