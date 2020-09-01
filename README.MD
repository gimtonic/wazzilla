## Пример построения микросервисов на node с помощью graphql

# Технологии

- Докер
- Express
- Graphql

# Установка

1.  Установить докер и докер-компоус
2.  Настроить переменные окружения для этого
    Создаем файл .env

    ```bash
    cp .env.example .env
    ```

    Настраиваем в этом файле например так

    ```bash
    USERS_DB_URI=mysql://логин:пароль@users-service-db/db?charset=UTF8

    NOTES_DB_URI=mysql://логин:пароль@notes-service-db/db?charset=UTF8
    TEST_DB_URI=mysql://логин:пароль@127.0.0.1:8203/db?charset=UTF8

    USERS_SERVICE_URI=http://users-service:8101
    NOTES_SERVICE_URI=http://notes-service:8100
    MYSQL_ROOT_PASSWORD=пароль
    MYSQL_DATABASE=db
    USER_SESSION_EXPIRY_HOURS=1
    LIMIT_NOTES_FOR_PAGE=2

    API_GATEWAY_PORT=8000
    USERS_SERVICE_PORT=8101
    NOTES_SERVICE_PORT=8100

    USERS_SERVICE_DB_PORT=8201
    NOTES_SERVICE_DB_PORT=8200
    TEST_DB_PORT=8203
    TEST_SERVER_PORT=8205

    ```

3.  Дальше создаем контейнеры

    ```bash
    docker-compose up
    ```

# Архитектура

- папка `api-gatway` - шлюз, реализованный на graphQL
- папка `notes-service` - notes сервис на express
- папка `users-service` - users сервис на express

Запуск тестов в соответствующей папке

```bash
yarn test
```

# Поддержка

По вопросам сотрудничества или помощи пишите в ТГ
@gimtonic86
