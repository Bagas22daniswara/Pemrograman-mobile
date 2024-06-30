import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ContactList() {

  const contacts = [
    {
      id: 1,
      name: 'Indra Hermansyah',
      phone: '+62 0856-7326-985',
      imageUri: require('../assets/1.jpg')
    },
    {
      id: 2,
      name: 'Annisa Dwiyanti',
      phone: '+62 8379-1256-738',
      imageUri: require('../assets/2.jpg')
    },
    {
      id: 3,
      name: 'Rahman Alfarizi',
      phone: '+62 8738-8347-345',
      imageUri: require('../assets/3.jpg')
    },
    {
      id: 4,
      name: 'Mira Latifah',
      phone: '+62 8039-4582-236',
      imageUri: require('../assets/4.jpg')
    },
 
  ];

  return (
    <View>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          imageUri={contact.imageUri}
        />
      ))}
    </View>
  );
}

const Contact = (props) => (
  <View style={styles.container}>
    <Image
      style={styles.img}
      source={props.imageUri} 
    />
    <View style={styles.teks}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.telp}>{props.phone}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
});
