const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

module.exports = class PhoneBook {
  constructor() {
    this.contactsPath = path.join(__dirname, "/db", "contacts.json");
  }
  listContacts = async () => {
    const data = await fs.readFile(this.contactsPath, "utf8", (err, data) => {
      if (err) throw err;
      return data;
    });
    return JSON.parse(data);
  };
  showContacts = async () => {
    console.log("Contacts");
    console.log("----------------");
    const contacts = await this.listContacts();
    contacts.forEach(item => {
      console.log("-----------------------------");
      console.log("name:");
      console.log(`${item.name}`);
      console.log("number:");
      console.log(`${item.phone}`);
      console.log("email:");
      console.log(`${item.email}`);
      console.log("id:");
      console.log(`${item.id}`);
      console.log("----------------------------");
    });
  };
  getContactById = async contactId => {
    const contacts = await this.listContacts();
    const contactById = contacts.find(item => item.id === contactId);
    console.log("name:");
    console.log(`${contactById.name}`);
    console.log("number:");
    console.log(`${contactById.phone}`);
    console.log("email:");
    console.log(`${contactById.email}`);
    console.log("id:");
    console.log(`${contactById.id}`);
    return contactById;
  };
  removeContact = async contactId => {
    const contacts = await this.listContacts();
    const filteredContacts = contacts.filter(item => item.id !== contactId);
    await fs.writeFile(
      path.join(__dirname, "/db", "contacts.json"),
      JSON.stringify(filteredContacts),
      {},
      err => {
        if (err) throw err;
        console.log("file created...");
      },
    );
  };
  addContact = async (name, email, phone) => {
    const id = shortid.generate();
    const contact = { name, email, phone, id };
    const contacts = await this.listContacts();
    contacts.push(contact);
    await fs.writeFile(
      path.join(__dirname, "/db", "contacts.json"),
      JSON.stringify(contacts),
      {},
      err => {
        if (err) throw err;
        console.log("file created...");
      },
    );
  };
};
// Path to the contacts.json on the file sytem
// const contactsPath = path.join(__dirname, "/db", "contacts.json");

// module.exports = {
//   // Extraction of the file with in uttf8
//   listContacts: () => {
//     fs.readFile(contactsPath, "utf8", (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     });
//   },
//   getContactById(contactId) {
//     // ...твой код
//   },
// };
