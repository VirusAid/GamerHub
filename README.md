
# GamerHub - Социальная сеть для геймеров

## Описание проекта
GamerHub - это социальная платформа для геймеров, где пользователи могут общаться, делиться игровыми достижениями, создавать группы по интересам и находить новых друзей для совместной игры.

## Основные функции
- 🎮 Профили пользователей с игровой статистикой
- 👥 Система друзей и групп
- 📝 Публикация постов с поддержкой медиаконтента
- 🏆 Система достижений
- 💬 Чат между пользователями
- 🔔 Система уведомлений
- 📅 Организация игровых событий

## Технологический стек
### Backend
- Node.js
- Express.js
- MongoDB
- Socket.IO
- JWT для аутентификации

### Frontend
- React.js
- Material-UI
- Redux для управления состоянием
- React Router для маршрутизации
- Axios для HTTP-запросов

## Установка и запуск

### Требования
- Node.js (версия 14+)
- MongoDB
- npm или yarn

### Установка

1. Клонируйте репозиторий:
bash
git clone https://github.com/your-username/gamerhub.git
cd gamerhub
2. Установите зависимости для сервера:
bash
cd server
npm install

3. Установите зависимости для клиента:
bash
cd ../client
npm install

4. Создайте файл .env в папке server:
env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000

### Запуск проекта

1. Запуск сервера:
bash
cd server
npm run dev

2. Запуск клиента:
bash
cd client
npm start
