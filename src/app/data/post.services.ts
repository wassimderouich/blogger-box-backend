import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Post,PostWithoutID} from '../data/post';
import { environment } from '../environment/environment';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
 @Injectable()
export class PostService{
    private baseUrl = `${environment.apiUrl}v1/categories`;
    constructor (private http:HttpClient){}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.baseUrl}/posts`);
      }
    
      createPost(post: PostWithoutID): Observable<Post> {
        return this.http.post<Post>(this.baseUrl, post);
      }
    }