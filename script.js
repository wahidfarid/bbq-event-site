document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Hero Section
    document.getElementById('event-title').textContent = eventData.title;
    document.getElementById('event-date').textContent = eventData.date;

    // 2. Populate Expectations Section
    const expectationsList = document.getElementById('expectations-list');
    eventData.expectations.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-400';
        div.innerHTML = `
            <h3 class="text-xl font-bold mb-2 text-blue-800">${exp.title}</h3>
            <p class="text-gray-600">${exp.description}</p>
        `;
        expectationsList.appendChild(div);
    });

    // 3. Initialize Map
    const map = L.map('map').setView([35.6895, 139.6917], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const locationsGrid = document.getElementById('locations-grid');

    eventData.locations.forEach(loc => {
        // 1. Add Marker to Map
        const marker = L.marker([loc.lat, loc.lng]).addTo(map);
        marker.bindPopup(`<b>${loc.name}</b><br>${loc.description}`);

        // 2. Create Card
        const card = document.createElement('div');
        card.className = 'location-card bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-400 flex flex-col justify-between';
        
        let amenitiesHtml = loc.amenities.map(a => 
            `<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">${a}</span>`
        ).join('');

        card.innerHTML = `
            <div>
                <h3 class="text-2xl font-bold text-blue-800 mb-2">${loc.name}</h3>
                <p class="text-gray-600 mb-4">${loc.description}</p>
                <div class="mb-4">${amenitiesHtml}</div>
            </div>
            <a href="${loc.googleMapsUrl}" target="_blank" class="inline-block text-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded transition">
                🚀 Open in Google Maps
            </a>
        `;
        
        locationsGrid.appendChild(card);
    });
});
