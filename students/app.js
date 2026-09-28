let students = [
    { name: "ლაშა", photo: "https://pics.craiyon.com/2023-12-19/2NeK-7dYRs2GUim7CdVX1A.webp", age: 22, course: "ვებ დეველოპმენტი", attendance: 100, scholarship: true },
    { name: "თათია", photo: "https://i.pinimg.com/736x/aa/15/f9/aa15f9ef3599198ab2cefcf9c3683d9b.jpg", age: 20, course: "გრაფიკული დიზაინი", attendance: 95, scholarship: false },
    { name: "გიორგი", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzVKIwYQQAwi_dnGCNsWJj1XMlVLp5PisJGZuk4-dt8UJJDg80BK6QPCRHLDjUrc64NME&usqp=CAU", age: 23, course: "პროგრამირება", attendance: 100, scholarship: true },
    { name: "ეკა", photo: "https://www.artyfactory.com/portraits/pencil-portraits/images/pencil-portrait-10.jpg", age: 21, course: "მარკეტინგი", attendance: 88, scholarship: false },
    { name: "დავით", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49yx5X8Mjw0UZAjA-04MKWL9oInPtQh-AxB7w7SSupo69-0HtZ9rPhBGDLdNFOEBMmsg&usqp=CAU", age: 22, course: "UX/UI დიზაინი", attendance: 92, scholarship: true },
    { name: "ანა", photo: "https://i.redd.it/lmqxxw456ty91.jpg", age: 19, course: "ანალიტიკა", attendance: 97, scholarship: false },
    { name: "ლევან", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvcHwTic21EcOhAoGQP-a6_jrBq-DagVb9A&s", age: 24, course: "ციფრული მარკეტინგი", attendance: 100, scholarship: true },
    { name: "სოფო", photo: "https://live.staticflickr.com/65535/49622496197_dd6a2d7c69_z.jpg", age: 22, course: "გეიმ დეველოპმენტი", attendance: 85, scholarship: false },
    { name: "მარიამ", photo: "https://i.pinimg.com/474x/e4/8d/f4/e48df46200305a6bb98752735f1f2d12.jpg", age: 20, course: "მობილური აპლიკაციები", attendance: 90, scholarship: true },
    { name: "ნიკა", photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e6d2b65-00ac-41df-9a49-2e7c9cdd2550/debckqu-0aa8a1c8-ac20-4d4a-b619-1cf7feaec2c1.png/v1/fill/w_1280,h_1280,q_80,strp/boy_portrait_drawing_by_nickkoyart_debckqu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzJlNmQyYjY1LTAwYWMtNDFkZi05YTQ5LTJlN2M5Y2RkMjU1MFwvZGViY2txdS0wYWE4YTFjOC1hYzIwLTRkNGEtYjYxOS0xY2Y3ZmVhZWMyYzEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BEynQ-olz1ij2uUAltFS9-cCZZnSbE8uXIglPx9v45A", age: 23, course: "AI ინჟინერია", attendance: 100, scholarship: false }
];

function showStudents() {
    let root = document.getElementById("root");
    students.forEach(student => {
        let card = document.createElement("div");
        card.className = "card";
        
        let img = document.createElement("img");
        img.src = student.photo;
        img.className = "image";
        
        let name = document.createElement("h2");
        name.textContent = student.name;
        
        let age = document.createElement("p");
        age.textContent = "ასაკი: " + student.age;
        
        let course = document.createElement("p");
        course.textContent = "კურსი: " + student.course;
        
        let attendance = document.createElement("p");
        attendance.textContent = student.attendance === 100 ? "წარმატებული" : "დასწრება: " + student.attendance + "%";
        
        if (student.scholarship) {
            let scholarship = document.createElement("p");
            scholarship.textContent = "სტიპენდიანტი";
            scholarship.style.color = "green";
            card.appendChild(scholarship);
        }
        
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(course);
        card.appendChild(attendance);
        root.appendChild(card);
    });
}

showStudents();
