"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, X, Globe, ChevronDown, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangMenuOpen(false);
  };

  const whoWeAre = [
    { href: "/about", label: t("nav.about") },
    { href: "/about#vision", label: t("header.visionMission", "Vision & Mission") },
    { href: "/programs", label: t("nav.programs") },
  ];

  const whatWeDo = [
    { href: "/education", label: t("nav.education") },
    { href: "/women-skill-development", label: t("nav.women") },
    { href: "/impact", label: t("nav.impact") },
    { href: "/gallery", label: t("nav.gallery") },
  ];

  const howToHelp = [
    { href: "/donate", label: t("nav.donate") },
    { href: "/volunteer", label: t("nav.volunteer") },
    { href: "/get-involved", label: t("nav.involved") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar - soft whitish */}
      <div className="border-b border-slate-200 bg-slate-50/80 text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:7211155790" className="flex items-center gap-1.5 hover:text-slate-800 hover:underline">
              <Phone className="h-4 w-4" />
              <span>7211155790</span>
            </a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline">{t("contact.headquarters")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 rounded px-2 py-1 hover:bg-slate-200/60"
              >
                <Globe className="h-4 w-4" />
                <span>{i18n.language === "en" ? "English" : "हिंदी"}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute right-0 mt-1 w-32 rounded-lg border border-slate-200 bg-white py-1 text-slate-700 shadow-sm"
                  >
                    <button onClick={() => toggleLanguage("en")} className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-50">
                      English
                    </button>
                    <button onClick={() => toggleLanguage("hi")} className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-50">
                      हिंदी
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-slate-700 sm:text-2xl">{t("siteName")}</span>
        </Link>

        {/* Desktop - Mega menu style */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("who")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-800">
              {t("header.whoWeAre", "Who We Are")}
              <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {openDropdown === "who" && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute left-0 top-full min-w-[180px] rounded-md border bg-white py-2 shadow-lg"
                >
                  {whoWeAre.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("what")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-800">
              {t("header.whatWeDo", "What We Do")}
              <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {openDropdown === "what" && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute left-0 top-full min-w-[200px] rounded-md border bg-white py-2 shadow-lg"
                >
                  {whatWeDo.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/gallery" className="rounded px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-800">
            {t("header.newsStories", "News & Gallery")}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("help")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-800">
              {t("header.howToHelp", "How To Help")}
              <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {openDropdown === "help" && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute left-0 top-full min-w-[180px] rounded-md border bg-white py-2 shadow-lg"
                >
                  {howToHelp.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/get-involved" className="rounded px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-800">
            {t("nav.involved")}
          </Link>

          <Link
            href="/donate"
            className="ml-2 rounded-lg bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600"
          >
            {t("nav.donate")} Now
          </Link>
        </div>

        <button
          className="rounded p-2 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t bg-white lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              <p className="text-xs font-semibold uppercase text-gray-500">{t("header.whoWeAre")}</p>
              {whoWeAre.map((link) => (
                <Link key={link.href} href={link.href} className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <p className="mt-3 text-xs font-semibold uppercase text-gray-500">{t("header.whatWeDo")}</p>
              {whatWeDo.map((link) => (
                <Link key={link.href} href={link.href} className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/gallery" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>{t("header.newsStories")}</Link>
              <p className="mt-3 text-xs font-semibold uppercase text-gray-500">{t("header.howToHelp")}</p>
              {howToHelp.map((link) => (
                <Link key={link.href} href={link.href} className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/get-involved" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>{t("nav.involved")}</Link>
              <Link
                href="/donate"
                className="mt-4 block rounded-lg bg-slate-500 py-3 text-center font-medium text-white hover:bg-slate-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.donate")} Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
