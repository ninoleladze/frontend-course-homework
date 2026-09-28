import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public people: any[]=[
    {
id:1,
firstName:"nini",
Image:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
attendance:100,
stipendia:true
},
{
  id:2,
  firstName:"mari",
  Image:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
  attendance:60,
  stipendia:false
  },
  {
    id:3,
    firstName:"luka",
    Image:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    attendance:100,
    stipendia:true
    },
    {
      id:5,
      firstName:"nika",
      Image:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
      attendance:65,
      stipendia:false
      },

  ]

}
