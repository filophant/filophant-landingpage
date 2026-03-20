// Inline script to prevent flash of wrong theme (runs before paint)
export function ThemeScript() {
  const script = `
    (function() {
      try {
        var saved = localStorage.getItem('theme');
        if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        }
      } catch(e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
