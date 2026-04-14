# Pomodoro Timer

A simple Pomodoro Timer built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 25-minute focus sessions
- 5-minute short breaks
- 15-minute long break after four focus sessions
- Start, pause, restart, and skip controls
- Cycle counter with visual session state
- Responsive Tailwind-based UI

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local dev server URL shown by Vite in your browser.


## Project Structure

- `src/App.tsx` – main Pomodoro timer logic and UI
- `src/App.css` – component styling
- `src/main.tsx` – React app entry point
- `vite.config.ts` – Vite configuration
- `package.json` – dependencies and scripts

## How the Timer Works

- Focus sessions last `25 minutes`
- After each focus session, a break starts automatically
- Short breaks last `5 minutes`
- After four completed focus sessions, a long break lasts `15 minutes`
- The timer updates every second while running

## Dependencies

- `react`
- `react-dom`
- `tailwindcss`
- `@tailwindcss/vite`

## Notes

This project uses Vite with the React plugin and Tailwind CSS for styling. Change the timer values in `src/App.tsx` if you want custom focus or break durations.
