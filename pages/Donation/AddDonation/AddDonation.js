import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from './AddDonation.styles';
import donationApi from '../api/donation';

const AddDonation = ({ navigation }) => {
  const [checked, setChecked] = useState('blood');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [organ, setOrgan] = useState('');

  const handleAddDonation = async () => {
    try {
      await donationApi.addDonation({
        type: checked,
        location,
        date,
        organ,
      });
    } catch (error) {
      navigation.navigate('Modal', {
        errorMessage: 'Erro ao adicionar doação.',
      });
    }
  };

  useEffect(() => {
    setOrgan('');
  }, [checked]);

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
            <TextInput style={styles.input} onChangeText={setOrgan} />
          </View>
        )}
        <View style={styles.donationInput}>
          <Text>Local *</Text>
          <TextInput style={styles.input} onChangeText={setLocation} />
        </View>
        <View>
          <Text>Data *</Text>
          <TextInput style={styles.input} onChangeText={setDate} />
        </View>
      </View>
      <Button title="ADICIONAR" color="#E84C0E" onPress={handleAddDonation} />
    </View>
  );
};

export default AddDonation;
