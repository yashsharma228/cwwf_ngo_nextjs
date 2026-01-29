"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  ArrowRight,
  GraduationCap,
  Scissors,
  Users,
  Target,
  Quote,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const { t } = useTranslation();

  const howWeWork = [
    {
      icon: GraduationCap,
      titleKey: "home.howWeWork.education",
      title: "Education Support",
      href: "/education",
      color: "bg-slate-200",
      iconColor: "text-slate-600",
    },
    {
      icon: Scissors,
      titleKey: "home.howWeWork.women",
      title: "Women Skill Development",
      href: "/women-skill-development",
      color: "bg-slate-100",
      iconColor: "text-slate-600",
    },
    {
      icon: Target,
      titleKey: "home.howWeWork.impact",
      title: "Our Impact",
      href: "/impact",
      color: "bg-slate-200",
      iconColor: "text-slate-600",
    },
    {
      icon: Users,
      titleKey: "home.howWeWork.involved",
      title: "Get Involved",
      href: "/get-involved",
      color: "bg-slate-100",
      iconColor: "text-slate-600",
    },
  ];

  const impactStories = [
    { titleKey: "home.stories.story1.title", descKey: "home.stories.story1.desc", slug: "story1" },
    { titleKey: "home.stories.story2.title", descKey: "home.stories.story2.desc", slug: "story2" },
    { titleKey: "home.stories.story3.title", descKey: "home.stories.story3.desc", slug: "story3" },
  ];

  const campaigns = [
    { raised: 64964, goal: 999999, titleKey: "home.campaigns.c1.title", title: "Sponsor a Child's Education" },
    { raised: 1796619, goal: 2000000, titleKey: "home.campaigns.c2.title", title: "Women Skill Center Expansion" },
    { raised: 1103259, goal: 2000000, titleKey: "home.campaigns.c3.title", title: "Education & Livelihood Fund" },
  ];

  const testimonials = [
    { quoteKey: "home.testimonials.t1", nameKey: "home.testimonials.t1Name", roleKey: "home.testimonials.t1Role" },
    { quoteKey: "home.testimonials.t2", nameKey: "home.testimonials.t2Name", roleKey: "home.testimonials.t2Role" },
  ];

  const latestUpdates = [
    { titleKey: "home.updates.u1", date: "2025-01-15" },
    { titleKey: "home.updates.u2", date: "2024-12-20" },
    { titleKey: "home.updates.u3", date: "2024-11-10" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero - soft whitish */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-slate-700"
          >
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl md:text-6xl">
              {t("home.hero.narrative", "Chahat Welfare Foundation")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
              {t("home.hero.primaryCause", "Inclusivity for disadvantaged communities — Quality education and women empowerment through financial, moral support and skill development.")}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/donate">
                <Button size="lg" className="bg-slate-500 text-white hover:bg-slate-600">
                  {t("nav.donate")} Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  {t("nav.involved")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we work to make a difference - 4 cards */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-slate-800"
          >
            {t("home.howWeWork.title", "How we work to make a difference")}
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href} className="block">
                  <Card className="h-full overflow-hidden border border-slate-200 transition-all hover:border-slate-300 hover:shadow-md">
                    <div className={`flex h-32 items-center justify-center ${item.color}`}>
                      <item.icon className={`h-14 w-14 ${item.iconColor}`} />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-center text-lg text-slate-700">
                        {t(item.titleKey, item.title)}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-slate-800"
          >
            {t("home.impactStories.title", "Impact Stories")}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="h-40 bg-slate-100" />
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-700">{t(story.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="line-clamp-3 text-sm text-slate-600">{t(story.descKey)}</p>
                    <Link href="/impact" className="mt-3 inline-block text-sm font-medium text-slate-600 hover:text-slate-800 hover:underline">
                      {t("home.readMore", "Read more...")}
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Chahat Welfare Foundation - About block + Vision/Mission + Stats */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              {t("home.foundationBlock.title", "The Chahat Welfare Foundation")}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              {t("home.foundationBlock.desc", "Chahat Welfare Foundation is an initiative for inclusivity of disadvantaged classes of society. We impart quality education to underprivileged and victimized children by providing financial and moral support, including private coaching and partial fees funding. Our skill development center empowers women through ethnic wear and cotton bag production—100% profit goes to them.")}
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Card className="border border-slate-200 text-left">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-700">
                    <Target className="h-5 w-5 text-slate-500" />
                    {t("home.foundationBlock.vision", "Our Vision")}
                  </CardTitle>
                  <CardContent className="pt-0 text-slate-600">
                    {t("home.foundationBlock.visionText", "No child in India shall be deprived of education because of disadvantage. Every woman shall have the opportunity to earn with dignity.")}
                  </CardContent>
                </CardHeader>
              </Card>
              <Card className="border border-slate-200 text-left">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-700">
                    <Heart className="h-5 w-5 text-slate-500" />
                    {t("home.foundationBlock.mission", "Our Mission")}
                  </CardTitle>
                  <CardContent className="pt-0 text-slate-600">
                    {t("home.foundationBlock.missionText", "Imparting quality education to underprivileged children and empowering women through skill development—with financial and moral support.")}
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
            <Link href="/about" className="mt-8 inline-block">
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                {t("home.readMoreAbout", "Read More")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats bar - soft whitish */}
      <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid gap-8 text-center text-slate-700 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <div className="text-4xl font-bold text-slate-800">2017</div>
              <div className="mt-2 text-slate-500">{t("home.stats.founded", "Founded")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800">500+</div>
              <div className="mt-2 text-slate-500">{t("home.stats.children", "Children Helped")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800">100+</div>
              <div className="mt-2 text-slate-500">{t("home.stats.women", "Women Empowered")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800">50+</div>
              <div className="mt-2 text-slate-500">{t("home.stats.volunteers", "Volunteers")}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campaigns - Progress bars */}
      <section className="bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold text-slate-800"
          >
            {t("home.campaigns.title", "Campaigns")}
          </motion.h2>
          <div className="space-y-8">
            {campaigns.map((c, index) => {
              const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
              return (
                <motion.div
                  key={c.titleKey}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border border-slate-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-700">{t(c.titleKey, c.title)}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-2 flex justify-between text-sm text-slate-600">
                        <span>Raised: ₹{c.raised.toLocaleString("en-IN")}</span>
                        <span>Goal: ₹{c.goal.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full rounded-full bg-slate-400"
                        />
                      </div>
                      <p className="mt-2 text-right text-sm font-medium text-slate-600">{pct}%</p>
                      <Link href="/donate" className="mt-4 inline-block">
                        <Button size="sm" className="bg-slate-500 hover:bg-slate-600">
                          {t("nav.donate")} Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hear from our Contributors - Testimonials */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-slate-800"
          >
            {t("home.testimonials.title", "Hear from our Contributors")}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((tst, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-slate-200 bg-slate-50/30">
                  <CardContent className="pt-6">
                    <Quote className="mb-4 h-10 w-10 text-slate-300" />
                    <p className="text-slate-600">{t(tst.quoteKey)}</p>
                    <p className="mt-4 font-semibold text-slate-800">{t(tst.nameKey)}</p>
                    <p className="text-sm text-slate-500">{t(tst.roleKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates - News list */}
      <section className="bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold text-slate-800"
          >
            {t("home.updates.title", "Latest Updates")}
          </motion.h2>
          <div className="space-y-4">
            {latestUpdates.map((update, index) => (
              <motion.div
                key={update.titleKey}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href="/gallery" className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:bg-slate-50">
                  <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-500" />
                  <div>
                    <p className="font-medium text-slate-800">{t(update.titleKey)}</p>
                    <p className="text-sm text-slate-500">{new Date(update.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
                  </div>
                  <span className="ml-auto text-slate-600 hover:underline">{t("home.readMore", "Read more...")}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
