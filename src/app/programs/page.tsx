"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Scissors, ArrowRight, BookOpen, Users, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProgramsPage() {
  const { t } = useTranslation();

  const programs = [
    {
      icon: GraduationCap,
      title: t("programs.education.title", "Education Support Program"),
      description: t("programs.education.description", "Providing quality education to underprivileged children through financial assistance, private coaching, and partial fee funding."),
      href: "/education",
      color: "blue",
      features: [
        t("programs.education.f1", "Financial support for school fees"),
        t("programs.education.f2", "Private coaching classes"),
        t("programs.education.f3", "Educational materials and supplies"),
        t("programs.education.f4", "Moral and emotional support"),
      ],
    },
    {
      icon: Scissors,
      title: t("programs.women.title", "Women Skill Development Center"),
      description: t("programs.women.description", "Empowering women through skill development in stitching ethnic wear and cotton bags. 100% profits go directly to the women."),
      href: "/women-skill-development",
      color: "pink",
      features: [
        t("programs.women.f1", "Stitching training for ethnic wear"),
        t("programs.women.f2", "Cotton bag production skills"),
        t("programs.women.f3", "Partnerships with local brands"),
        t("programs.women.f4", "100% profit to participants"),
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-800 sm:text-5xl"
          >
            {t("programs.hero.title", "Our Programs")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600"
          >
            {t("programs.hero.subtitle", "Comprehensive programs designed to empower disadvantaged communities through education and skill development")}
          </motion.p>
        </div>
      </section>

      {/* Programs List */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden border-2">
                  <div className="md:flex">
                    <div className="flex items-center justify-center bg-slate-100 p-8 md:w-1/3">
                      <program.icon className="h-24 w-24 text-slate-500" />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <CardTitle className="text-2xl">{program.title}</CardTitle>
                        <CardDescription className="text-base">
                          {program.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="mb-6 space-y-2">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Heart className="mr-2 h-5 w-5 flex-shrink-0 text-pink-500 mt-0.5" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href={program.href}>
                          <Button className="bg-slate-500 hover:bg-slate-600">
                            {t("programs.learnMore", "Learn More")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t("programs.impact.title", "Program Impact")}
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { icon: BookOpen, number: "500+", label: t("programs.impact.children", "Children Supported") },
                { icon: Users, number: "100+", label: t("programs.impact.women", "Women Empowered") },
                { icon: Heart, number: "50+", label: t("programs.impact.volunteers", "Active Volunteers") },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto h-12 w-12 text-blue-600" />
                  <div className="mt-4 text-4xl font-bold text-gray-900">{stat.number}</div>
                  <div className="mt-2 text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              {t("programs.cta.title", "Want to Support Our Programs?")}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {t("programs.cta.description", "Your contribution can help us expand our reach and impact more lives.")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/donate">
                <Button size="lg" className="bg-slate-500 text-white hover:bg-slate-600">
                  {t("nav.donate")}
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                  {t("nav.volunteer")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
