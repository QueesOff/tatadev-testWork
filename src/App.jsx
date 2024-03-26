import React, { useState, useEffect } from "react";
import "./App.css"; // Подключаем стили для примера

function App() {
  const [contentVisible, setContentVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Стейт для отслеживания загрузки изображения

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 2000); // Имитируем задержку в 2 секунды перед появлением контента

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
    <div className="w-full h-screen relative flex flex-col gap-[200px] items-center justify-center p-10 mt-10">
      {imageLoaded && (
        <header
          className={`flex justify-between p-5 w-[1200px] mt-[-200px] rounded-[20px] bg-[#67BA75] content ${
            contentVisible ? "contentVisible" : ""
          }`}
        >
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
      )}
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
          className={` flex flex-col content ${
            contentVisible ? "contentVisible" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#003458] mb-[30px] text-[30px] font-bold text-center">
              Чистый мир – Ваш путь <br /> к идеальной чистоте и комфорту!
            </h1>
            <form
              action=""
              className="flex w-[337px] gap-6 flex-col items-center text-[#003458]"
            >
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border-b-[1px] border-[#003458] placeholder-[#175783] pl-2 pb-1"
              />
              <input
                type="text"
                placeholder="Ваш номер телефона или WhatsApp"
                className="w-full border-b-[1px] border-[#003458] placeholder-[#175783] pl-2 pb-1"
              />
              <button
                type="button"
                className="w-full bg-[#67BA75] rounded-[20px] text-center p-4 text-white mt-3"
              >
                Заказать уборку
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
