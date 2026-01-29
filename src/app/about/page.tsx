"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const { t } = useTranslation();

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
            {t("about.hero.title", "About Chahat Welfare Foundation")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600"
          >
            {t("about.hero.subtitle", "Empowering disadvantaged communities through education and skill development since 2017")}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <Target className="mb-4 h-10 w-10 text-slate-500" />
                  <CardTitle>{t("about.mission.title", "Our Mission")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t("about.mission.content", "Chahat Welfare Foundation is an initiative for inclusivity of disadvantaged classes of society. We are committed to imparting quality education to underprivileged and victimized children by providing financial and moral support, including private coaching and partial fees funding.")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <Heart className="mb-4 h-10 w-10 text-slate-500" />
                  <CardTitle>{t("about.vision.title", "Our Vision")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t("about.vision.content", "To create an inclusive society where every child has access to quality education and every woman has the opportunity to develop skills and achieve financial independence. We envision a future where disadvantaged communities are empowered and self-sufficient.")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t("about.story.title", "Our Story")}
            </h2>
            <div className="mt-8 space-y-4 text-left text-lg text-gray-600">
              <p>
                {t("about.story.p1", "Founded in 2017 in Jaipur, Rajasthan, Chahat Welfare Foundation began with a simple yet powerful mission: to bridge the gap between privilege and opportunity for disadvantaged communities.")}
              </p>
              <p>
                {t("about.story.p2", "What started as a small initiative to support underprivileged children's education has grown into a comprehensive program that includes education support, women's skill development, and community empowerment.")}
              </p>
              <p>
                {t("about.story.p3", "Our Women Skill Development Center has become a beacon of hope, where women learn to stitch ethnic wear and cotton bags for local brands, with 100% of the profits going directly to them. This initiative not only provides financial independence but also builds confidence and community.")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-gray-900"
          >
            {t("about.values.title", "Our Core Values")}
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: t("about.values.inclusivity.title", "Inclusivity"),
                description: t("about.values.inclusivity.desc", "We believe in creating opportunities for everyone, regardless of their background or circumstances."),
                color: "blue",
              },
              {
                icon: Heart,
                title: t("about.values.compassion.title", "Compassion"),
                description: t("about.values.compassion.desc", "We approach our work with empathy and understanding, recognizing the unique challenges each individual faces."),
                color: "pink",
              },
              {
                icon: Award,
                title: t("about.values.excellence.title", "Excellence"),
                description: t("about.values.excellence.desc", "We are committed to delivering quality programs that create lasting positive impact."),
                color: "green",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <value.icon className="mb-4 h-10 w-10 text-slate-500" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-slate-700">
          <h2 className="text-2xl font-bold text-slate-800">{t("about.contact.title", "Get in Touch")}</h2>
          <p className="mt-4 text-slate-600">
            {t("contact.headquarters")} | {t("contact.founded")}
          </p>
          <p className="mt-2 text-slate-600">
            {t("contact.phoneLabel")}: {t("contact.phone")}
          </p>
        </div>
      </section>
    </div>
  );
}
