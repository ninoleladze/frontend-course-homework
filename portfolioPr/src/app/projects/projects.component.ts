import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {
  categories = ['all', 'web', 'mobile', 'design'];
  selectedCategory = 'all';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Fairy Portfolio',
      description: 'A magical portfolio website with fairy tale theme',
      image: 'assets/projects/portfolio.jpg',
      category: ['web', 'design'],
      technologies: ['Angular', 'TypeScript', 'CSS'],
      liveUrl: 'https://example.com/portfolio',
      githubUrl: 'https://github.com/example/portfolio',
      featured: true
    },
    {
      id: 2,
      title: 'Enchanted E-commerce',
      description: 'An e-commerce platform with magical user experience',
      image: 'assets/projects/ecommerce.jpg',
      category: ['web'],
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/example/ecommerce',
      featured: true
    },
    {
      id: 3,
      title: 'Magical Mobile App',
      description: 'A mobile application with enchanting animations',
      image: 'assets/projects/mobile-app.jpg',
      category: ['mobile'],
      technologies: ['Flutter', 'Dart', 'Firebase'],
      liveUrl: 'https://example.com/mobile-app',
      githubUrl: 'https://github.com/example/mobile-app',
      featured: false
    }
  ];
  
  filteredProjects: Project[] = [];
  
  ngOnInit(): void {
    // Initialize with all projects
    this.filterProjects('all');
  }
  
  filterProjects(category: string): void {
    this.selectedCategory = category;
    
    if (category === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.category.includes(category)
      );
    }
  }
}
