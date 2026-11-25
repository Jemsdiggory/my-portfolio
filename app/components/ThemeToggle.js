"use client"

import { useSyncExternalStore } from "react"

function setTheme(theme) {
  const root = document.documentElement
  root.classList.add("theme-transition")
  root.dataset.theme = theme
  try {
    localStorage.setItem("jems-theme", theme)
  } catch {
    // Storage may be disabled; the current page still changes theme.
  }
  window.setTimeout(() => root.classList.remove("theme-transition"), 220)
}

function subscribeToTheme(onChange) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
  return () => observer.disconnect()
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark"
}

function getServerThemeSnapshot() {
  return "dark"
}

export default function ThemeToggle({ className = "" }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot)
  const nextTheme = theme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      className={`theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${className}`}
      style={{ borderColor: "var(--border)", color: "var(--text)" }}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "light"}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => {
        setTheme(nextTheme)
      }}
      onKeyDown={(event) => event.stopPropagation()}
    >
      {theme === "dark" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" />
        </svg>
      )}
    </button>
  )
}
