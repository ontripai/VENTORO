'use client';

import React from 'react';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface TermsPageContentProps {
  lang: Language;
}

export const TermsPageContent: React.FC<TermsPageContentProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  const breadcrumbs = [
    {
      name: dict.nav.terms,
      href: `/${lang}/${lang === 'ro' ? 'termeni-si-conditii' : 'terms-and-conditions'}`,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Header Banner */}
      <section className="page-header-banner relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/service-consulting.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              VENTORO S.R.L. • LEGAL
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              {dict.nav.terms}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {lang === 'ro'
                ? 'Condițiile generale de utilizare a site-ului web și politica de confidențialitate a VENTORO S.R.L.'
                : 'General terms and conditions of website usage and privacy policy of VENTORO S.R.L.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Terms Body */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#222c3d] p-8 sm:p-12 rounded-2xl border border-slate-700/80 shadow-2xl space-y-8 text-xs sm:text-sm text-gray-200 leading-relaxed">
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold-500" />
                <span>{lang === 'ro' ? '1. Informații Generale despre Companie' : '1. General Corporate Information'}</span>
              </h2>
              <p>
                {lang === 'ro'
                  ? 'Acest website este operat și deținut de VENTORO S.R.L., persoană juridică română cu sediul social în București Sectorul 2, Aleea LUNCA FLORILOR, Nr. 4, parter, Bl. 14, Scara 2, Ap. 94, înregistrată la Registrul Comerțului sub nr. J2022007766400, Cod Unic de Înregistrare 46012496, EUID ROONRC.J2022007766400, având ca activitate principală CAEN 6220 (Consultanță în tehnologia informației și managementul mijloacelor de calcul).'
                  : 'This website is owned and operated by VENTORO S.R.L., a Romanian legal entity with registered headquarters in Bucharest Sector 2, Aleea Lunca Florilor Nr. 4, Bl. 14, registered with the Trade Registry under no. J2022007766400, Unique Registration Code (VAT) 46012496, EUID ROONRC.J2022007766400, with primary activity NACE 6220 (Computer consultancy and facilities management activities).'}
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold-500" />
                <span>{lang === 'ro' ? '2. Drepturi de Proprietate Intelectuală' : '2. Intellectual Property Rights'}</span>
              </h2>
              <p>
                {lang === 'ro'
                  ? 'Toate elementele de design, mărcile comerciale ("VENTORO", "BE THE BEST"), textele, grafica, imaginile și structura bazei de date sunt protejate de legislația națională și internațională privind drepturile de autor. Reproducerea fără acordul scris al VENTORO S.R.L. este strict interzisă.'
                  : 'All design assets, trademarks ("VENTORO", "BE THE BEST"), textual copy, graphics, images, and database structure are protected under national and international copyright treaties. Any unauthorized reproduction without written consent from VENTORO S.R.L. is strictly prohibited.'}
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold-500" />
                <span>{lang === 'ro' ? '3. Protecția Datelor cu Caracter Personal (GDPR)' : '3. Personal Data Protection (GDPR)'}</span>
              </h2>
              <p>
                {lang === 'ro'
                  ? 'VENTORO S.R.L. respectă Regulamentul General privind Protecția Datelor (UE) 2016/679. Datele transmise prin formularele de contact (nume, email, telefon, detalii cerere) sunt utilizate exclusiv pentru procesarea solicitărilor comerciale și nu sunt transmise terților fără consimțământ expres.'
                  : 'VENTORO S.R.L. complies with Regulation (EU) 2016/679 (GDPR). Information submitted through contact and inquiry forms (name, email, phone, project requirements) is utilized exclusively to respond to business inquiries and is never disclosed to third parties without express consent.'}
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold-500" />
                <span>{lang === 'ro' ? '4. Contact Juridic' : '4. Legal Contact'}</span>
              </h2>
              <p>
                {lang === 'ro'
                  ? 'Pentru orice întrebare privind termenii și condițiile sau exercitarea drepturilor GDPR, ne puteți contacta la adresa de email: info@ventoro.ro sau office@ventoro.ro.'
                  : 'For inquiries regarding our terms of service or to exercise your GDPR rights, please contact us at: info@ventoro.ro or office@ventoro.ro.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
