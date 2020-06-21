# node01


# Получаем и выводим весь список контакстов в виде таблицы (console.table)
node index.js --action="list"
![alt text](https://raw.githubusercontent.com/BURZUMANE/node01/master/screenShots/Screen%20Shot%202020-06-21%20at%201.00.25%20PM.png)

# Получаем контакт по id
node index.js --action="get" --id=5

# Добавялем контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

# Удаляем контакт
node index.js --action="remove" --id=3
