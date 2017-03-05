import { GithubService } from './../service/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {
  user: any;
  repos: any[];
  username: string;

  constructor(private _githubService: GithubService) {
    this.user = false;
  }

  searchUser() {
    if (this.username) {
      this._githubService.updateUser(this.username);

      this._githubService.getUser().subscribe(user => {
        this.user = user;
      });

      this._githubService.getRepos().subscribe(repos => {
        this.repos = repos;
      });
    }else{
      this.user=null;
    }
  
  }

}
