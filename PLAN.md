# Project Plan: BBQ Event Website

## Overview
A simple, bright, and colorful single-page website to provide information for an upcoming BBQ on **June 27th**. The site will feature event details, location information with descriptions, an interactive map, and a poll for location preference.

## Technical Stack
- **Architecture:** Single-page static website (HTML/JS).
- **Styling:** Tailwind CSS (via CDN).
- **Theme:** Bright Blue and Yellow accents.
- **Mapping:** 
    - **Visual Map:** Leaflet.js with OpenStreetMap.
    - **Navigation:** Links to Google Maps for each location (optimized for Japan navigation).
- **Polling:** Tally.so embedded poll (Ranked choice).
- **Deployment:** GitHub Pages.

## Features
1. **Hero Section:** Event name, date (June 27th), and a catchy sub-headline.
2. **Expectations Section:** Clear bullet points/cards about food, equipment, and what to bring.
3. **Location Showcase & Map:**
    - An interactive Leaflet.js map with custom colorful pins.
    - Location cards with details (amenities) and a "Google Maps" link.
4. **The Poll:** An embedded, interactive ranked-choice poll.

## Implementation Roadmap (Current Progress)

### Phase 1: Scaffolding [COMPLETED]
- [x] Create project directory and basic files.
- [x] Set up basic HTML structure with Tailwind CSS and Leaflet.js.

### Phase 2: Data & Content [COMPLETED]
- [x] Create `data.js` for locations and content.
- [x] Define "Expectations" text content.
- [x] Integrate Tally.so Poll.

### Phase 3: UI Development [IN PROGRESS]
- [ ] Build the Hero section.
- [ ] Build the Expectations cards.
- [ ] Build the Location Cards (dynamic from `data.js`).
- [ ] Build the Map container.

### Phase 4: Interactive Features
- [ ] Implement Leaflet.js map logic (popups, markers).
- [ ] Integrate the "Open in Google Maps" functionality.

### Phase 5: Finalization
- [ ] Ensure mobile responsiveness.
- [ ] Test map interactions and links.
- [ ] Deploy to GitHub Pages.

## Constraints & Rules
- **No Comments:** Do not add comments to the code unless requested.
- **Minimalist Code:** Keep it simple and direct.
- **Error Handling:** Stop after 3 failed attempts on a single task.
