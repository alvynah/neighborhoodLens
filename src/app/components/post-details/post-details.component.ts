import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post.model';
import { PostsService } from 'src/app/services/post/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  currentPost: Post = {
    title: '',
    post: '',
    user: '',
    hood: '',
    published: false
  };
  message = '';

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPost(this.route.snapshot.paramMap.get('id'));
  }

  getPost(id: string | null) {
    this.postService.get(id)
      .subscribe(
        data => {
          this.currentPost = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status: boolean): void {
    const data = {
      title: this.currentPost.title,
      post: this.currentPost.post,
      user: this.currentPost.user,
      hood: this.currentPost.hood,
      published: status
    };

    this.postService.update(this.currentPost.id, data)
      .subscribe(
        response => {
          this.currentPost.published = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updatePost(): void {
    this.postService.update(this.currentPost.id, this.currentPost)
      .subscribe(
        response => {
          console.log(response);

          this.message = response.message;
          console.log(this.message);

          this.router.navigate(['/post']);

        },
        error => {
          console.log(error);
        });
  }

  deletePost(): void {
    this.postService.delete(this.currentPost.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/post']);
        },
        error => {
          console.log(error);
        });
  }

}

