import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ninimagaria';

  images: string[] = [
    'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
    'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    'https://dinoanimals.com/wp-content/uploads/2021/01/Cat-2.jpg',
    'https://www.pbs.org/wnet/nature/files/2014/09/ExtraordinaryCats-Main-900x506.jpg',
    'https://ychef.files.bbci.co.uk/1280x720/p07ryyyj.jpg'
  ];
  
  currentIndex = 0;
  
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
