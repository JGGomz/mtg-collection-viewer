# MTG Collection Viewer

An immersive, interactive web application for viewing and exploring your Magic: The Gathering card collection. Features stunning visual effects, multiple view modes, comprehensive filtering, detailed analytics, and a full-featured game tracker.

🔗 **Live Demo:** [https://pnz1990.github.io/mtg-collection-viewer/](https://pnz1990.github.io/mtg-collection-viewer/index.html)

![MTG Collection Viewer](https://img.shields.io/badge/MTG-Collection%20Viewer-blue)

## Features

### 🎮 Game Tracker

A comprehensive game state tracker for MTG games with support for multiple formats:

**Format Support:**
- Commander (4 players, 40 life)
- Standard, Modern, Legacy, Vintage, Pioneer, Pauper (2 players, 20 life)
- Auto-configures player count and starting life based on format

**Life & Counters:**
- Life total tracking with +/- buttons
- Poison, Energy, Experience, Storm, and Commander Tax counters
- Mana pool tracking (W/U/B/R/G/C)
- Player badges for active counters

**Commander Features (Commander format only):**
- Commander search with Scryfall integration
- Partner commander support
- Commander damage tracking per opponent
- Commander art backgrounds
- Color identity particles (floating mana symbols in commander colors)
- Rotate player panels 180° for opposite-side players

**Game Tools:**
- **Who Goes First** - Randomize turn order with shuffle animation
- **Game Log** - Timestamped action history with filtering
- **Pass Turn** - Advance to next player with automatic clock reset
- **Undo** - Revert last action (Ctrl+Z)
- **Dice Roller** - D6, D12, D20 with animated 3D dice
- **Coin Flipper** - Animated 3D coin flip
- **Stack Tracker** - Visual card stack with player assignment, duplicate cards for storm
- **End Game** - View game summary with statistics and winner declaration
- **Reset Game** - Clear all state and return to setup
- **Advanced Menu** - Access special game mechanics and settings

**Advanced Game Mechanics:**
- **Monarch/Initiative** - Track monarch and initiative status
- **City's Blessing** - Mark players with city's blessing
- **Day/Night** - Toggle day/night cycle
- **Dungeon** - Track dungeon progress
- **The Ring** - Track ring bearer and temptation level
- **Voting** - Conduct votes with results tracking
- **Planechase** - Random plane selection
- **Planeswalker Tracker** - Track planeswalker loyalty counters
- **Theme Toggle** - Switch between light/dark themes
- **Animations** - Toggle animations and particles

**Additional Features:**
- Player name customization (non-Commander formats)
- Commander format pre-selected and prominently displayed
- Keyboard shortcuts for quick actions
- Mobile-optimized layout (tablets and larger)
- Phone blocking (requires tablet or laptop)
- Responsive design for all screen sizes
- Auto-save game state
- Share game summary links

### 🎴 Multiple View Modes

- **Collection Explorer** - Grid view with all cards, charts, and statistics
- **Binder View** - Classic binder layout with page-flip animations
- **Carousel View** - Showcase cards one at a time with navigation
- **Timeline View** - Cards organized by set release date

### ✨ Interactive Card Effects

- **3D Tilt** - Click and drag cards to rotate them in 3D space
- **Foil Shimmer** - Dynamic holographic effect on foil/etched cards that moves with drag
- **Card Back** - See the card back when tilting
- **Smooth Animations** - Fluid transitions throughout the app

### 🔍 Comprehensive Filtering

- Search by card name
- Filter by set (with autocomplete)
- Price range slider
- Rarity (common, uncommon, rare, mythic)
- Finish (normal, foil, etched)
- Card type (Creature, Instant, Sorcery, etc.)
- Color (White, Blue, Black, Red, Green, Colorless, Multicolor)
- Keywords (Flying, Trample, etc.)
- Reserved List cards
- Color Identity (for EDH/Commander)
- **Clickable Labels** - Click any badge on a card to filter by that attribute

### 💰 Price Source Toggle

Choose between two price sources:
- **Manabox Prices** - Uses prices from your CSV export (supports any currency)
- **Scryfall Prices (USD)** - Uses cached Scryfall prices (requires "Load Full Data")

### 📊 Analytics Dashboard

12 interactive charts (click any segment to filter):

- By Rarity
- By Set (Count)
- By Finish
- By Price Range
- Value by Set
- Price Statistics (avg, median, min, max)
- By Condition
- Value by Rarity
- By Type
- By Color
- Mana Curve
- Average CMC by Type
- Reserved List Count/Value/Type/Top Cards

### 🏆 Achievement Badges

30 collectible achievements including:
- Collection milestones (10, 50, 100, 500, 1000 cards)
- Value milestones ($100, $500, $1000, $5000)
- Foil collector badges
- Type specialist badges (creature collector, spell slinger, etc.)
- Color devotion badges
- Mana curve achievements

### 🔧 Additional Tools

- **Trading Binder** - Git-persisted trading binder with password-protected admin access
  - **Lock/Unlock System** - Password modal with SHA-256 verification
  - **Admin Mode (Unlocked)** - Add/remove cards, view pending changes, download JSON for git commit
  - **User Mode (Locked)** - Read-only view of git-persisted cards only
  - **Context Menu** - Right-click any card → "Add to Trading Binder" (admin only)
  - **State Badges** - ✓ (persisted in git) and ⚠️ (pending local changes)
  - **Sync Banner** - Shows unpersisted changes with "Download File" and "Reset to Git" buttons
  - **Scryfall Integration** - Fetches all card data from Scryfall (independent of Collection.csv)
  - **Default Sort** - By price (high to low)
- **Wishlist** - Git-persisted wishlist with Scryfall search and password-protected admin access
  - **Scryfall Search Modal** - Search any card with set filter autocomplete and sort options
  - **Foil/Non-Foil Versions** - Shows both versions as separate entries using Scryfall's foil flags
  - **Lock/Unlock System** - Same admin password as trading binder (`data/admin-password.json`)
  - **State Badges & Sync Banner** - Matching trading binder UX
  - **Filters** - Search, price slider, foil, keyword, color, sort
  - **Detail Links** - Open in new tab, handle foil ID suffixes
  - **3D Card Effects** - Drag to tilt cards in search results
- **Deck Checker** - Paste a deck list to see which cards you own vs. need
  - **Flavor Name Support** - Automatically matches cards with flavor names (e.g., "Gary, the Snail" → "Toxrill, the Corrosive")
  - Supports Moxfield format (handles double-faced cards with single slash)
  - Two-pass checking: exact matches first, then Scryfall lookup for alternate names
  - Convert deck to owned versions with foil indicators
  - Visual version selector with card images, 3D tilt, and foil shimmer
  - Handles multiple versions with different names (flavor names, actual names)
  - **Change Missing Card Versions** - Pick specific printings (foil/non-foil) for cards you don't own
  - **Add to Wishlist** - Right-click missing cards or "Add All Missing to Wishlist" button
  - Moxfield bulk edit format output
  - Copy to clipboard
  - Rate limiting protection with automatic retry
  - All searches filtered to paper cards only (no MTGO promos)
- **Trade Calculator** - Compare trade values with visual card selection
  - Select cards from your collection to trade away
  - Enter cards to receive (fetches all printings from Scryfall)
  - Visual version picker with normal/foil prices
  - Copy trade summary to clipboard
  - Generate shareable trade links
- **Collection Trivia** - 10-question quiz game testing your knowledge of your own collection
- **Guess the Card** - Progressive hint game with 10 clues per card
  - Hints reveal: mana value, colors, rarity, type, set, price, mana cost, P/T, subtype, first letter
  - Autocomplete from your collection
  - Score based on hints used
  - Dramatic card reveal animation
- **Random Card** - Jump to a random card in your collection
- **Load Full Data** - Fetch extended card data (types, colors, keywords) from Scryfall API
- **Clear Filters** - Reset all filters with one click

### 🎨 Themes

10 MTG guild-inspired color themes:
Azorius, Dimir, Rakdos, Gruul, Selesnya, Orzhov, Izzet, Golgari, Boros, Simic

### 📱 Responsive Design

Fully responsive layout that works on desktop, tablet, and mobile devices.

## Setup

1. Fork this repository
2. Export your collection as CSV from [Moxfield](https://www.moxfield.com/) or [ManaBox](https://www.manabox.app/)
3. Replace `data/Collection.csv` with your exported file (either `Collection.csv` or `collection.csv` works)
4. Enable GitHub Pages (Settings → Pages → Source: Deploy from branch → `main`)
5. Your site will be live at `https://<username>.github.io/mtg-collection-viewer/`

### CSV Format

The app auto-detects columns by header name, so it works with different CSV formats. Required columns:
- **Name** — Card name
- **Scryfall ID** — Scryfall UUID (required for images and data)
- **Set Code** (or `Edition Code`) — Set abbreviation
- **Set Name** (or `Edition`) — Full set name
- **Collector Number** (or `Card Number`)
- **Foil** — `true`/`false` or `normal`/`foil`/`etched`
- **Rarity** — `common`, `uncommon`, `rare`, `mythic`
- **Quantity** (or `Count`)
- **Price** (or `Purchase price`)
- **Currency** (or `Purchase price currency`) — defaults to `USD`

Both Moxfield and ManaBox CSV exports are supported out of the box.

### Changing the Admin Password

The trading binder and wishlist use a shared password for admin access (add/remove cards). The password hash is stored in `data/admin-password.json`.

To set your own password:

1. Generate a SHA-256 hash of your desired password:
   ```bash
   echo -n "your-password-here" | shasum -a 256
   ```
2. Replace the hash in `data/admin-password.json`:
   ```json
   {
     "passwordHash": "your-generated-hash-here"
   }
   ```
3. Commit and push

Or generate the hash in your browser console:
```javascript
crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-password-here'))
  .then(buf => console.log([...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('')));
```

## Testing

The project includes a comprehensive test suite with 250+ tests across 27 suites:

- **test/index.html** — Open in a browser to run all tests
- **test/test.js** — All test cases

Test coverage includes: game tracker, filters, deck checker wishlist integration, CSV parsing, price logic, color matching, sort order, card state management, and more.

A pre-push git hook validates all JavaScript (including inline `<script>` tags in HTML files) before allowing pushes.

## Project Structure

```
mtg-collection-viewer/
├── index.html          # Collection Explorer (main page)
├── binder.html         # Binder view
├── carousel.html       # Carousel view
├── timeline.html       # Timeline view
├── detail.html         # Card detail page
├── deck-checker.html   # Deck checker tool
├── trade-calculator.html # Trade calculator
├── trading-binder.html # Trading binder management
├── wishlist.html       # Wishlist management
├── trivia.html         # Collection trivia game
├── guess-card.html     # Guess the card game
├── data/
│   ├── Collection.csv  # Your card collection data
│   ├── trading-binder.json # Trading binder cards
│   ├── wishlist.json       # Wishlist cards
│   └── admin-password.json # Shared admin password hash
├── js/
│   ├── shared.js       # Shared functions and utilities
│   ├── grid.js         # Collection Explorer logic
│   ├── binder.js       # Binder view logic
│   ├── carousel.js     # Carousel view logic
│   ├── timeline.js     # Timeline view logic
│   ├── detail.js       # Card detail page logic
│   ├── trading-binder.js # Trading binder logic
│   └── wishlist.js     # Wishlist logic with Scryfall search
├── css/
│   ├── style.css       # Main stylesheet
│   └── detail.css      # Card detail page styles
└── images/
    ├── back.png        # Card back image
    └── favicon.ico     # Site favicon
```

## License

MIT License - Feel free to use and modify for your own collection!

---
Last updated: February 2026

## Credits

- Card images and data from [Scryfall](https://scryfall.com/)
- Set icons from Scryfall's SVG API
- Built with ❤️ for the MTG community
