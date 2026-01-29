"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Check, ArrowRight, IndianRupee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const presetAmounts = [500, 1000, 2500, 5000, 10000];

export default function DonatePage() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState<string>("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handlePresetClick = (value: number) => {
    setAmount(String(value));
    setSelectedPreset(value);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setSelectedPreset(null);
  };

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
          <h2 className="mt-6 text-2xl font-bold text-gray-900">{t("donate.thankYou.title", "Thank You!")}</h2>
          <p className="mt-2 text-gray-600">{t("donate.thankYou.description", "Your donation intent has been recorded. We will reach out for payment details. This is a UI-only form—no backend connected.")}</p>
          <Link href="/" className="mt-8 inline-block">
            <Button size="lg"> {t("donate.thankYou.back", "Back to Home")}</Button>
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
            <Heart className="mx-auto h-16 w-16 text-slate-400" />
            <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
              {t("nav.donate")}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {t("donate.hero.subtitle", "Your contribution helps us provide education and empower women. Every rupee counts.")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-slate-700">
                  <IndianRupee className="h-6 w-6 text-slate-500" />
                  {t("donate.form.title", "Choose Your Donation Amount")}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label className="mb-2 block">{t("donate.form.preset", "Quick select (₹)")}</Label>
                      <div className="flex flex-wrap gap-2">
                        {presetAmounts.map((value) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => handlePresetClick(value)}
                            className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors ${
                              selectedPreset === value
                                ? "border-slate-500 bg-slate-50 text-slate-700"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            ₹{value.toLocaleString("en-IN")}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="amount" className="mb-2 block">
                        {t("donate.form.custom", "Or enter custom amount (₹)")}
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        min="1"
                        placeholder="e.g. 2500"
                        value={amount}
                        onChange={handleCustomAmount}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="name" className="mb-2 block">{t("donate.form.name", "Your Name")}</Label>
                      <Input id="name" type="text" placeholder={t("donate.form.namePlaceholder", "Full name")} required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-2 block">{t("donate.form.email", "Email")}</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="mb-2 block">{t("donate.form.phone", "Phone")}</Label>
                      <Input id="phone" type="tel" placeholder="7211155790" />
                    </div>
                    <p className="text-xs text-gray-500">
                      {t("donate.form.note", "This is a UI-only form. No payment is processed. For actual donations, please contact us.")}
                    </p>
                    <Button type="submit" size="lg" className="w-full bg-slate-500 hover:bg-slate-600">
                      {t("donate.form.submit", "Proceed to Donate")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
