import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private githubUrl = 'https://api.github.com/users/RafaelProfMgz/repos';  // Substitua com seu username no GitHub

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<any> {
    return this.http.get<any>(this.githubUrl);
  }
}
