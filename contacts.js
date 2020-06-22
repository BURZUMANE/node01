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
    const contacts = await this.listContacts();
    console.table(contacts);
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
      JSON.stringify(filteredContacts, null, 2),
      {},
      err => {
        if (err) throw err;
      },
    );
    console.log("file deleted...");
  };
  addContact = async (name, email, phone) => {
    const id = shortid.generate();
    const contact = { name, email, phone, id };
    const contacts = await this.listContacts();
    contacts.push(contact);
    await fs.writeFile(
      path.join(__dirname, "/db", "contacts.json"),
      JSON.stringify(contacts, null, 2),
      {},
      err => {
        if (err) throw err;
      },
    );
    console.log("file created...");
  };
};
