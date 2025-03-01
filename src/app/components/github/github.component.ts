import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  repositories: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepositories().subscribe((data) => {
      this.repositories = data;
    });
  }
}
