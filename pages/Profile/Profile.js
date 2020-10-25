import React from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import buttonAdd from '../../assets/buttonAdd.png';
import defaultProfilePic from '../../assets/defaultProfilePic.png';
import editIcon from '../../assets/editIcon.png';
import noDonationsIcon from '../../assets/noDonationsIcon.png';
import styles from './Profile.styles';

const Profile = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.profile}>
      <View style={styles.flexCenter}>
        <Image source={defaultProfilePic} style={styles.defaultProfilePic} />
        <View style={[styles.flexCenter, styles.userInfo]}>
          <Text style={styles.basicDataText}>Andrezinho O+</Text>
          <Image source={editIcon} style={styles.editIcon} />
        </View>
      </View>
      <View style={styles.donationOptions}>
        <Text style={styles.basicDataText}>Órgãos</Text>
        <Text style={styles.basicDataText}>Sangue</Text>
      </View>
    </View>
    <View style={[styles.container, styles.flexCenter]}>
      <Text style={styles.empty}>Você ainda não tem doações cadastradas</Text>
      <Image source={noDonationsIcon} style={styles.noDonationsIcon} />
      <View style={styles.button}>
        <TouchableOpacity>
          <Image style={styles.buttonAdd} source={buttonAdd} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Profile;
