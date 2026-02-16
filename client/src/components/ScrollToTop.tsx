import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Ambil pathname terkini (contoh: /about, /contact)
  const { pathname } = useLocation();

  useEffect(() => {
    // Fungsi ini akan berjalan setiap kali pathname berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini tidak paparkan apa-apa UI
};

export default ScrollToTop;
