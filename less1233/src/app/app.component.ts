import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'less1233';
   
  ngOnInit() : void{
    console.log("ng");
    
  }
  constructor(public renderer: Renderer2){
    console.log("conss");
    
  }
  ngAfterViewInit(): void {
    
// this.myH1.nativeElement.style.color="red";

// this.myH1.nativeElement.innerText="nini";

  }

@ViewChild("satesto") public myH1!: ElementRef

changeme(){
// this.myH1.nativeElement.style.color="red";

this.renderer.addClass(this.myH1.nativeElement,"rame")
}





}
