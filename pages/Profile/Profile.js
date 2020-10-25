import React from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import buttonAdd from '../../assets/buttonAdd.png';
import defaultProfilePic from '../../assets/defaultProfilePic.png';
import editIcon from '../../assets/editIcon.png';
import noDonationsIcon from '../../assets/noDonationsIcon.png';
import styles from './Profile.styles';

const Profile = ({ navigation }) => (
  <View style={[styles.main, styles.container]}>
    <View style={[styles.main, styles.container, styles.profile]}>
      <View style={styles.main}>
        <Image
          source={defaultProfilePic}
          style={{ minHeight: 150, minWidth: 150, margin: 10 }}
        />
        <View style={[styles.main, styles.row]}>
          <Text style={styles.data}>Andrezinho</Text>
          <Text style={styles.data}> O+</Text>
          <Image
            source={editIcon}
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        </View>
      </View>
      <View style={styles.basicData}>
        <Text style={styles.data}>Órgãos</Text>
        <Text style={styles.data}>Sangue</Text>
      </View>
    </View>
    <View style={[styles.main, styles.container]}>
      <Text style={styles.empty}>Você ainda não tem doações cadastradas</Text>
      <Image
        source={noDonationsIcon}
        style={{ minHeight: 80, minWidth: 80, marginTop: 10 }}
      />
      <View style={styles.button}>
        <TouchableOpacity>
          <Image style={{ width: 45, height: 45 }} source={buttonAdd} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Profile;
