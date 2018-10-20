import { Injectable } from '@angular/core';
import { Friend } from 'src/app/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsStorageService {

  storageKey = 'WeddingList-';

  constructor() { }

  getFriends(person: string): Friend[] {
    if (!person) {
      console.error('Person is required');
    }
    const friends = JSON.parse(localStorage.getItem(this.storageKey + person));
    console.log('getfriends', localStorage.getItem(this.storageKey + person));
    return <Friend[]> friends.friends;
  }

  saveFriends(person: string, friends: Friend[]) {
    if (!person) {
      console.error('Person is required');
    }
    console.log('save', friends)
    localStorage.setItem(this.storageKey + person, JSON.stringify(friends));
  }

}
