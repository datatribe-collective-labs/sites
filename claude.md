# DataTribe Collective Website - Technical Documentation

## Project Overview

**DataTribe Collective** is a professional community website for data and AI professionals in Finland. It's a **static website** hosted on GitHub Pages with no backend, database, or build process. The site focuses on community engagement, learning programs, events, mentorship, and partnerships.

- **Website:** www.datatribecollective.com
- **Hosting:** GitHub Pages (via CNAME)
- **Type:** Static HTML/CSS/JavaScript website
- **Team Size:** Core team of 5+ people, founder Eevamaija Virtanen

---

## Technology Stack

### Frontend Technologies
- **HTML5** - Semantic markup with proper accessibility
- **CSS3** - Custom CSS with CSS variables for theming (no CSS preprocessor)
- **Vanilla JavaScript (ES6)** - No framework dependencies, minimal dependencies

### External Dependencies (CDN Only)
- **Google Fonts:** Inter (300-700 weights), Montserrat, Fira Code
- **Font Awesome 6.5.1** - Icon library via CDN
- **No npm/yarn dependencies** - This is important! No build process needed

### Deployment
- **GitHub Pages** - Direct deployment from main branch
- **Domain:** www.datatribecollective.com (configured via CNAME file)

---

## Project Structure

```
/sites/
├── index.html              # Home/Landing page
├── learning.html           # Learning programs page
├── events.html             # Events & meetups page
├── mentorship.html         # Mentorship program page
├── partnerships.html       # Partnerships page
├── script.js               # Interactive JavaScript (carousel)
├── css/
│   └── styles.css          # All styling (1,241 lines)
├── images/                 # Image assets (40+ files)
│   ├── logos/              # Company/partner logos
│   ├── team/               # Team member photos
│   └── icons/              # Custom icons and graphics
├── CNAME                   # DNS configuration
├── README.md               # Basic readme
├── .gitignore              # Git ignore rules
└── claude.md               # This file
```

---

## File Purposes and Key Information

### HTML Pages (5 Total)

#### 1. **index.html** (331 lines) - Home/Landing Page
**Sections:**
- Navigation bar (sticky header)
- Hero section with community tagline
- Stats bar: Discord, LinkedIn, Meetup, Substack member counts
- "Why Join DataTribe" section (4 benefit cards)
- Partners carousel (auto-rotating every 3 seconds)
- About section with mission/vision
- Core team section (founder + 5 team members with photos)
- Footer with links

**Key Classes:**
- `.hero` - Hero section styling
- `.benefit-cards` - Grid of 4 cards
- `.carousel-container` - Partner logos carousel
- `.team-grid` - Team member cards in grid layout

#### 2. **learning.html** (339 lines) - Learning Programs Page
**Sections:**
- Hero: "Build your data career with real projects"
- Learning benefits section (6 cards in 3x2 grid)
- Three learning paths:
  - Data Engineer path (5 weeks, DataCamp-based)
  - Databricks path (5 weeks, hands-on labs)
  - GitHub path (self-paced, version control)
- Internship opportunities
- External resource links

#### 3. **events.html** - Events & Meetups Page
- Events-specific hero section
- Event information and structure

#### 4. **mentorship.html** - Mentorship Program Page
- Mentorship-specific hero section
- Program details

#### 5. **partnerships.html** - Partnerships Page
- Partnership-specific hero section
- Partnership opportunities

**Common HTML Structure:**
All pages share:
- Same header/navigation
- Same footer
- Consistent section layout
- Same CSS styling

### **script.js** (96 lines) - Interactive Functionality

**Purpose:** Auto-rotating carousel for partner logos

**Key Functions:**
```javascript
// Initializes carousel on page load
// Auto-rotates every 3000ms (3 seconds)
// Responsive behavior:
// - Mobile (≤550px): Shows 1 item
// - Tablet (≤800px): Shows 2 items
// - Desktop: Shows 3 items
// - Wraps around infinitely
```

**How It Works:**
- Uses CSS `transform` and `transition` for smooth animations
- Listens to window resize events to adjust items shown
- No external libraries needed

### **css/styles.css** (1,241 lines) - All Styling

**CSS Architecture:**
- Uses CSS custom properties (variables) for theming
- Mobile-first responsive design
- Component-based organization

**Key CSS Variables:**
```css
--bg-hero: #043d40;        /* Dark teal - primary background */
--accent: #D68A3C;         /* Orange - accent color */
--text-dark: #000;
--text-light: #fff;
--bg-light: #f5f5f5;
--border-radius: 8px;
```

**Responsive Breakpoints:**
- Mobile: `max-width: 550px`
- Tablet: `max-width: 800px`
- Desktop: Any width above tablet

**Component Classes:**
- `.navigation` - Header and menu
- `.hero` - Large banner sections
- `.section` - Main content sections
- `.card` - Reusable card components
- `.grid` - Grid layouts (2 or 3 columns)
- `.carousel-container` - Partner carousel
- `.footer` - Footer section

---

## How to Make Changes

### Adding New Content

#### 1. **Add a New Page**
1. Create a new `.html` file (e.g., `newpage.html`)
2. Copy the structure from an existing page (e.g., `index.html`)
3. Update the navigation links in ALL pages to include the new page
4. Create a new hero section with page-specific content
5. Add content sections using existing CSS classes (`.section`, `.card`, `.grid`, etc.)
6. Deploy: Just push to main branch (GitHub Pages will auto-deploy)

#### 2. **Modify Existing Page Content**
1. Open the HTML file (e.g., `index.html`)
2. Find the section you want to modify
3. Edit the HTML content
4. Test locally by opening the file in a browser
5. Commit and push to main branch

#### 3. **Add Team Members**
In `index.html`, find the team grid section:
```html
<div class="team-grid">
    <div class="team-card">
        <img src="images/team/person-name.jpg" alt="Name">
        <h3>Name</h3>
        <p>Role/Title</p>
    </div>
</div>
```
Steps:
1. Add team member photo to `images/team/` directory
2. Copy a team card block and update:
   - `src` attribute with new image path
   - Name in `<h3>`
   - Role in `<p>`
3. Push to deploy

#### 4. **Add Partner Logos**
In `index.html`, find the carousel section:
```html
<div class="carousel-container">
    <img src="images/logos/partner-logo.svg" alt="Partner Name">
</div>
```
Steps:
1. Add logo file to `images/logos/` directory
2. Add `<img>` tag in carousel with logo path
3. The carousel will automatically include it (JavaScript handles rotation)

#### 5. **Update Links**
Links are typically in:
- Navigation header (all pages)
- Social media stats bar (index.html)
- Footer (all pages)

Find and update the `href` attribute in `<a>` tags.

### Styling Changes

#### 1. **Change Colors**
Edit CSS variables at the top of `css/styles.css`:
```css
--bg-hero: #043d40;      /* Change dark teal */
--accent: #D68A3C;       /* Change orange accent */
```

#### 2. **Modify Layout**
- Change grid columns: Edit `.grid { grid-template-columns: ... }`
- Adjust spacing: Modify `padding` and `margin` values
- Update responsive breakpoints: Modify `@media (max-width: ...)` rules

#### 3. **Change Fonts**
Font imports are in the `<head>` of HTML files. Update Google Fonts URL or change font-family declarations in CSS.

#### 4. **Modify Component Styling**
Find the component class (e.g., `.card`, `.button`, `.hero`) and edit its CSS properties:
```css
.card {
    padding: 20px;        /* Adjust spacing */
    border-radius: 8px;   /* Adjust corners */
    background: #fff;     /* Adjust background */
}
```

### Common Tasks

#### Update Social Media Stats (index.html)
Find the stats section and update the numbers:
```html
<div class="stats">
    <div class="stat">
        <span class="number">300+</span>
        <span class="label">Discord Members</span>
    </div>
</div>
```

#### Add a New Section to a Page
1. Use existing HTML structure from another section
2. Add relevant CSS classes
3. The existing CSS will automatically style it

#### Update External Links
Search for the old URL and replace with new URL in all HTML files where it appears.

---

## CSS Styling System

### Class Naming Convention
- `.hero` - Large banner sections
- `.section` - Content sections with padding
- `.card` - Reusable content blocks
- `.grid` - Grid container (auto 2-3 columns based on screen size)
- `.btn` or `.button` - Call-to-action buttons
- `.navigation` - Header nav
- `.footer` - Footer section
- `.carousel-container` - Carousel wrapper

### Responsive Design Approach
The site uses a **mobile-first** approach:
1. Mobile styles are the default (written first)
2. Tablet styles override at `max-width: 800px`
3. Desktop styles override at widths above tablet

To modify responsiveness, adjust media query breakpoints in `css/styles.css`:
```css
@media (max-width: 800px) {
    /* Tablet and mobile styles */
}
```

---

## JavaScript (script.js)

### What It Does
- Initializes the partner carousel on page load
- Auto-rotates carousel every 3 seconds
- Responds to window resize events for responsive item count

### How to Modify

#### Change Carousel Rotation Speed
Find the `setInterval` or timer and change the millisecond value (3000 = 3 seconds):
```javascript
setInterval(() => {
    // rotation logic
}, 3000);  // Change this number
```

#### Change Number of Visible Items
Modify the responsive breakpoints in the JavaScript:
```javascript
if (window.innerWidth <= 550) {
    visibleItems = 1;  // Mobile
} else if (window.innerWidth <= 800) {
    visibleItems = 2;  // Tablet
} else {
    visibleItems = 3;  // Desktop
}
```

#### Add New Interactive Features
Since there's no build process, you can:
1. Add new JavaScript code directly to `script.js`
2. Add event listeners to elements
3. Modify DOM elements directly
4. No npm packages or imports needed - keep it vanilla JS

---

## Images and Assets

### Image Organization
```
images/
├── logos/          # Partner and company logos (SVG preferred)
├── team/           # Team member photos (JPG/PNG)
└── icons/          # Custom icons and graphics
```

### Image Best Practices
- Use SVG for logos (scalable, small file size)
- Use JPG for photos (smaller than PNG)
- Compress images before adding to repository
- Use descriptive filenames (e.g., `partner-name-logo.svg`)
- Always add `alt` text to `<img>` tags for accessibility

### Adding New Images
1. Optimize image file (resize, compress)
2. Add to appropriate folder in `images/`
3. Reference in HTML with correct path: `src="images/folder/filename.ext"`
4. Commit and push

---

## Deployment

### How It Works
1. Push changes to `main` branch on GitHub
2. GitHub Pages automatically deploys the site
3. Changes are live at www.datatribecollective.com within seconds

### No Build Process Needed
This is a static site - just push HTML/CSS/JS files and they work immediately. No npm install, no build step, no compilation.

### Testing Locally
1. Open any HTML file directly in a browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Then visit http://localhost:8000
   ```

---

## Git Workflow

### Recent History
- Latest: "Merge pull request #1 from datatribe-collective-labs/feat/revamp" - Major website redesign
- Before: "Revamped website" - Implementation of the redesign
- Previous: Burger menu and mobile navigation additions

### Current Status
- Modified files: `index.html`, `learning.html`
- Untracked files: `.DS_Store` (ignore, already in .gitignore)
- Branch: `main`

### Making Changes
1. Create a feature branch: `git checkout -b feat/your-feature-name`
2. Make changes to files
3. Test locally
4. Commit: `git add . && git commit -m "Description of changes"`
5. Push: `git push origin feat/your-feature-name`
6. Create Pull Request on GitHub
7. Merge to main after review
8. GitHub Pages auto-deploys

---

## Key Architectural Decisions

### Why No Framework?
- Static content (no real-time updates)
- Lightweight and fast
- Easy to maintain
- No build process needed
- Low hosting costs (GitHub Pages)

### Why CSS Variables?
- Easy theming (change colors globally)
- Maintainable styling system
- Browser support is excellent

### Why Vanilla JavaScript?
- Minimal interactivity (only carousel)
- No dependency management needed
- Fast loading
- Easy for any developer to understand

---

## Common Questions & Troubleshooting

### Q: How do I add a new page?
**A:** Copy an existing HTML page, update the content and navigation links in all pages, commit and push.

### Q: How do I change colors?
**A:** Edit the CSS variables in `css/styles.css` (lines at the top).

### Q: How do I add team members?
**A:** Add their photo to `images/team/` and add a team card HTML block in `index.html`.

### Q: Why don't my changes appear?
**A:**
1. Hard refresh browser (Cmd+Shift+R on Mac)
2. Wait a few seconds for GitHub Pages to update
3. Check browser console (F12) for JavaScript errors

### Q: Can I use a CSS preprocessor?
**A:** Not recommended - this site is designed for simplicity. CSS variables already provide most benefits.

### Q: Can I add npm packages?
**A:** Not without adding a build process. Keep everything vanilla to maintain the simplicity.

---

## Development Best Practices

1. **Always test locally** before pushing
2. **Keep it simple** - don't over-engineer solutions
3. **Use semantic HTML** - proper tags for accessibility
4. **Update all pages** when changing navigation links
5. **Compress images** before committing
6. **Write descriptive commit messages**
7. **Add alt text** to all images
8. **Test on mobile** - use browser dev tools to check responsive design
9. **Keep CSS organized** - group related styles together
10. **Don't delete old code** - use git history if needed later

---

## Resources

- **HTML Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Reference:** https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Google Fonts:** https://fonts.google.com
- **Font Awesome Icons:** https://fontawesome.com
- **GitHub Pages Docs:** https://pages.github.com

---

## Questions or Issues?

For questions about the project structure, technology decisions, or how to implement changes, refer to the relevant sections above. For Git or GitHub-specific issues, check GitHub documentation or ask the team.

Last Updated: 2026-02-09