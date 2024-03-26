import React, { useState, useEffect } from "react";
import "./App.css"; // Подключаем стили для примера
import CatalogComponents from "./CatalogComponents";

function App() {
  const [contentVisible, setContentVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Стейт для отслеживания загрузки изображения
  const [menuVisible, setMenuVisible] = useState(false); // Стейт для отображения/скрытия бургер-меню

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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
    <div className="w-full h-screen relative flex flex-col items-center justify-center p-10 mt-10">
      {imageLoaded && (
        <>
          <header
            className={`ms:hidden flex justify-between p-5 w-[1200px] mt-[-200px] rounded-[20px] bg-[#67BA75] content ${
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
          <button
            className="ms:block lg:hidden btn2 absolute top-5 right-5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuVisible ? (
              <img src="/icons/close-menu.svg" alt="close menu" />
            ) : (
              <img src="/icons/open-menu.svg" alt="open menu" className="" />
            )}
          </button>
          <nav
            className={`btn ls:hidden ms:block bg-[#67BA75] mt-[-60px] p-4 absolute rounded-l-2xl w-full h-screen right-0 transition-transform transform ${
              menuVisible ? "translate-x-[5%]" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col gap-3 mt-20 text-white items-center justify-between text-center">
              {nav.map((content, index) => (
                <li key={index} className="text-[18px]">
                  {content.title}
                </li>
              ))}
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
            </ul>
          </nav>
        </>
      )}
      <img
        src="/logo.svg"
        className={`absolute w-[500px] h-[500px] image-container ${
          contentVisible ? "image-container-small" : ""
        }`}
        alt="logo"
        onLoad={() => setImageLoaded(true)} // Помечаем, когда изображение загружено
      />
      {imageLoaded && ( // Показываем контент только после загрузки изображения
        <div
          className={`flex flex-col mt-[200px] content ${
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
                required
                placeholder="Ваше имя"
                className="w-full border-b-[1px] border-[#003458] placeholder-[#175783] pl-2 pb-1"
              />
              <input
                type="text"
                required
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
          <CatalogComponents />
        </div>
      )}
    </div>
  );
}

export default App;
