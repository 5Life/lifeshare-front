import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

import buttonAdd from '../../assets/buttonAdd.png';
import defaultProfilePic from '../../assets/defaultProfilePic.png';
import editIcon from '../../assets/editIcon.png';
import noDonationsIcon from '../../assets/noDonationsIcon.png';
import bloodDonation from '../../assets/bloodDonation.png';
import organDonation from '../../assets/organDonation.png';
import styles from './Profile.styles';
import profileApi from './api/profile';

const ListItem = ({ item, onPress }) => {
  const { type, location, date, organ } = item;
  const typeLabel = type === 'blood' ? 'Sangue' : organ;

  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.listItem}>
        <Image
          source={type === 'blood' ? bloodDonation : organDonation}
          style={styles.donationIcon}
        />
        <View style={styles.donationInfo}>
          <View>
            <Text style={styles.listItemLabel}>Doação</Text>
            <Text style={styles.itemType}>{typeLabel}</Text>
          </View>
          <View>
            <Text style={styles.itemLocation}>{location}</Text>
            <Text style={styles.itemDate}>{date}</Text>
          </View>
        </View>
      </View>
      <Divider style={styles.divider} />
    </TouchableOpacity>
  );
};

const Profile = ({ navigation, route }) => {
  const { name, bloodGroup } = route.user;
  const [donations, setDonations] = useState([]);

  const handleAddDonation = () => {
    navigation.navigate('Adicionar Doação');
  };

  const handleItemPress = (item) => {
    navigation.navigate('Editar Doação', { donationItem: item });
  };

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const { data } = await profileApi.getDonations();
        setDonations(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDonations();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.flexCenter}>
          <Image source={defaultProfilePic} style={styles.defaultProfilePic} />
          <View style={[styles.flexCenter, styles.userInfo]}>
            <Text style={styles.basicDataText}>
              {name} {bloodGroup}
            </Text>
            <Image source={editIcon} style={styles.editIcon} />
          </View>
        </View>
        <View style={styles.donationOptions}>
          <Text style={styles.basicDataText}>Órgãos</Text>
          <Text style={styles.basicDataText}>Sangue</Text>
        </View>
      </View>
      <View style={[styles.container, styles.flexCenter]}>
        {!donations.length ? (
          <>
            <Text style={styles.empty}>
              Você ainda não tem doações cadastradas
            </Text>
            <Image source={noDonationsIcon} style={styles.noDonationsIcon} />
          </>
        ) : (
          <FlatList
            data={donations}
            renderItem={({ item }) => (
              <ListItem item={item} onPress={handleItemPress} />
            )}
            style={styles.flatList}
          />
        )}
        <View style={styles.button}>
          <TouchableOpacity onPress={handleAddDonation}>
            <Image style={styles.buttonAdd} source={buttonAdd} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
