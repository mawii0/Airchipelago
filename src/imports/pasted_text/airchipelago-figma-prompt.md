# 🛫 AIRCHIPELAGO AIRLINES — FIGMA MAKE MASTER PROMPT
> A complete, screen-by-screen design brief for building the Airchipelago Airlines website in Figma Make.

---

## 0. PROJECT OVERVIEW

**Brand Name:** Airchipelago Airlines
**Tagline:** *"Travel Every Island with Us"*
**Mission:** Connect every Filipino island through accessible, warm, and culturally inspired air travel.
**Audience:** Filipino domestic travelers — families, OFWs, budget-conscious flyers, island tourists.
**Tone:** Warm, trustworthy, clear, and proudly Filipino — think national pride meets clean modern UX.
**Reference Flow:** Model the booking flow after Cebu Pacific's booking UI (multi-step, linear, confirmation-based).

---

## 1. DESIGN SYSTEM

### 1.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#1A2C6E` | Navy blue — headers, nav, buttons, footer |
| `--accent` | `#F5A623` | Golden yellow — CTAs, highlights, active states |
| `--accent-light` | `#FDE9B8` | Pale gold — backgrounds, tags |
| `--surface` | `#FFFFFF` | Cards, modals, forms |
| `--bg-base` | `#F7F8FC` | Page background |
| `--text-primary` | `#111827` | Body text |
| `--text-muted` | `#6B7280` | Labels, placeholders |
| `--success` | `#16A34A` | Confirmation messages |
| `--error` | `#DC2626` | Error states |
| `--border` | `#E5E7EB` | Input borders, dividers |
| `--overlay` | `rgba(26,44,110,0.85)` | Hero overlays |

### 1.2 Typography

- **Display / Hero:** `Playfair Display` — Bold. Used for large hero titles.
- **Headings (H1–H3):** `DM Sans` — SemiBold 600. Clean, modern, readable.
- **Body / UI:** `DM Sans` — Regular 400 / Medium 500.
- **Labels / Badges:** `DM Mono` — Uppercase, letter-spacing 0.08em.

### 1.3 Spacing & Radius

- Base spacing unit: `8px`
- Card radius: `16px`
- Button radius: `10px`
- Input radius: `8px`
- Modal radius: `20px`

### 1.4 Shadows

- `card-shadow`: `0 2px 16px rgba(26,44,110,0.08)`
- `modal-shadow`: `0 8px 48px rgba(26,44,110,0.18)`
- `button-hover`: `0 4px 20px rgba(245,166,35,0.35)`

### 1.5 Iconography

Use **Phosphor Icons** (line weight) throughout. Map icons to their context:
- ✈ Airplane — flights, destinations
- 🗓 Calendar — dates
- 👤 Person — passenger
- 🎫 Ticket — booking reference
- 🏝 Island / Map pin — destinations
- 🌟 Star — loyalty/Island Miles
- 💳 Card — payment
- ✅ Check circle — confirmation
- ⚠️ Warning — error / alert

### 1.6 Component Tokens

- **Primary Button:** `bg: --accent`, `text: --primary`, `hover: darken 8%, shadow-button-hover`, `radius: 10px`, `padding: 14px 28px`
- **Secondary Button:** `bg: transparent`, `border: 2px solid --primary`, `text: --primary`, `hover: bg --accent-light`
- **Ghost Button:** Underline link style, `text: --primary`
- **Input Fields:** `bg: white`, `border: 1px solid --border`, `focus: border --primary + glow shadow`, `radius: 8px`, `padding: 14px 16px`
- **Dropdown:** Same as input, with caret icon
- **Pill/Tag:** `bg: --accent-light`, `text: --primary`, `radius: 99px`, `padding: 4px 12px`, `font: DM Mono uppercase`
- **Step Indicator:** Horizontal stepper with icons (plane → person → luggage → wallet → checkmark). Active = filled --primary. Complete = --success. Inactive = --border.
- **Alert — Success:** `bg: #DCFCE7`, `border-left: 4px solid --success`, icon + message
- **Alert — Error:** `bg: #FEE2E2`, `border-left: 4px solid --error`, icon + message
- **Alert — Info:** `bg: --accent-light`, `border-left: 4px solid --accent`, icon + message

---

## 2. GLOBAL LAYOUT

### 2.1 Navigation Bar (sticky, full-width)

**Desktop:**
- Left: Airchipelago logo (stylized airplane + text mark in --primary)
- Center: `Home | Book | Destinations | Fleet | Island Miles | About`
- Right: `Check-in` (ghost) · `Log In` (secondary) · `Sign Up` (primary CTA)
- Background: white. Box shadow on scroll: `0 2px 12px rgba(0,0,0,0.06)`
- Active nav link: underline in --accent

**Mobile:**
- Logo left, hamburger right
- Full-screen slide-in drawer with same links, stacked vertically
- Sign Up button pinned at bottom of drawer

### 2.2 Footer

4-column layout on a `--primary` dark navy background:

| Col 1 | Col 2 | Col 3 | Col 4 |
|---|---|---|---|
| Logo + tagline + brief brand description | Quick Links (Home, Book, Destinations, Fleet, Island Miles, About, Contact) | Support (Customer Support 24/7: +1 800 555-2477, support@airchipelago.com, Reservations: +1 800 555-BOOK, Check-in Assistance: +1 800 555-CHECK) | Socials (Facebook, Instagram, X/Twitter) + App Store badges (placeholder) |

Bottom bar: `© 2025 Airchipelago Airlines. All rights reserved. | Privacy Policy | Terms of Use`

All footer text in white/50 opacity. Links hover to --accent.

---

## 3. PAGES

---

### PAGE 1 — HOME

**Hero Section**
- Full-width hero with a high-quality aerial photograph of Philippine islands (ocean, white sand, greenery). Use a `--overlay` dark navy gradient from bottom 40%.
- Centered over image:
  - Pill tag: `✈ BOOK YOUR FLIGHT`
  - H1 (Playfair Display, white, 64px): `"Travel Every Island with Us"`
  - Subtext (DM Sans, white/80, 18px): `"Discover the Philippines' finest islands — fast, easy, and affordable."`
- Below text, embed the **Quick Search Widget** (see Section 4.1).

**Announcement Banner** (below hero, full-width)
- `--primary` background, gold text: `🌟 Don't miss out on great deals this summer — Check our Island Miles Promo Fares!`
- Dismissible (X button right side)

**Destinations Section**
- Section header: `"Where Island to Fly Next?"` (DM Sans, H2)
- Subtitle: `"Let our flight destinations inspire you to choose your next trip"`
- 7-card horizontal scroll (on mobile) / 4-col grid (desktop):
  - Each card: destination photo, overlay gradient, destination name (white, bold), tagline (italic, white/80), price range (e.g., "From PHP 2,000"), `Book Now` CTA button (--accent)
  - Cards: `Camiguin`, `Palawan`, `Hundred Islands`, `Bantayan`, `Boracay`, `Siargao`, `Bohol`
  - Card border-radius: 16px. Hover: slight scale(1.02) + deeper shadow

**Why Fly Airchipelago Section**
- 3-column icon + text layout:
  1. 🏝 **Island Connectivity** — "Serving 7,641 islands across Luzon, Visayas, and Mindanao"
  2. 💛 **Filipino Hospitality** — "Every flight brings the warmth of Filipino culture onboard"
  3. 💰 **Affordable Fares** — "Transparent pricing with no hidden fees"

**Fleet Preview Section**
- Two-column layout:
  - Left: Image of ATR 72-600 with Airchipelago livery
  - Right: Text block — `"Our Fleet"` (H2), short description, bullet: *"ATR 72-600 — Perfect for short-runway island airports"*
  - Image of De Havilland Canada Dash 8 Q400 with livery
  - Bullet: *"Dash 8 Q400 — Ideal for longer routes like Palawan and Boracay"*
  - CTA: `View Full Fleet →`

**Island Miles Loyalty Teaser**
- `--primary` background, full-width band
- Left: Text — `"Join Island Miles"`, subtitle, two tier highlights (Suki & Bossing), `Join Free →` button in --accent
- Right: Illustrated card mockup (Island Miles loyalty card graphic with stars)

**Travel Requirements Banner**
- Light gray card, full-width
- Left: Photo of passport + boarding pass
- Right: `"Travel Requirements"` (H3), brief text: `"Be ready for your trip — check the latest guidelines, documents, and health protocols before you fly."`, `Check Travel Requirements →` button (secondary)

---

### PAGE 2 — BOOK (MAIN BOOKING FLOW)

This is the **core feature** of the website. It follows a 5-step linear flow modeled on the Cebu Pacific pattern shown in the uploaded screenshots.

#### 2.1 Step Indicator (sticky sub-header, persists across all booking steps)

Horizontal stepper, centered:
`[✈ Select Flight] — [👤 Guest Details] — [🧳 Add-ons] — [💳 Payment] — [✅ Confirmation]`

Active step: filled circle + label in --primary bold
Completed step: green check
Incomplete: gray circle

Show current route summary above stepper:
`Manila MNL → Iloilo ILO | 18 Apr – 19 Apr | 1 Adult`  (small pill, editable via pencil icon)

---

#### STEP 1 — FLIGHT SEARCH & SELECTION

**Sub-step A: Search Widget (also embedded in homepage)**

Card widget (white, shadow, 16px radius):
- Toggle tabs: `Round-trip | One-way | Promo code`
- Row 1 — Two inputs side by side:
  - `From` (airport search autocomplete, e.g., "Manila MNL")
  - Swap icon (circle with arrows, clickable, swaps From/To)
  - `To` (airport destination autocomplete)
- Row 2:
  - `Depart` date picker (calendar popover)
  - `Return` date picker (grayed out if One-way selected)
- Row 3:
  - `Guests` dropdown: Adult / Child / Infant counter (+ and – buttons)
  - `Promo Code` text input (optional)
- Full-width `Search Flights` button (--accent, bold)

**Validation:**
- If From or To is empty on submit → red border + inline error: `"Please select a departure city."`
- If Depart date is in the past → `"Please select a future date."`

---

**Sub-step B: Flight Selection Screen**

Layout mirrors Cebu Pacific screenshots.

**Departure section:**
- Label: `"Select your departing flight"`
- Route: `Manila MNL → [Destination]` (bold, H2, with airplane icon)
- **Date Strip:** Horizontal scroll of 5 dates. Each: date + price (or "No Flights"). Selected = yellow --accent background, bold price. Available = white card. Unavailable = gray, muted.
- **Flight Cards** (one per available flight):
  - Departure time (bold, 20px) → arrow → Arrival time (bold) with "+1 day" badge if overnight
  - Airport codes below times
  - Duration + Flight number (right side, muted)
  - "All-in Fare/guest" label + price in --primary (bold, 18px)
  - Urgency badge: `"X seats left at this price"` in --accent (orange-ish)
  - Hover: card border becomes --primary, slight lift
  - Selected: card border --primary bold, background --accent-light, checkmark icon top-right

**Return section** (for round-trip, appears below or on next scroll):
- Same layout as departure section
- Different route label: `[Destination] → Manila MNL`

**Fare breakdown note:** `"Fares are subject to government approval."` (muted, small, below cards)

---

#### STEP 2 — BUNDLE SELECTION

Full-width section below flight confirmation:
- Section title: `"Select a bundle for all flights"` (H2)
- Info tip card: `"💡 Tip: Avoid airport fees and long lines. Buy your add-ons ahead of time!"`

Three bundle cards (stacked vertically on mobile, 3-col on desktop):

| Bundle | Description | Price |
|---|---|---|
| **GO Basic** | Fare-only. Buy add-ons later at regular price. | Included |
| **GO Easy** (recommended badge) | Discounts on baggage and seat selection. | + PHP 1,456/guest |
| **GO Flexi** | Free rebooking when plans change. | + PHP 2,500/guest (example) |

Each card:
- Title (bold, H3)
- Short description (muted)
- `Show details` expandable toggle (reveals bullet list of inclusions)
- CTA button (full-width): e.g., `"I'm okay with fare only"` / `"I want cheaper bags & seats"` / `"I need flexible travel plans"`
- Selected card: border --primary, slight --accent-light bg tint

`"PWD and/or Senior Citizen discounts do not apply for flights with promos or discounts. However, PWDs and senior citizens may still avail of priority services."` — muted disclaimer below.

---

#### STEP 3 — GUEST DETAILS

Form page — white background, max-width 680px, centered.

**Route + Date Summary bar** (top, small pill)

**"Guest Details"** — H1

**For each adult/child (repeat section):**
- `Adult 1` section header with blue underline

**Selected Bundles for this Guest:**
- Two pills side by side: `MNL–ILO: GO Basic ✈` | `ILO–MNL: GO Basic ✈`

**Name:**
- Note: `"Please make sure that you enter your name exactly as it is shown on your Valid ID"`
- Title dropdown (Mr / Ms / Mrs / Dr / etc.)
- First name input (+ `☐ I have no first name` checkbox)
- Last name input

**Date of Birth:**
- Three inputs side by side: `DD | Month (dropdown) | YYYY`

**Nationality:**
- Dropdown (searchable)

**Go Rewards Membership ID (Optional):**
- Text input with placeholder `e.g. 4041178445`
- Info note: `"To earn Island Miles points, your account name must match your passenger name."`

**Checkboxes:**
- `☐ I have a declaration / request`
- `☐ I am a Person with Disability`

---

**Contact Information section** (below guest form):
- H2: `"Contact Information"`
- Subtext: `"Let us know how we may reach you if there are changes or questions related to your booking and payment. We will also be sending your itinerary to the below email."`
- Toggle: `🔵 Use guest's details` (pre-fills from above)
- `Select a guest` dropdown (Adult 1)
- Contact Number: Country code (+63 default) + mobile number input
- Email input + Retype email input (with real-time match validation)
- `☐ I confirm that I have read, understood, and agree to the updated Airchipelago Airlines Privacy Policy` (link to policy)

**Validation states:**
- Required fields: red asterisk `*`
- On submit with empty required field: field border turns red, message appears below: `"This field is required."`
- Email mismatch: `"Email addresses do not match."`
- On successful validation: field border turns green with ✓ icon

**Bottom CTA:** Full-width `Continue` button (--accent)

---

#### STEP 4 — PAYMENT

Layout: Two-column (60/40 split on desktop, stacked on mobile)

**Left column — Payment Method:**

Section title: `"Payment Method"`

Three payment options as large clickable cards:
1. 🏛 **Bank Payment** — Internet banking / OTC
2. **G** **E-Wallet Payment** — GCash, PayMaya, and other e-wallets
3. 📱 **QR Ph** — Scan to pay via any QR Ph-enabled app

Selected method = border --primary, --accent-light bg.

When Bank Payment selected: sub-options appear (list of partner banks with logos)
When E-Wallet selected: GCash + Maya options appear
When QR Ph selected: QR code image appears centered below

**Right column — Booking Summary:**

Card (white, shadow):
- Airchipelago logo (small)
- **Departing flight:**
  - Route: `MNL → ILO | Flight 4R 511`
  - Time: `10:25 AM → 11:50 AM | 1h 25m`
  - Fare/guest: `PHP X,XXX`
- **Returning flight** (if round-trip):
  - Same format
- Divider
- **Baggage:** `10 kg included`
- **Additional baggage:** `25 kg | PHP 595`
- **Total baggage:** `35 kg`
- Divider
- **Total to be paid:** `PHP X,XXX` (bold, 20px, --primary)
- `Pay Now` button (full-width, --accent)

Disclaimer: `"By proceeding, you agree to our Terms and Conditions."`

---

#### STEP 5 — CONFIRMATION

Full-page confirmation screen.

**Top — Success Banner:**
- Large green checkmark icon (animated: scale in with bounce)
- H1: `"Booking Confirmed! 🎉"`
- Subtitle: `"Your itinerary has been sent to [user@email.com]"`

**Booking Summary Card** (styled like an airline e-ticket / boarding pass):
- Dashed border / cutout aesthetic
- Left side:
  - Airchipelago logo
  - `Booking Reference: XXXXXX` (large, monospace, copyable)
  - Passenger name
- Right side (per flight leg):
  - Route: `MNL → ILO`
  - Date: `18 Apr 2026`
  - Departure: `10:25 AM` → Arrival: `11:50 AM`
  - Flight: `4R 511`
  - Baggage: `35 kg`
  - Seat: `TBA` (or assigned seat if selected)
  - Bundle: `GO Basic`
- Bottom: Barcode/QR placeholder

**Action Buttons (below card, horizontal):**
- `📥 Download Itinerary (PDF)` (secondary)
- `📧 Resend to Email` (secondary)
- `🏠 Return to Home` (primary --accent)

**What's Next section:**
- 3-step mini guide (icon + short text):
  1. `Check in online 2 hours before departure`
  2. `Bring a valid government-issued ID`
  3. `Arrive at the airport 1.5 hours early`

---

### PAGE 3 — CHECK-IN

**Hero:** Small hero banner (not full-screen). Title: `"Online Check-in"` Subtitle: `"Save time at the airport — check in here."`

**Check-in Card** (centered, max-width 560px):

Tab selection:
- `Booking Reference` | `E-ticket Number` | `Frequent Flyer Number`

Selected tab's form:
- Input 1: Reference / E-ticket / FF number
- Input 2: Last name
- Input 3 (Booking Ref only): Baggage weight preference checkbox
- `Proceed to Check-in` button (--accent, full-width)

**Error state:** If not found → red alert banner: `"We couldn't find a booking with these details. Please double-check and try again."`

---

### PAGE 4 — DESTINATIONS

**Page Header:**
- Full-width hero image (aerial island view, dark overlay)
- H1: `"Where Would You Like to Go?"`
- Subtitle: `"Explore all Airchipelago island destinations"`

**Filter Bar** (sticky below header):
- Filter by region pills: `All | Luzon | Visayas | Mindanao`
- Sort dropdown: `Price: Low to High | Alphabetical | Most Popular`

**Destination Grid** (3-col desktop, 2-col tablet, 1-col mobile):

Each destination card:
- Full-bleed photo
- Bottom gradient overlay
- Destination name (white, bold, 20px)
- Tagline (white/80, italic)
- Price range pill (--accent bg): `From PHP 2,000`
- `Book Now →` button (white outline on hover becomes filled --accent)
- Card hover: lift + scale(1.02)

Destinations to include:
| Destination | Tagline | Price |
|---|---|---|
| Camiguin | The Island Born of Fire | PHP 2,000–4,000 |
| Palawan | Nature's Masterpiece | PHP 2,500–5,000 |
| Hundred Islands | 123 Mini Getaways | PHP 2,500–6,000 |
| Bantayan | Where Time Slows Down | PHP 3,500–7,000 |
| Boracay | World-Famous White Beach | PHP 3,500–8,000 |
| Siargao | Surfing Capital of the Philippines | PHP 3,500–7,500 |
| Bohol | Home of the Chocolate Hills | PHP 2,000–4,500 |

**Destination Detail Drawer/Modal** (opens on card click):
- Large hero photo
- Destination name + region tag
- Short 2-sentence description
- Flight info: `Nearest Airport | Flight Duration from Manila`
- Price range
- `Book a Flight →` CTA (links directly to booking with destination pre-filled)
- `✕ Close` button

---

### PAGE 5 — FLEET

**Page Header:** `"Our Fleet"` — clean white header, H1 + subtitle.

**Aircraft Cards** (alternating left-right image/text layout):

**Card 1 — ATR 72-600:**
- Left: High-quality image of ATR 72-600 with Airchipelago livery
- Right:
  - Badge: `SHORT-HAUL SPECIALIST`
  - H2: `ATR 72-600`
  - Description: `"The ATR 72-600 is perfect for short runways and smaller island airports like Camiguin and Siargao. It is fuel-efficient, reliable, and ideal for scenic low-altitude flights."`
  - Specs table:
    - Capacity: 70 passengers
    - Range: 1,528 km
    - Speed: 510 km/h
    - Routes: Camiguin, Siargao, Bantayan, Hundred Islands

**Card 2 — De Havilland Canada Dash 8 Q400:**
- Right: Image
- Left:
  - Badge: `LONG-HAUL REGIONAL`
  - H2: `De Havilland Canada Dash 8 Q400`
  - Description: `"For longer routes such as Palawan and Boracay, we operate the Dash 8 Q400. It cruises faster while maintaining turboprop efficiency, making it perfect for regional island connections."`
  - Specs: Capacity: 78 pax, Range: 2,040 km, Speed: 667 km/h, Routes: Palawan, Boracay, Bohol

---

### PAGE 6 — ISLAND MILES (LOYALTY PROGRAM)

**Hero Section:**
- Dark navy (`--primary`) background, decorative gold wave/island illustration
- H1: `"Island Miles"` (Playfair Display, gold)
- Subtitle: `"Earn rewards every time you fly. The more islands you explore, the more you gain."`
- Two CTA buttons: `Join Free (Suki)` | `Learn More`

**How It Works — 3 Steps:**
1. 📋 **Sign Up Free** — Create your Island Miles account in minutes
2. ✈ **Fly & Earn** — PHP 100 = 1 Island Mile point
3. 🎁 **Redeem** — Use points for flights, upgrades, and more

**Tier Comparison Table:**

| Feature | 🌴 Suki (Free) | 🏆 Bossing (Frequent) |
|---|---|---|
| How to join | Free | 5 domestic RT or 2 intl per year |
| Extra baggage | +5 kg for pasalubong | Standard allowance |
| Promo access | 12-hr early Piso Fare access | 24-hr early access |
| Points rate | PHP 100 = 1 point | PHP 100 = 1.5 points |
| Point expiry | Active every 24 months | Never expires |
| Family pooling | ✗ | Up to 4 members |
| Free rebooking | ✗ | 1 per year |
| Priority services | ✗ | ✅ Check-in, boarding, baggage |
| Onboard snack | ✗ | ✅ Free drink + snack |

**Highlighted callout card (--accent-light):**
`"💛 Designed for Filipinos — from pasalubong baggage to family pooling, Island Miles is built around how you actually travel."`

**CTA Section:** `"Ready to start earning?"` → `Join Island Miles Free →` (--accent button)

---

### PAGE 7 — TRAVEL REQUIREMENTS

**Header:** `"Travel Requirements"` — H1, with subtitle: `"Be ready for your trip — check the latest guidelines, documents, and health protocols before you fly."`

**Info Alert Card:**
- Teal/info alert box: `"Airchipelago Airlines adheres to all governmental travel, health, and safety protocols. Before departure, please review the latest travel rules for your destination."`

**Accordion Sections (expand/collapse):**

1. **Domestic Flights**
   - Valid ID required for all Filipino and foreign passengers
   - Accepted ID grid (icon + label for each):
     - Philippine Passport
     - PhilSys National ID
     - Driver's License
     - UMID
     - PRC ID
     - Voter's ID
     - Senior Citizen ID
     - PWD ID
     - OFW ID
     - School/Student ID (minors only)
   - Note: `"IDs must be original and government-issued."`

2. **Baggage Guidelines**
   - Carry-on: 7 kg, max 56x36x23 cm
   - Checked baggage: based on bundle/add-on
   - Prohibited items list
   - Oversized baggage policy

3. **Special Travel Needs**
   - PWD passengers, senior citizens, unaccompanied minors
   - Medical equipment on board
   - Traveling with pets (cargo only)

4. **Health Protocols**
   - Current health requirements (placeholder — note these may be updated)
   - Contact tracing form info

**Disclaimer footer on page:**
`"Travel requirements are set by government authorities and may change without prior notice. Ensure you have verified all required documents before your flight."` (muted, italic)

---

### PAGE 8 — ABOUT US

**Hero:** Full-width image of Philippines island map or aerial view + dark overlay.
- H1: `"About Airchipelago"`
- Subtitle: `"More than an airline — your bridge across islands"`

**Our Story Section:**
- Two-col: Text left, image right
- Text content drawn from PDF: founding vision, regional carrier origins, expansion to tourism hubs and major cities.

**What We Stand For — Values Grid (4 cards):**
1. 💛 Filipino Hospitality
2. 🏝 Accessibility
3. 👨‍👩‍👧 Family & Community
4. 🎭 Culture & Comfort

**Our Mission:**
- Centered, large quote-style text block (Playfair Display):
  > *"To connect every Filipino island, culture, and community through accessible, reliable, and warmly human air travel."*

**Leadership / Team Section (optional placeholder):**
- 3-column team cards with photo placeholder, name, title

**Office & Contact:**
- Airchipelago Airlines Headquarters
- Lombos St. San Isidro, Parañaque City, Philippines
- Embed Google Maps (placeholder iframe)

---

### PAGE 9 — CONTACT

**Contact Info Grid (2-col):**

Left — Contact Cards:
| Department | Contact |
|---|---|
| Customer Support (24/7) | +1 (800) 555-2477 / support@airchipelago.com |
| Reservations & Ticketing | +1 (800) 555-BOOK (2665) / reservations@airchipelago.com |
| Check-in Assistance | +1 (800) 555-CHECK (2432) |
| Baggage Services | +1 (800) 555-BAGS (2247) / baggage@airchipelago.com |
| Island Miles Program | island@airchipelago.com |
| General Inquiries | airchipelago@gmail.com |

Right — Contact Form:
- Name input
- Email input
- Subject dropdown: `General | Booking | Baggage | Island Miles | Complaint | Other`
- Message textarea
- `Send Message` button (--accent)
- Success alert: `"✅ Message sent! Our team will get back to you within 24 hours."`

**Office Hours:** Monday–Sunday, Open 24 hours

**Social Media links:** Facebook, Instagram, Twitter/X — icon buttons

---

## 4. INTERACTIONS & MICRO-INTERACTIONS

| Trigger | Behavior |
|---|---|
| Button hover | Scale 1.02 + shadow increase + slight color shift |
| Destination card hover | Scale 1.02 + deeper card shadow |
| Input focus | Border color → --primary + soft blue glow |
| Input valid | Border → green + ✓ icon animates in |
| Input error | Border → red + shake animation + error text below |
| Date picker open | Smooth dropdown with slide-down animation |
| Flight card select | Border highlight + checkmark appears top-right |
| Step complete in booking | Step indicator fills with green + soft pop animation |
| Confirmation page load | Checkmark icon bounces in + card fades up |
| Page transitions | Fade-in (200ms) |
| Modal open | Backdrop fade in, card slides up from bottom on mobile / scale-in on desktop |
| Alert dismiss | Slide out right + fade |
| Accordion expand | Smooth height transition |
| Navbar scroll | Background transitions from transparent to white + shadow appears |

---

## 5. RESPONSIVE BREAKPOINTS

| Breakpoint | Layout |
|---|---|
| Mobile < 640px | Single column, bottom sheet modals, horizontal scroll for cards |
| Tablet 640–1024px | 2-col grids, side-drawer nav |
| Desktop > 1024px | Full multi-col layouts, hover states active |

**Mobile-specific notes:**
- Search widget stacks vertically (2 inputs per row max)
- Date strip: horizontal scroll, snaps to selected date
- Flight cards: full-width, no side-by-side layout
- Booking summary: collapses into accordion at bottom of screen
- Footer: single column
- Step indicator: icon only (no labels) to save space on mobile

---

## 6. ACCESSIBILITY GUIDELINES

- All form inputs have visible labels (not placeholder-only)
- Color contrast ratio minimum 4.5:1 for body text
- Focus outlines visible and distinct (2px solid --accent offset 2px)
- All interactive elements keyboard-navigable
- Error messages include text (not color alone)
- Images have descriptive `alt` text
- ARIA labels on icon-only buttons
- Screen reader announcements on step changes in booking flow

---

## 7. ERROR STATES & FEEDBACK MESSAGES

| Scenario | Message | Style |
|---|---|---|
| No flights found for route | `"No flights available for this route on the selected date. Try a different date or destination."` | Info alert with calendar icon |
| Payment failed | `"Payment unsuccessful. Please check your details or try a different payment method."` | Error alert, red |
| Session timeout during booking | `"Your session has expired. Your cart has been saved. Please log in to continue."` | Warning alert |
| Form field empty on submit | `"This field is required."` (inline, below field) | Red micro-text |
| Email mismatch | `"Email addresses do not match."` | Red micro-text |
| Booking reference not found | `"We couldn't find a booking with these details."` | Error alert |
| Booking confirmed | `"Your booking is confirmed! Check your email for your itinerary."` | Success alert, green, animated |
| Promo code invalid | `"This promo code is invalid or has expired."` | Error micro-text below input |
| Seats selling out (< 3 left) | `"Only X seat(s) left at this price!"` | --accent orange badge on card |

---

## 8. ADDITIONAL PAGES / FEATURES TO INCLUDE

- **404 Page:** Island-themed illustration + `"Looks like this island doesn't exist on our map."` + Return to Home button
- **Login / Sign Up Modal:** Email + password, social login (Google), or Guest checkout option
- **My Bookings Dashboard (logged in):** List of upcoming and past bookings with status pills (Confirmed, Cancelled, Completed)
- **Seat Selection Screen (optional add-on step):** Visual airplane cabin map, click-to-select seats, color-coded (available / selected / unavailable / extra legroom)
- **Baggage Add-on Screen:** Simple counter UI — `+ / –` for extra kg, shows price update live in summary

---

## 9. FIGMA MAKE SPECIFIC NOTES

- **Component variants:** Create full variants for Button (default/hover/disabled/loading), Input (default/focus/error/success), FlightCard (default/hover/selected), StepIndicator (incomplete/active/complete)
- **Auto-layout:** Use throughout for all cards, forms, and nav items
- **Prototype flows:** Connect all booking steps with smart animate transitions
- **Interactive components:** Use Figma's interactive component features for toggles, dropdowns, accordions, and tab switches
- **Grid system:** 12-column grid, 24px gutters, 80px side margins on desktop
- **Design tokens:** Set up as Figma variables for easy theme changes
- **Frames:** Use desktop (1440px), tablet (768px), and mobile (390px) base frames

---

*End of Master Prompt — Airchipelago Airlines Website*
*Version 1.0 | May 2025*
