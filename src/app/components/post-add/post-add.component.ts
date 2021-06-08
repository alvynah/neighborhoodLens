import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post.model';
import { PostsService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  posts: Post = {
    title: '',
    post: '',
    user: '',
    hood: '',
    published: false
  };
  submitted = false;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }
  savePosts(): void {
    const data = {
      title: this.posts.title,
      post: this.posts.post,
      user: this.posts.user,
      hood: this.posts.hood,
    };

    this.postService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPosts() {
    this.submitted = false;
    this.posts = {
      title: '',
      post: '',
      hood: '',
      user: '',
      published: false
    };
  }
}


