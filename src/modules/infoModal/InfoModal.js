import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { POSTER } from '../../../constants/api';
import MovieMeta from './components/MovieMeta';
import styles from './styles/InfoModal';

const colors = ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.7)', 'rgba(0,0,0,0.4)'];

const InfoModal = ({ movie, close, closeModalInfo, visible }) => (
  <Modal visible={visible} transparent animationType="slide">
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={close} style={styles.closeButton}>
            <FontAwesome name="close" color="#fff" size={50} />
          </TouchableOpacity>
          <Image
            source={{ uri: `${POSTER}/${movie.poster_path}` }}
            style={styles.poster}
          />
          <LinearGradient colors={colors} style={styles.imagesMeta}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>{movie.title}</Text>
            </View>
            <ScrollView style={styles.overviewContainerScroll}>
              <View style={styles.overviewContainer}>
                <Text style={styles.overviewStyle}>{movie.overview}</Text>
              </View>
            </ScrollView>
          </LinearGradient>
        </View>
        <MovieMeta movie={movie} closeModalInfo={closeModalInfo} />
      </View>
    </View>
  </Modal>
);

export default InfoModal;
