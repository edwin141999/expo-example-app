import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Pressable, StyleSheet, Text, View } from "react-native"

export default function Button({ label, theme, onPress }) {
    if (theme === 'primary') {
        return (
            <View style={[styles.buttonContainer, iconStyle.iconView]}>
                <Pressable style={[styles.button, iconStyle.iconPressable]} onPress={onPress}>
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, iconStyle.iconText]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonIcon: {
        paddingRight: 8
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    }
})

const iconStyle = StyleSheet.create({
    iconView: {
        borderWidth: 4,
        borderColor: "#ffd33d",
        borderRadius: 18
    },
    iconPressable: {
        backgroundColor: "#fff"
    },
    iconText: {
        color: "#25292e"
    }
})