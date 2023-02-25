import React from 'react';
import { Component } from 'react';
import uuid from 'react-uuid';

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

  submitName = ({ name, number, filter }, actions) => {
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

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <DataInputForm onSubmit={this.submitName}></DataInputForm>
        </Section>

        <Section title="Contacts">
          <Filter handleChange={this.handleChange}></Filter>
          <Contacts contactList={contacts} query={filter}></Contacts>
        </Section>
      </>
    );
  }
}
