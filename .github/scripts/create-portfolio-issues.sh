#!/bin/bash

# Portfolio Project - Create Issues Script
# Creates all issues for the Portfolio Project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Creating Portfolio Project Issues                      ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo -e "${RED}Error: GitHub CLI (gh) is not installed${NC}"
    echo "Install it with: sudo dnf install gh"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo -e "${RED}Error: Not authenticated with GitHub${NC}"
    echo "Run: gh auth login"
    exit 1
fi

echo -e "${GREEN}✓ GitHub CLI authenticated${NC}"
echo ""

# Create Labels
echo -e "${BLUE}Creating Labels...${NC}"
gh label create "epic" --color "5319e7" --force
gh label create "task" --color "008672" --force
gh label create "P0-critical" --color "d73a4a" --force
gh label create "P1-high" --color "ff6b6b" --force
gh label create "P2-medium" --color "ffd93d" --force
gh label create "architecture" --color "fbca04" --force
gh label create "ui" --color "c5def5" --force
gh label create "logic" --color "1d76db" --force
gh label create "content" --color "0e8a16" --force
gh label create "performance" --color "d93f0b" --force
gh label create "seo" --color "7057ff" --force
gh label create "a11y" --color "0075ca" --force
gh label create "testing" --color "e99695" --force
gh label create "sprint-1" --color "bfdadc" --force
gh label create "sprint-2" --color "bfdadc" --force
gh label create "sprint-3" --color "bfdadc" --force

echo -e "${GREEN}✓ Labels created${NC}"
echo ""

PROJECT_NUMBER=6
PROJECT_OWNER="pehlivanu"

# Helper function to create issue and add to project
create_issue() {
  local title="$1"
  local label="$2"
  local body="$3"
  
  echo -e "${BLUE}Creating: $title...${NC}"
  url=$(gh issue create --title "$title" --label "$label" --body "$body")
  echo "Created issue: $url"
  
  echo "Adding to Project #$PROJECT_NUMBER..."
  gh project item-add $PROJECT_NUMBER --owner $PROJECT_OWNER --url "$url"
}

PROJECT_NUMBER=6
PROJECT_OWNER="pehlivanu"

# Helper function to create issue and add to project
create_issue() {
  local title="$1"
  local label="$2"
  local body="$3"
  
  echo -e "${BLUE}Creating: $title...${NC}"
  url=$(gh issue create --title "$title" --label "$label" --body "$body")
  echo "Created issue: $url"
  
  echo "Adding to Project #$PROJECT_NUMBER..."
  gh project item-add $PROJECT_NUMBER --owner $PROJECT_OWNER --url "$url"
}

# --- EPIC 1: Core Foundation ---
echo -e "${BLUE}Creating Epic 1: Core Foundation & Architecture...${NC}"
create_issue "[EPIC] Core Foundation & Architecture" "epic,P0-critical,sprint-1,architecture" "$(cat <<'EOF'
## Description
Establish a robust, scalable, and type-safe foundation using Next.js 15 and Tailwind CSS. This includes project initialization, theme configuration, and core layout implementation.

## Business Value
Ensures the project is built on modern, maintainable technologies, allowing for rapid development and easy scaling.

## User Stories
- #2 - [TASK] Initialize Next.js 15 Project
- #3 - [TASK] Configure Tailwind CSS v4 & Theme
- #4 - [TASK] Implement Core Layout (IDELayout)
- #5 - [TASK] Implement Navigation Context

## Story Points
13

## Target Sprint
Sprint 1
EOF
)"

create_issue "[TASK] Initialize Next.js 15 Project" "task,P0-critical,sprint-1,architecture" "$(cat <<'EOF'
## Description
Initialize the project with Next.js 15, TypeScript, and App Router. Ensure strict type safety and proper linting configuration.

## Implementation Checklist
- [x] Run `create-next-app` with TypeScript and App Router
- [x] Configure `tsconfig.json` for strict mode
- [x] Setup ESLint and Prettier
- [x] Clean up default boilerplate code

## Acceptance Criteria
- [x] Project builds successfully
- [x] No linting errors
- [x] TypeScript strict mode enabled

## Story Points
3
EOF
)"

create_issue "[TASK] Configure Tailwind CSS v4 & Theme" "task,P0-critical,sprint-1,ui" "$(cat <<'EOF'
## Description
Set up Tailwind CSS v4 and define the custom color palette to match the VS Code Dark theme.

## Implementation Checklist
- [x] Install Tailwind CSS v4
- [x] Define CSS variables for theme colors (bg, sidebar, accent, etc.)
- [x] Create a `globals.css` with the theme definitions
- [x] Verify Tailwind utility classes work

## Acceptance Criteria
- [x] Tailwind classes apply correctly
- [x] Custom theme variables are available
- [x] Dark mode is the default

## Story Points
3
EOF
)"

create_issue "[TASK] Implement Core Layout (IDELayout)" "task,P0-critical,sprint-1,ui" "$(cat <<'EOF'
## Description
Create the main layout component that mimics the VS Code window structure: Title Bar, Sidebar, Main Content Area, and Status Bar.

## Implementation Checklist
- [x] Create `IDELayout.tsx` component
- [x] Implement Title Bar (top)
- [x] Implement Sidebar (left)
- [x] Implement Status Bar (bottom)
- [x] Ensure responsive design (mobile drawer)

## Acceptance Criteria
- [x] Layout matches VS Code structure
- [x] Responsive on mobile devices
- [x] Content area scrolls independently

## Story Points
5
EOF
)"

create_issue "[TASK] Implement Navigation Context" "task,P1-high,sprint-1,logic" "$(cat <<'EOF'
## Description
Create a React Context to manage global application state, such as the active section, sidebar visibility, and contact form status.

## Implementation Checklist
- [x] Create `NavigationContext.tsx`
- [x] Define state for `activeSection`, `isContactVisible`
- [x] Implement `scrollToSection` logic
- [x] Wrap application in `NavigationProvider`

## Acceptance Criteria
- [x] Can switch active sections programmatically
- [x] Sidebar state is persisted/shared
- [x] Smooth scrolling works

## Story Points
2
EOF
)"


# --- EPIC 2: UI/UX Design System ---
echo -e "${BLUE}Creating Epic 2: UI/UX Design System...${NC}"
create_issue "[EPIC] UI/UX Design System" "epic,P0-critical,sprint-1,ui" "$(cat <<'EOF'
## Description
Create an immersive, pixel-perfect replica of the Antigravity IDE interface. This includes the sidebar navigation, status bar indicators, file explorer, and animations.

## User Stories
- #7 - [TASK] Implement Sidebar & Activity Bar
- #8 - [TASK] Implement Status Bar
- #9 - [TASK] Implement Explorer Panel
- #10 - [TASK] Implement Mobile Responsiveness
- #11 - [TASK] Implement Animations (Framer Motion)

## Story Points
21

## Target Sprint
Sprint 1
EOF
)"

create_issue "[TASK] Implement Sidebar & Activity Bar" "task,P1-high,sprint-1,ui" "$(cat <<'EOF'
## Description
Build the left-hand activity bar with interactive icons that switch the active sidebar view (Explorer, Search, Git, etc.).

## Implementation Checklist
- [x] Create `Sidebar.tsx`
- [x] Add icons for Explorer, Search, Source Control, Extensions
- [x] Implement active state styling (border-left, bright icon)
- [x] Handle click events to toggle views

## Acceptance Criteria
- [x] Icons match VS Code style
- [x] Active state is clearly visible
- [x] Clicking toggles the corresponding panel

## Story Points
3
EOF
)"

create_issue "[TASK] Implement Status Bar" "task,P1-high,sprint-1,ui" "$(cat <<'EOF'
## Description
Build the bottom status bar showing real-time context like Git branch, language, cursor position, and notifications.

## Implementation Checklist
- [x] Create `StatusBar.tsx`
- [x] Add Git branch indicator (main)
- [x] Add Language indicator (TypeScript React)
- [x] Add Cursor position (Ln, Col)
- [x] Integrate with Contact form status

## Acceptance Criteria
- [x] Status bar stays at bottom
- [x] Indicators look authentic
- [x] Updates based on context (e.g., contact form sent)

## Story Points
3
EOF
)"

create_issue "[TASK] Implement Explorer Panel" "task,P1-high,sprint-1,ui" "$(cat <<'EOF'
## Description
Create a file-tree navigation component in the sidebar that links to different sections of the page.

## Implementation Checklist
- [x] Create `Explorer.tsx`
- [x] Structure files (Hero.tsx, Experience.tsx, etc.)
- [x] Implement click-to-scroll functionality
- [x] Add hover and selection styles

## Acceptance Criteria
- [x] Looks like VS Code file tree
- [x] Clicking a file scrolls to the section
- [x] Active section highlights the file

## Story Points
3
EOF
)"

create_issue "[TASK] Implement Mobile Responsiveness" "task,P0-critical,sprint-1,ui" "$(cat <<'EOF'
## Description
Ensure the IDE layout adapts seamlessly to small screens. The sidebar should become a drawer or overlay, and the layout should stack appropriately.

## Implementation Checklist
- [x] Hide Title Bar on mobile
- [x] Add floating hamburger menu
- [x] Make Sidebar/Explorer an overlay on mobile
- [x] Ensure touch targets are large enough

## Acceptance Criteria
- [x] Usable on mobile devices
- [x] Menu opens/closes smoothly
- [x] No horizontal scrolling issues

## Story Points
8
EOF
)"

create_issue "[TASK] Implement Animations" "task,P2-medium,sprint-1,ui" "$(cat <<'EOF'
## Description
Use Framer Motion to add smooth page transitions, hover effects, and "focus mode" interactions to enhance the premium feel.

## Implementation Checklist
- [x] Install `framer-motion`
- [x] Add entry animations for sections
- [x] Add hover effects for cards and buttons
- [x] Implement "focus mode" (blur inactive items)

## Acceptance Criteria
- [x] Animations are smooth (60fps)
- [x] Not distracting or overwhelming
- [x] enhance user experience

## Story Points
5
EOF
)"


# --- EPIC 3: Content Sections ---
echo -e "${BLUE}Creating Epic 3: Content Sections...${NC}"
create_issue "[EPIC] Content Sections" "epic,P0-critical,sprint-2,content" "$(cat <<'EOF'
## Description
Display portfolio content (Hero, Experience, Projects, Contact) in an engaging, readable, and interactive format.

## User Stories
- #13 - [TASK] Implement Hero Section
- #14 - [TASK] Implement Experience Timeline
- #15 - [TASK] Implement Projects Carousel
- #16 - [TASK] Implement Contact Form

## Story Points
21

## Target Sprint
Sprint 2
EOF
)"

create_issue "[TASK] Implement Hero Section" "task,P1-high,sprint-2,content" "$(cat <<'EOF'
## Description
Design a striking landing view with animated typography and a clear call to action.

## Implementation Checklist
- [x] Create `Hero.tsx`
- [x] Implement animated "Liviu .io" text
- [x] Add "Download CV" and "Contact Me" buttons
- [x] Ensure responsive font sizing

## Acceptance Criteria
- [x] Visually impactful
- [x] Text is legible
- [x] Buttons work

## Story Points
3
EOF
)"

create_issue "[TASK] Implement Experience Timeline" "task,P1-high,sprint-2,content" "$(cat <<'EOF'
## Description
Build an interactive timeline for career history with expandable cards and focus effects.

## Implementation Checklist
- [x] Create `Experience.tsx`
- [x] Design timeline layout
- [x] Implement card expansion logic
- [x] Add "focus" blur effect for inactive items

## Acceptance Criteria
- [x] Timeline looks professional
- [x] Cards expand/collapse smoothly
- [x] Content is readable

## Story Points
8
EOF
)"

create_issue "[TASK] Implement Projects Carousel" "task,P1-high,sprint-2,content" "$(cat <<'EOF'
## Description
Create an infinite, circular scrolling carousel for project showcases.

## Implementation Checklist
- [x] Create `Projects.tsx`
- [x] Implement horizontal scroll container
- [x] Add infinite loop logic (triplicated list)
- [x] Add snap scrolling

## Acceptance Criteria
- [x] Scrolls infinitely
- [x] Snaps to cards
- [x] Responsive card sizing

## Story Points
5
EOF
)"

create_issue "[TASK] Implement Contact Form" "task,P1-high,sprint-2,content" "$(cat <<'EOF'
## Description
Develop a functional contact form with validation and a visual style matching the Experience cards.

## Implementation Checklist
- [x] Create `ContactForm.tsx`
- [x] Implement form state and validation
- [x] Style as an "Agent View" panel
- [x] Integrate with Status Bar for success message

## Acceptance Criteria
- [x] Form validates input
- [x] Submits data (mock or real)
- [x] Updates UI on success

## Story Points
5
EOF
)"


# --- EPIC 4: Optimization & Performance ---
echo -e "${BLUE}Creating Epic 4: Optimization & Performance...${NC}"
create_issue "[EPIC] Optimization & Performance" "epic,P1-high,sprint-3,performance" "$(cat <<'EOF'
## Description
Ensure the application achieves top-tier performance scores and is accessible to all users.

## User Stories
- #18 - [TASK] Lighthouse Audit & Fixes
- #19 - [TASK] SEO Implementation
- #20 - [TASK] Asset Optimization
- #21 - [TASK] Accessibility (a11y) Verification

## Story Points
13

## Target Sprint
Sprint 3
EOF
)"

create_issue "[TASK] Lighthouse Audit & Fixes" "task,P1-high,sprint-3,performance" "$(cat <<'EOF'
## Description
Analyze the site with Google Lighthouse and fix issues to achieve 90+ scores in Performance, Accessibility, Best Practices, and SEO.

## Implementation Checklist
- [ ] Run Lighthouse audit
- [ ] Fix performance bottlenecks (LCP, CLS)
- [ ] Fix accessibility issues (contrast, labels)
- [ ] Fix SEO warnings

## Acceptance Criteria
- [ ] All Lighthouse scores > 90
- [ ] No critical issues reported

## Story Points
5
EOF
)"

create_issue "[TASK] SEO Implementation" "task,P1-high,sprint-3,seo" "$(cat <<'EOF'
## Description
Add dynamic metadata, Open Graph tags, and a Sitemap for better search engine visibility.

## Implementation Checklist
- [ ] Implement `generateMetadata` in `layout.tsx` / `page.tsx`
- [ ] Add Open Graph images and tags
- [ ] Create `sitemap.ts`
- [ ] Create `robots.txt`

## Acceptance Criteria
- [ ] Social share previews work
- [ ] Sitemap is valid
- [ ] Meta tags are correct

## Story Points
3
EOF
)"

create_issue "[TASK] Asset Optimization" "task,P2-medium,sprint-3,performance" "$(cat <<'EOF'
## Description
Optimize images and fonts to minimize First Contentful Paint (FCP) and overall bundle size.

## Implementation Checklist
- [ ] Use `next/image` for all images
- [ ] Optimize font loading (subsetting)
- [ ] Compress static assets

## Acceptance Criteria
- [ ] Images load lazily/efficiently
- [ ] No layout shifts from images
- [ ] Fonts load without FOUT/FOIT

## Story Points
2
EOF
)"

create_issue "[TASK] Accessibility (a11y) Verification" "task,P1-high,sprint-3,a11y" "$(cat <<'EOF'
## Description
Ensure full keyboard navigation support and proper ARIA labels for all interactive elements.

## Implementation Checklist
- [ ] Test keyboard navigation (Tab, Enter, Space)
- [ ] Add `aria-label` to icon buttons
- [ ] Ensure focus indicators are visible
- [ ] Verify screen reader compatibility (basic)

## Acceptance Criteria
- [ ] Fully navigable by keyboard
- [ ] Screen readers can access main content
- [ ] No accessibility violations

## Story Points
3
EOF
)"


# --- EPIC 5: Testing & Quality Assurance ---
echo -e "${BLUE}Creating Epic 5: Testing & Quality Assurance...${NC}"
create_issue "[EPIC] Testing & Quality Assurance" "epic,P1-high,sprint-3,testing" "$(cat <<'EOF'
## Description
Guarantee code reliability and prevent regressions with a comprehensive testing suite including Unit and E2E tests.

## User Stories
- #23 - [TASK] Unit Testing Setup
- #24 - [TASK] Component Tests
- #25 - [TASK] E2E Testing Setup
- #26 - [TASK] Critical Flow Tests

## Story Points
13

## Target Sprint
Sprint 3
EOF
)"

create_issue "[TASK] Unit Testing Setup" "task,P1-high,sprint-3,testing" "$(cat <<'EOF'
## Description
Configure Jest and React Testing Library for unit testing components and hooks.

## Implementation Checklist
- [x] Install Jest and RTL
- [x] Configure `jest.config.ts`
- [x] Setup test environment

## Acceptance Criteria
- [x] `npm test` runs successfully
- [x] Can import components in tests

## Story Points
2
EOF
)"

create_issue "[TASK] Component Tests" "task,P1-high,sprint-3,testing" "$(cat <<'EOF'
## Description
Write unit tests for critical UI components (Hero, Experience, Projects) to verify rendering and basic interactions.

## Implementation Checklist
- [x] Test `Hero` rendering
- [x] Test `Experience` card expansion
- [x] Test `Projects` rendering

## Acceptance Criteria
- [x] Core components have test coverage
- [x] Tests pass reliably

## Story Points
5
EOF
)"

create_issue "[TASK] E2E Testing Setup" "task,P1-high,sprint-3,testing" "$(cat <<'EOF'
## Description
Configure Playwright for end-to-end testing of the application.

## Implementation Checklist
- [x] Install Playwright
- [x] Configure `playwright.config.ts`
- [x] Setup CI integration (optional)

## Acceptance Criteria
- [x] `npx playwright test` runs
- [x] Browser tests execute

## Story Points
3
EOF
)"

create_issue "[TASK] Critical Flow Tests" "task,P1-high,sprint-3,testing" "$(cat <<'EOF'
## Description
Write E2E tests for the Navigation flow and Contact Form submission.

## Implementation Checklist
- [ ] Test navigation between sections
- [ ] Test contact form submission flow
- [ ] Test mobile menu interaction

## Acceptance Criteria
- [ ] Critical user flows are verified
- [ ] Tests pass in headless mode

## Story Points
3
EOF
)"


echo -e "${GREEN}═══════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ All Portfolio Project issues created successfully!${NC}"
echo -e "${GREEN}═══════════════════════════════════════════════════${NC}"
