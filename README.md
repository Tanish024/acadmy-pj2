# AI Academy

An applied AI learning platform engineered with React, Vite, TypeScript, Tailwind CSS v4, Framer Motion, and React Router. Built with a mobile-first, minimalist design system, full light/dark mode support, interactive 2-step lead capture, and an admissions management portal with CSV export.

> **Note**: Prototype built for assignment purposes.

---

## 🌟 Key Highlights

- **Aesthetic Direction**: Minimalist, calm, premium, youthful but professional. Lots of whitespace, `rounded-2xl` corners, 1px subtle borders, gentle 150-250ms motion.
- **Design Tokens & Theme**:
  - Light Mode: Background `#FAFAF9`, Surface `#FFFFFF`, Border `#ECEAE6`, Text `#1E2430`, Muted `#6B7280`, Primary Indigo `#6C7AE0`, Accent Peach `#F2A57C` (*strictly reserved for main CTAs*), Success `#6FB28F`.
  - Dark Mode: Background `#0E1116`, Surface `#151A21`, Border `#232A33`, Text `#E8ECF1`, Muted `#94A0AE`, Primary `#8B97F0`, Accent `#F0A97F`, Success `#7FC2A0`.
  - Persisted in `localStorage` (`ai_academy_theme`), auto-detects system OS preference, smooth 200ms cubic-bezier transition.
- **Typography**: Headings in **Plus Jakarta Sans**, body in **Inter** (strictly maximum 2 font weights per view).
- **Accessibility**: Visible focus rings (`focus-ring`), WCAG AA compliant contrast in both themes, screen-reader friendly ARIA tags, and `prefers-reduced-motion` compliance.
- **Single Peach CTA Rule**: Only one primary peach action is visible per viewport; secondary actions use indigo outlines or ghost styling.
- **Interactive 2-Step Lead Capture**:
  - Step 1: Full name, 10-digit WhatsApp validation, email address.
  - Step 2: Status (student / professional / freelancer), college or company, programme of interest, preferred batch, referral attribution, and consent.
  - Real-time inline validation, disabled submission state, simulated async submission, and success checklist with WhatsApp community trigger.
- **Admin Leads Dashboard (`/admin/leads`)**:
  - Real-time `localStorage` synchronization.
  - Multi-field search and filtering by programme & lead status.
  - One-click **Export CSV** generation.
  - Visual blueprint of the planned production automation flow (*Form ➔ Google Sheet/Airtable ➔ WhatsApp & Email ➔ Reminders ➔ Call ➔ Payment* using Make / n8n).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8 + `@tailwindcss/vite`
- **Styling**: Tailwind CSS v4 + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: `lucide-react`
- **Routing**: React Router DOM (with route-level code splitting)
- **Linter**: Oxlint (0 warnings, 0 errors)

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/Tanish024/acadmy-pj2.git
cd pj2

# Install dependencies
npm install

# Start development server
npm run dev

# Run type check and production build
npm run build

# Run linter
npm run lint
```

---

## 🚢 Deploying to Vercel

### Method 1: Using the Vercel Dashboard (Recommended)
1. Push your repository to GitHub (see below).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New"** > **"Project"**.
4. Import your GitHub repository.
5. In **Build and Output Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**. Vercel will automatically read `vercel.json` for SPA rewrites.

### Method 2: Using the Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy directly from your workspace directory
vercel
```

---

## 📦 Pushing to GitHub

```bash
# Initialize git repository (if not initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: complete AI Academy landing page, lead capture journey, and admin portal"

# Link to your remote GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# Push to main branch
git branch -M main
git push -u origin main
```
