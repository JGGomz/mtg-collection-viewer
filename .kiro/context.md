# MTG Collection Viewer - Project Context

## Project Overview

**Name:** MTG Collection Viewer  
**Type:** Static web application (vanilla JavaScript, HTML, CSS)  
**Purpose:** Immersive, interactive Magic: The Gathering card collection viewer with game tracker  
**Live Demo:** https://pnz1990.github.io/mtg-collection-viewer/  
**Deployment:** GitHub Pages (auto-deploy from main branch)

## Core Philosophy

- **Zero dependencies** - Pure vanilla JavaScript, no frameworks
- **Minimal code** - Write only what's absolutely necessary
- **Progressive enhancement** - Start with basic functionality, add features incrementally
- **Mobile-first responsive** - Works on desktop, tablet, and mobile
- **Performance-focused** - IndexedDB caching, lazy loading, batch API calls
- **User experience first** - Smooth animations, intuitive interactions, visual feedback

## Project Structure

```
mtg-collection-viewer/
├── index.html              # Collection Explorer (main page)
├── binder.html             # Binder view with page-flip animations
├── carousel.html           # Single-card showcase view
├── timeline.html           # Cards organized by set release date
├── detail.html             # Card detail page with 3D flip
├── game-tracker.html       # Full-featured MTG game state tracker
├── deck-checker.html       # Deck ownership checker with flavor name support
├── trade-calculator.html   # Trade value comparison tool
├── trading-binder.html     # Trading binder management
├── wishlist.html           # Wishlist management
├── trivia.html             # Collection trivia quiz game
├── guess-card.html         # Progressive hint guessing game
├── data/
│   └── Collection.csv      # Moxfield CSV export (user's collection)
├── data/
│   ├── trading-binder.json # Trading binder cards (git-persisted)
│   ├── wishlist.json       # Wishlist cards (git-persisted)
│   └── admin-password.json # Shared admin password hash
├── js/
│   ├── shared.js           # Core utilities, filtering, CSV parsing, caching
│   ├── grid.js             # Collection Explorer logic
│   ├── binder.js           # Binder view logic
│   ├── carousel.js         # Carousel view logic
│   ├── timeline.js         # Timeline view logic
│   ├── detail.js           # Card detail page logic
│   ├── game-tracker.js     # Game tracker state management (80KB, 2500+ lines)
│   ├── trade.js            # Trade calculator logic
│   ├── trading-binder.js   # Trading binder logic
│   └── wishlist.js         # Wishlist logic with Scryfall search
├── css/
│   ├── style.css           # Main stylesheet (49KB)
│   ├── detail.css          # Card detail page styles
│   └── game-tracker.css    # Game tracker styles (40KB)
├── images/
│   ├── back.png            # MTG card back image
│   ├── favicon.ico         # Site favicon
│   ├── icon-192.png        # PWA icon
│   └── icon-512.png        # PWA icon
├── test/
│   ├── index.html          # Test runner
│   └── test.js             # All tests (game tracker, card back, foil, etc.)
├── .github/workflows/
│   ├── deploy.yml          # Auto-deploy to GitHub Pages
│   └── test.yml            # CI test runner
├── manifest.json           # PWA manifest
├── README.md               # User-facing documentation
└── TESTING.md              # Testing documentation
```

## Technology Stack

### Core Technologies
- **HTML5** - Semantic markup, no templating engines
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript (ES6+)** - No frameworks, no build tools
- **IndexedDB** - Client-side caching for images and card data
- **LocalStorage** - User preferences, game state persistence

### External Libraries (CDN)
- **Chart.js** - Analytics charts (12 interactive charts)
- **noUiSlider** - Price range slider
- **Scryfall API** - Card images, data, and search

### APIs Used
- **Scryfall REST API** - Card data, images, search
  - Batch endpoint: `/cards/collection` (75 cards per request)
  - Rate limiting: 100ms delay between requests
  - Caching: IndexedDB for all fetched data
- **Scryfall SVG API** - Set icons

## Coding Style & Conventions

### JavaScript Style

**Variable Declarations:**
```javascript
// Use const by default, let when reassignment needed
const collection = [];
let filteredCollection = [];

// Global state objects
const state = { players: [], turnCount: 0 };
```

**Function Style:**
```javascript
// Async functions for API calls
async function loadFullCardData(onProgress, forceRefresh = false) { }

// Arrow functions for callbacks
collection.filter(card => card.rarity === 'rare')

// Named functions for event handlers
function handleCardClick(event) { }
```

**Naming Conventions:**
- `camelCase` for variables and functions
- `PascalCase` for classes (rare, mostly avoid)
- `UPPER_SNAKE_CASE` for constants
- Descriptive names: `filteredCollection` not `fc`
- Boolean prefixes: `isFullDataLoaded()`, `isMobile()`

**Code Organization:**
```javascript
// 1. State declarations at top
const state = { /* ... */ };

// 2. Utility functions
function parseCSVLine(line) { }

// 3. Core logic functions
async function loadCollection() { }

// 4. UI update functions
function renderCards() { }

// 5. Event handlers
function setupEventListeners() { }

// 6. Initialization at bottom
initApp();
```

**Error Handling:**
```javascript
// Graceful degradation, never crash
try {
  const data = await fetch(url);
} catch (e) {
  console.error('Failed to fetch:', e);
  // Show user-friendly message
  showNotification('Failed to load data');
}
```

**Comments:**
```javascript
// Brief, explain WHY not WHAT
// Cache to avoid repeated API calls
const cached = await getCardData(scryfallId);

// Section headers for organization
// === FILTERING LOGIC ===
```

### CSS Style

**Organization:**
```css
/* 1. CSS Variables */
:root {
  --primary-color: #1a1a2e;
  --accent-color: #16213e;
}

/* 2. Reset/Base styles */
* { box-sizing: border-box; }

/* 3. Layout */
.container { display: flex; }

/* 4. Components */
.card { /* ... */ }

/* 5. Utilities */
.hidden { display: none; }

/* 6. Media queries at end */
@media (max-width: 768px) { }
```

**Naming:**
- Semantic class names: `.card-container`, `.filter-panel`
- State classes: `.active`, `.hidden`, `.disabled`
- Avoid IDs for styling (use for JS hooks)

**Responsive Design:**
```css
/* Mobile-first approach */
.card { width: 100%; }

/* Tablet and up */
@media (min-width: 768px) {
  .card { width: 50%; }
}

/* Desktop */
@media (min-width: 1024px) {
  .card { width: 33.33%; }
}
```

### HTML Style

**Structure:**
```html
<!-- Semantic HTML5 -->
<header>
  <nav><!-- Navigation --></nav>
</header>

<main>
  <section id="filters"><!-- Filters --></section>
  <section id="cards"><!-- Cards --></section>
</main>

<footer><!-- Footer --></footer>
```

**Attributes:**
- `id` for JavaScript hooks
- `class` for styling
- `data-*` for custom data: `data-scryfall-id="abc123"`
- Accessibility: `aria-label`, `role`, `tabindex`

## Key Features & Implementation Patterns

### 1. Card Rendering

**Pattern:** Reusable HTML generation function
```javascript
function renderCardHTML(card, nameCounts = {}) {
  // Returns HTML string with:
  // - Card image (lazy loaded)
  // - Badges (rarity, foil, price, set)
  // - 3D tilt effect
  // - Foil shimmer for foil/etched cards
  // - Context menu on right-click
}
```

**Usage:** All views use `renderCardHTML()` from `shared.js`

### 2. Filtering System

**Pattern:** Centralized filter application
```javascript
function applyFilters() {
  filteredCollection = collection.filter(card => {
    // Search by name
    if (searchTerm && !card.name.toLowerCase().includes(searchTerm)) return false;
    
    // Filter by set
    if (selectedSet && card.setCode !== selectedSet) return false;
    
    // Price range
    if (price < minPrice || price > maxPrice) return false;
    
    // Rarity, finish, type, color, keywords, etc.
    // ...
    
    return true;
  });
  
  renderCards(); // Update UI
}
```

**Clickable Filters:** Click any badge on a card to filter by that attribute

### 3. IndexedDB Caching

**Pattern:** Cache-first with fallback
```javascript
async function fetchCardImage(scryfallId, size = 'normal') {
  // 1. Check cache
  const cached = await getCachedImage(`${scryfallId}_${size}`);
  if (cached) return cached;
  
  // 2. Fetch from Scryfall
  const url = await fetch(`https://api.scryfall.com/cards/${scryfallId}`);
  
  // 3. Cache for next time
  await cacheImage(`${scryfallId}_${size}`, url);
  
  return url;
}
```

**Databases:**
- `mtg-images` - Card images and basic data
- `mtg-detail-cache` - Full card data (types, colors, keywords)

### 4. 3D Card Effects

**Pattern:** CSS transforms + JavaScript drag tracking
```javascript
function setupCardInteractions(container) {
  container.addEventListener('mousedown', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    
    // Track drag to rotate card in 3D
    // Show card back when tilted far enough
    // Apply foil shimmer effect on foil/etched cards
  });
}
```

**CSS:**
```css
.card {
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.card.tilted {
  transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
}
```

### 5. Game Tracker State Management

**Pattern:** Single state object with history tracking
```javascript
const state = {
  players: [],      // Array of player objects
  turnCount: 0,     // Current turn number
  activePlayer: -1, // Index of active player
  log: [],          // Game action log
  history: [],      // Undo stack
  // ... 30+ state properties
};

function saveHistory() {
  state.history.push(JSON.parse(JSON.stringify(state)));
  if (state.history.length > 50) state.history.shift();
}

function undo() {
  if (state.history.length === 0) return;
  const prev = state.history.pop();
  Object.assign(state, prev);
  updateUI();
}
```

**Persistence:** Auto-save to localStorage on every state change

### 6. Scryfall API Integration

**Pattern:** Batch requests with rate limiting
```javascript
async function loadFullCardData(onProgress, forceRefresh = false) {
  // 1. Identify uncached cards
  const uncachedIds = collection.filter(/* ... */);
  
  // 2. Batch into groups of 75
  const batches = [];
  for (let i = 0; i < uncachedIds.length; i += 75) {
    batches.push(uncachedIds.slice(i, i + 75));
  }
  
  // 3. Fetch with rate limiting
  for (const batch of batches) {
    await fetch('https://api.scryfall.com/cards/collection', {
      method: 'POST',
      body: JSON.stringify({ identifiers: batch.map(id => ({ id })) })
    });
    
    await new Promise(r => setTimeout(r, 100)); // Rate limit
    onProgress(fetched, total); // Update progress bar
  }
}
```

### 7. Flavor Name Support (Deck Checker)

**Pattern:** Two-pass matching with Scryfall fallback
```javascript
// Pass 1: Exact name match
const exactMatch = collection.find(c => c.name === cardName);

// Pass 2: Scryfall lookup for flavor names
if (!exactMatch) {
  const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`);
  const data = await response.json();
  
  // Match by oracle_id (handles flavor names, double-faced cards)
  const match = collection.find(c => c.oracle_id === data.oracle_id);
}
```

**Examples:**
- "Gary, the Snail" → "Toxrill, the Corrosive"
- "Godzilla, King of the Monsters" → "Zilortha, Strength Incarnate"

## Testing Strategy

### Test Organization

**Location:** `/test/` directory  
**Runner:** `test/index.html` (single unified test suite)  
**Style:** Minimal custom test framework (no dependencies)

**Files:**
- `test/index.html` - Test runner HTML
- `test/test.js` - All test cases (80+ tests)

### Test Framework Pattern

```javascript
// Simple assertion-based testing
const suites = {};
const results = [];

function suite(name) {
  if (!suites[name]) suites[name] = [];
  return {
    test: (testName, fn) => suites[name].push({ name: testName, fn })
  };
}

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

function assertEquals(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, got ${actual}`);
  }
}

// Usage
const gt = suite('Game Tracker');
gt.test('4 players initialized', () => assertEquals(state.players.length, 4));
```

### Test Coverage

**250+ tests across 27 suites:**
- Game Tracker (35 tests) - Core state, life, damage, counters, mana, commander damage, mulligans, advanced mechanics
- Advanced Filters (29 tests) - Type, color, color identity, subtype, rarity, finish, keyword, CMC
- Deck Checker Wishlist (25 tests) - Name/oracle_id/realName matching, _fromWishlist tagging, flavor names
- Wishlist (14 tests) - Foil handling, batch fetch, detail links, persistence
- Color Matching (14 tests) - matchCardColor, matchColorIdentity, colorless, multicolor, subset logic
- Trading Binder Foil (12 tests) - Foil pricing, migration, composite keys
- Deck List Parsing (11 tests) - Quantity formats, comments, DFC normalization, set stripping
- Scryfall Card Conversion (11 tests) - Normal/foil/flavor names, price fallbacks, DFC images
- Price Logic (10 tests) - formatPrice currencies, getCardPrice foil types, fallbacks
- Card Type Detection (9 tests) - All 7 card types, null/empty, compound types
- Trading Binder (9 tests) - LocalStorage, lock state, password, Scryfall fields
- Sort Order (8 tests) - Price desc/asc, quantity, cache-load re-sort regression
- Render Card HTML (8 tests) - Foil classes, duplicate detection, type badges
- Binder Card State (6 tests) - persisted/pending/removed/none, foil distinction
- CSV Parsing (5 tests) - Quoted fields, commas in names, empty fields
- Binder Sync (5 tests) - Add/remove detection, foil changes
- Wishlist Card State (4 tests) - persisted/pending/none, foil suffix
- Card Back Visibility (4 tests) - 3D flip effects, CSS transforms
- Context Menu (4 tests) - Wishlist/binder options, lock states, localStorage
- Detail Page Versions (4 tests) - Foil/non-foil expansion, null prices, drag prevention
- CSS Layout (4 tests) - Price slider, autocomplete, filter positioning
- Detail Page (3 tests) - Card detail rendering, 3D effects
- Deck Checker (3 tests) - Version selector, add all missing, game:paper filter
- Flavor Names (2 tests) - Deck checker flavor name matching
- Foil Shimmer (2 tests) - Foil effect standardization
- Copies Filter (2 tests) - Oracle ID duplicate detection

### Running Tests

**Browser:** Open `test/index.html` in a browser  
**CI:** GitHub Actions runs tests on push (`.github/workflows/test.yml`)  
**Pre-push:** Git hook validates JavaScript syntax

```bash
# Manual syntax check
node -c js/game-tracker.js
node -c test/test.js
```

**Pre-push Hook:**
- Validates all JavaScript files with `node -c`
- Validates inline `<script>` tags in all HTML files
- Reminds to run browser tests
- Located at `.git/hooks/pre-push`
- Located at `.git/hooks/pre-push`

### Testing Principles

1. **Test behavior, not implementation** - Test what users see/experience
2. **Mock external dependencies** - No real API calls in tests
3. **Test edge cases** - Negative numbers, zero, very large values
4. **Test state persistence** - Save/load, undo/redo
5. **Visual feedback** - Green ✅ for pass, red ❌ for fail
6. **No auto-generated tests** - Only write tests when explicitly requested
7. **Single test file** - All tests in one place for simplicity

## Important Notes

**Do NOT create summary documents** - Don't generate `.md` files documenting every change made. Only update existing documentation when necessary.

**Minimal code only** - Write the absolute minimum code needed. No verbose implementations.

**Always push changes** - After making code changes, always commit and push to git immediately.

## Data Flow

### CSV Import Flow

```
1. User exports collection from Moxfield or ManaBox as CSV
2. Replace data/Collection.csv with exported file (case-insensitive filename)
3. loadCollection() fetches CSV with fallback (Collection.csv → collection.csv)
4. Header row is parsed to auto-detect column positions by name
5. parseCSVLine() handles quoted fields, commas in names
6. Windows \r\n line endings are stripped
7. Cards without name or scryfallId are filtered out
8. Store in collection[] array
9. Apply initial filters and sort
10. Render cards
```

**Supported CSV formats:** Moxfield, ManaBox (auto-detected by header names)
**Header matching:** Case-insensitive, supports alternate names (e.g., "Edition Code" = "Set Code")

### Full Data Loading Flow

```
1. User clicks "Load Full Data" button
2. Check IndexedDB cache for each card
3. Batch uncached cards (75 per request)
4. POST to Scryfall /cards/collection endpoint
5. Extract types, colors, keywords, oracle_id
6. Cache to IndexedDB (mtg-images and mtg-detail-cache)
7. Update collection[] with extended data
8. Enable type/color/keyword filters
9. Update analytics charts
```

### Game Tracker State Flow

```
1. User selects format (Commander, Standard, etc.)
2. Configure players (count, starting life, names, commanders)
3. Start game → initialize state object
4. User actions → update state → saveHistory() → updateUI()
5. Auto-save to localStorage every state change
6. Undo → restore from history stack
7. End game → show summary, save to history
```

## Common Tasks & Patterns

### Adding a New Filter

1. Add UI element (checkbox, dropdown, etc.) to HTML
2. Add filter state variable
3. Update `applyFilters()` function in `shared.js`
4. Add event listener in `initApp()`
5. Test with various filter combinations

### Adding a New View Mode

1. Create `[view-name].html` file
2. Create `js/[view-name].js` file
3. Import `shared.js` for common functions
4. Implement view-specific rendering logic
5. Add navigation link in all HTML files
6. Test responsive layout

### Adding a New Chart

1. Add canvas element to HTML: `<canvas id="chart-name"></canvas>`
2. Create Chart.js configuration in `grid.js`
3. Process collection data for chart
4. Add click handler to filter by segment
5. Update chart on filter changes

### Adding a New Game Tracker Feature

1. Add state property to `state` object
2. Add UI elements to `game-tracker.html`
3. Add update function in `game-tracker.js`
4. Add to save/load state logic
5. Add to undo/redo history
6. Write tests in `test-game-tracker.js`
7. Update `TESTING.md` with new test coverage

### Adding a New Achievement

1. Add achievement definition to achievements array
2. Implement check function
3. Add to `checkAchievements()` logic
4. Add icon/badge to UI
5. Test unlock conditions

## Performance Optimization

### Image Loading

- **Lazy loading:** Images load as they scroll into view
- **IndexedDB caching:** Images cached after first load
- **Size optimization:** Use `small` size for grid, `normal` for detail
- **Placeholder:** Show card back while loading

### API Rate Limiting

- **Batch requests:** 75 cards per request (Scryfall limit)
- **Delay between requests:** 100ms minimum
- **Cache everything:** Never fetch same data twice
- **Progress feedback:** Show loading bar during batch operations

### Rendering Optimization

- **Virtual scrolling:** Only render visible cards (not implemented yet)
- **Debounced search:** Wait 300ms after typing before filtering
- **RequestAnimationFrame:** Use for smooth animations
- **CSS transforms:** Use `transform` instead of `top/left` for animations

### State Management

- **Immutable updates:** Clone state before modifying (for undo)
- **Shallow cloning:** Use `Object.assign()` for top-level properties
- **Deep cloning:** Use `JSON.parse(JSON.stringify())` for nested objects
- **History limits:** Keep max 50 undo states

## Deployment

### GitHub Pages Setup

1. Push to `main` branch
2. GitHub Actions runs deploy workflow (`.github/workflows/deploy.yml`)
3. Builds and deploys to `gh-pages` branch
4. Live at: https://pnz1990.github.io/mtg-collection-viewer/

### Manual Deployment

1. Any static file host works (Netlify, Vercel, etc.)
2. No build step required
3. Serve all files as-is
4. Ensure CORS allows Scryfall API calls

## Browser Compatibility

**Supported Browsers:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Required Features:**
- ES6+ (async/await, arrow functions, template literals)
- IndexedDB
- CSS Grid & Flexbox
- CSS Custom Properties
- Fetch API

**Not Supported:**
- Internet Explorer (any version)

## Known Issues & Limitations

1. **Phone blocking:** Game tracker blocks phones (< 768px width) - requires tablet or laptop
2. **CSV format:** Only supports Moxfield CSV format (not other platforms)
3. **Price sources:** Manabox prices from CSV, Scryfall prices require "Load Full Data"
4. **Rate limiting:** Scryfall API has rate limits (handled with delays)
5. **Offline mode:** Requires internet for initial load, cached after
6. **Large collections:** 1000+ cards may have performance issues (consider virtual scrolling)

## Future Enhancements (Not Implemented)

- Virtual scrolling for large collections
- PWA offline support
- Export game tracker history as JSON
- Deck builder tool
- Collection statistics over time
- Price tracking/alerts
- Multi-user game tracker (WebRTC)
- Mobile app (React Native)

## Development Workflow

### Local Development

1. Clone repository
2. Open `index.html` in browser (no build step)
3. Make changes to HTML/CSS/JS
4. Refresh browser to see changes
5. Test in multiple browsers
6. Run test suite (`test/index.html`)
7. Commit and push to GitHub

### Git Workflow

- **Main branch:** Production-ready code
- **Feature branches:** Optional, can commit directly to main
- **Commit messages:** Descriptive, present tense ("Add feature" not "Added feature")
- **Pre-push hook:** Validates JavaScript syntax

### Code Review Checklist

- [ ] Code follows style conventions
- [ ] No console.log() statements (use console.error() for errors)
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] No breaking changes to existing features
- [ ] Tests updated/added if needed
- [ ] README.md updated if user-facing changes
- [ ] No hardcoded values (use constants or config)

## Preferences & Conventions

### When to Write Tests

- **Always:** Game tracker features (complex state management)
- **Sometimes:** New major features (deck checker, trade calculator)
- **Rarely:** UI-only changes (styling, layout)
- **Never:** Unless explicitly requested by user

### When to Add Comments

- **Always:** Complex algorithms, non-obvious logic
- **Sometimes:** Section headers, function purposes
- **Rarely:** Self-explanatory code
- **Never:** Obvious statements ("increment counter")

### When to Refactor

- **Always:** When adding similar code 3+ times (DRY principle)
- **Sometimes:** When function exceeds 100 lines
- **Rarely:** When code works but isn't "perfect"
- **Never:** Just for style preferences

### When to Add Dependencies

- **Always:** Never (project is dependency-free)
- **Exception:** CDN libraries for specific features (Chart.js, noUiSlider)
- **Avoid:** npm packages, build tools, frameworks

## Key Files to Know

### Most Important Files

1. **js/shared.js** (29KB) - Core utilities, used by all pages
2. **js/game-tracker.js** (80KB) - Game tracker state management
3. **css/style.css** (49KB) - Main stylesheet
4. **index.html** - Main entry point (Collection Explorer)

### Configuration Files

- **manifest.json** - PWA configuration
- **.github/workflows/deploy.yml** - Auto-deploy configuration
- **.gitignore** - Git ignore rules (just `.DS_Store`)

### Data Files

- **data/Collection.csv** - User's card collection (Moxfield export)
- **data/trading-binder.json** - Trading binder cards (git-persisted, no password)
- **data/wishlist.json** - Wishlist cards (git-persisted)
- **data/admin-password.json** - Shared admin password hash for binder & wishlist
- **images/back.png** - MTG card back image
- **images/favicon.ico** - Site favicon

## Troubleshooting

### Common Issues

**Cards not loading:**
- Check browser console for errors
- Verify CSV format matches Moxfield export
- Check IndexedDB is enabled in browser

**Filters not working:**
- Click "Load Full Data" to enable type/color/keyword filters
- Check console for JavaScript errors
- Clear browser cache and reload

**Game tracker not saving:**
- Check localStorage is enabled
- Check browser console for errors
- Try different browser

**Images not caching:**
- Check IndexedDB is enabled
- Check browser storage quota
- Clear IndexedDB and reload

### Debug Mode

Add `?debug=1` to URL to enable debug logging:
```javascript
const DEBUG = new URLSearchParams(window.location.search).get('debug') === '1';
if (DEBUG) console.log('Debug info:', data);
```

## Contact & Support

- **GitHub Issues:** https://github.com/pnz1990/mtg-collection-viewer/issues
- **Live Demo:** https://pnz1990.github.io/mtg-collection-viewer/
- **Scryfall API Docs:** https://scryfall.com/docs/api

---

**Last Updated:** February 19, 2026  
**Version:** 2.0  
**Maintainer:** pnz1990
