"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HandHeart, Check, ArrowRight, Clock, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function VolunteerPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">{t("volunteer.thankYou.title", "Thank You!")}</h2>
          <p className="mt-2 text-gray-600">{t("volunteer.thankYou.description", "We have received your interest. Our team will get in touch with you soon.")}</p>
          <Link href="/" className="mt-8 inline-block">
            <Button size="lg">{t("volunteer.thankYou.back", "Back to Home")}</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const opportunities = [
    { icon: BookOpen, titleKey: "volunteer.opps.education", descKey: "volunteer.opps.educationDesc" },
    { icon: Users, titleKey: "volunteer.opps.women", descKey: "volunteer.opps.womenDesc" },
    { icon: Clock, titleKey: "volunteer.opps.events", descKey: "volunteer.opps.eventsDesc" },
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
            <HandHeart className="mx-auto h-16 w-16 text-slate-400" />
            <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
              {t("nav.volunteer")}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {t("volunteer.hero.subtitle", "Join us as a volunteer and make a direct impact in education and women empowerment.")}
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
            className="mb-10 text-center text-3xl font-bold text-gray-900"
          >
            {t("volunteer.opps.title", "Volunteer Opportunities")}
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {opportunities.map((opp, index) => (
              <motion.div
                key={opp.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-slate-200">
                  <CardHeader>
                    <opp.icon className="mb-4 h-10 w-10 text-slate-500" />
                    <CardTitle>{t(opp.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-gray-600">{t(opp.descKey)}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{t("volunteer.form.title", "Express Your Interest")}</CardTitle>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="vname">{t("volunteer.form.name", "Name")}</Label>
                      <Input id="vname" type="text" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="vemail">{t("volunteer.form.email", "Email")}</Label>
                      <Input id="vemail" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="vphone">{t("volunteer.form.phone", "Phone")}</Label>
                      <Input id="vphone" type="tel" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="vmessage">{t("volunteer.form.message", "How would you like to help?")}</Label>
                      <textarea
                        id="vmessage"
                        rows={3}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-slate-500 hover:bg-slate-600">
                      {t("volunteer.form.submit", "Submit")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
