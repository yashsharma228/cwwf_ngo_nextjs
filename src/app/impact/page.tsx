"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, GraduationCap, Scissors, Heart, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ImpactPage() {
  const { t } = useTranslation();

  const stats = [
    { value: "2017", labelKey: "impact.stats.founded", icon: Heart },
    { value: "500+", labelKey: "impact.stats.children", icon: GraduationCap },
    { value: "100+", labelKey: "impact.stats.women", icon: Scissors },
    { value: "11-50", labelKey: "impact.stats.team", icon: Users },
  ];

  const impactAreas = [
    { titleKey: "impact.areas.education.title", descKey: "impact.areas.education.desc" },
    { titleKey: "impact.areas.women.title", descKey: "impact.areas.women.desc" },
    { titleKey: "impact.areas.community.title", descKey: "impact.areas.community.desc" },
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
            <TrendingUp className="mx-auto h-16 w-16 text-slate-400" />
            <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
              {t("impact.hero.title", "Our Impact")}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {t("impact.hero.subtitle", "Transforming lives and communities through education and women empowerment since 2017.")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border border-slate-200">
                  <CardHeader>
                    <stat.icon className="mx-auto h-10 w-10 text-slate-500" />
                    <CardTitle className="text-3xl text-slate-700">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-center text-gray-600">{t(stat.labelKey)}</CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-gray-900"
          >
            {t("impact.areas.title", "Areas of Impact")}
          </motion.h2>
          <div className="space-y-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.titleKey}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>{t(area.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">{t(area.descKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800">{t("impact.cta.title", "See Our Work")}</h2>
            <p className="mt-4 text-slate-600">{t("impact.cta.description", "Explore our gallery and get involved.")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/gallery">
                <Button size="lg" className="bg-slate-500 text-white hover:bg-slate-600">
                  {t("nav.gallery")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                  {t("nav.involved")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
