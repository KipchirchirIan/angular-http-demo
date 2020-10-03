import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { TokenComponent } from './token/token.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'token', component: TokenComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
