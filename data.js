const eventData = {
    title: "Summer BBQ Bash!",
    date: "June 27th, 2026, 12:00PM",
    expectations: [
        {
            title: "Food & Drink",
            icon: "🍔",
            description: "We'll have the grills ready! Please bring your own food (ready-to-grill or ready-to-eat items from a supermarket) and your preferred drinks. While everyone should bring their own basics, we highly recommend bringing a little extra to share with the group so we can all enjoy a communal feast!"
        },
        {
            title: "Equipment",
            icon: "🛠️",
            description: "The main focus is renting the BBQ equipment for everyone. Depending on the park, amenities like seats or tarps might be provided, but it's not guaranteed. If you have your own portable chairs or mats, feel free to bring them along! Otherwise, we can always enjoy a relaxed picnic-style session on the grass."
        },
        {
            title: "People & Cost",
            icon: "💰",
            description: "We're expecting around 15 people (including significant others and one child, but definitely not the sausage dog—don't grill him!). Regarding cost, it will be VERY ROUGHLY 1,000 yen per person, which only covers the rental of the BBQ equipment. Food and drink costs are not included. If food preparation ends up being expensive, we'll tally up the total expenses and split the difference at the end to ensure it's fair for everyone!"
        }
    ],
    locations: [
        {
            name: "Makuhari Seaside Park",
            description: "A breezy, modern seaside park perfect for walking along the shore and enjoying the ocean view.",
            amenities: ["Sea Breeze", "Grills", "Toilets"],
            stations: [
                { name: "Kaihin-Makuhari", line: "Keio Line", walkMinutes: 5 }
            ],
            lat: 35.651,
            lng: 139.986,
            googleMapsUrl: "https://maps.app.goo.gl/tFF8BH5gk9vdYW1q6",
            image_url: "https://images.unsplash.com/photo-1507524290867-c7fed864a301?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Akatsuka Park",
            description: "A lush, tranquil urban escape with expansive greenery, great for a relaxed picnic or a peaceful stroll.",
            amenities: ["Shade", "Picnic Areas", "Toilets"],
            stations: [
                { name: "Takashimadaira", line: "Mita Line", walkMinutes: 8 }
            ],
            lat: 35.765,
            lng: 139.815,
            googleMapsUrl: "https://maps.app.goo.gl/ssjt9TkNJpPZ5JEo6",
            image_url: "https://images.unsplash.com/photo-1473448912268-047336050041?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Toneri Park",
            description: "A massive, open-feeling park perfect for large gatherings and activities.",
            amenities: ["Open Space", "Picnic Tables", "Toilets"],
            stations: [
                { name: "Toneri Kōen", line: "Nippori-Toneri Liner", walkMinutes: 3 }
            ],
            lat: 35.812,
            lng: 139.835,
            googleMapsUrl: "https://maps.app.goo.gl/ex9f6CVVvoeTz2nYA",
            image_url: "https://images.unsplash.com/photo-1464822793000-0b531627306a?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "ShioKaze Park",
            description: "A beautiful park by the water, known for its pleasant atmosphere and breeze.",
            amenities: ["Waterfront", "Grills", "Shade"],
            stations: [
                { name: "Tokyo International Cruise", line: "Yurikamome Line", walkMinutes: 3 }
            ],
            lat: 35.655,
            lng: 139.775,
            googleMapsUrl: "https://maps.app.goo.gl/7ViUeBehmYQtrhka7",
            image_url: "https://images.unsplash.com/photo-1501785888041-afcbf404fa11?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Kiba Park",
            description: "A park with beautiful greenery and peaceful walking paths.",
            amenities: ["Greenery", "Picnic Tables", "Toilets"],
            stations: [
                { name: "Kiba", line: "Tozai Line", walkMinutes: 5 }
            ],
            lat: 35.688,
            lng: 139.813,
            googleMapsUrl: "https://maps.app.goo.gl/ufj3UQgRncQzM7E28",
            image_url: "https://images.unsplash.com/photo-1523413555806-de853600113e?auto=format&fit=crop&q=80&w=800"
        }
    ]
};