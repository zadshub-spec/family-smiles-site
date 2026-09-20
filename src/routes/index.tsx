import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Baby,
  CalendarDays,
  Check,
  ChevronRight,
  HeartHandshake,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircleHeart,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/siri-family-dental-hero.jpg";
import aboutImage from "@/assets/siri-family-dental-about.jpg";
import careImage from "@/assets/siri-family-dental-care.jpg";
import logoAsset from "@/assets/siri-family-dental-logo-2026.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siri Family Dental | Family Dental Care in May Pen" },
      { name: "description", content: "Professional dental care in a comfortable and welcoming environment for you and your family in May Pen, Jamaica." },
      { property: "og:title", content: "Siri Family Dental | May Pen, Jamaica" },
      { property: "og:description", content: "Comfortable, welcoming dental care for you and your family in May Pen." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { icon: Stethoscope, title: "General Dentistry", description: "Routine dental care and oral health support." },
  { icon: ShieldCheck, title: "Preventive Care", description: "Care focused on maintaining healthy teeth and gums." },
  { icon: Baby, title: "Children's Dental Care", description: "Friendly dental care designed with younger patients in mind." },
  { icon: Sparkles, title: "Cosmetic Dentistry", description: "Smile-focused dental treatments and cosmetic care." },
  { icon: HeartPulse, title: "Restorative Dentistry", description: "Dental care focused on restoring damaged or missing teeth." },
  { icon: MessageCircleHeart, title: "Dental Consultations", description: "Professional assessment and discussion of dental concerns." },
];

const navItems = [
  ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
  ["Why Choose Us", "#why-us"], ["FAQ", "#faq"], ["Contact", "#contact"],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Siri Family Dental home">
            <img src={logoAsset.url} alt="" width={56} height={56} className="size-14 shrink-0 rounded-full border border-border bg-card object-cover" />
            <span><strong className="block font-display text-lg leading-none text-foreground">Siri Family Dental</strong><span className="mt-1 block text-xs font-semibold text-primary">May Pen, Jamaica</span></span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <Button asChild className="hidden h-11 rounded-xl px-5 font-semibold lg:inline-flex"><a href="tel:+18767746645"><CalendarDays /> Book an Appointment</a></Button>
          <Button variant="ghost" size="icon" className="size-11 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-border/60 py-3 font-semibold text-foreground">{label}</a>)}<Button asChild className="mt-4 h-12 w-full rounded-xl"><a href="tel:+18767746645">Book an Appointment</a></Button></nav>}
      </header>

      <main>
        <section id="home" className="relative scroll-mt-20 overflow-hidden bg-muted/70">
          <div className="absolute -right-24 top-16 size-72 rounded-full bg-accent/55" aria-hidden="true" />
          <div className="absolute left-[44%] top-20 size-20 rounded-full border-[18px] border-secondary" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
            <div className="max-w-xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground"><MapPin className="size-4" /> Caring for smiles in May Pen</p>
              <h1 className="text-5xl font-bold leading-[1.06] text-foreground sm:text-6xl lg:text-7xl">Your Family&apos;s Smile Starts <span className="text-primary">Here</span></h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">Professional dental care in a comfortable and welcoming environment for you and your family.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-14 rounded-xl px-7 text-base font-bold shadow-lg shadow-primary/20"><a href="tel:+18767746645"><CalendarDays /> Book an Appointment</a></Button>
                <Button asChild size="lg" variant="outline" className="h-14 rounded-xl border-primary/30 px-7 text-base font-bold text-primary"><a href="tel:+18767746645"><Phone /> Call +1 876-774-6645</a></Button>
              </div>
              <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-muted-foreground"><span className="flex -space-x-1">{[1,2,3].map(n => <span key={n} className="grid size-7 place-items-center rounded-full border-2 border-background bg-accent text-accent-foreground"><Check className="size-3.5" /></span>)}</span>Family Dental Care <span aria-hidden="true">•</span> May Pen, Jamaica</div>
            </div>
            <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
              <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-[2rem] bg-primary/15" aria-hidden="true" />
              <img src={heroImage} alt="A dentist welcoming a mother and child in a bright dental clinic" width={1200} height={1008} fetchPriority="high" className="relative aspect-[1.16] w-full rounded-[2rem] object-cover shadow-2xl shadow-foreground/10" />
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl sm:left-8"><span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground"><HeartHandshake /></span><span><strong className="block text-sm">Warm, welcoming care</strong><span className="text-xs text-muted-foreground">For the whole family</span></span></div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div className="relative"><div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-secondary" aria-hidden="true" /><img src={aboutImage} alt="A dental professional welcoming a patient" width={1008} height={1104} loading="lazy" className="relative aspect-[4/4.35] max-h-[570px] w-full rounded-[2rem] object-cover" /></div>
            <div><p className="text-sm font-bold uppercase text-primary">About Siri Family Dental</p><h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Comfortable Dental Care for You and Your Family</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Siri Family Dental provides dental care in May Pen, with a focus on creating a comfortable and welcoming experience for every patient and family who visits.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">{[{ icon: Smile, label: "Friendly Environment" }, { icon: HeartHandshake, label: "Family-Focused Care" }, { icon: MapPin, label: "Convenient May Pen Location" }].map(({ icon: BenefitIcon, label }) => <div key={label} className="flex items-center gap-3 sm:block"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary sm:mb-3"><BenefitIcon className="size-5" /></span><span className="text-sm font-bold leading-5">{label}</span></div>)}</div>
              <Button asChild variant="outline" className="mt-9 h-12 rounded-xl border-primary/30 px-6 text-primary"><a href="#why-us">Learn More <ArrowRight /></a></Button>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-muted py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase text-primary">Our Services</p><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Dental Care for Every Smile</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Explore our general service categories and contact us to discuss your dental care needs.</p></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({icon: Icon,title,description}) => <article key={title} className="group rounded-2xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"><span className="grid size-13 place-items-center rounded-2xl bg-secondary text-primary"><Icon className="size-6" /></span><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 min-h-12 leading-6 text-muted-foreground">{description}</p><a href="tel:+18767746645" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary">Learn More <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></a></article>)}</div>
          </div>
        </section>

        <section id="why-us" className="scroll-mt-20 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8"><img src={careImage} alt="A dental professional listening attentively to a patient" width={1104} height={1200} loading="lazy" className="aspect-[4/4.35] max-h-[610px] w-full rounded-[2rem] object-cover" /><div><p className="text-sm font-bold uppercase text-primary">Why Choose Siri Family Dental?</p><h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">A Comfortable Place for Your Dental Care</h2><div className="mt-9 grid gap-6 sm:grid-cols-2">{[{ icon: Smile, title: "Family-Friendly Environment", text: "A welcoming experience for patients of different ages." }, { icon: MapPin, title: "Convenient Location", text: "Located on Fernleigh Avenue in May Pen." }, { icon: HeartHandshake, title: "Patient-Focused Approach", text: "We aim to help patients feel comfortable and listened to." }, { icon: Phone, title: "Easy Appointment Contact", text: "Patients can contact the clinic directly by phone." }].map(({ icon: FeatureIcon, title, text }) => <div key={title} className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"><FeatureIcon className="size-5" /></span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}</div><Button asChild size="lg" className="mt-9 h-13 rounded-xl px-7 text-base font-bold"><a href="tel:+18767746645"><CalendarDays /> Book an Appointment</a></Button></div></div></section>

        <section id="faq" className="scroll-mt-20 bg-secondary/60 py-16"><div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3 lg:px-8"><div><p className="text-sm font-bold uppercase text-primary">Helpful details</p><h2 className="mt-3 text-3xl font-bold">Plan your visit</h2></div><div><h3 className="font-bold">When are you open?</h3><p className="mt-2 leading-7 text-muted-foreground">Monday to Saturday, 9:00 AM – 5:00 PM. Closed Sunday.</p></div><div><h3 className="font-bold">How can I book?</h3><p className="mt-2 leading-7 text-muted-foreground">Call us directly at <a className="font-semibold text-primary" href="tel:+18767746645">+1 876-774-6645</a> to arrange an appointment.</p></div></div></section>

        <section id="contact" className="scroll-mt-20 bg-primary py-16 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8"><div><p className="text-sm font-bold uppercase opacity-80">Ready when you are</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let&apos;s take care of your smile.</h2><p className="mt-3 max-w-2xl opacity-85">Call Siri Family Dental to book an appointment or ask about your dental care needs.</p></div><Button asChild size="lg" variant="secondary" className="h-14 shrink-0 rounded-xl px-7 text-base font-bold"><a href="tel:+18767746645"><Phone /> Call +1 876-774-6645</a></Button></div></section>
      </main>

      <footer className="bg-foreground py-14 text-background"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 lg:px-8"><div><div className="flex items-center gap-3"><img src={logoAsset.url} alt="" width={56} height={56} loading="lazy" className="size-14 rounded-full border border-background/20 object-cover" /><strong className="font-display text-xl">Siri Family Dental</strong></div><p className="mt-4 max-w-xs text-sm leading-6 opacity-70">Comfortable and welcoming dental care for you and your family in May Pen.</p></div><div><h2 className="font-bold">Visit us</h2><address className="mt-4 text-sm not-italic leading-7 opacity-70">National Bank, Fernleigh Avenue Upstairs<br />45 A Main Street<br />May Pen, Jamaica</address></div><div><h2 className="font-bold">Contact & hours</h2><a href="tel:+18767746645" className="mt-4 block text-sm font-semibold text-accent">+1 876-774-6645</a><p className="mt-2 text-sm leading-7 opacity-70">Monday–Saturday: 9:00 AM–5:00 PM<br />Sunday: Closed</p></div></div><div className="mx-auto mt-12 max-w-7xl border-t border-background/15 px-5 pt-6 text-xs opacity-55 lg:px-8">© {new Date().getFullYear()} Siri Family Dental. May Pen, Jamaica.</div></footer>
    </div>
  );
}
