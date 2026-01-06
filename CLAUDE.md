# CLAUDE.md

Use Japanese.
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a band website for Bottle Diver (ボトルダイバー), a Melodic Noise rock band from Kobe, Japan. It's a React-based single-page application with static content deployed at https://www.bottlediver.com.

**Tech Stack**: React 18.3, TypeScript 4.9, Material-UI 6.1, React Router 7.0

## Development Commands

The React application lives in the `/bottlediver` subdirectory.

```bash
# Development (from /bottlediver directory)
npm start                 # Dev server on http://localhost:3000
npm test                  # Run Jest tests
npm run build            # Production build to /build directory

# Docker Development (from root directory)
docker-compose up        # Run containerized dev environment
```

## Architecture

### Content Management

**All content is hardcoded** in component files - there is no CMS or backend API. To update:
- News items: Edit `src/components/About.tsx`
- Album releases: Edit `src/components/Discography.tsx`
- Live events: Edit `src/components/Live.tsx`
- Videos: Edit `src/components/Videos.tsx`

### Routing Structure

```
/ → About page (biography, news, contact)
/discography → Album listings
/live → Live events
/videos → Music videos
```

The discography page accepts URL query parameters to auto-open album modals: `?record=1` or `?record=2`

### Component Patterns

**Page Components** (containers):
- `About.tsx`, `Discography.tsx`, `Live.tsx`, `Videos.tsx`

**Content Components** (reusable cards with modals):
- `DiscoContent.tsx` - Album card with modal for track listings/streaming links
- `LiveContent.tsx` - Event card with modal for details
- `NewsContent.tsx` - News item with modal
- `VideosContent.tsx` - YouTube embed wrapper

**Pattern**: Content components receive props from parent pages and use MUI modals for detailed views. Each content type follows this card + modal pattern consistently.

### Animations

`FadeAnimation.tsx` wraps components to trigger fade-in animations on scroll using `react-intersection-observer`.

### Styling

- Dark theme with primary color #29b6f6 (light blue), background #14202c
- Responsive design using MUI `sx` prop with `xs`, `sm`, `md` breakpoints
- Mobile-first approach: Menu shows icons only on mobile, adds labels on desktop
- Global styles in `src/App.css` and `src/index.css`

### External Integrations

- Music platforms: Spotify, Apple Music, YouTube Music, Amazon Music, LINE Music (direct links)
- Social media: YouTube, Twitter/X, Instagram
- Analytics: Vercel Analytics
- Event tickets: Google Forms links

## Recent Development

Recent commits focus on "ライブ情報更新" (live info updates). Development uses feature branches merged via pull requests.
