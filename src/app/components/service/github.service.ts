import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '63bce7d3cde59cbf01bb';
  private client_secret = '907b1dd0769e90802d9dc0fd11c6cbd9c6c5f671';

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'vharshit1';
  }

  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
  updateUser(username: string) {
    this.username = username;
  }
}