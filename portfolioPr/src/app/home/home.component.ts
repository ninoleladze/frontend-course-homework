// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit {
  sparkles: { top: string; left: string; delay: string }[] = [];
  
  skills = [
    {
      icon: 'fab fa-js',
      title: 'JavaScript',
      description: 'Creating interactive and dynamic web experiences'
    },
    {
      icon: 'fab fa-angular',
      title: 'Angular',
      description: 'Building powerful single-page applications'
    },
    {
      icon: 'fab fa-html5',
      title: 'HTML5 & CSS3',
      description: 'Crafting beautiful and responsive layouts'
    }
  ];

  ngOnInit(): void {
    this.createSparkles();
  }

  createSparkles(): void {
    for (let i = 0; i < 10; i++) {
      this.sparkles.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`
      });
    }
  }
}
