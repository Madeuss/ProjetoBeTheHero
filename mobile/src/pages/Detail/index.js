import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = "Olá, APAD, estou entrando em contato pois gostaria de ajudar no caso 'Cadelinha' atropelada com o valor de R$120,00";

    function navigationBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Héroi do caso: Cadelinha atropefodase',
            recipients: ['mateus1two3@gmail.com'],
            body: message,
        })
    }
    
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5511965823661&text=${message}`);
    }


    return (
        <View style={styles.container}>
           <View style={styles.header}>
              <Image source={logoImg} />
  
              <TouchableOpacity onPress={navigationBack}>
                 <Feather name="arrow-left" size={28} color="#E02041" />
              </TouchableOpacity>
           </View>
  
           <View style={styles.incident}>
              <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
              <Text style={styles.incidentValue}> fodase </Text>
  
              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>fodase</Text>
  
              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={styles.incidentValue}>Fodase</Text>
           </View>
  
           <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
    
                <Text style={styles.heroDescription}>Entre em contato: </Text>
    
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
     );
}