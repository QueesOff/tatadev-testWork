import React, { useState, useEffect } from "react";
import "./App.css"; // Подключаем стили для примера

function App() {
  const [contentVisible, setContentVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Стейт для отслеживания загрузки изображения

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 20); // Имитируем задержку в 2 секунды перед появлением контента

    return () => clearTimeout(timer);
  }, []);

  const iconsLeft = [
    { src: "/icons/tel.svg", alt: "telephone icon" },
    { src: "/icons/geo.svg", alt: "location icon" },
    { src: "/icons/email.svg", alt: "email icon" },
  ];

  const iconsRight = [
    { src: "/icons/instagram.svg", alt: "instagram icon" },
    { src: "/icons/watsapp.svg", alt: "watsapp icon" },
    { src: "/icons/telegram.svg", alt: "telegram icon" },
  ];

  const nav = [
    { title: "Заказать уборку" },
    { title: "Услуги" },
    { title: "О нас" },
    { title: "Отзывы" },
    { title: "Контакты" },
  ];

  return (
    <div className="w-full h-screen relative flex items-center justify-center">
      <div
        className={`absolute image-container ${
          contentVisible ? "image-container-small" : ""
        }`}
      >
        <img
          src="/logo.svg"
          className="w-[500px] h-[500px]"
          alt="logo"
          onLoad={() => setImageLoaded(true)} // Помечаем, когда изображение загружено
        />
      </div>
      {imageLoaded && ( // Показываем контент только после загрузки изображения
        <div
          className={`flex flex-col content ${
            contentVisible ? "contentVisible" : ""
          }`}
        >
          <header className="flex justify-between p-5 w-[1200px] rounded-[20px] bg-[#67BA75]">
            <div className="flex gap-3">
              {iconsLeft.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  className="w-[32px] h-[32px] rounded-lg bg-white p-2"
                />
              ))}
            </div>
            <ul className="flex gap-5">
              {nav.map((content, index) => (
                <li key={index} className="text-white text-[18px]">
                  {content.title}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              {iconsRight.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  className="w-[32px] h-[32px] rounded-lg bg-white p-2"
                />
              ))}
            </div>
          </header>
          <h1 className="text-[#003458] text-[30px] font-bold text-center">
            Чистый мир – Ваш путь <br /> к идеальной чистоте и комфорту!
          </h1>
          <form
            action=""
            className="flex w-[337px] gap-5 flex-col items-center text-[#003458] "
          >
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full border-b-[1px] border-[#003458] placeholder-[#175783]"
            />
            <input
              type="text"
              placeholder="Ваш номер телефона или WhatsApp"
              className="w-full border-b-[1px] border-[#003458] placeholder-[#175783]"
            />
            <button
              type="button"
              className="w-full bg-[#67BA75] rounded-[20px] text-center p-2"
            >
              Заказать уборку
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
