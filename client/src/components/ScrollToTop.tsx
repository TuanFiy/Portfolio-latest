import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Ambil pathname terkini (contoh: /about, /contact)
  const { pathname } = useLocation();

  useEffect(() => {
    // Fungsi ini akan berjalan setiap kali pathname berubah
    // Gunakan 'instant' untuk pastikan page bermula dari atas serta-merta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null; // Komponen ini tidak paparkan apa-apa UI
};

export default ScrollToTop;