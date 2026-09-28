import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'less3';

  // public age: number = 16

  // public inputText: string = ""

  // public colorList: string[] = ["red", "blue", "brown", "green"]

  // public isShow: boolean = false

  // rameLogika() {
  //   this.age = 100
    
  // }

  // deleteItem(id:number) {
  //   this.colorList.splice(id, 1)
    
  // }


  // showHide() {
  //   this.isShow = !this.isShow
  // }


  public imageList: string[] = [
    "https://discuss-cdn.kde.org/uploads/default/original/2X/e/e301cb179b160ec4305a948ca7e3a79921d63952.jpeg",
    "https://wallpapers.com/images/featured/best-ever-desktop-bgt6dccypy1dfk0c.jpg",
    "https://www.wallcover.com/media/homeslider/WAL_Banner_Vorlage_1920x1280.jpg",
    "https://play-lh.googleusercontent.com/61ReOB6_mNLrZ8aGGsrFQcxU0pPVfAxSOv4x3w_GZizO7D6LsyNpCz23iGXqoUwi9vQ=w3840-h2160-rw"
  ]


  public i: number = 0


  next() {
    this.i++
  }

  wina() {
    this.i--
  }


}
