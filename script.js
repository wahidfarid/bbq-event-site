document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const submitBtn = document.getElementById('submit-password');
    const errorMsg = document.getElementById('error-msg');
    const overlay = document.getElementById('password-overlay');
    const appContent = document.getElementById('app-content');

    const CORRECT_PASSWORD = 'hotdog';

    const checkPassword = () => {
        if (passwordInput.value === CORRECT_PASSWORD) {
            overlay.classList.add('hidden');
            appContent.classList.remove('hidden');
            initApp();
        } else {
            errorMsg.classList.remove('hidden');
            passwordInput.value = '';
            setTimeout(() => {
                errorMsg.classList.add('hidden');
            }, 2000);
        }
    };

    submitBtn.addEventListener('click', checkPassword);

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    function initApp() {
        // 1. Populate Hero Section
        document.getElementById('event-title').textContent = eventData.title;
        document.getElementById('event-date').textContent = eventData.date;

        // 2. Populate Expectations Section
        const expectationsList = document.getElementById('expectations-list');
        expectationsList.innerHTML = ''; 
        eventData.expectations.forEach(exp => {
            const div = document.createElement('div');
            div.className = 'bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-400';
            div.innerHTML = `
                <div class="text-3xl mb-2">${exp.icon}</div>
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
        locationsGrid.innerHTML = ''; 

        eventData.locations.forEach(loc => {
            // 1. Add Marker to Map with Image Popup
            const markerPopupContent = `
                <div style="width: 150px; text-align: center;">
                    <img src="${loc.image_url}" style="width: 100%; border-radius: 8px; margin-bottom: 5px;" />
                    <b style="display: block; font-size: 14px;">${loc.name}</b>
                    <a href="${loc.googleMapsUrl}" target="_blank" style="color: #2563eb; font-size: 12px; font-weight: bold;">Open in Google Maps</a>
                </div>
            `;
            const marker = L.marker([loc.lat, loc.lng]).addTo(map);
            marker.bindPopup(markerPopupContent);

            // 2. Create Card
            const card = document.createElement('div');
            card.className = 'location-card relative overflow-hidden rounded-xl shadow-md border-t-4 border-blue-400 min-h-[250px]';
            
            const bgImg = document.createElement('div');
            bgImg.className = 'absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none';
            bgImg.style.backgroundImage = `url('${loc.image_url}')`;
            bgImg.style.opacity = '0.4';
            bgImg.style.zIndex = '0';
            card.appendChild(bgImg);

            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'relative z-10 bg-white/80 p-6 h-full flex flex-col justify-between';
            contentWrapper.innerHTML = `
                <div>
                    <h3 class="text-2xl font-bold text-blue-800 mb-2">${loc.name}</h3>
                    <p class="text-gray-700 mb-4">${loc.description}</p>
                    <div class="mb-4">
                        ${loc.amenities.map(a => `<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">${a}</span>`).join('')}
                    </div>
                    <ul class="text-sm text-gray-600">
                        ${loc.stations.map(s => `<li class="mb-1">🚉 ${s.name} <span class="text-xs text-blue-500 font-medium">(${s.line})</span><br><span class="text-xs font-semibold text-gray-500">🚶 ${s.walkMinutes} min walk</span></li>`).join('')}
                    </ul>
                </div>
                <a href="${loc.googleMapsUrl}" target="_blank" class="mt-4 inline-block text-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded transition">
                    🚀 Open in Google Maps
                </a>
            `;
            card.appendChild(contentWrapper);
            
            locationsGrid.appendChild(card);
        });
    }
});
