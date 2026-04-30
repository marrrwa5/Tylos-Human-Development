"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type Message = { id: string; role: "bot" | "user"; text: string; };

function getBotReply(q: string, isAr: boolean): string {
  const lower = q.toLowerCase();
  if (/(course|program|train|دورة|برنامج|تدريب)/i.test(lower))
    return isAr ? "نقدم برامج معتمدة دولياً منها تقنيات الإعلام، المحاسبة والمعايير الدولية، اللغة الإنجليزية NQF، التميز في خدمة العملاء، وإدارة المشاريع. جميعها ممولة 100%! تفضل بزيارة صفحة الدورات." : "We offer internationally accredited programs including Media Techniques, IFRS Accounting, English NQF, Customer Service Excellence, and Project Management. All 100% funded! Visit our Courses page.";
  if (/(fund|free|cost|price|تمويل|مجاني|سعر)/i.test(lower))
    return isAr ? "جميع برامجنا ممولة 100%! التسجيل مجاني عبر التمويل الحكومي. تواصل: info@thd.bh أو اتصل 1762 6484." : "All our programs are 100% funded! Enroll at zero cost through government funding. Contact info@thd.bh or call 1762 6484.";
  if (/(corporate|company|شركة|موظف)/i.test(lower))
    return isAr ? "نقدم حلول تدريب الشركات المخصصة لجميع أحجام المؤسسات، حضورياً أو افتراضياً. ممول 100%. راسلنا على info@thd.bh." : "We offer customized corporate training for organizations of any size, on-site or virtual. 100% funded. Email info@thd.bh.";
  if (/(contact|phone|email|address|تواصل|هاتف|بريد|عنوان)/i.test(lower))
    return isAr ? "📍 مكتب 21، المبنى 698، أبو صيبع، البحرين\n📞 1762 6484\n📧 info@thd.bh\nالأحد–الأربعاء: 8:30ص–5م | الخميس: 8:30ص–4م" : "📍 Office 21, Building 698, Abu Saiba, Bahrain\n📞 1762 6484\n📧 info@thd.bh\nSun–Wed: 8:30AM–5PM | Thu: 8:30AM–4PM";
  if (/(hello|hi|مرحبا|أهلا)/i.test(lower))
    return isAr ? "أهلاً وسهلاً! كيف يمكنني مساعدتك اليوم؟" : "Hello! How can I help you today?";
  if (/(thank|شكر)/i.test(lower))
    return isAr ? "عفواً! هل هناك شيء آخر يمكنني مساعدتك به؟" : "You're welcome! Is there anything else I can help you with?";
  return isAr ? "يمكن فريقنا مساعدتك!\n📞 1762 6484\n📧 info@thd.bh\n💬 واتساب: https://api.whatsapp.com/send?phone=97334655220" : "Our team can help!\n📞 1762 6484\n📧 info@thd.bh\n💬 WhatsApp: https://api.whatsapp.com/send?phone=97334655220";
}

let n = 0;
function uid() { return String(++n); }

export default function AIChatbot() {
  const { isAr, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const welcome = isAr
      ? "أهلاً! أنا المساعد الافتراضي لمركز تايلوس. كيف يمكنني مساعدتك؟"
      : "Hi! I'm the Tylos virtual assistant. How can I help you today?";
    setMessages([{ id: uid(), role: "bot", text: welcome }]);
  }, [isAr]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: uid(), role: "user", text }, { id: uid(), role: "bot", text: getBotReply(text, isAr) }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {!open && (
          <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ delay: 1.2 }}
            className="flex items-center gap-2 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 cursor-pointer" onClick={() => setOpen(true)}>
            <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turquoise opacity-60" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-turquoise" /></span>
            {t("Ask an Advisor", "تحدث مع مستشار")}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 10 }} transition={{ duration: 0.2 }}
            className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col" style={{ maxHeight: "500px" }}>
            <div className="flex items-center justify-between px-4 py-3 bg-turquoise">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><Bot className="h-4 w-4 text-white" /></div>
                <div>
                  <div className="text-white font-semibold text-sm">{t("Tylos Assistant", "مساعد تايلوس")}</div>
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" /><span className="text-white/70 text-xs">{t("Online", "متاح")}</span></div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"><X className="h-3.5 w-3.5 text-white" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: "280px" }}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${msg.role === "bot" ? "bg-turquoise/15" : "bg-blue-brand/15"}`}>
                    {msg.role === "bot" ? <Bot className="h-3.5 w-3.5 text-turquoise" /> : <User className="h-3.5 w-3.5 text-blue-brand" />}
                  </div>
                  <div className={`max-w-[75%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-line ${msg.role === "bot" ? "bg-white text-gray-800 shadow-sm border border-gray-100" : "bg-turquoise text-white"}`}>{msg.text}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="px-3 py-3 border-t border-gray-100 bg-white flex gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                placeholder={t("Ask about courses, funding...", "اسأل عن الدورات، التمويل...")}
                className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise bg-gray-50" />
              <button onClick={send} disabled={!input.trim()} className="w-9 h-9 rounded-xl bg-turquoise flex items-center justify-center hover:bg-turquoise/90 transition-colors disabled:opacity-40"><Send className="h-4 w-4 text-white" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button onClick={() => setOpen((o) => !o)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-turquoise shadow-lg shadow-turquoise/30 flex items-center justify-center relative" aria-label="Chat">
        <AnimatePresence mode="wait">
          {open ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="h-6 w-6 text-white" /></motion.div>
                : <motion.div key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><MessageCircle className="h-6 w-6 text-white" /></motion.div>}
        </AnimatePresence>
        {!open && <span className="absolute inset-0 rounded-full bg-turquoise animate-ping opacity-20" />}
      </motion.button>
    </div>
  );
}
