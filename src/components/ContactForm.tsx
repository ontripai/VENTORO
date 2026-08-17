'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { servicesList } from '@/data/services-data';

interface ContactFormProps {
  lang: Language;
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const formDict = dict.contactPage.form;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage(
        lang === 'ro'
          ? 'Vă rugăm să completați toate câmpurile obligatorii (*).'
          : 'Please complete all required fields (*).'
      );
      return;
    }

    if (!formData.agree) {
      setErrorMessage(
        lang === 'ro'
          ? 'Trebuie să acceptați politica de confidențialitate.'
          : 'You must agree to the privacy policy.'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate API network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        agree: false,
      });
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#141a24] rounded-2xl p-8 border border-gold-500/50 shadow-2xl text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto mb-4 border border-gold-500/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-2">
          {formDict.successTitle}
        </h3>
        <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
          {formDict.successMessage}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-black font-bold text-xs uppercase tracking-wider transition-all"
        >
          {formDict.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#141a24] rounded-2xl p-8 border border-gray-800 shadow-2xl relative">
      <div className="mb-6">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">
          {formDict.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400">
          {formDict.subtitle}
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              {formDict.nameLabel}
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ion Popescu / John Doe"
              className="w-full bg-[#0c1017] border border-gray-700 focus:border-gold-500 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              {formDict.emailLabel}
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="contact@company.com"
              className="w-full bg-[#0c1017] border border-gray-700 focus:border-gold-500 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              {formDict.phoneLabel}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+40 728 000 000"
              className="w-full bg-[#0c1017] border border-gray-700 focus:border-gold-500 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Service Area */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              {formDict.serviceLabel}
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#0c1017] border border-gray-700 focus:border-gold-500 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none transition-colors"
            >
              <option value="">{formDict.serviceDefault}</option>
              {servicesList.map((s) => (
                <option key={s.id} value={s.id}>
                  {lang === 'ro' ? s.titleRo : s.titleEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">
            {formDict.messageLabel}
          </label>
          <textarea
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder={lang === 'ro' ? 'Descrieți cererea sau proiectul dumneavoastră...' : 'Describe your inquiry or technical project specifications...'}
            className="w-full bg-[#0c1017] border border-gray-700 focus:border-gold-500 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors resize-y"
          />
        </div>

        {/* Terms Agreement */}
        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded border-gray-700 bg-[#0c1017] text-gold-500 focus:ring-gold-500"
          />
          <label htmlFor="agree" className="text-[11px] text-gray-400 select-none">
            {formDict.agreeTerms}
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 transition-all disabled:opacity-50 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? formDict.submitting : formDict.submitBtn}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
