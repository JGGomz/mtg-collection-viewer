#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Read Collection.csv
const csvPath = path.join(__dirname, 'data', 'Collection.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const lines = csvContent.split('\n').slice(1); // Skip header

// Build map of scryfallId -> foil status
const foilMap = {};
lines.forEach(line => {
  if (!line.trim()) return;
  const parts = line.split(',');
  const scryfallId = parts[8]; // Column 9 (0-indexed)
  const foil = parts[4]; // Column 5 (0-indexed)
  if (scryfallId && foil) {
    foilMap[scryfallId] = foil;
  }
});

console.log('Found', Object.keys(foilMap).length, 'cards in Collection.csv');

// Read trading-binder.json
const binderPath = path.join(__dirname, 'data', 'trading-binder.json');
const binderData = JSON.parse(fs.readFileSync(binderPath, 'utf-8'));

// Update foil status
let updated = 0;
binderData.cards.forEach(card => {
  const correctFoil = foilMap[card.scryfallId];
  if (correctFoil && correctFoil !== card.foil) {
    console.log(`Updating ${card.scryfallId}: ${card.foil} -> ${correctFoil}`);
    card.foil = correctFoil;
    updated++;
  }
});

console.log('Updated', updated, 'cards');

// Write back
binderData.lastModified = new Date().toISOString();
fs.writeFileSync(binderPath, JSON.stringify(binderData, null, 2));
console.log('✓ trading-binder.json updated');
