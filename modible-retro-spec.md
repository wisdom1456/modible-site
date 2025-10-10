
modible brand
need to setup website and branding for my personal brand modible



Personal fitness plan review
Last message 2 minutes ago
Professional portfolio website strategy
Last message 14 minutes ago
Personal website document review
Last message 37 minutes ago
Instructions
Add instructions to tailor Claude’s responses

Files
2% of project capacity used

modible_gaps.txt
785 lines

txt



modible-retro-spec.md
1,584 lines

md



modible-retro-spec.md
45.72 KB •1,584 lines
•
Formatting may be inconsistent from source
# Modible: Retro-Futurism Design System
## Complete Specification v1.0

---

## ðŸŽ¯ Core Concept

**"90s Computing Meets Modern Web"**

A developer/creator portfolio that combines:
- ðŸŽ® Arcade cabinet aesthetics (Doom, Duke Nukem, Street Fighter)
- ðŸ“º CRT monitor effects (scan lines, phosphor glow)
- ðŸ’¾ DOS/Windows 95 UI patterns (beveled borders, system fonts)
- ðŸŽµ Vintage media (vinyl records, cassette tapes)
- âš¡ Modern web performance and accessibility

**NOT:** Pixel art overload, skeuomorphic clutter, or retro for retro's sake  
**YES:** Nostalgic authenticity with contemporary polish

---

## ðŸ—‚ï¸ Site Architecture

### URL Structure (FINAL DECISION)
```
modible.com/
â”œâ”€â”€ /                           (homepage: vinyl nav + arcade grid)
â”œâ”€â”€ /demos/[slug]               (interactive tools)
â”œâ”€â”€ /essays/[slug]              (technical writing)
â”œâ”€â”€ /art/[slug]                 (generative/creative)
â”œâ”€â”€ /log                        (build diary, chronological)
â”œâ”€â”€ /stack/[tech]               (auto-generated tech pages)
â”œâ”€â”€ /now                        (current focus)
â””â”€â”€ /about                      (bio + design philosophy)

Demos examples:
- /demos/neural-network-visualizer
- /demos/music-visualizer
- /demos/code-to-diagram

Essays examples:
- /essays/ai-cost-management
- /essays/building-in-public

Art examples:
- /art/generative-audio-viz
- /art/procedural-landscapes
```

**SEO Rules:**
- ALL content has ONE canonical URL (no duplicates)
- Internal links always use canonical URLs
- 301 redirects for any alternate URLs
- Sitemap only includes canonical URLs

---

## ðŸŽ¨ Color System: "CRT Phosphor Palette"

### Primary: Purple Phosphor (Rare on vintage monitors)
```css
--neon-purple-900: #1A0B2E;  /* Deep CRT black-purple */
--neon-purple-700: #3D1F5C;  /* Shadow purple */
--neon-purple-500: #7B2FBF;  /* Core purple */
--neon-purple-400: #A855F7;  /* Bright glow */
--neon-purple-200: #D4A5FF;  /* Highlight */
```

### Accent: Terminal Green (Classic phosphor)
```css
--terminal-green: #10B981;        /* Primary accent */
--terminal-green-glow: #34D399;   /* Bright state */
--terminal-green-dim: #059669;    /* Inactive */
```

### Retro Secondary (Use sparingly)
```css
--amber-warning: #F59E0B;    /* DOS amber monitor */
--cyan-info: #06B6D4;        /* Cyan CRT */
--magenta-error: #EC4899;    /* Magenta CRT */
```

### Base: CRT Black + Grays
```css
--crt-black: #0A0A0A;        /* Deep black */
--crt-gray-900: #1C1C1E;     /* Panel background */
--crt-gray-700: #2C2C2E;     /* Elevated surface */
--crt-gray-500: #48484A;     /* Border */
--crt-gray-300: #8E8E93;     /* Dim text */
--crt-white: #F5F5F7;        /* Bright text */
```

### Usage Rules
- **Purple:** Primary actions, headlines, glows, active states
- **Green:** Success, "online" status, terminal text, accents
- **Amber/Cyan/Magenta:** Warnings, info, errors (semantic only)
- **Grayscale:** All UI, borders, backgrounds, body text

---

## ðŸ–‹ï¸ Typography System

### Font Stack
```css
/* DISPLAY: Retro Impact (Headlines Only) */
--font-display: 'Press Start 2P', 'Epilogue', system-ui;
/* Used sparingly - high visual impact */

/* INTERFACE: Modern Readable (Primary) */
--font-interface: 'Epilogue', system-ui, sans-serif;
/* All UI, navigation, body text */

/* CODE: Monospace with Personality */
--font-code: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
/* Code blocks, technical content */

/* LABELS: System Font (DOS Aesthetic) */
--font-label: 'IBM VGA', 'Epilogue', monospace;
/* Status bars, metadata, system labels */
```

### Type Scale
```css
/* Headline - Pixel Font */
.display-xl {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.2;
  text-shadow: 
    0 0 10px var(--neon-purple-400),
    0 0 20px var(--neon-purple-400);
}

/* Subheading - Clean Geometric */
.heading-lg {
  font-family: var(--font-interface);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

/* Body - Optimized for Reading */
.body {
  font-family: var(--font-interface);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  max-width: 65ch;
}

/* Label - System Text */
.label {
  font-family: var(--font-label);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Code - Technical */
.code {
  font-family: var(--font-code);
  font-size: 0.875rem;
  line-height: 1.6;
}
```

### Loading Strategy (SEO Critical)
```html
<!-- Self-host fonts (no Google Fonts CDN) -->
<link rel="preload" href="/fonts/epilogue-variable.woff2" as="font" crossorigin>
<link rel="preload" href="/fonts/press-start-2p.woff2" as="font" crossorigin>

<!-- Variable font for Epilogue (one file, all weights) -->
<!-- Faster load, better Core Web Vitals -->
```

---

## ðŸ“º Visual Effects System

### Global CRT Effect (Applied to viewport)
```css
/* Scan lines - Subtle horizontal lines */
.scanlines {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.1) 51%
  );
  background-size: 100% 4px;
  z-index: 9999;
  opacity: 0.3;
}

/* Screen curvature - Very subtle vignette */
.screen-curve {
  position: fixed;
  inset: 0;
  pointer-events: none;
  border-radius: 2px;
  box-shadow: 
    inset 0 0 100px rgba(0, 0, 0, 0.3),
    inset 0 0 200px rgba(0, 0, 0, 0.2);
}

/* Vignette - Darker edges like CRT fade */
.vignette {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}
```

### Glow Effects
```css
/* Text glow - Applied to headlines and accents */
.glow {
  text-shadow: 
    0 0 5px currentColor,
    0 0 10px currentColor,
    0 0 20px currentColor;
}

/* Pulsing glow - For "online" status and active elements */
.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.2); }
}
```

### Beveled Borders (90s Windows aesthetic)
```css
/* Outset - Raised appearance */
.border-outset {
  border: 2px solid;
  border-color: 
    var(--crt-gray-300) 
    var(--crt-black) 
    var(--crt-black) 
    var(--crt-gray-300);
  /* Top-left light, bottom-right dark */
}

/* Inset - Recessed appearance */
.border-inset {
  border: 2px solid;
  border-color: 
    var(--crt-black) 
    var(--crt-gray-300) 
    var(--crt-gray-300) 
    var(--crt-black);
  /* Top-left dark, bottom-right light */
}
```

---

## ðŸ§© Component System

### 1. Status Bar (Doom HUD-inspired)
**Purpose:** Show live stats across top or bottom of viewport  
**Location:** Global, persistent on all pages

**Elements:**
- Current project count
- GitHub stars
- Build streak
- Online status
- Current build phase

**Visual Style:**
- Beveled border (outset)
- Segmented displays (inset)
- Monospace font
- Terminal green accent for "online"
- DOS-style readout

---

### 2. Retro Panel (SimCity/Windows 95 window)
**Purpose:** Main content container with window chrome  
**Use cases:** Demos, essays, build log, settings

**Structure:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ [Icon] Title          [_ â–¡ Ã—]  â”‚ â† Title bar
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                 â”‚
â”‚   Content Area                  â”‚
â”‚                                 â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Status: Ready                   â”‚ â† Status bar
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Features:**
- Title bar with gradient (purple)
- Window controls (minimize/maximize/close - decorative)
- Beveled borders
- Status bar at bottom
- Optional icon in title bar

---

### 3. Arcade Card (Arcade cabinet-inspired)
**Purpose:** Project/content preview cards  
**Use cases:** Homepage grid, project listings, portfolio

**Structure:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â— TITLE â—                       â”‚ â† Marquee
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                 â”‚
â”‚   [Screenshot/Preview]          â”‚ â† Screen
â”‚                                 â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ [tags]              â­ stars    â”‚ â† Controls
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚   INSERT COIN TO PLAY           â”‚ â† CTA
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Features:**
- Marquee strip at top (gradient + blinking lights)
- Screen area with CRT overlay on hover
- Control panel (metadata)
- Coin slot CTA
- Hover: Purple glow + lift effect

---

### 4. Vinyl Navigation (Homepage hero)
**Purpose:** Primary navigation with A-side/B-side metaphor  
**Location:** Homepage only

**Structure:**
- Left: Rotating vinyl record (turntable visual)
- Right: Track listing (navigation links)
- A-side: Demos/interactive projects
- B-side: Essays/technical writing

**Features:**
- Vinyl rotates on hover
- Center label shows "MODIBLE / PROJECTS VOL. 1"
- Track listing styled like album liner notes
- Hover on track: indent + green highlight
- Spinning animation when actively building

---

### 5. Terminal Log (Build diary)
**Purpose:** Chronological build updates  
**Location:** `/log` page, homepage section

**Style:**
- Monospace font (code aesthetic)
- Terminal green text
- Timestamps in gray
- `> ` prompt before each entry
- Blinking cursor at end
- Black background
- Optional: typing animation on load

**Entry Format:**
```
> 2025-01-15 23:42
  Deployed neural network visualizer v2.0
  Added layer weight inspection. 47 new stars!
  [View project â†’]

> 2025-01-15 14:18
  Debugging cache hit rate drop
  Down to 67% from 85%. Investigating...
```

---

### 6. Boot Sequence (Homepage entrance)
**Purpose:** DOS-style loading animation  
**Location:** First visit to homepage (optional)

**Sequence:**
1. Black screen
2. Green terminal text appears line by line:
   - "MODIBLE OS v1.0"
   - "Initializing design system..."
   - "Loading projects..."
   - "Mounting components..."
   - "System ready."
3. Fade to main interface

**Timing:** ~2 seconds total (fast, not tedious)

---

### 7. Cassette Tape Loader (Feature #1)
**Purpose:** Loading states for page transitions and demos  
**Location:** Global loading component

**Structure:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  [â—‰]  TAPE  [â—‰]    â”‚ â† Reels spinning
â”‚  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•   â”‚ â† Tape strip (progress)
â”‚                     â”‚
â”‚  LOADING...         â”‚ â† Status text
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Features:**
- Reels rotate when active
- Tape strip shows progress (0-100%)
- Different speeds for different load types
- Themeable (changes with theme system)

---

### 8. Defrag Animation (Feature #4)
**Purpose:** Visual feedback when sorting/filtering content  
**Location:** Project grid, any sorted list

**Behavior:**
```
Before sort:
[â–ˆ][â–‘][â–ˆ][â–‘][â–‘][â–ˆ]

During (0.4s animation):
Items slide to new positions with easing

After sort:
[â–ˆ][â–ˆ][â–ˆ][â–‘][â–‘][â–‘]
```

**Features:**
- Shows "Organizing..." with block animation
- Smooth cubic-bezier transitions
- Can be disabled in performance mode

---

### 9. Continue Playing Widget (Feature #18)
**Purpose:** Return visitors to last viewed project  
**Location:** Homepage, bottom-right corner

**Structure:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ CONTINUE PLAYING                â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ [Thumbnail]  Neural Network Viz â”‚
â”‚              Last: 2 hours ago  â”‚
â”‚              Progress: 47%      â”‚
â”‚                                 â”‚
â”‚ [CONTINUE]  [NEW GAME]          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Features:**
- Tracks scroll position per project
- Shows time since last visit
- Can be dismissed
- Respects privacy settings

---

### 10. Debug Console (Feature #14)
**Purpose:** Power user command interface  
**Location:** Overlay, triggered by backtick key

**Commands:**
```
Available commands:
- help          Show this message
- projects      List all projects
- theme [name]  Switch theme
- dither        Toggle dithering
- stats         Show site stats
- coin          Insert virtual coin
- unlock [id]   Unlock achievement
- settings      Open settings panel
- cls           Clear console
```

**Features:**
- Full keyboard navigation
- Command history (up/down arrows)
- Auto-complete suggestions
- Retro terminal aesthetic

---

### 11. Insert Coin Screen (Feature #15)
**Purpose:** Gamified paywall for Pro features  
**Location:** Gated demo pages

**Structure:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚     ðŸŽ® INSERT COIN ðŸŽ®          â”‚
â”‚                                 â”‚
â”‚ [Coin slot with animation]      â”‚
â”‚                                 â”‚
â”‚ Choose option:                  â”‚
â”‚ ðŸª™ Virtual Coin (Free, fun)    â”‚
â”‚ â­ Star on GitHub (Support)    â”‚
â”‚ ðŸ’Ž Go Pro $9/mo (Unlock all)   â”‚
â”‚                                 â”‚
â”‚ Coins inserted: 47 ðŸª™           â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Features:**
- Coin drop animation
- Sound effect (if enabled)
- Multiple unlock paths
- Tracks virtual coins as gamification

---

### 12. Konami Code Detector (Feature #5)
**Purpose:** Easter egg achievement unlock  
**Location:** Global keyboard listener

**Sequence:** â†‘ â†‘ â†“ â†“ â† â†’ â† â†’ B A

**Unlocks:**
- "Konami Master" achievement
- Arcade theme (if not already unlocked)
- Secret color schemes
- Hidden console commands
- Chiptune mode toggle

---

## ðŸ—ï¸ Infrastructure Layer (NEW)

### Design Tokens
```javascript
// designTokens.js
export const animations = {
  duration: {
    instant: '50ms',
    fast: '150ms',
    normal: '200ms',
    slow: '400ms',
    slower: '600ms',
  },
  easing: {
    default: 'cubic-bezier(0.16, 1, 0.3, 1)',
    snappy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

export const zIndex = {
  base: 0,
  elevated: 10,
  dropdown: 100,
  sticky: 500,
  modal: 1000,
  notification: 2000,
  console: 5000,
  crtEffects: 9999,
};
```

---

### Audio System
```javascript
// audioSystem.js
class AudioSystem {
  sounds = {
    click: '/sounds/click.mp3',
    coin: '/sounds/coin-insert.mp3',
    achievement: '/sounds/achievement.mp3',
    cassette: '/sounds/cassette-start.mp3',
    defrag: '/sounds/defrag-tick.mp3',
    konami: '/sounds/konami-unlock.mp3',
  };
  
  play(soundId, options = {}) {
    if (!this.enabled) return;
    const sound = new Audio(this.sounds[soundId]);
    sound.volume = options.volume || this.volume;
    sound.play().catch(() => {});
  }
}
```

---

### Performance Manager
```javascript
// performanceManager.js
class PerformanceManager {
  detectDevice() {
    return {
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
      isLowEnd: navigator.hardwareConcurrency <= 4,
      screenSize: window.innerWidth,
    };
  }
  
  getEffectSettings() {
    const modes = {
      minimal: {
        scanlines: false,
        vignette: false,
        animations: false,
      },
      performance: {
        scanlines: true,
        scanlineOpacity: 0.1,
        vignette: false,
      },
      high: {
        scanlines: true,
        scanlineOpacity: 0.3,
        vignette: true,
      },
    };
    return modes[this.performanceMode];
  }
}
```

---

### Notification System
```svelte
<!-- NotificationSystem.svelte -->
<script>
  import { writable } from 'svelte/store';
  
  export const notifications = writable([]);
  
  export function notify(config) {
    const notification = {
      id: Date.now(),
      type: config.type || 'info', // success | error | achievement
      title: config.title,
      message: config.message,
      duration: config.duration || 3000,
    };
    
    notifications.update(n => [...n, notification]);
    setTimeout(() => {
      notifications.update(n => n.filter(item => item.id !== notification.id));
    }, notification.duration);
  }
</script>

<div class="notification-container">
  {#each $notifications as notif (notif.id)}
    <div class="notification {notif.type}" transition:fly>
      {#if notif.type === 'achievement'}
        <div class="achievement-unlock">
          <div class="achievement-icon">ðŸ†</div>
          <div class="achievement-text">
            <div class="achievement-title">ACHIEVEMENT UNLOCKED!</div>
            <div class="achievement-name">{notif.title}</div>
          </div>
        </div>
      {:else}
        <div class="toast">
          {notif.message}
        </div>
      {/if}
    </div>
  {/each}
</div>
```

---

### Settings Panel
```svelte
<!-- SettingsPanel.svelte -->
<div class="settings-window">
  <div class="window-titlebar">
    <span>âš™ï¸ MODIBLE.SETTINGS</span>
    <button on:click={close}>Ã—</button>
  </div>
  
  <div class="settings-tabs">
    <button class:active={tab === 'appearance'}>Appearance</button>
    <button class:active={tab === 'effects'}>Effects</button>
    <button class:active={tab === 'audio'}>Audio</button>
    <button class:active={tab === 'advanced'}>Advanced</button>
  </div>
  
  <div class="settings-content">
    <!-- Theme selection, effect toggles, volume controls, etc. -->
  </div>
</div>
```

---

### Hotkey Manager
```javascript
// hotkeyManager.js
class HotkeyManager {
  bindings = new Map();
  
  register(config) {
    const { key, handler, context = 'global' } = config;
    this.bindings.set(key, { handler, context });
  }
  
  handleKeydown(event) {
    const key = this.getKeyString(event);
    const binding = this.bindings.get(key);
    if (binding) {
      event.preventDefault();
      binding.handler(event);
    }
  }
}

// Register shortcuts
hotkeys.register({ key: '`', handler: () => toggleConsole() });
hotkeys.register({ key: 'Ctrl+,', handler: () => openSettings() });
hotkeys.register({ key: 'Escape', handler: () => closeModal() });
```

---

### Theme System (Feature #21)
```javascript
// themeSystem.js
const themes = {
  dos: {
    name: 'MS-DOS (1985)',
    colors: {
      primary: '#F59E0B',
      accent: '#10B981',
      bg: '#0A0A0A',
    },
  },
  macclassic: {
    name: 'Macintosh Classic (1990)',
    colors: {
      primary: '#FFFFFF',
      accent: '#000000',
      bg: '#E8E8E8',
    },
    effects: {
      dithering: true, // Auto-enable 1-bit aesthetic
    },
  },
  windows95: {
    name: 'Windows 95 (1995)',
    colors: {
      primary: '#7B2FBF',
      accent: '#10B981',
      bg: '#0A0A0A',
    },
  },
  arcade: {
    name: 'Arcade Cabinet (1985)',
    colors: {
      primary: '#EC4899',
      accent: '#06B6D4',
      bg: '#000000',
    },
    locked: true, // Unlocked by Konami code
  },
  terminal: {
    name: 'VT-100 Terminal (1978)',
    colors: {
      primary: '#10B981',
      accent: '#34D399',
      bg: '#000000',
    },
  },
};
```

---

### Dithering System (Feature #12)
```javascript
// ditheringFilter.js
// Floyd-Steinberg dithering for 1-bit aesthetic

function ditherImage(imageData) {
  const { data, width, height } = imageData;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      // Convert to grayscale
      const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
      const newGray = gray < 128 ? 0 : 255;
      const error = gray - newGray;
      
      // Set pixel
      data[i] = data[i + 1] = data[i + 2] = newGray;
      
      // Distribute error to neighbors (Floyd-Steinberg)
      distributeError(data, width, height, x, y, error);
    }
  }
  
  return imageData;
}
```

---

### State Management
```javascript
// stores.js
import { writable, derived } from 'svelte/store';

export const userSettings = writable({
  theme: 'windows95',
  scanlines: true,
  vignette: true,
  dithering: false,
  soundEnabled: false,
  volume: 50,
  performanceMode: 'auto',
  achievements: [],
  lastViewed: null,
  coinsInserted: 0,
});

export const appState = writable({
  loading: false,
  consoleOpen: false,
  settingsOpen: false,
  notifications: [],
});

export const effectiveSettings = derived(
  userSettings,
  ($settings) => {
    const perfSettings = performance.getEffectSettings();
    return { ...$settings, ...perfSettings };
  }
);
```

---

## ðŸŽ¯ Page Templates

### Project Detail Page Structure
```
URL: /demos/neural-network-visualizer

[ Status Bar - Global ]

[ Breadcrumb ]
Home > Demos > Neural Network Visualizer

[ Hero Section ]
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ NEURAL NETWORK VISUALIZER               â”‚ â† Display font
â”‚ Interactive visualization showing...    â”‚ â† Body font
â”‚                                         â”‚
â”‚ [GitHub â˜… 156] [Live Demo] [Share]     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

[ Tabs ]
[ Overview | Technical | Gallery | Code ]

[ Active Tab Content ]
Retro Panel containing:
- Tab 1 (Overview): What it does, features, use cases
- Tab 2 (Technical): Stack, architecture, learnings
- Tab 3 (Gallery): Screenshots, videos, user submissions
- Tab 4 (Code): GitHub embed, key snippets, file structure

[ Demo Area ]
Arcade-style frame with live demo embedded

[ Related Projects ]
3 Arcade Cards showing similar projects

[ Build Log Snippet ]
Terminal showing updates related to this project

[ Newsletter CTA ]
Context-aware: "Get notified about new AI demos"
```

---

### Homepage Layout
```
[ DOS Boot Sequence ] (first load only)
â†“ fades to:

[ Status Bar - Top ]

[ Hero: Vinyl Navigation ]
Rotating record + track listing (A-side/B-side)

[ Continue Playing Widget ] (if returning user)
Bottom-right corner

[ Latest Releases: Arcade Grid ]
3-column grid of Arcade Cards
Newest projects first

[ Build Log: Terminal Window ]
Retro Panel showing recent 5 updates
[View all â†’] link to /log

[ Featured Stack ]
Tech tags with project counts
Click tag â†’ /stack/[tech] page

[ Newsletter Signup ]
Retro Panel styled form
"Join 847 builders getting updates"

[ Taskbar - Bottom ] (optional)
Start button, current time, system tray icons
```

---

### Error Pages

**404 - Blue Screen of Death**
```
*** STOP: 0x0000404 (0xC0000005)
PAGE_NOT_FOUND

A problem has been detected and this page has been shut down.

The problem seems to be caused by: {url}

[Return to Homepage] [View All Projects]
```

**500 - DOS Error**
```
C:\MODIBLE\> run server.exe

Fatal Error: Server encountered an unexpected condition

Press any key to return to homepage...
```

---

## ðŸ” SEO Architecture

### Critical Components (Build First)

#### 1. Meta/SEO Component
```svelte
<!-- SEOHead.svelte -->
<svelte:head>
  <!-- Basic Meta -->
  <title>{title} | Modible</title>
  <meta name="description" content={description}>
  <link rel="canonical" href={canonicalUrl}>
  
  <!-- OpenGraph -->
  <meta property="og:title" content={title}>
  <meta property="og:description" content={description}>
  <meta property="og:image" content={ogImage}>
  <meta property="og:type" content="website">
  <meta property="og:url" content={canonicalUrl}>
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={title}>
  <meta name="twitter:description" content={description}>
  <meta name="twitter:image" content={twitterImage}>
  
  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
    {@html JSON.stringify(schemaData)}
  </script>
</svelte:head>
```

#### 2. Structured Data Types
```javascript
// For demos/projects
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Neural Network Visualizer",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "screenshot": "https://modible.com/screenshots/neural-viz.png",
  "sourceCode": "https://github.com/username/neural-viz"
}

// For essays/tutorials
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Building a Neural Network Visualizer",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "datePublished": "2025-01-15",
  "dependencies": "SvelteKit, Canvas API"
}

// For person/profile
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Developer & Designer",
  "url": "https://modible.com",
  "sameAs": [
    "https://github.com/username",
    "https://twitter.com/username"
  ]
}
```

#### 3. Image Optimization
```svelte
<!-- OptimizedImage.svelte -->
<picture>
  <source 
    srcset="/images/neural-viz.avif 1200w, /images/neural-viz.avif 600w" 
    type="image/avif"
  >
  <source 
    srcset="/images/neural-viz.webp 1200w, /images/neural-viz.webp 600w" 
    type="image/webp"
  >
  <img 
    src="/images/neural-viz.jpg" 
    alt="Interactive neural network showing backpropagation with highlighted layers"
    width={1200}
    height={630}
    loading="lazy"
  >
</picture>
```

**Alt Text Rules:**
- Describe what's shown (not just "screenshot")
- Include key terms naturally
- 125 characters or less
- Never: "image of" or "picture of"

#### 4. Performance Budget
```
Lighthouse Scores (Required):
âœ… Performance: 95+
âœ… Accessibility: 100
âœ… SEO: 100
âœ… Best Practices: 95+

Core Web Vitals:
âœ… LCP (Largest Contentful Paint): < 2.5s
âœ… FID (First Input Delay): < 100ms
âœ… CLS (Cumulative Layout Shift): < 0.1

Bundle Sizes:
âœ… Initial JS: < 100kb gzipped
âœ… Initial CSS: < 20kb gzipped
âœ… Fonts: < 50kb total (variable fonts)
âœ… Images: WebP/AVIF, lazy loaded
```

---

## ðŸŽ® Interaction Design

### Micro-interactions (200ms transitions)
```css
/* Lift on hover */
.interactive:hover {
  transform: translateY(-4px);
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Glow on focus */
.focusable:focus-visible {
  outline: 2px solid transparent;
  box-shadow: 
    0 0 0 2px rgba(168, 85, 247, 0.4),
    0 0 20px rgba(168, 85, 247, 0.3);
}

/* Press feedback */
.interactive:active {
  transform: translateY(-2px);
  transition-duration: 50ms;
}
```

### Animations (Use sparingly)
```css
/* Blinking - Status indicators only */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* Spinning - Vinyl record, loading */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Pulse glow - Active states */
@keyframes pulse-glow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.2); }
}

/* Typing - Terminal text reveal */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
```

---

## ðŸ“± Responsive Strategy

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Mobile Adaptations
```css
/* Reduce visual effects on mobile (performance) */
@media (max-width: 768px) {
  .scanlines { opacity: 0.15; } /* Less intense */
  .vignette { display: none; } /* Remove */
  .glow { text-shadow: 0 0 10px currentColor; } /* Simpler */
  
  /* Simplify layouts */
  .vinyl-player { 
    grid-template-columns: 1fr; /* Stack vertically */
  }
  
  .arcade-grid .grid {
    grid-template-columns: 1fr; /* Single column */
  }
  
  /* Larger tap targets */
  button, a {
    min-height: 44px;
    min-width: 44px;
  }
}
```

---

## ðŸ—ï¸ System Architecture

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚            LAYER 0: INFRASTRUCTURE                  â”‚
â”‚  â€¢ Design tokens (animations, spacing, z-index)    â”‚
â”‚  â€¢ Hotkey manager (centralized shortcuts)          â”‚
â”‚  â€¢ Audio system (unified sound management)         â”‚
â”‚  â€¢ Performance manager (device detection)          â”‚
â”‚  â€¢ State management (Svelte stores)                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                          â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚             LAYER 1: FOUNDATION                     â”‚
â”‚  #16: CSS-Only CRT Effects                         â”‚
â”‚  #17: Lazy Load Optimization                       â”‚
â”‚  â€¢ Base component library (buttons, inputs, etc.)  â”‚
â”‚  â€¢ Error pages (404, 500)                          â”‚
â”‚  â€¢ SEO components (meta, structured data)          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                          â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚          LAYER 2: USER PREFERENCES                  â”‚
â”‚  #21: Theme System (5 themes)                      â”‚
â”‚  #12: Dithering (theme-dependent)                  â”‚
â”‚  â€¢ Settings panel (GUI for all features)           â”‚
â”‚  â€¢ Notification system (toasts, achievements)      â”‚
â”‚  â€¢ Onboarding tour (first-time users)              â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                          â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚       LAYER 3: INTERACTIVE FEATURES                 â”‚
â”‚  â€¢ Loading: #1 Cassette + #10 Build progress      â”‚
â”‚  â€¢ Discovery: #4 Defrag + #18 Continue playing    â”‚
â”‚  â€¢ Power user: #14 Console + #5 Konami + #15 Coin â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## ðŸš€ Build Order (Option A: Foundation First)

### Week 1: Infrastructure + Foundation
**Day 1-2: Core Infrastructure**
- Set up SvelteKit project with TypeScript
- Implement design tokens (animations, spacing, z-index)
- Create state management (Svelte stores)
- Set up hotkey manager
- Implement audio system skeleton

**Day 3-4: Visual Foundation**
- CSS-only CRT effects (#16)
- Lazy loading system (#17)
- Base component library (RetroButton, RetroInput, etc.)
- Mobile performance detection

**Day 5-6: Theme System**
- Implement 5 themes (#21)
- Theme switcher logic
- Settings panel UI
- Theme persistence (localStorage)

**Day 7: Testing & Optimization**
- Mobile responsive testing
- Performance profiling
- Lighthouse audit
- Accessibility check

---

### Week 2: Core Components + Content System
**Day 1-2: Main Components**
- Retro Panel component
- Arcade Card component
- Status Bar component
- Vinyl Navigation component

**Day 3-4: Loading & Discovery**
- Cassette Tape loader (#1)
- Defrag animation (#4)
- Continue Playing widget (#18)
- Build progress component (#10)

**Day 5-6: SEO Implementation**
- Meta/SEO component
- Structured data for all page types
- Image optimization pipeline
- Sitemap generator
- RSS feed generator

**Day 7: Content Structure**
- Smart cross-linking system
- Breadcrumb navigation
- Related content algorithm
- Internal linking strategy

---

### Week 3: Interactive Features + Polish
**Day 1-2: Power User Features**
- Debug console (#14)
- Konami code detector (#5)
- Insert coin system (#15)
- Achievement system

**Day 3-4: Visual Polish**
- Notification system (toasts, achievements)
- Dithering filter (#12)
- Error pages (404, 500)
- Boot sequence animation

**Day 5-6: User Experience**
- Onboarding tour (first-time users)
- Keyboard shortcuts (all features)
- Sound effects (all interactions)
- Settings panel polish

**Day 7: Final Testing**
- Cross-browser testing
- Mobile device testing
- Accessibility audit (WCAG 2.1 AA)
- Performance optimization

---

### Week 4: Content + Launch
**Day 1-3: First Content**
- Write first project page (neural network visualizer)
- Create 3-5 initial build log entries
- Set up /about page
- Create /now page

**Day 4-5: Homepage Assembly**
- Assemble homepage with all components
- Test vinyl navigation
- Test arcade grid
- Test all interactive elements

**Day 6: Pre-Launch**
- Final SEO check
- Submit to Google Search Console
- Set up analytics (Plausible/Fathom)
- Create social media images
- Write launch announcement

**Day 7: Launch**
- Deploy to production
- Post to Reddit (r/webdev)
- Share on Twitter
- Send first newsletter
- Monitor analytics

---

## ðŸ“Š Success Metrics

### SEO Tracking
- Lighthouse scores (weekly)
- Core Web Vitals (daily)
- Search Console impressions/clicks
- Canonical URL coverage
- Rich result appearances
- Backlink acquisition

### Performance Tracking
- Page load time (< 2.5s)
- Time to interactive (< 3s)
- Bundle size (< 150kb total)
- Font load time (< 500ms)
- Image lazy load effectiveness

### Engagement Tracking
- Reddit upvotes per post
- GitHub stars per project
- Newsletter signup rate
- Project demo usage
- Build log readership
- Time on site
- Achievement unlock rate
- Theme switch frequency
- Console usage

---

## ðŸŽ¨ Visual References

### Inspiration Sources
- **Doom (1993):** HUD layout, status bars, aggressive colors
- **Duke Nukem 3D (1996):** Build engine aesthetic, CRT glow
- **SimCity 2000 (1993):** Panel interfaces, isometric info windows
- **Street Fighter II (1991):** Arcade cabinet design, marquees
- **Windows 95:** Beveled borders, title bars, system chrome
- **DOS Prompt:** Terminal green text, monospace fonts
- **Vinyl records:** Navigation metaphor, track listings
- **CRT monitors:** Scan lines, phosphor glow, color bleed

### Modern References
- **Poolside FM:** Retro aesthetic with modern UX
- **Windows 96:** Browser-based Windows 95 clone
- **Textreme:** CRT shader effects
- **Dither:** Retro dithering effects

---

## âš ï¸ What to Avoid

### Design Pitfalls
âŒ Pixel art everywhere (use sparingly)
âŒ Skeuomorphism overload (subtle references)
âŒ Animated GIFs (use CSS animations)
âŒ Comic Sans or low-quality pixel fonts
âŒ Excessive drop shadows (use glow instead)
âŒ Stock 90s clipart
âŒ Auto-playing audio (annoying)

### UX Pitfalls
âŒ Forcing boot sequence every visit (once only)
âŒ Window controls that don't work (confusing)
âŒ Too many blinking elements (seizure risk)
âŒ Unreadable pixel fonts for body text
âŒ Missing skip links for accessibility
âŒ Fake system dialogs (deceptive)

### Performance Pitfalls
âŒ Heavy JavaScript for effects (use CSS)
âŒ Unoptimized retro images (still need WebP)
âŒ Too many custom fonts (2-3 max)
âŒ Render-blocking resources
âŒ Missing lazy loading
âŒ No fallback for effects (progressive enhancement)

---

## âœ… Accessibility Requirements

### WCAG 2.1 AA Compliance
- Color contrast: 4.5:1 minimum for body text
- Focus indicators: Visible glow (not just outline)
- Keyboard navigation: All interactive elements
- Screen reader: Semantic HTML, ARIA labels
- Alt text: Descriptive for all images
- Animations: Respect prefers-reduced-motion

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .vinyl.spinning { animation: none; }
  .scanlines { display: none; }
}
```

---

## ðŸ”§ Technical Stack

### Core Framework
- **SvelteKit** (SSR + static generation)
- **TypeScript** (type safety)
- **Vite** (build tool)

### Styling
- **Tailwind CSS** (utility classes)
- **Custom CSS** (retro effects, animations)
- **PostCSS** (autoprefixer, minification)

### SEO/Performance
- **@sveltejs/adapter-static** (static site generation)
- **vite-plugin-imagemin** (image optimization)
- **sitemap** (auto-generation)
- **RSS** (feed generation)

### Analytics
- **Plausible** or **Fathom** (privacy-friendly)
- **Google Search Console** (SEO monitoring)
- **Lighthouse CI** (automated audits)

---

## ðŸŽ¯ Next Actions

### Immediate (This Week)
1. Set up SvelteKit project with TypeScript
2. Implement design tokens + state management
3. Build CSS-only CRT effects
4. Create base component library
5. Implement theme system

### Short Term (Next 2 Weeks)
6. Build core components (Panel, Card, Status Bar, Vinyl Nav)
7. Implement loading system (Cassette, Defrag)
8. Set up SEO infrastructure
9. Create first project page template
10. Build homepage

### Medium Term (Month 1)
11. Launch with 3-5 projects
12. Implement all power user features
13. Set up analytics and monitoring
14. Submit to search engines
15. First Reddit post

---

## ðŸ“ Content Strategy

### Project Types
- **Demos:** Interactive tools (neural viz, music viz)
- **Essays:** Technical deep dives (AI costs, caching)
- **Art:** Generative/creative experiments
- **Logs:** Build diary (daily/weekly updates)

### Publishing Cadence
- **Weekly:** 1 build log roundup
- **Bi-weekly:** 1 project OR 1 essay
- **Monthly:** 1 major project launch
- **Daily:** Quick log updates (when building)

### Reddit Strategy
- Post completed projects with source code
- Engage in comments (respond to all)
- Build in public (show process, not just results)
- Target subreddits: r/webdev, r/generative, r/SideProject

---

## ðŸŽ® The Modible Promise

**To visitors:**
- Real working demos (not vaporware)
- All source code available
- Honest about costs and failures
- Retro aesthetic with modern UX
- Fast, accessible, no BS

**To search engines:**
- Semantic HTML structure
- Proper structured data
- Fast Core Web Vitals
- Unique, valuable content
- Regular fresh updates

**To yourself:**
- Sustainable to maintain
- Fun to build on
- Reflects your personality
- Portfolio that stands out
- Base for thought leadership

---

## ðŸ”® Future Enhancements

### Phase 2 (Month 2-3)
- CLI tool: `npx create-modible-app`
- Design system as paid templates
- API access for demos
- Video walkthroughs on YouTube
- Guest posts on Dev.to

### Phase 3 (Month 4-6)
- Community submissions (remix culture)
- Pro tier ($9/mo unlimited demos)
- Advanced demos (Three.js, WebGPU)
- Conference talk proposals
- Sponsor/affiliate program

### Phase 4 (Month 6+)
- Course: "Retro-Futurism Web Design"
- Book: "Building with Nostalgia"
- SaaS: Demo hosting platform
- Community: Discord/Forum
- Agency: Retro redesigns

---

**Version:** 1.0 (Complete with Infrastructure)  
**Last Updated:** January 2025  
**Status:** Ready for Implementation  
**Next:** Begin Week 1 - Infrastructure + Foundation