import React from 'react';
import { useLocation } from 'react-router-dom';
// scroll up transition when changing routes

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const canControlScrollRestoration = 'scrollRestoration' in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}
