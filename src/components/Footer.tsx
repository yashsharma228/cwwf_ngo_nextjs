"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      {/* Main CTA bar - soft whitish */}
      <div className="border-b border-slate-200 bg-slate-50/80 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-lg font-medium text-slate-700 sm:text-left">
            {t("footer.cta", "The Best Way to Make a Difference in the Lives of Others")}
          </p>
          <Link href="/donate">
            <Button className="bg-slate-500 text-white hover:bg-slate-600">
              {t("nav.donate")} Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo & tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-slate-700 hover:text-slate-900">
              {t("siteName")}
            </Link>
            <p className="mt-2 text-sm text-slate-500">
              {t("footer.tagline", "An initiative for inclusivity of disadvantaged communities through education and women empowerment.")}
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-slate-700">{t("nav.about")}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-slate-800 hover:underline">{t("nav.about")}</Link></li>
              <li><Link href="/about#vision" className="hover:text-slate-800 hover:underline">{t("header.visionMission", "Vision & Mission")}</Link></li>
              <li><Link href="/programs" className="hover:text-slate-800 hover:underline">{t("nav.programs")}</Link></li>
              <li><Link href="/contact" className="hover:text-slate-800 hover:underline">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-slate-700">{t("header.whatWeDo", "Our Work")}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/education" className="hover:text-slate-800 hover:underline">{t("nav.education")}</Link></li>
              <li><Link href="/women-skill-development" className="hover:text-slate-800 hover:underline">{t("nav.women")}</Link></li>
              <li><Link href="/impact" className="hover:text-slate-800 hover:underline">{t("nav.impact")}</Link></li>
              <li><Link href="/gallery" className="hover:text-slate-800 hover:underline">{t("nav.gallery")}</Link></li>
            </ul>
          </div>

          {/* Donate */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-slate-700">{t("nav.donate")}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/donate" className="hover:text-slate-800 hover:underline">{t("footer.onlineDonations", "Online donations")}</Link></li>
              <li><Link href="/volunteer" className="hover:text-slate-800 hover:underline">{t("nav.volunteer")}</Link></li>
              <li><Link href="/get-involved" className="hover:text-slate-800 hover:underline">{t("nav.involved")}</Link></li>
            </ul>
          </div>

          {/* Get In Touch + Newsletter */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-slate-700">{t("footer.getInTouch", "Get In Touch")}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:7211155790" className="flex items-center gap-2 hover:text-slate-800 hover:underline">
                  <Phone className="h-4 w-4" /> 7211155790
                </a>
              </li>
              <li>{t("contact.headquarters")}</li>
            </ul>
            <h3 className="mt-6 font-semibold uppercase tracking-wider text-slate-700">{t("footer.newsletter", "Subscribe E-newsletter")}</h3>
            <form className="mt-3 space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder={t("contact.form.name", "Name")} className="border-slate-200 bg-white placeholder:text-slate-400" />
              <Input type="email" placeholder="E-mail" className="border-slate-200 bg-white placeholder:text-slate-400" />
              <Input type="tel" placeholder={t("contact.form.phone", "Phone")} className="border-slate-200 bg-white placeholder:text-slate-400" />
              <Button type="submit" size="sm" className="w-full bg-slate-500 hover:bg-slate-600">
                {t("footer.subscribe", "Subscribe")}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>{t("contact.founded")} · {t("contact.industry")}</p>
          <p className="mt-1">Chahat Welfare Foundation © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
