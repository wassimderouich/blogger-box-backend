import {Category} from "./category";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

export interface Post {
    id: string;
    title:string;
    content: string;
    createdDate: Date;
    category: Category;
    
}

export type PostWithoutID ={
  title: string;
  category: string;
  content: string;
};

export type PostWithTimestamp = Post & { timestamp: string };