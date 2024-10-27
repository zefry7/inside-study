# Используйте Node.js в качестве базового образа
FROM node:12

# Установите рабочую директорию в контейнере
WORKDIR /app

# Скопируйте файлы package.json и package-lock.json в контейнер
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте все файлы проекта в контейнер
COPY . .

# # Запустите сборку проекта через Webpack
# RUN npm run build

# Указать порт, который будет прослушивать контейнер
EXPOSE 80

# Запустить приложение
CMD ["npm", "start"]