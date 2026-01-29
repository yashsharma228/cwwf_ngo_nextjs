\"use client\";
import Link from \"next/link\";
import { useTranslation } from \"react-i18next\";
import { Menu, Globe } from \"lucide-react\";
import { useState } from \"react\";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === \"en\" ? \"hi\" : \"en\");
  };

  return (
    <header className=\"border-b bg-white\">
      <div className=\"mx-auto max-w-6xl px-4\">
        <div className=\"flex h-14 items-center justify-between\">
          <Link href=\"/\" className=\"font-semibold\">
            {t(\"siteName\")}
          </Link>
          <nav className=\"hidden md:flex items-center gap-6 text-sm\">
            <Link href=\"/\">{t(\"nav.home\")}</Link>
            <Link href=\"/about\">{t(\"nav.about\")}</Link>
            <Link href=\"/programs\">{t(\"nav.programs\")}</Link>
            <Link href=\"/education-support\">{t(\"nav.education\")}</Link>
            <Link href=\"/women-skill-development\">{t(\"nav.women\")}</Link>
            <Link href=\"/impact\">{t(\"nav.impact\")}</Link>
            <Link href=\"/gallery\">{t(\"nav.gallery\")}</Link>
            <Link href=\"/get-involved\">{t(\"nav.involved\")}</Link>
            <Link href=\"/donate\" className=\"rounded-full bg-black px-3 py-1 text-white\">
              {t(\"nav.donate\")}
            </Link>
            <Link href=\"/volunteer\">{t(\"nav.volunteer\")}</Link>
            <Link href=\"/contact\">{t(\"nav.contact\")}</Link>
            <button
              aria-label={t(\"nav.language\") as string}
              onClick={switchLang}
              className=\"flex items-center gap-1 rounded px-2 py-1 hover:bg-zinc-100\"
            >
              <Globe size={16} />
              <span className=\"uppercase text-xs\">{i18n.language}</span>
            </button>
          </nav>
          <button
            className=\"md:hidden rounded p-2 hover:bg-zinc-100\"
            onClick={() => setOpen(!open)}
            aria-label=\"Menu\"
          >
            <Menu size={18} />
          </button>
        </div>
        {open && (
          <div className=\"md:hidden pb-3\">
            <div className=\"grid gap-2 text-sm\">
              <Link href=\"/\" onClick={() => setOpen(false)}>{t(\"nav.home\")}</Link>
              <Link href=\"/about\" onClick={() => setOpen(false)}>{t(\"nav.about\")}</Link>
              <Link href=\"/programs\" onClick={() => setOpen(false)}>{t(\"nav.programs\")}</Link>
              <Link href=\"/education-support\" onClick={() => setOpen(false)}>{t(\"nav.education\")}</Link>
              <Link href=\"/women-skill-development\" onClick={() => setOpen(false)}>{t(\"nav.women\")}</Link>
              <Link href=\"/impact\" onClick={() => setOpen(false)}>{t(\"nav.impact\")}</Link>
              <Link href=\"/gallery\" onClick={() => setOpen(false)}>{t(\"nav.gallery\")}</Link>
              <Link href=\"/get-involved\" onClick={() => setOpen(false)}>{t(\"nav.involved\")}</Link>
              <Link href=\"/donate\" onClick={() => setOpen(false)}>{t(\"nav.donate\")}</Link>
              <Link href=\"/volunteer\" onClick={() => setOpen(false)}>{t(\"nav.volunteer\")}</Link>
              <Link href=\"/contact\" onClick={() => setOpen(false)}>{t(\"nav.contact\")}</Link>
              <button
                onClick={() => {
                  switchLang();
                  setOpen(false);
                }}
                className=\"flex items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100\"
              >
                <Globe size={16} />
                <span>{t(\"nav.language\")}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
