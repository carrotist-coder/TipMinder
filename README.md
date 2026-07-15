# TipMinder

A modern, high-performance web-based application designed to manage tips and automate operational workflows.

### [Live Demo](https://carrotist-coder.github.io/TipMinder/)

---

## 1. Task

The project was developed according to the technical requirements specified in the following document:
[Project Task Requirements](https://innowise-group.atlassian.net/jira/software/c/projects/JST/boards/390?selectedIssue=JST-3444)

To showcase production-grade frontend engineering skills, the application utilizes a custom Webpack bundling system, ESLint guidelines and a highly decoupled, scalable architectural model.

---

## 2. Technical Highlights & Architecture

### Feature-Sliced Design (FSD)

The codebase is strictly organized according to the **Feature-Sliced Design** architectural methodology to ensure maximum modularity, maintainability, and clean boundaries between components:

- **`app/`**: Application-wide configurations, entry points, global styles, and providers (Redux Store, Router).
- **`pages/`**: Composition of full application screens containing structural layouts and integrated widgets.
- **`widgets/`**: High-level structural sections of pages, combining features and entities into self-contained blocks (e.g., `MerchantAgreementForm`).
- **`features/`**: User-interactive actions with business value (e.g., signing a contract like `SignContractButton`, navigation controls like `BackButton`).
- **`entities/`**: Domain-specific business logic, state models, hooks, and API interactions (e.g., merchant agreement state, transaction cards, mock management).
- **`shared/`**: Reusable infrastructure components devoid of business logic (generic UI components, utilities, configuration constants, base API layers).

---

### Adaptive API Mock Layer

The application communicates with a simulated backend using the **DummyJSON** service, utilizing custom-built endpoints (e.g., `/c/...`) to fetch dynamic, realistic mock structures.

To provide a flawless offline-first and demo-friendly experience, the system contains a fallback API decorator (`useApiWithMock`). If the central server is unreachable, experiencing network latencies or returning CORS blocks outside of safe environments, the hook gracefully downgrades to serve local static mock datasets (e.g., `mockMerchantOptions`) without throwing breaking runtime exceptions.

---

### Optimized Form State Management

Rather than polling the global store or polluting Redux on every single keystroke (which causes massive re-renders, input delays, and clutters Redux DevTools), the app implements a performance-first state design:

1. **Fast Local State**: User typing is captured instantly using a localized React `useState` hook. Re-renders are kept strictly within the form component.
2. **Pure Utility Logic**: The form validation logic and default state resolvers are extracted into pure JS functions. They are completely decoupled from React lifecycles, making them easy to unit test and keeping React hook dependencies clean.
3. **Atomic Commit on Submit**: Only when the user clicks "Sign Contract" and the form passes all client-side validation checks does the system dispatch a single, atomic action (`setAgreementData`) to commit the finalized data to Redux.

---

## 3. Application Pages & Routing

The application implements a routing hierarchy built with **React Router v7**:

### Route Restrictions & Navigation Types

- **Public Routes**: Access to the `Auth` page is open to all unauthenticated users.
- **Private Routes (Protected Area)**: Screens containing sensitive data (Dashboard, Cards, Merchant Agreement) are protected by navigation guards checking `sessionStorage` and Redux Auth states. Unauthenticated requests are immediately redirected to the `/auth` path.
- **Strict Success Interceptors**: The Success page (`/success`) cannot be navigated to directly or refreshed into. It is equipped with a router-state gatekeeper; access is allowed only when redirected internally from a validated form submission with a valid router history state (`fromAgreement: true`).
- **Global Wildcard (404 Page)**: Any unrecognized path requested by an authenticated session is gracefully captured and rerouted to a dedicated, branded 404 page.

---

### Detailed Pages Breakdown

1. **`Auth Page`**: Basic saving user state to temporary session storage and writing authentication states directly to Redux.
2. **`Details Page (Dashboard)`**: The primary workspace layout displaying key business parameters. Consists of:
   - Summary cards fetched in real-time from endpoints.
   - Dynamic tabular statistics fetched in real-time from endpoints.
   - Interactive data visualizations compiled on the fly using **Recharts** to display financial records.
3. **`Merchant Agreement Page`**: An onboarding form implementing dynamic option pre-fetching. It displays local single-field errors as the user types, and locks page progress until all validation schemas return successfully.
4. **`Cards Page`**: A dashboard representing active financial entities and integrated tip-receiving accounts, pulling dynamic card items directly from the API.
5. **`Not Found (404)`**: An error screen designed to handle routing missteps.

**Pending Implementations**: pages such as `About`, `Price List`, `FAQ`, `Contacts`.

---

## 4. Tech Stack & Dependencies

### Core Stack

- **React 19** (`react`, `react-dom`).
- **Redux Toolkit** (`@reduxjs/toolkit`): Global state manager coordinating cross-page state, slice updates, and centralized UI transitions.
- **RTK Query** (part of Redux Toolkit): Implements declarative data fetching, automatic caching, revalidation and loading states.
- **React Router Dom v7** (`react-router-dom`): Client-side single-page routing, layout structures and route navigation guards.
- **Recharts** (`recharts`): SVG-based charting library used to compose responsive operational graphs on the main dashboard.

### Bundler & Development Tooling

- **Webpack 5**: Custom-tailored build configurations optimizing bundle splits, clean assets management and environment routing.
- **Babel 8**: Transpiling JSX, ES6+ syntaxes, and optimizing build assets.
- **CSS Modules** (`css-loader`, `style-loader`, `mini-css-extract-plugin`): Scopes styles to local components, generating randomized content-hashes in production to prevent class collision.
- **Linters & Formatters** (`eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-config-prettier`, `prettier`): Strictly enforcing clean code architectures, reactive rules, and unified styling.
- **Git Hooks** (`husky`, `lint-staged`): Automates linter checking and Prettier formatting on staged files before every commit, keeping the remote repository consistently clean.

---

## 5. How to run the app

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/carrotist-coder/TipMinder

   ```
2. Navigate to the project folder:
   ```bash
   cd TipMinder

   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development mode

To start the built-in hot-reloading Webpack development server:

```bash
npm start
```

Once started, open your browser and navigate to http://localhost:3000.

_**Note**_: _All API calls going to /api/... will be intercepted and proxied directly to https://dummyjson.com/... on the fly to prevent CORS issues during local edits._

### Build for Production

To generate a production-ready build (minified and optimized) in the `dist` folder:

```bash
npm run build
```

### Previewing the Production Build Locally

To test exactly how the app behaves in a production environment before deployment:

```bash
npm run preview
```

The app will be available at http://localhost:3000.

---

## 6. Project Structure

The project directory is structured under strict Feature-Sliced Design guidelines:

```text
TipMinder/
├── dist/                    # Bundled files generated by Webpack for production
├── public/                  # Static assets (HTML, fonts, svg, robots.txt)
└── src/                     # App source code
    ├── app/                 # Entry point, routing definitions, layout, global store
    ├── pages/               # Pages assembled from widgets and features
    ├── widgets/             # Large-scale, self-contained UI components (e.g., forms, navigation)
    ├── features/            # User-interactive functionalities (e.g., Auth, SignContract)
    ├── entities/            # Business models, state slices, APIs (e.g., cards, transactions)
    │   └── merchant-agreement/
    │       ├── api/         # RTK Query services
    │       ├── hooks/       # Reusable custom React hooks
    │       ├── model/       # Slices, mock data, validators and utils
    │       └── ui/          # Entity-level UI components
    └── shared/              # Reusable UI elements, configs, network clients, custom hooks
        ├── config/          # Centralized constants and configurations
        ├── lib/             # Custom utils
        └── ui/              # Atom-level components (Buttons, Inputs, Loaders)
```

## 7. Performance & Quality (Lighthouse)

The app has been audited using Google Lighthouse to ensure industry-standard optimization, accessibility, and clean code practices. Thanks to a lightweight custom Webpack configuration, image optimizations, and efficient code splitting, the app achieves exceptional scores:

| Category           |  Score  |
| :----------------- | :-----: |
| **Performance**    | **90+** |
| **Accessibility**  | **90+** |
| **Best Practices** | **90+** |
| **SEO**            | **90+** |

_To run these audits yourself, open the project in Chrome, press `F12`, navigate to the **Lighthouse** tab, and generate a report._
