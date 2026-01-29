"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, Shirt, ShoppingBag, DollarSign, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WomenSkillDevelopmentPage() {
  const { t } = useTranslation();

  const highlights = [
    { icon: Shirt, titleKey: "women.highlights.ethnic.title", descKey: "women.highlights.ethnic.desc" },
    { icon: ShoppingBag, titleKey: "women.highlights.bags.title", descKey: "women.highlights.bags.desc" },
    { icon: DollarSign, titleKey: "women.highlights.profit.title", descKey: "women.highlights.profit.desc" },
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
            <Scissors className="mx-auto h-16 w-16 text-slate-400" />
            <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
              {t("nav.women")}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {t("women.hero.subtitle", "Our skill development center where women stitch ethnic wear and cotton bags for local brands. 100% of the profit goes to them.")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-gray-900"
          >
            {t("women.highlights.title", "What We Do")}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-slate-200 transition-shadow hover:shadow-md">
                  <CardHeader>
                    <item.icon className="mb-4 h-12 w-12 text-slate-500" />
                    <CardTitle>{t(item.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{t(item.descKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <ul className="mt-12 space-y-3">
            {[
              t("women.bullet1", "Stitching training for ethnic wear"),
              t("women.bullet2", "Cotton bag production for local brands"),
              t("women.bullet3", "Entire profit entitled to participating women"),
              t("women.bullet4", "Sustainable livelihoods and financial independence"),
            ].map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-slate-500" />
                <span className="text-gray-700">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">{t("women.cta.title", "Support Women Empowerment")}</h2>
            <p className="mt-4 text-gray-600">{t("women.cta.description", "Donate or partner with us to expand our skill development center.")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-slate-500 hover:bg-slate-600">
                  {t("nav.donate")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">{t("nav.contact")}</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
