"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Heart, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EducationSupportPage() {
  const { t } = useTranslation();

  const offerings = [
    { icon: BookOpen, textKey: "education.offerings.coaching", default: "Private coaching for underprivileged children" },
    { icon: Heart, textKey: "education.offerings.moral", default: "Moral and emotional support" },
    { icon: Users, textKey: "education.offerings.partialFees", default: "Partial school fees funding" },
  ];

  return (
    <div className="flex flex-col">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap className="mx-auto h-16 w-16 text-slate-400" />
            <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
              {t("nav.education")}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {t("education.hero.subtitle", "Imparting quality education to underprivileged and victimized children through financial and moral support.")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold text-gray-900"
          >
            {t("education.whatWeOffer.title", "What We Offer")}
          </motion.h2>
          <ul className="space-y-4">
            {offerings.map((item, index) => (
              <motion.li
                key={item.textKey}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-lg border border-gray-200 bg-gray-50/50 p-4"
              >
                <item.icon className="h-8 w-8 flex-shrink-0 text-slate-500" />
                <span className="text-gray-700">{t(item.textKey, item.default)}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              t("education.bullet1", "Private coaching for underprivileged children"),
              t("education.bullet2", "Partial school fees funding"),
              t("education.bullet3", "Financial and moral support"),
              t("education.bullet4", "Educational materials and supplies"),
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">{t("education.cta.title", "Support Education")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {t("education.cta.description", "Your donation helps us provide quality education to more children.")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-slate-500 hover:bg-slate-600">
                  {t("nav.donate")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/programs">
                <Button size="lg" variant="outline">{t("programs.hero.title", "Our Programs")}</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
