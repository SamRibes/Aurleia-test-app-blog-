import { PostService } from './../common/services/post-service';
import {inject} from 'aurelia-framework'

@inject (PostService)
export class View {
  postService: PostService;
  post: any;

  constructor(PostService: PostService) {
    this.postService = PostService;
  }

  activate(params: { slug: string; }) {
    this.postService.find(params.slug).then(data => {
      var data1:  any;
      data1 = data;
      if(data1.errors){
        //handle errors
      }
      else{
        this.post = data1.posts;
        console.log(this.post.body)
      }
    })
  }
}
