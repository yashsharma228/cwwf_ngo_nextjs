"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, HandHeart, Mail, Share2, ArrowRight, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GetInvolvedPage() {
  const { t } = useTranslation();

  const ways = [
    {
      icon: DollarSign,
      titleKey: "involved.ways.donate.title",
      descKey: "involved.ways.donate.desc",
      href: "/donate",
      color: "blue",
    },
    {
      icon: HandHeart,
      titleKey: "involved.ways.volunteer.title",
      descKey: "involved.ways.volunteer.desc",
      href: "/volunteer",
      color: "pink",
    },
    {
      icon: Share2,
      titleKey: "involved.ways.spread.title",
      descKey: "involved.ways.spread.desc",
      href: "/contact",
      color: "green",
    },
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
            <Heart className="mx-auto h-16 w-16 text-slate-400" />
            <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
              {t("nav.involved")}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {t("involved.hero.subtitle", "Your support can transform lives. Donate, volunteer, or spread the word.")}
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
            {t("involved.ways.title", "Ways to Get Involved")}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {ways.map((way, index) => (
              <motion.div
                key={way.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-100 transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <way.icon className="mb-4 h-12 w-12 text-blue-600" />
                    <CardTitle>{t(way.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-gray-600">{t(way.descKey)}</p>
                    <Link href={way.href}>
                      <Button variant="outline" size="sm">
                        {t("involved.learnMore", "Learn More")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="mx-auto h-12 w-12 text-slate-500" />
            <h2 className="mt-4 text-2xl font-bold text-slate-800">{t("involved.cta.title", "Have Questions?")}</h2>
            <p className="mt-2 text-slate-600">{t("involved.cta.description", "Reach out to us for partnerships or inquiries.")}</p>
            <Link href="/contact" className="mt-6 inline-block">
              <Button size="lg" className="bg-slate-500 hover:bg-slate-600">
                <Mail className="mr-2 h-4 w-4" />
                {t("nav.contact")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
