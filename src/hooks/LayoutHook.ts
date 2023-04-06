import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

enum PageName {
  HOME = '/',
  ABOUT = '/about',
  FORM = '/form',
}

export const useLayout = () => {
  const location = useLocation();
  const [currentPageName, setCurrentPageName] = useState<string>();

  useEffect(() => {
    setCurrentPageName(() => {
      switch (location.pathname) {
        case PageName.HOME:
          return 'Home';
        case PageName.ABOUT:
          return 'About us';
        case PageName.FORM:
          return 'Form';
        default:
          return 'Page not found';
      }
    });
  }, [location.pathname]);

  useEffect(() => {
    document.title = currentPageName + ' | The Rick and Morty';
  }, [currentPageName]);

  return { currentPageName };
};
