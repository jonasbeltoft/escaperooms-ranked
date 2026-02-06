# Copilot Instructions for escaperoom-ranked
The accepted hypocorisms are "ESCRR" and "ER Ranked".

## Project description

The platform enables users to discover, register, and review real-world escape rooms and track shared experiences with other users.

### Terminology
* RDP - Room Detail Page - The page for a specific escape room location, showing details, reviews, and user experiences.
* RLP - Rooms List Page - The page listing multiple escape room locations, with filtering and sorting options.

### Goals and Principles

* Centralized, non-duplicated registry of real escape room locations
* Strong data integrity using Google Maps Place IDs
* Community-driven reviews and experience tracking
* Simple, scalable, architecture
* Server side rendering is preffered for SEO and performance reasons

## Technology Stack Overview

### Frontend
* Google Maps Places API (Place ID lookup)
* Next.js 16+ with the App Router #fetch https://nextjs.org/docs/app
* Tailwind CSS v4+
* shadcn/ui component library #fetch https://ui.shadcn.com/docs/components should always be used as the base component library for new components if available, but with the following important modifications:
  * ALWAYS try to use neobrutalism from #fetch https://www.neobrutalism.dev/ and conform to using neobrutalism styling and methodology.
    * The command to add a new component from shadcn/ui is therefore also changed from `bunx --bun shadcn@latest add accordion` to `bunx --bun shadcn@latest add https://neobrutalism.dev/r/accordion.json` for example.
* Icons from lucide-react #fetch https://lucide.dev/ NEVER use emojis or symbols in the UI code, use icons from lucide-react instead.
* Ensure mobile-first responsive design
* Follow accessibility best practices (WCAG 2.1 AA)
* Because the project uses a fork of shadcn/ui with neobrutalism styling, the variants are different. Read the component you use to find it's variants, and so you dont set tailwind classes that are not needed.

### Backend / Database
* Convex #fetch https://docs.convex.dev/
  * Also used for image storage #fetch https://docs.convex.dev/file-storage
  * Auth integration #fetch https://docs.convex.dev/quickstart/nextjs

### Auth
* Clerk #fetch https://clerk.com/docs
  * Next.js integration #fetch https://clerk.com/docs/nextjs/getting-started/quickstart
  * Google social login support #fetch https://clerk.com/docs/nextjs/reference/components/authentication/google-one-tap
  * Shadcn/ui styling for clerk components #fetch https://clerk.com/docs/guides/customizing-clerk/elements/examples/shadcn-ui

## Development instructions

**CRITICAL** ALWAYS use `bun` to run, build, and test the project, including all dependencies and components to be installed. AT NO POINT SHOULD YOU USE NPM OR YARN OR NPX OR PNPM. ONLY BUN!

ALWAYS follow the coding style defined in the `.editorconfig` file found at the git project root.

Avoid creating or executing shell commands just to display file contents; rely on the provided read_file-like tools instead whenever possible so you do not duplicate what the user already sees in the editor.

Do not try to use git or other version control commands to display file history or changes. The user can see the file history and changes in their editor, so rely on that instead of trying to duplicate it. You only write code and plan changes for the developer, not control the project.

### Code Style & Conventions
* Use TypeScript strict mode
* Component naming: PascalCase for React components, camelCase for utilities
* Use const for variables (no var)
* Prefer arrow functions
* Use destructuring for props and imports
* Add JSDoc comments for public functions and components

### Database/API Patterns
* Use Convex mutations for write operations, queries for reads
* Implement proper error handling with try-catch
* Validate user input server-side
* To add a database table: Define in Convex `schema.ts`

### Performance Considerations
* Leverage Next.js server components by default
* Use client components sparingly, only when needed for interactivity
* Optimize images with Next.js Image component

# Imoportant skill: Frontend Design
---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS, React, Next.js) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only (tailwind) solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth. Add contextual effects and textures that match the overall aesthetic.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: You are capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision (neobrutalism).
