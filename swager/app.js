document.addEventListener("DOMContentLoaded", function () {
    addHeader(); 
    function fetchRooms() {
        fetch()
            .then(function (response) {
                return response.json();
            })
            .then(function (rooms) {
                let roomsHTML = rooms.map(function (room) {
                    
                }).join("");

                roomsContainer.innerHTML = roomsHTML;
            })
            
    }
   
           
    
        function addHeader() {
            let headerHTML = `
                <header>
                    <h1><a href="hotel.html" class="logo"> Hotel Booking</a></h1>
                    <nav>
                        <a href="index.html"> Home</a>
                        <a href="room.html?id=1"> Room Details</a>
                    </nav>
                </header>
            `;
            document.body.insertAdjacentHTML("afterbegin", headerHTML);
        }
    });
    
