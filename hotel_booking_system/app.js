document.addEventListener("DOMContentLoaded", function() {
    const roomsContainer = document.getElementById("rooms-container");
    const roomDetailsContainer = document.getElementById("room-details");

    if (roomsContainer) {
        fetchRooms();
    } else if (roomDetailsContainer) {
        fetchRoomDetails();
    }

    async function fetchRooms() {
        const response = await fetch("rooms.json");
        const rooms = await response.json();

        roomsContainer.innerHTML = rooms.map(room => `
            <div class="room-card">
                <img src="${room.image}" alt="${room.name}">
                <h2>${room.name}</h2>
                <p>Price: <strong>€${room.price}</strong> per night</p>
                <button onclick="viewRoom(${room.id})">View Details</button>
            </div>
        `).join('');
    }

    function viewRoom(roomId) {
        window.location.href = `room.html?id=${roomId}`;
    }

    async function fetchRoomDetails() {
        const params = new URLSearchParams(window.location.search);
        const roomId = params.get("id");

        const response = await fetch("rooms.json");
        const rooms = await response.json();

        const room = rooms.find(r => r.id == roomId);

        if (room) {
            roomDetailsContainer.innerHTML = `
                <div class="room-details">
                    <img src="${room.image}" alt="${room.name}">
                    <h2>${room.name}</h2>
                    <p><strong>Price:</strong> €${room.price} per night</p>
                    <p>${room.description}</p>
                    <a href="index.html" class="back-button">← Back to Rooms</a>
                </div>
            `;
        } else {
            roomDetailsContainer.innerHTML = "<p>Room not found</p>";
        }
    }
});
