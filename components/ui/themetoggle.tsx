'use client';
import { useEffect } from 'react';

export function ThemeToggle() {
  useEffect(() => {
    document.documentElement.classList.remove('dark'); // Remove dark mode class
    localStorage.setItem('theme', 'light'); // Store only light mode pref
  }, []);
  return null;
}
