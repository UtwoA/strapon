# strapon.tech

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=000)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/)
[![Static Export](https://img.shields.io/badge/Static%20Export-out%2F-111827)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

Дерзкий личный сайт-перформанс для разработчика. Это не классическое резюме и не аккуратная портфолио-визитка, а сайт с характером, кейсами, доказухой и скрытыми слоями.

## Что внутри

- Манифестный hero-блок
- Реальные кейсы и проекты
- Большой стек по направлениям
- Секретная система команд
- Английский интерфейс с русскими пасхалками
- Статическая сборка для простого хостинга

## Технологии

| Слой | Инструменты | Задача |
| --- | --- | --- |
| App shell | Next.js, React | Страницы, layout, статическая сборка |
| Motion | Framer Motion, GSAP, Lenis | Скролл, появление, микродвижение |
| UI | Tailwind CSS | Сетка, композиция, стили |
| Content | `data/siteContent.js` | Весь текст, локаль и пасхалки |
| Deploy | `out/`, `scripts/deploy.sh` | Экспорт и выкладка на сервер |

Дополнительно:

- Framer Motion
- GSAP
- Lenis
- Tailwind CSS

## Локальный запуск

```bash
npm install
npm run dev
```

Открой `http://localhost:3000`.

## Сборка

```bash
npm run build
```

После сборки получается статический экспорт в `out/`.

## Деплой

Проект собран как static export, поэтому его можно хостить почти где угодно:

- nginx
- caddy
- любой обычный static hosting
- VPS с reverse proxy

Если нужен быстрый вариант, достаточно раздавать содержимое папки `out/`.

## Структура

- `app/` - приложение Next.js и layout
- `components/site/` - секции и UI-слои сайта
- `data/siteContent.js` - весь текст и контент
- `scripts/deploy.sh` - helper для выкладки релиза
- `out/` - результат production-сборки

## Заметки

- Основной публичный домен сейчас `strapon.tech`
- Русский язык оставлен как скрытая пасхалка
- Визуальная подача специально сделана агрессивной и не-официальной
- Репозиторий собран как public-facing showcase, а не как корпоративный шаблон
