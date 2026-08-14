"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Send, CheckCircle, Mail, Radio } from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    inquiryType: "Public Safety Agency Partnership",
    message: "",
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!footerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".footer-fade", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative z-[10] bg-white text-zinc-950 pt-16 pb-10 px-6 sm:p-10 md:px-14 lg:px-16 overflow-hidden border-t border-zinc-200"
    >
      {/* Top Contact Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-200">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-8 footer-fade">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2 font-sans">
              CONTACT // KINTON AEROSPACE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-zinc-950">
              Let&apos;s Build This Together
            </h2>
            <p className="text-sm text-zinc-600 mt-3 leading-relaxed font-sans">
              Whether you are a search &amp; rescue agency seeking early flight trials, a grant program or investor, an engineer looking to contribute, or press — we would love to connect.
            </p>
          </div>

          {/* Direct Lines */}
          <div className="space-y-3 text-xs font-sans">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <Mail className="w-4 h-4 text-black mt-0.5" />
              <div>
                <div className="text-zinc-500 font-medium">GENERAL INQUIRIES &amp; PARTNERSHIPS</div>
                <a
                  href="mailto:founders@kinton-aerospace.com"
                  className="text-zinc-950 font-semibold hover:underline mt-0.5 block"
                >
                  founders@kinton-aerospace.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <Radio className="w-4 h-4 text-black mt-0.5" />
              <div>
                <div className="text-zinc-500 font-medium">PUBLIC SAFETY &amp; AGENCY PARTNERSHIPS</div>
                <a
                  href="mailto:sar@kinton-aerospace.com"
                  className="text-zinc-950 font-semibold hover:underline mt-0.5 block"
                >
                  sar@kinton-aerospace.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7 footer-fade">
          <div className="p-6 sm:p-8 rounded-xl bg-zinc-50 border border-zinc-200">
            <h3 className="text-xl font-bold font-sans text-zinc-950 mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-zinc-500 mb-6 font-sans">
              Tell us about your interest. We respond to every genuine inquiry.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-lg bg-white border border-zinc-300 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-black mx-auto" />
                <h4 className="text-lg font-bold font-sans text-zinc-950">Message Received</h4>
                <p className="text-xs text-zinc-600 max-w-sm mx-auto font-sans">
                  Thank you for reaching out to Kinton Aerospace. We&apos;ll follow up shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-black underline uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-700 font-semibold mb-1.5 uppercase tracking-wider text-[10px]">
                      YOUR NAME *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-700 font-semibold mb-1.5 uppercase tracking-wider text-[10px]">
                      ORGANIZATION
                    </label>
                    <input
                      type="text"
                      placeholder="Agency / Company / Independent"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-700 font-semibold mb-1.5 uppercase tracking-wider text-[10px]">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-700 font-semibold mb-1.5 uppercase tracking-wider text-[10px]">
                      INQUIRY TYPE
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="Public Safety Agency Partnership">Public Safety Agency Partnership</option>
                      <option value="BVLOS Co-Sponsorship">BVLOS Co-Sponsorship</option>
                      <option value="SBIR / STTR / Grant Funding">SBIR / STTR / Grant Funding</option>
                      <option value="Investor Inquiry">Investor Inquiry</option>
                      <option value="Engineering / Joining the Team">Engineering / Joining the Team</option>
                      <option value="Press & Media">Press &amp; Media</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-700 font-semibold mb-1.5 uppercase tracking-wider text-[10px]">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your mission, interest, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-black hover:bg-zinc-800 text-white font-bold font-sans text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Giant Editorial Marquee */}
      <div className="py-14 overflow-hidden select-none">
        <h2 className="text-[clamp(2.2rem,8.2vw,9.5rem)] font-bold text-center tracking-tighter text-zinc-900 hover:text-black transition-colors font-sans uppercase leading-none whitespace-nowrap">
          {"KINTON AEROSPACE".split("").map((ch, idx) => (
            <span key={idx} className="inline-block will-change-transform">
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h2>
      </div>

      {/* Bottom Sub-footer */}
      <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-zinc-500">
        <div>
          © {new Date().getFullYear()} Kinton Aerospace. Oregon Public-Benefit LLC. All Rights Reserved.
        </div>
        <div className="flex gap-6 uppercase tracking-wider text-[10px]">
          <span>HYBRID-ELECTRIC SAR UAS</span>
          <span>•</span>
          <span>DISASTER RESPONSE</span>
          <span>•</span>
          <span>PORTLAND, OR</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
