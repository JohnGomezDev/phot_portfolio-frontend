import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { PostModel } from '../../models/post';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  public postsList: PostModel[];

  constructor(
    private _postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  // LLamada al servicio para obtener listado de posts
  getPosts(): void {
    this._postsService.getPosts().subscribe((res) => {
      this.postsList = res.response;
    });
  }
}
