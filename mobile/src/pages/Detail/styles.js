import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20, 
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 48,
        backgroundColor: '#FFF',
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        marginTop: 24,
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },

    contactBox: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#FFF',
    },
    
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 15,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 45,
        width: '47%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
});