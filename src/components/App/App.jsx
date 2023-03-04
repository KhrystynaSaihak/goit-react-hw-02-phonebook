import React from 'react';
import { Component } from 'react';
import uuid from 'react-uuid';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Section } from 'components/Section/Section';
import { DataInputForm } from 'components/DataInputForm/DataInputForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  compareContacts = nameVal => {
    const matches = this.state.contacts.find(
      ({ name }) => !nameVal.toLowerCase().localeCompare(name.toLowerCase())
    );
    return matches ? matches : null;
  };

  filterContacts = () => {
    const matches = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return matches;
  };

  submitName = ({ name, number, filter }, actions) => {
    const matches = this.compareContacts(name);
    if (matches) {
      NotificationManager.warning(
        'Сontact with name ' + matches.name + ' already saved'
      );
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name,
          number,
          filter,
          id: uuid().toString(),
        },
      ],
    }));
    actions.resetForm();
  };

  deleteName = deletedId => {
    const newContactsList = this.state.contacts.filter(
      ({ id }) => deletedId !== id
    );
    this.setState({ contacts: newContactsList });
  };

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  render() {
    // const { contacts, filter } = this.state;
    const filtredContacts = this.filterContacts();
    return (
      <>
        <Section title="Phonebook">
          <DataInputForm onSubmit={this.submitName}></DataInputForm>
        </Section>

        <Section title="Contacts">
          <Filter handleChange={this.handleChange}></Filter>
          <Contacts
            contactList={filtredContacts}
            deleteName={this.deleteName}
          ></Contacts>
        </Section>
        <NotificationContainer />
      </>
    );
  }
}
