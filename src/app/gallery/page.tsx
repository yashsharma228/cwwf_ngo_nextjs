"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ImageIcon, GraduationCap, Scissors, Users, Heart, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const placeholderThemes = [
  { bg: "bg-slate-100", icon: GraduationCap, labelKey: "gallery.education", iconColor: "text-slate-500" },
  { bg: "bg-slate-100", icon: Scissors, labelKey: "gallery.women", iconColor: "text-slate-500" },
  { bg: "bg-slate-100", icon: Users, labelKey: "gallery.community", iconColor: "text-slate-500" },
  { bg: "bg-slate-100", icon: Heart, labelKey: "gallery.events", iconColor: "text-slate-500" },
  { bg: "bg-slate-100", icon: BookOpen, labelKey: "gallery.programs", iconColor: "text-slate-500" },
  { bg: "bg-slate-100", icon: ImageIcon, labelKey: "gallery.general", iconColor: "text-slate-500" },
];

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageIcon className="mx-auto h-16 w-16 text-slate-400" />
            <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
              {t("nav.gallery")}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {t("gallery.hero.subtitle", "Moments from our programs, education initiatives, and women skill development center.")}
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
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {placeholderThemes.map((item, index) => (
              <motion.div
                key={item.labelKey}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden border border-slate-200 shadow-sm transition-transform hover:shadow-md hover:scale-[1.01]">
                  <div
                    className={`flex aspect-[4/3] items-center justify-center ${item.bg} p-8`}
                  >
                    <item.icon className={`h-16 w-16 ${item.iconColor}`} />
                  </div>
                  <CardContent className="p-4 text-center">
                    <p className="font-medium text-slate-700">{t(item.labelKey)}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {t("gallery.placeholder", "Photo gallery coming soon")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
