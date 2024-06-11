import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './data/post-list.component.ts/post-list.component';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar.component';
import { PostListItemComponent } from './data/post-list.component.ts/post-list-item/post-list-item.component';
import { AddPostComponent } from './data/add-post.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path: '', component:PostListComponent},
  {path: 'home', component:AppComponent},
  {path: 'Top bar', component:TopBarComponent},
  {path: 'Post item', component: PostListItemComponent},
  {path: 'add-post', component: AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { 
  
}
