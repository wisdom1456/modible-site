#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const contentType = process.argv[2];
const title = process.argv[3];
const slug = process.argv[4];

if (!contentType || !['demo', 'essay', 'art'].includes(contentType)) {
	console.error('Usage: node scripts/new-content.js <demo|essay|art> "Title" slug');
	process.exit(1);
}

if (!title || !slug) {
	console.error('Please provide both title and slug');
	process.exit(1);
}

const today = new Date().toISOString().split('T')[0];

const templates = {
	demo: `---
title: "${title}"
description: "One sentence explaining what this demo does"
type: demo
date: ${today}
slug: ${slug}

tags:
  - Category1
  - Category2
technologies:
  - SvelteKit
  - Technology2

featured: false
draft: true
interactive: true
github_url: https://github.com/yourusername/${slug}
og_image: /images/demos/${slug}-og.png
difficulty: intermediate
---

## What This Does

Explain what the demo shows in 2-3 sentences.

## How to Use

1. Step 1
2. Step 2
3. Step 3

## Technical Details

High-level architecture explanation.

### Key Technologies

- **Technology 1**: Why used
- **Technology 2**: Why used

## What I Learned

Personal reflection on building this.
`,
	essay: `---
title: "${title}"
description: "One sentence hook"
type: essay
date: ${today}
slug: ${slug}

tags:
  - Topic1
  - Topic2
reading_time: "5 min read"

featured: false
draft: true

og_image: /images/essays/${slug}-og.png
---

## The Problem

What problem are you solving?

## The Solution

What worked?

## The Results

What happened?

## Key Takeaways

- Takeaway 1
- Takeaway 2
- Takeaway 3
`,
	art: `---
title: "${title}"
description: "One sentence description"
type: art
date: ${today}
slug: ${slug}

tags:
  - Generative
  - Category2

medium: "Generative Interactive"
interactive: true
tools:
  - Tool1
  - Tool2

featured: false
draft: true

og_image: /images/art/${slug}-og.png
inspiration: "What inspired this piece"
---

## Concept

Describe the artistic concept and what it explores.

## Technical Approach

How was it created technically?

## Interaction

How can viewers interact with it?
`
};

const contentDir = path.join(projectRoot, 'src', 'content', `${contentType}s`);
const filePath = path.join(contentDir, `${slug}.md`);

if (fs.existsSync(filePath)) {
	console.error(`File already exists: ${filePath}`);
	process.exit(1);
}

fs.writeFileSync(filePath, templates[contentType]);
console.log(`✅ Created ${contentType}: ${filePath}`);
console.log(`\nNext steps:`);
console.log(`1. Edit the frontmatter in ${slug}.md`);
console.log(`2. Write your content`);
console.log(`3. Add an OG image to static/images/${contentType}s/${slug}-og.png`);
console.log(`4. Set draft: false when ready to publish`);

