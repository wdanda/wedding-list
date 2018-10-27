import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Friend } from 'src/app/friend';
import { FriendsStorageService } from 'src/app/friends-storage.service';

@Component({
  selector: 'app-friends-list-component',
  templateUrl: './friends-list-component.component.html',
  styleUrls: ['./friends-list-component.component.scss']
})
export class FriendsListComponentComponent implements OnInit, OnChanges {

  person: string;
  friends: Friend[];
  includedFriends: Friend[];
  excludedFriends: Friend[];

  constructor(
    private route: ActivatedRoute,
    private friendsStorage: FriendsStorageService
  ) {
  }

  ngOnInit() {
    this.person = this.route.snapshot.paramMap.get('person');
    this.getFriends();
  }

  ngOnChanges() {
    this.updateFriendsFiltering();
  }

  getFriends() {
    this.friends = this.friendsStorage.getFriends(this.person);
    this.updateFriendsFiltering();
  }

  updateFriendsFiltering() {
    if (!this.friends) {
      return;
    }
    this.includedFriends = this.friends.filter(f => f.included);
    this.excludedFriends = this.friends.filter(f => !f.included);
  }

  onFilesAdded(files) {
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const data = JSON.parse(reader.result.toString());
      if (!data || !data.friends) {
        console.warn('Unable to parse friends file');
        return;
      }
      this.friendsStorage.saveFriends(
        this.person,
        <Friend[]> data.friends
      );
      this.getFriends();
    };
  }

  excludeFriend(friend: Friend) {
    friend.included = false;
    this.updateFriendsFiltering();
    this.saveFriends();
  }

  includeFriend(friend: Friend) {
    friend.included = true;
    this.updateFriendsFiltering();
    this.saveFriends();
  }

  toggleFriend(friend: Friend) {
    friend.included = !friend.included;
    this.updateFriendsFiltering();
    this.saveFriends();
  }

  saveFriends() {
    // console.log()
    this.friendsStorage.saveFriends(this.person, this.friends);
  }

}
