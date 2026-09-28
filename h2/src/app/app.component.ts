import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  name: string;
  photo: string;
  age: number;
  courseType: string;
  attendance: number;
  scholarship: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'სტუდენტების ბარათები';
  
  students: Student[] = [
    {
      name: 'გიორგი მაისურაძე',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 20,
      courseType: 'კომპიუტერული მეცნიერება',
      attendance: 95,
      scholarship: true
    },
    {
      name: 'ნინო ბერიძე',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 19,
      courseType: 'ბიზნესის ადმინისტრირება',
      attendance: 100,
      scholarship: false
    },
    {
      name: 'ლევან კახიძე',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 21,
      courseType: 'ინჟინერია',
      attendance: 88,
      scholarship: true
    },
    {
      name: 'თამარ გოგოლაძე',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 20,
      courseType: 'ფსიქოლოგია',
      attendance: 100,
      scholarship: true
    },
    {
      name: 'დავით ჯავახიშვილი',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 22,
      courseType: 'მათემატიკა',
      attendance: 92,
      scholarship: false
    },
    {
      name: 'ანა ლომიძე',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 19,
      courseType: 'ხელოვნების ისტორია',
      attendance: 85,
      scholarship: true
    },
    {
      name: 'ნიკა ჭავჭავაძე',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 20,
      courseType: 'ფიზიკა',
      attendance: 100,
      scholarship: false
    },
    {
      name: 'მარიამ გელაშვილი',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 21,
      courseType: 'ლიტერატურა',
      attendance: 98,
      scholarship: true
    },
    {
      name: 'ზურაბ ქავთარაძე',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 19,
      courseType: 'ქიმია',
      attendance: 90,
      scholarship: false
    },
    {
      name: 'ელენე ბაქრაძე',
      photo: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
      age: 22,
      courseType: 'ეკონომიკა',
      attendance: 100,
      scholarship: true
    }
  ];
}
