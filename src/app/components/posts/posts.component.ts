import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post.model';
import { PostsService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts?: Post[];
  currentPost?: Post;
  currentIndex = -1;
  title = '';

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.retrievePosts();
  }
  retrievePosts(): void {
    this.postService.getAll()
      .subscribe(
        data => {
          this.posts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrievePosts();
    this.currentPost = undefined;
    this.currentIndex = -1;
  }

  setActivePost(posts: Post, index: number): void {
    this.currentPost = posts;
    this.currentIndex = index;
  }

}

