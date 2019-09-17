import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'title 1', text: 'text 1', id: 1},
    {title: 'title 2', text: 'text 2', id: 2},
    {title: 'title 3', text: 'text 3', id: 3},
  ]

  constructor() {
  }
  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('App comp', post);
  }



}
