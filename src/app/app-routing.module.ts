import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsListComponentComponent } from './friends-list-component/friends-list-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
  path: 'friends/:person',
  component: FriendsListComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
