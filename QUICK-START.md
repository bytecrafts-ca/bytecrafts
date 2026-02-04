# 🚀 Quick Start Guide

Get your bytecrafts.ca site running in **30 seconds**.

## Step 1: Launch Local Server

### Option A: Use the Launch Script (Easiest)
```bash
./start-server.sh
```

### Option B: Manual Launch

**Python 3:**
```bash
python3 -m http.server 8000
```

**Node.js:**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

## Step 2: Open Browser

Navigate to: **http://localhost:8000**

## Step 3: Test Scroll Interactions

1. **Scroll down slowly** from the top
2. Watch for these effects:
   - ✨ Progress bar filling at top
   - 📝 Hero text animating word-by-word
   - 📦 Sections fading in as you scroll
   - 🎨 Project cards wiping into view
   - 🔗 Nav links updating based on scroll position

## Test All Pages

- **Homepage** (`/index.html`) — Hero, featured work, services, process
- **Work** (`/work.html`) — Portfolio with filters, click cards for modals
- **Services** (`/services.html`) — Watch timeline dots light up on scroll
- **Pricing** (`/pricing.html`) — Expand FAQ accordions
- **Contact** (`/contact.html`) — Test contact form

## Verify Scroll Interactions

Open browser console (F12) and scroll. You should see:
- No JavaScript errors
- Smooth animations
- Elements appearing progressively
- Progress bar moving smoothly

## Test Reduced Motion

1. Enable "Reduce Motion" in system preferences:
   - **macOS:** System Preferences → Accessibility → Display → Reduce motion
   - **Windows:** Settings → Ease of Access → Display → Show animations
2. Reload page
3. Animations should be instant (no transitions)

## Mobile Testing

Resize browser window or use DevTools:
- Press `F12` → Toggle Device Toolbar
- Test on iPhone, iPad, Android sizes
- Mobile menu should work (hamburger icon)

---

## 🎯 What to Look For

### ✅ Correct Behavior
- Elements NOT visible on page load (below fold)
- Smooth fade + slide up on scroll
- Progress bar fills smoothly
- Nav updates as you scroll
- Modals open smoothly
- Accordions expand/collapse smoothly

### ❌ Incorrect Behavior
- All elements visible immediately on load
- No animation when scrolling
- Progress bar stuck at 0%
- Janky or stuttering animations
- JavaScript errors in console

---

## 📂 File Structure

```
/
├── index.html          ← Start here
├── work.html
├── services.html
├── pricing.html
├── contact.html
├── css/
│   └── styles.css      ← Single stylesheet
├── js/
│   └── main.js         ← All interactions
├── README.md           ← Full documentation
├── SCROLL-INTERACTIONS.md  ← Detailed verification
└── start-server.sh     ← Launch script
```

---

## 🛠️ Customization Quick Tips

### Change Accent Color
Edit `css/styles.css` line 6:
```css
--accent: #d4a574; /* Your color here */
```

### Add Scroll Reveal to New Element
```html
<div data-reveal="up">Your content</div>
```

Options:
- `data-reveal="up"` — Fade + slide up
- `data-reveal="fade"` — Fade only
- `data-reveal="mask"` — Wipe effect
- `data-reveal="line"` — Word-by-word (text only)

### Adjust Animation Speed
Edit transition durations in `css/styles.css`:
```css
[data-reveal="up"] {
  transition: opacity 0.8s, transform 0.8s;
  /* Change 0.8s to your preferred duration */
}
```

---

## 🔥 Performance Tips

### Before Deployment

1. **Optimize images** (if you add real ones):
   ```bash
   # Use WebP format, max 1920px wide
   ```

2. **Minify CSS and JS**:
   ```bash
   # Use online tools or build process
   ```

3. **Enable compression** on server:
   - Gzip/Brotli for text files

4. **Add caching headers**:
   ```
   Cache-Control: max-age=31536000
   ```

### Test Performance

Run Lighthouse in Chrome DevTools:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Generate report
4. Target: **98+ score on mobile**

---

## 🐛 Troubleshooting

### Animations Not Working
- Check browser console for errors
- Verify JavaScript is loading: `View Source` → look for `<script src="/js/main.js">`
- Try hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Server Won't Start
- Make sure port 8000 is not in use
- Try different port: `python3 -m http.server 8080`
- Check if Python/Node/PHP is installed: `which python3`

### Mobile Menu Not Opening
- Clear browser cache
- Verify you're using a local server (not `file://`)

---

## 📦 Deployment

Upload all files to:
- **Netlify** (drag & drop)
- **Vercel** (GitHub connect)
- **GitHub Pages** (Settings → Pages)
- **Traditional hosting** (FTP all files)

No build process required — pure HTML/CSS/JS.

---

## 🎓 Next Steps

1. **Replace placeholder content** with your actual projects
2. **Add real images** (optimize for web)
3. **Update contact form** to send to your email
4. **Customize colors** and typography
5. **Run Lighthouse** and aim for 98+
6. **Deploy** to production

---

## 🤝 Need Help?

- Read `README.md` for full documentation
- Read `SCROLL-INTERACTIONS.md` for animation details
- Check browser console for errors
- Test on latest Chrome/Firefox/Safari

---

**Ready to launch? Run `./start-server.sh` and open http://localhost:8000**

🎉 Enjoy your scroll-driven, Swiss editorial website!
