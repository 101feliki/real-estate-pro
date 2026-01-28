// Immediate fix - add to TOP of main.tsx or App.tsx
import { useEffect } from 'react';

export function forceFavicon() {
  if (typeof window === 'undefined') return;
  
  console.log('🔄 Force fixing favicon...');
  
  // 1. Remove ALL icon links
  document.querySelectorAll('link[rel*="icon"]').forEach(el => {
    console.log('Removing:', el.getAttribute('href'));
    el.remove();
  });
  
  // 2. Add with cache-busting URL
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = `/favicon.ico?force=${Date.now()}`; // Cache bust
  favicon.type = 'image/x-icon';
  
  // 3. Add to head
  document.head.appendChild(favicon);
  console.log('✅ BlueVision favicon forced');
  
  // 4. Change title to confirm
  document.title = 'BlueVision ✅';
  
  return favicon;
}

// Call immediately
forceFavicon();