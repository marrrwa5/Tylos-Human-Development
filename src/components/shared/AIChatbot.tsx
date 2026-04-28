"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

const WELCOME = "Hi! I'm the Tylos virtual assistant. I can help you find the right course, answer questions about funding, or connect you with our team. How can I help you today?";

function getBotReply(input: string): string {
  const q = input.toLowerCase();

  if (/(course|program|train|learn|study)/i.test(q)) {
    return "We offer a wide range of internationally accredited programs including:\n• Media Techniques (115 hrs)\n• International Accounting & IFRS (130 hrs)\n• English Language – NQF (60 hrs)\n• Customer Service Excellence\n• Project Management\n• And more!\n\nVisit our Courses page to see the full catalog, or tell me what field interests you most.";
  }
  if (/(fund|tamkeen|free|cost|price|fee|pay)/i.test(q)) {
    return "Great news — all our programs are 100% funded! You can enroll at zero cost through government funding. Contact us at info@thd.bh or call 1762 6484 to check your eligibility.";
  }
  if (/(english|language|nqf)/i.test(q)) {
    return "Our English Language Program (NQF) is 60 hours and is accredited by the National Qualifications Framework. It's perfect for job seekers and professionals wanting to improve their communication skills. 100% funded!";
  }
  if (/(media|social media|photography|video|production)/i.test(q)) {
    return "Our Certificate in Media Techniques is a 115-hour program covering social media management, photography, video production, and media ethics. It's fully funded and ideal for anyone in communications or marketing.";
  }
  if (/(accounting|ifrs|finance|financial)/i.test(q)) {
    return "Our Certificate in International Accounting Standards and IFRS is a 130-hour program covering financial reporting, balance sheets, cash flow statements, and ratio analysis. Fully funded!";
  }
  if (/(corporate|company|business|team|employee|workforce)/i.test(q)) {
    return "Tylos offers customized corporate training solutions. We design tailored programs for organizations of any size, delivered on-site or at our center. All 100% funded. Contact us at info@thd.bh or visit our Corporate page.";
  }
  if (/(contact|phone|email|address|location|where)/i.test(q)) {
    return "You can reach us at:\n📍 Office 21, 2nd Floor, Building 698, Road 7325, Block 473, Abu Saiba, Bahrain\n📞 1762 6484\n📧 info@thd.bh\n\nWorking hours: Sun–Wed 8:30AM–5PM, Thu 8:30AM–4PM. Fri–Sat closed.";
  }
  if (/(hour|time|schedule|when|open|close)/i.test(q)) {
    return "Our working hours are:\n• Sunday – Wednesday: 8:30 AM – 5:00 PM\n• Thursday: 8:30 AM – 4:00 PM\n• Friday & Saturday: Closed";
  }
  if (/(whatsapp|chat|message|wa)/i.test(q)) {
    return "You can reach us on WhatsApp at https://api.whatsapp.com/send?phone=97334655220 — our team is ready to help!";
  }
  if (/(register|enroll|sign up|join|apply)/i.test(q)) {
    return "To enroll in a program, visit our Courses page, find the course you like, and click 'Learn More' to see details. You can also contact us directly at info@thd.bh or call 1762 6484.";
  }
  if (/(accredit|certified|certification|certificate|nocn|cisco|iab|ocn)/i.test(q)) {
    return "Tylos is accredited by internationally recognized bodies including NOCN, Cisco, IAB, and OCN. Our certificates are internationally recognized and can boost your career globally.";
  }
  if (/(hello|hi|hey|salam|مرحبا)/i.test(q)) {
    return "Hello! Welcome to Tylos Human Development Center. I'm here to help you find the perfect course or answer any questions. What would you like to know?";
  }
  if (/(thank|thanks|شكر)/i.test(q)) {
    return "You're welcome! Is there anything else I can help you with? Feel free to ask about our courses, funding, or how to get in touch with us.";
  }

  return "I'm not sure about that, but our team can help! Contact us at:\n📞 1762 6484\n📧 info@thd.bh\n💬 WhatsApp: https://api.whatsapp.com/send?phone=97334655220\n\nOr visit any page on this site to explore our courses and services.";
}

let idCounter = 0;
function uid() { return String(++idCounter); }

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: uid(), role: "bot", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: uid(), role: "user", text };
    const botMsg: Message = { id: uid(), role: "bot", text: getBotReply(text) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Animated "Chat with us" label — visible when chat is closed */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="flex items-center gap-2 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 cursor-pointer select-none"
            onClick={() => setOpen(true)}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turquoise opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-turquoise" />
            </span>
            Ask an Advisor
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ maxHeight: "500px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-turquoise">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Tylos Assistant</div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                    <span className="text-white/70 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                <X className="h-3.5 w-3.5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: "280px" }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    msg.role === "bot" ? "bg-turquoise/15" : "bg-blue-brand/15"
                  }`}>
                    {msg.role === "bot"
                      ? <Bot className="h-3.5 w-3.5 text-turquoise" />
                      : <User className="h-3.5 w-3.5 text-blue-brand" />
                    }
                  </div>
                  {/* Bubble */}
                  <div className={`max-w-[75%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "bot"
                      ? "bg-white text-gray-800 shadow-sm border border-gray-100"
                      : "bg-turquoise text-white"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-gray-100 bg-white flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about courses, funding..."
                className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise bg-gray-50"
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-turquoise flex items-center justify-center hover:bg-turquoise/90 transition-colors disabled:opacity-40"
              >
                <Send className="h-4 w-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-turquoise shadow-lg shadow-turquoise/30 flex items-center justify-center relative"
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-turquoise animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  );
}
