const Phonebook = require("./contacts");
const argv = require("yargs").argv;
const myBook = new Phonebook();

// TODO: рефакторить
function invokeAction({ action, name, email, phone, id }) {
  switch (action) {
    case "list":
      myBook.showContacts();
      break;
    case "get":
      myBook.getContactById(id);
      break;
    case "remove":
      myBook.removeContact(id);
      break;
    case "add":
      // ... name email phone
      myBook.addContact(name, email, phone);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
