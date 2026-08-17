import { contentRo } from "@/data/content.ro";
import { contentEn } from "@/data/content.en";
import { servicesList } from "@/data/services-data";
import { Language } from "@/types";

export function getDictionary(lang: Language) {
  return lang === "en" ? contentEn : contentRo;
}

export function getAlternateLang(lang: Language): Language {
  return lang === "ro" ? "en" : "ro";
}

export function getAlternatePath(currentPath: string, targetLang: Language): string {
  // Replace current lang prefix /ro or /en with targetLang
  if (currentPath.startsWith("/ro")) {
    if (targetLang === "en") {
      const sub = currentPath.replace(/^\/ro/, "");
      if (!sub || sub === "/") return "/en";
      if (sub.startsWith("/despre-noi")) return "/en/about-us";
      if (sub.startsWith("/servicii/")) {
        const slugRo = sub.replace("/servicii/", "");
        const s = servicesList.find((item) => item.slugRo === slugRo || item.id === slugRo);
        return s ? `/en/services/${s.slugEn}` : "/en/services";
      }
      if (sub.startsWith("/servicii")) return "/en/services";
      if (sub.startsWith("/proiecte")) return "/en/projects";
      if (sub.startsWith("/colaborare")) return "/en/collaboration";
      if (sub.startsWith("/contact")) return "/en/contact";
      if (sub.startsWith("/termeni-si-conditii")) return "/en/terms-and-conditions";
      return `/en${sub}`;
    }
    return currentPath;
  }

  if (currentPath.startsWith("/en")) {
    if (targetLang === "ro") {
      const sub = currentPath.replace(/^\/en/, "");
      if (!sub || sub === "/") return "/ro";
      if (sub.startsWith("/about-us")) return "/ro/despre-noi";
      if (sub.startsWith("/services/")) {
        const slugEn = sub.replace("/services/", "");
        const s = servicesList.find((item) => item.slugEn === slugEn || item.id === slugEn);
        return s ? `/ro/servicii/${s.slugRo}` : "/ro/servicii";
      }
      if (sub.startsWith("/services")) return "/ro/servicii";
      if (sub.startsWith("/projects")) return "/ro/proiecte";
      if (sub.startsWith("/collaboration")) return "/ro/colaborare";
      if (sub.startsWith("/contact")) return "/ro/contact";
      if (sub.startsWith("/terms-and-conditions")) return "/ro/termeni-si-conditii";
      return `/ro${sub}`;
    }
    return currentPath;
  }

  return `/${targetLang}`;
}
