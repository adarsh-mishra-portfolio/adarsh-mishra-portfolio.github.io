# Adarsh Mishra – Professional Export & Import Executive Portfolio

A modern, responsive, corporate portfolio website tailored specifically for **Adarsh Mishra**, an **Export & Import Executive** specializing in international trade, ocean freight, air cargo, inland container logistics, customs clearance, and global supply chain coordination.

Target Live URL:
`https://YOUR-GITHUB-USERNAME.github.io/adarsh-mishra-portfolio/`

---

## ⚓ Key Highlights & Architecture

- **Industry-Specific Design**: Tailored for global trade, shipping lines, customs broking (CHA), container freight stations (CFS), and multi-modal logistics.
- **Corporate Color Palette**: Deep Navy Blue (`#0B192C` primary), Clean White (`#FFFFFF`), Light Slate (`#F8FAFC` secondary), and Energetic Maritime Orange (`#EA580C` accent).
- **Multi-Modal Cargo Showcase**: Dedicated interactive modules for Ocean Cargo (Container Vessels, FCL/LCL), Air Freight (AWB clearance), and Intermodal Rail/Road (ICD dry ports).
- **End-to-End Trade Lifecycle**: 6-phase visual walkthrough from Order Planning to Customs Clearance and final IDPMS bank closures.
- **Genuine CV Integration**: Direct download of the authentic `Adarsh-Mishra-CV.pdf` directly derived from the supplied CV.
- **Direct Executive Inquiries**: Click-to-call (`+91 96951 42996`), click-to-email (`adarshmishra8524@gmail.com`), and 1-click WhatsApp instant chat integration.
- **Automated Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) ready for GitHub Pages hosting on push to `main`.
- **Zero Hallucinations**: All professional milestones, employment tenures, educational scores, and skills strictly reflect the supplied curriculum vitae.

---

## 📁 Repository Structure

```
adarsh-mishra-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── assets/
│   │   ├── Adarsh-Mishra-CV.pdf  # Genuine CV file for download
│   │   └── images/               # High-resolution logistics & freight imagery
│   │       ├── cargo-ship.jpg
│   │       ├── cargo-plane.jpg
│   │       ├── freight-train.jpg
│   │       ├── port-terminal.jpg
│   │       └── logistics-warehouse.jpg
│   └── favicon.svg               # Maritime container & anchor favicon
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx        # Responsive navigation with active spy & WhatsApp pill
│   │   │   ├── SectionHeader.tsx # Reusable corporate section header
│   │   │   └── Footer.tsx        # Corporate footer with back-to-top & quick links
│   │   └── logistics/
│   │       ├── LogisticsShowcase.tsx # Multi-modal transport switcher (Sea, Air, Rail)
│   │       └── TradeLifecycle.tsx    # 6-step export-import lifecycle
│   ├── data/
│   │   └── portfolioData.ts      # Verifiable data (experience, education, skills, contact)
│   ├── sections/
│   │   ├── Hero/                 # Hero introduction & action CTAs
│   │   ├── About/                # Professional summary & 6 core trade pillars
│   │   ├── Experience/           # Vertical corporate timeline (Neptune, Asian Granito, V Care)
│   │   ├── CoreExpertise/        # 8 Visual competence cards (BOE, IDPMS, customs, freight)
│   │   ├── Education/            # B.A Graduate (8.6 CGPA), 12th (8 GPA), 10th (7 GPA)
│   │   ├── Skills/               # Technical skills, compliance frameworks, languages
│   │   └── Contact/              # Phone, email, WhatsApp, interactive inquiry form
│   ├── styles/
│   │   └── index.css             # Tailwind v4 theme, maritime grid patterns
│   ├── utils/
│   │   ├── asset.ts              # Robust base-path-aware asset resolver
│   │   └── cn.ts                 # Classname utility
│   ├── App.tsx                   # Main application layout
│   └── main.tsx                  # React DOM entry point
├── index.html                    # SEO meta tags, OpenGraph, theme-color
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript project configuration
├── vite.config.ts                # Vite config with dynamic GitHub Pages base path
└── README.md                     # Documentation and deployment instructions
```

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons (Lucide & Font Awesome 6 icons)
- **CI/CD**: GitHub Actions (`actions/deploy-pages@v4`)
- **Hosting**: GitHub Pages

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Node.js (v20 or v22 recommended)
- npm (v8+ or v10+)

### 2. Installation & Running
```bash
# Navigate to the project directory
cd adarsh-mishra-portfolio

# Install dependencies (if not already installed)
npm install

# Start the local development server
npm run dev
```

Open your browser at `http://localhost:5173/` to view the website.

### 3. Production Build & Local Preview
```bash
# Verify TypeScript and build production assets
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Publishing to GitHub & GitHub Pages

Follow these exact steps to publish this portfolio to your GitHub account and activate GitHub Pages:

### Step 1: Create a New Repository on GitHub
1. Log in to your GitHub account: [https://github.com](https://github.com).
2. Click the **+** (plus icon) in the top right corner and select **New repository**.
3. Set the Repository name to:
   ```
   adarsh-mishra-portfolio
   ```
4. Set the visibility to **Public**.
5. Do **NOT** initialize with a README, .gitignore, or license (these are already configured locally).
6. Click **Create repository**.

### Step 2: Initialize Git and Push Locally
Open your terminal (PowerShell or Git Bash) in the project directory:

```bash
cd "c:\Users\Rohit Tiwari\OneDrive\Desktop\AI-WORKS\adarsh-mishra-portfolio"

# Initialize git repository
git init

# Set the primary branch to main
git branch -M main

# Add all files to staging
git add .

# Commit changes
git commit -m "feat: initial commit - Adarsh Mishra Export & Import Executive portfolio"

# Link your remote GitHub repository (replace YOUR-GITHUB-USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/adarsh-mishra-portfolio.git

# Push code to main
git push -u origin main
```

### Step 3: Enable GitHub Actions for GitHub Pages
1. Go to your repository on GitHub:
   `https://github.com/YOUR-GITHUB-USERNAME/adarsh-mishra-portfolio`
2. Click on the **Settings** tab.
3. In the left navigation menu, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Source**, choose:
   ```
   GitHub Actions
   ```
5. Your repository's automated workflow (`.github/workflows/deploy.yml`) will trigger automatically upon every push to the `main` branch!
6. Click the **Actions** tab to watch the deployment build and publish.
7. Once finished (typically ~60 seconds), your live portfolio will be available at:
   ```
   https://YOUR-GITHUB-USERNAME.github.io/adarsh-mishra-portfolio/
   ```

---

## 🔒 Verification & Compliance Checklist

- [x] **No developer/software engineer content**: Strictly tailored to international trade, maritime shipping, and customs clearance.
- [x] **Exact employment details**: All 3 companies (Neptune Petrochemicals, Asian Granito, V Care Group) and their exact dates and responsibilities preserved without alterations.
- [x] **Exact educational details**: B.A Graduate (8.6 CGPA), 12th (8 GPA), 10th (7 GPA) from Raja Harpal Singh Mahavidyalaya.
- [x] **No fake ratings or invented statistics**: Clean categorical visual cards without fabricated proficiency percentages.
- [x] **Genuine CV**: Directly downloadable `Adarsh-Mishra-CV.pdf` generated from the original curriculum vitae.
- [x] **Click-to-Call & Email**: Configured for `+91 96951 42996` and `adarshmishra8524@gmail.com`.
- [x] **WhatsApp Integration**: Instant chat link to `+91 96951 42996`.
- [x] **Zero broken links & clean build**: Tested with Vite and TypeScript compiler.
