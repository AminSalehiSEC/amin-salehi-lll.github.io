<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>محمدامین صالحی | معرفی</title>
  <style>
    body {
      margin: 0;
      font-family: 'Tahoma', sans-serif;
      background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
      color: #fff;
      text-align: center;
      overflow-x: hidden;
    }
    header {
      padding: 3rem 1rem;
      animation: fadeIn 2s ease-in-out;
    }
    header img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 4px solid #fff;
      box-shadow: 0 0 20px rgba(255,255,255,0.3);
      animation: float 4s ease-in-out infinite;
    }
    header h1 {
      margin-top: 1rem;
      font-size: 2rem;
    }
    header p {
      font-size: 1rem;
      opacity: 0.8;
    }
    section {
      padding: 2rem 1rem;
      max-width: 800px;
      margin: auto;
    }
    .links a {
      display: inline-block;
      margin: 1rem;
      padding: 0.8rem 1.2rem;
      border-radius: 8px;
      text-decoration: none;
      color: #fff;
      background: #e94560;
      transition: transform 0.3s;
    }
    .links a:hover {
      transform: scale(1.1);
      background: #ff2e63;
    }
    .contact {
      background: rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 1rem;
      margin-top: 2rem;
      font-size: 0.9rem;
    }
    /* Chat Box */
    .chatbox {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      background: #fff;
      color: #000;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 15px rgba(0,0,0,0.3);
    }
    .chatbox header {
      background: #0f3460;
      color: #fff;
      padding: 0.5rem;
      font-size: 1rem;
    }
    .messages {
      max-height: 200px;
      overflow-y: auto;
      padding: 0.5rem;
      text-align: left;
      font-size: 0.85rem;
    }
    .input-box {
      display: flex;
      border-top: 1px solid #ccc;
    }
    .input-box input {
      flex: 1;
      border: none;
      padding: 0.5rem;
    }
    .input-box button {
      background: #e94560;
      border: none;
      color: #fff;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes float {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  </style>
</head>
<body>

  <header>
    <img src="https://avatars.githubusercontent.com/u/149763325?v=4" alt="Profile">
    <h1>محمدامین صالحی</h1>
    <p>پژوهشگر، طراح و تحلیلگر چندبعدی</p>
  </header>

  <section>
    <h2>درباره من</h2>
    <p>
      دانشجوی ریاضیات و کاربردها، دانشگاه شهید بهشتی تهران.  
      علاقه‌مند به برنامه‌نویسی پایتون، طراحی سیستم، سناریو و فلوچارت، طراحی لوگو و پوستر، و تایپ حرفه‌ای.  
      فعالیت‌هایم در حوزه‌های فلسفه، روانشناسی، تحلیل رفتار متقابل، مهندسی شرایط و اجتماعی و نویسندگی متون کوتاه متمرکز است.
    </p>

    <div class="links">
      <a href="https://t.me/amin.salehi.lll" target="_blank">تلگرام</a>
      <a href="https://instagram.com/amin.salehi.lll" target="_blank">اینستاگرام</a>
    </div>

    <div class="contact">
      📧 ایمیل: amin.salehi.sec@gmail.com <br>
      📞 تماس: ۰۹۳۳۹۲۹۱۹۳۵ | ۰۹۳۰۹۱۹۲۹۷۵
    </div>
  </section>

  <div class="chatbox">
    <header>پیام مستقیم</header>
    <div class="messages" id="messages"></div>
    <div class="input-box">
      <input type="text" id="msgInput" placeholder="پیام خود را بنویسید...">
      <button onclick="sendMessage()">ارسال</button>
    </div>
  </div>

  <script>
    const messages = document.getElementById("messages");
    const input = document.getElementById("msgInput");

    function sendMessage() {
      if (input.value.trim() !== "") {
        const msg = document.createElement("div");
        msg.textContent = "👤 شما: " + input.value;
        messages.appendChild(msg);
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
      }
    }
  </script>

</body>
</html>
