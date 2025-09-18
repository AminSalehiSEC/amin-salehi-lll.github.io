import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Send, Github, MessageCircle } from "lucide-react";

export default function Portfolio() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, from: "user" }]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.img
          src="https://avatars.githubusercontent.com/u/182611210?v=4"
          alt="Amin Salehi"
          className="w-40 h-40 rounded-full shadow-2xl border-4 border-purple-500 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          محمدامین صالحی
        </motion.h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
          پژوهشگر، طراح و تحلیلگر چندبعدی | دانشجوی ریاضیات و کاربردها، دانشگاه شهید بهشتی
        </p>
        <div className="flex gap-6 mt-8">
          <a href="https://t.me/amin.salehi.lll" target="_blank" className="hover:text-purple-400"><MessageCircle size={30} /></a>
          <a href="https://instagram.com/amin.salehi.lll" target="_blank" className="hover:text-pink-400"><Instagram size={30} /></a>
          <a href="mailto:amin.salehi.sec@gmail.com" className="hover:text-red-400"><Mail size={30} /></a>
          <a href="tel:+989339291935" className="hover:text-green-400"><Phone size={30} /></a>
          <a href="https://github.com/aminsalehisec" target="_blank" className="hover:text-gray-400"><Github size={30} /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-black bg-opacity-40 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">درباره من</h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
          من در زمینه‌های برنامه‌نویسی پایتون، طراحی سیستم، ساخت سناریو و فلوچارت، طراحی لوگو و پوستر، و تایپ حرفه‌ای تخصص دارم.
          علاقه‌مند به پژوهش در فلسفه، روانشناسی، تحلیل رفتار متقابل، مهندسی شرایط و مهندسی اجتماعی، و نویسندگی متون کوتاه فلسفی، عرفانی و جامعه‌شناسی.
          دقیق، متعهد و علاقه‌مند به مدیریت پروژه و تحلیل رفتارهای اجتماعی و اقتصادی برای خلق راهکارهای نوآورانه.
        </p>
      </section>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 p-4 rounded-full shadow-lg"
      >
        <Send size={24} />
      </button>

      {/* Chat Box */}
      {showChat && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-6 w-80 bg-gray-900 rounded-2xl shadow-2xl border border-purple-700 flex flex-col"
        >
          <div className="p-3 border-b border-purple-700 text-center font-bold bg-purple-800 rounded-t-2xl">
            پیام مستقیم
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-60">
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 rounded-lg max-w-[80%] ${msg.from === "user" ? "bg-purple-600 ml-auto" : "bg-gray-700"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 border-t border-purple-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <button onClick={handleSend} className="ml-2 bg-purple-600 hover:bg-purple-700 p-2 rounded-lg">
              <Send size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Send, Github, MessageCircle } from "lucide-react";

export default function Portfolio() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, from: "user" }]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.img
          src="https://avatars.githubusercontent.com/u/182611210?v=4"
          alt="Amin Salehi"
          className="w-40 h-40 rounded-full shadow-2xl border-4 border-purple-500 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          محمدامین صالحی
        </motion.h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
          پژوهشگر، طراح و تحلیلگر چندبعدی | دانشجوی ریاضیات و کاربردها، دانشگاه شهید بهشتی
        </p>
        <div className="flex gap-6 mt-8">
          <a href="https://t.me/amin.salehi.lll" target="_blank" className="hover:text-purple-400"><MessageCircle size={30} /></a>
          <a href="https://instagram.com/amin.salehi.lll" target="_blank" className="hover:text-pink-400"><Instagram size={30} /></a>
          <a href="mailto:amin.salehi.sec@gmail.com" className="hover:text-red-400"><Mail size={30} /></a>
          <a href="tel:+989339291935" className="hover:text-green-400"><Phone size={30} /></a>
          <a href="https://github.com/aminsalehisec" target="_blank" className="hover:text-gray-400"><Github size={30} /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-black bg-opacity-40 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">درباره من</h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
          من در زمینه‌های برنامه‌نویسی پایتون، طراحی سیستم، ساخت سناریو و فلوچارت، طراحی لوگو و پوستر، و تایپ حرفه‌ای تخصص دارم.
          علاقه‌مند به پژوهش در فلسفه، روانشناسی، تحلیل رفتار متقابل، مهندسی شرایط و مهندسی اجتماعی، و نویسندگی متون کوتاه فلسفی، عرفانی و جامعه‌شناسی.
          دقیق، متعهد و علاقه‌مند به مدیریت پروژه و تحلیل رفتارهای اجتماعی و اقتصادی برای خلق راهکارهای نوآورانه.
        </p>
      </section>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 p-4 rounded-full shadow-lg"
      >
        <Send size={24} />
      </button>

      {/* Chat Box */}
      {showChat && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-6 w-80 bg-gray-900 rounded-2xl shadow-2xl border border-purple-700 flex flex-col"
        >
          <div className="p-3 border-b border-purple-700 text-center font-bold bg-purple-800 rounded-t-2xl">
            پیام مستقیم
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-60">
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 rounded-lg max-w-[80%] ${msg.from === "user" ? "bg-purple-600 ml-auto" : "bg-gray-700"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 border-t border-purple-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <button onClick={handleSend} className="ml-2 bg-purple-600 hover:bg-purple-700 p-2 rounded-lg">
              <Send size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
