# node01


# Получаем и выводим весь список контакстов в виде таблицы (console.table)
node index.js --action="list"
![alt text](https://github.com/BURZUMANE/node01/blob/master/screenShots/Screen%20Shot%202020-06-21%20at%201.21.18%20PM.png?raw=true)

# Получаем контакт по id
node index.js --action="get" --id=5
![alt text](https://raw.githubusercontent.com/BURZUMANE/node01/master/screenShots/Screen%20Shot%202020-06-21%20at%201.01.24%20PM.png)

# Добавялем контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
![alt text](https://github.com/BURZUMANE/node01/blob/master/screenShots/Screen%20Shot%202020-06-21%20at%201.00.25%20PM.png?raw=true)
# Удаляем контакт
node index.js --action="remove" --id=3
![alt text](https://github.com/BURZUMANE/node01/blob/master/screenShots/Screen%20Shot%202020-06-21%20at%201.01.24%20PM.png?raw=true)
