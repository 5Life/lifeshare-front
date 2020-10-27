import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from './EditDonation.styles';
import donationApi from '../api/donation';

const EditDonation = ({ navigation, route }) => {
  const {
    params: {
      donationItem: {
        type: originalType,
        location: originalLocation,
        date: originalDate,
        organ: originalOrgan,
      },
    },
  } = route;

  const [checked, setChecked] = useState(originalType);
  const [location, setLocation] = useState(originalLocation);
  const [date, setDate] = useState(originalDate);
  const [organ, setOrgan] = useState(originalOrgan);

  const handleEditDonation = async () => {
    try {
      await donationApi.editDonation({
        type: checked,
        location,
        date,
        organ: checked === 'blood' ? '' : organ,
      });
      navigation.navigate('Dados Pessoais');
    } catch (error) {
      navigation.navigate('Modal', { errorMessage: 'Erro ao salvar.' });
    }
  };

  const handleDeleteDonation = async () => {
    try {
      await donationApi.deleteDonation({
        type: originalType,
        location: originalLocation,
        date: originalDate,
        organ: originalOrgan,
      });
      navigation.navigate('Dados Pessoais');
    } catch (error) {
      navigation.navigate('Modal', {
        errorMessage: 'Erro ao deletar.',
      });
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Qual foi a doação de hoje?</Text>
      <View style={styles.donations}>
        <Text style={styles.donationOption}>
          <RadioButton
            value="organ"
            status={checked === 'organ' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('organ')}
          />
          Órgão
        </Text>
        <Text style={styles.donationOption}>
          <RadioButton
            value="blood"
            status={checked === 'blood' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('blood')}
          />
          Sangue
        </Text>
      </View>
      <View>
        {checked === 'organ' && (
          <View style={styles.donationInput}>
            <Text>Qual foi o Órgão? *</Text>
            <TextInput
              style={styles.input}
              onChangeText={setOrgan}
              value={organ}
            />
          </View>
        )}
        <View style={styles.donationInput}>
          <Text>Local *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLocation}
            value={location}
          />
        </View>
        <View>
          <Text>Data *</Text>
          <TextInput style={styles.input} onChangeText={setDate} value={date} />
        </View>
      </View>
      <Button
        title="DELETAR"
        color="#ccc"
        onPress={handleDeleteDonation}
        style={styles.deleteButton}
      />
      <Button title="SALVAR" color="#E84C0E" onPress={handleEditDonation} />
    </View>
  );
};

export default EditDonation;
