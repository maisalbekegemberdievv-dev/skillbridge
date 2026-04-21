"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: ""
};

export default function ContactSection({ content, language }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactItems = [
    {
      icon: Mail,
      label: content.contactLabels.email,
      value: "partnerships@skillbridge-llc.com",
      href: "mailto:partnerships@skillbridge-llc.com"
    },
    {
      icon: Phone,
      label: content.contactLabels.phone,
      value: "+996 700 000 000",
      href: "tel:+996700000000"
    },
    {
      icon: MessageCircle,
      label: content.contactLabels.whatsapp,
      value: "+996 700 000 000",
      href: "https://wa.me/996700000000"
    },
    {
      icon: MapPin,
      label: content.contactLabels.location,
      value: content.locationValue,
      href: "#contact"
    }
  ];

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.company.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: content.formStatus.validationError });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: "pending", text: content.formStatus.sending });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          website: form.website,
          language
        })
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.ok) {
        throw new Error("submit_failed");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        text: `${content.formStatus.successPrefix} ${payload.referenceId}`
      });
    } catch {
      setStatus({ type: "error", text: content.formStatus.submitError });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing pb-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="glass-card soft-divider rounded-2xl p-4 transition duration-300 hover:border-blue-300/35 hover:bg-white/[0.06]"
                  >
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-200">{item.value}</p>
                  </a>
                );
              })}
            </div>

            <div className="glass-card soft-divider mt-6 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {content.companyInfoTitle}
              </p>
              <div className="mt-3 space-y-2 text-sm text-slate-300">
                {content.companyInfo.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card soft-divider rounded-3xl p-6 shadow-soft md:p-8">
            <h3 className="font-display text-2xl font-semibold text-white">{content.formTitle}</h3>
            <form autoComplete="off" className="mt-6 space-y-4" onSubmit={onSubmit}>
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={updateField}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-slate-300">
                  {content.fields.fullName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={updateField}
                  autoComplete="off"
                  placeholder={content.fields.fullNamePlaceholder}
                  className="w-full rounded-xl border border-white/15 bg-[#070c14] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-slate-300">
                    {content.fields.businessEmail}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    autoComplete="off"
                    placeholder={content.fields.businessEmailPlaceholder}
                    className="w-full rounded-xl border border-white/15 bg-[#070c14] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1 block text-sm text-slate-300">
                    {content.fields.company}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={updateField}
                    autoComplete="off"
                    placeholder={content.fields.companyPlaceholder}
                    className="w-full rounded-xl border border-white/15 bg-[#070c14] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-slate-300">
                  {content.fields.hiringNeeds}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={updateField}
                  autoComplete="off"
                  placeholder={content.fields.hiringNeedsPlaceholder}
                  className="w-full rounded-xl border border-white/15 bg-[#070c14] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-soft transition duration-300 hover:scale-[1.01] hover:from-blue-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isSubmitting ? content.formStatus.sending : content.fields.submit}
              </button>

              {status.type !== "idle" && (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-emerald-300"
                      : status.type === "error"
                        ? "text-rose-300"
                        : "text-blue-300"
                  }`}
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
