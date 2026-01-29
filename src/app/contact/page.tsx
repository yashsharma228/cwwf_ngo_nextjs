"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
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
          <h2 className="mt-6 text-2xl font-bold text-gray-900">{t("contact.thankYou.title", "Message Sent!")}</h2>
          <p className="mt-2 text-gray-600">{t("contact.thankYou.description", "We will get back to you soon.")}</p>
          <Link href="/" className="mt-8 inline-block">
            <Button size="lg">{t("contact.thankYou.back", "Back to Home")}</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="mx-auto h-16 w-16 text-slate-400" />
            <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
              {t("nav.contact")}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {t("contact.hero.subtitle", "Reach out for donations, volunteering, partnerships, or any inquiry.")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-2 border-slate-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-700">
                    <MapPin className="h-5 w-5 text-slate-500" />
                    {t("contact.info.address.title", "Headquarters")}
                  </CardTitle>
                  <CardContent className="pt-0 text-gray-600">
                    {t("contact.headquarters")} — Jaipur, Rajasthan
                  </CardContent>
                </CardHeader>
              </Card>
              <Card className="border-2 border-slate-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-700">
                    <Phone className="h-5 w-5 text-slate-500" />
                    {t("contact.phoneLabel")}
                  </CardTitle>
                  <CardContent className="pt-0">
                    <a href="tel:7211155790" className="text-lg font-medium text-slate-600 hover:text-slate-800 hover:underline">
                      7211155790
                    </a>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card className="border-2 border-slate-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-700">
                    <Mail className="h-5 w-5 text-slate-500" />
                    {t("contact.info.industry", "Industry")}
                  </CardTitle>
                  <CardContent className="pt-0 text-gray-600">
                    {t("contact.industry")} · {t("contact.companySize")}
                  </CardContent>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-slate-100">
                <CardHeader>
                  <CardTitle>{t("contact.form.title", "Send a Message")}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="cname">{t("contact.form.name", "Name")}</Label>
                        <Input id="cname" type="text" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cemail">{t("contact.form.email", "Email")}</Label>
                        <Input id="cemail" type="email" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cphone">{t("contact.form.phone", "Phone")}</Label>
                        <Input id="cphone" type="tel" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cmessage">{t("contact.form.message", "Message")}</Label>
                        <textarea
                          id="cmessage"
                          rows={4}
                          required
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-slate-500 hover:bg-slate-600">
                        <Send className="mr-2 h-4 w-4" />
                        {t("contact.form.submit", "Send Message")}
                      </Button>
                    </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
