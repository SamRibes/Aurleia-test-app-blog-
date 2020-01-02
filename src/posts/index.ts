import { inject } from 'aurelia-framework'
import { PostService } from '../common/services/post-service'
import { AuthService } from '../common/services/auth-service'

@inject(PostService)
export class Index {

  postService: PostService;
  posts: { title: string; body: string; author: string; slug: string; tags: string[]; createdAt: Date; }[];

  constructor() {
    this.postService = new PostService(new AuthService);
  }

  attached() {
    this.postService.allPostPreviews().then(data => {
      var data1:  any;
      data1 = data;
      if(data1.errors){
        //handle errors
      }
      else{
        this.posts = data1.posts;
        console.log(this.posts);
      }
    })
  }
}
