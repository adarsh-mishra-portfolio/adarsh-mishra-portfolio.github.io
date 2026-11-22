# Adarsh Mishra – Professional Export & Import Executive Portfolio

A modern, responsive, corporate portfolio website tailored specifically for **Adarsh Mishra**, an **Export & Import Executive** specializing in international trade, ocean freight, air cargo, inland container logistics, customs clearance, and global supply chain coordination.

Live Website URL:
`https://adarsh-mishra.github.io/adarsh-mishra-portfolio/`

Professional Profiles:
- **LinkedIn**: [https://www.linkedin.com/in/adarsh-mishra-795594310](https://www.linkedin.com/in/adarsh-mishra-795594310)
- **Portfolio**: [https://adarsh-mishra.github.io/adarsh-mishra-portfolio/](https://adarsh-mishra.github.io/adarsh-mishra-portfolio/)

---

## ⚓ Key Highlights & Architecture

- **Industry-Specific Design**: Tailored for global trade, ocean shipping lines, customs broking (CHA), container freight stations (CFS), and multi-modal logistics.
- **Ocean Blue Corporate Palette**: Rich Maritime Ocean Blue (`#0B2545` / `#0D3358` / `#071C33`), High-Visibility Cargo Orange (`#F07832`), Sky Cyan (`#38BDF8`), and Crisp Text (`#FFFFFF` & `#CBD5E1`).
- **Holographic Cargo Showcase**: Auto-changing holographic slider featuring Ocean Vessels, Air Cargo, Intermodal Rail, Port Terminals, and Bonded Warehouses with live HUD coordinates and bullet navigation.
- **Equal Card Heights**: All dual-column sections (Contact and Skills) are engineered with flexbox `items-stretch` and matching pixel heights.
- **Multi-Modal Freight Showcase**: Interactive modules for Ocean Cargo (Container Vessels, FCL/LCL), Air Freight (AWB clearance), and Intermodal Rail/Road (ICD dry ports).
- **End-to-End Trade Lifecycle**: 6-phase visual walkthrough from Order Planning to Customs Clearance and final IDPMS bank closures.
- **Verified CV Integration**: Direct downloads for both **Word format (`Adarsh-Mishra-CV.docx`)** and **PDF format (`Adarsh-Mishra-CV.pdf`)** containing clickable LinkedIn and Portfolio URLs.
- **Direct Executive Inquiries**: Click-to-call (`+91 96951 42996`), click-to-email (`adarshmishra8524@gmail.com`), 1-click WhatsApp instant chat, and LinkedIn direct profile link.
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
│   │   ├── Adarsh-Mishra-CV.docx # Latest Word CV document for download
│   │   ├── Adarsh-Mishra-CV.pdf  # Generated PDF CV with verified links
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
│   │   │   ├── Navbar.tsx        # Responsive navigation with active spy, LinkedIn & WhatsApp
│   │   │   ├── SectionHeader.tsx # Reusable corporate section header (no wavy underlines)
│   │   │   └── Footer.tsx        # Corporate footer with back-to-top & quick links
│   │   └── logistics/
│   │       ├── HolographicCargoShowcase.tsx # Auto-changing holographic cargo HUD slider
│   │       ├── LogisticsShowcase.tsx        # Multi-modal transport switcher (Sea, Air, Rail)
│   │       └── TradeLifecycle.tsx           # 6-step export-import lifecycle
│   ├── data/
│   │   └── portfolioData.ts      # Verifiable data (experience, education, skills, contact)
│   ├── sections/
│   │   ├── Hero/                 # Hero introduction & action CTAs
│   │   ├── About/                # Professional summary & 6 core trade pillars
│   │   ├── Experience/           # Vertical corporate timeline (Neptune, Asian Granito, V Care)
│   │   ├── CoreExpertise/        # 8 Visual competence cards (BOE, IDPMS, customs, freight)
│   │   ├── Education/            # B.A Graduate (8.6 CGPA), 12th (8 GPA), 10th (7 GPA)
│   │   ├── Skills/               # Technical skills, compliance frameworks, languages
│   │   └── Contact/              # Phone, email, WhatsApp, LinkedIn, interactive inquiry form
│   ├── styles/
│   │   └── index.css             # Ocean Blue theme, holographic scanline animation
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
git commit -m "feat: complete professional portfolio for Adarsh Mishra - Export & Import Executive"

# Link your remote GitHub repository
git remote add origin https://github.com/adarsh-mishra/adarsh-mishra-portfolio.git

# Push code to main
git push -u origin main
```

### Step 3: Enable GitHub Actions for GitHub Pages
1. Go to your repository on GitHub:
   `https://github.com/adarsh-mishra/adarsh-mishra-portfolio`
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
   https://adarsh-mishra.github.io/adarsh-mishra-portfolio/
   ```

---

## 🔒 Verification & Compliance Checklist

- [x] **No developer/software engineer content**: Strictly tailored to international trade, maritime shipping, and customs clearance.
- [x] **Exact employment details**: All 3 companies (Neptune Petrochemicals, Asian Granito, V Care Group) and their exact dates and responsibilities preserved without alterations.
- [x] **Exact educational details**: B.A Graduate (8.6 CGPA), 12th (8 GPA), 10th (7 GPA) from Raja Harpal Singh Mahavidyalaya.
- [x] **No fake ratings or invented statistics**: Clean categorical visual cards without fabricated proficiency percentages.
- [x] **Word CV & PDF CV Downloads**: Downloads `Adarsh-Mishra-CV.docx` as primary format and `Adarsh-Mishra-CV.pdf` as secondary format.
- [x] **Verified Links**: Both CV documents and website include `https://www.linkedin.com/in/adarsh-mishra-795594310` and `https://adarsh-mishra.github.io/adarsh-mishra-portfolio/`.
- [x] **Holographic Cargo Showcase**: Auto-changing cargo slider with HUD radar telemetry and bullet point navigation.
- [x] **Click-to-Call & Email**: Configured for `+91 96951 42996` and `adarshmishra8524@gmail.com`.
- [x] **WhatsApp Integration**: Instant chat link to `+91 96951 42996`.
- [x] **Zero broken links & clean build**: Tested with Vite and TypeScript compiler.
