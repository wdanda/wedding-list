import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsListComponentComponent } from './friends-list-component/friends-list-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FriendsStorageService } from 'src/app/friends-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FriendsStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
