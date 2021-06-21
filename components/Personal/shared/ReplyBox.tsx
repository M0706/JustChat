
import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
const ReplyBox = ({ children }) => (
    <View style={styles.ReplyBox}>
        {children}
    </View>
)
const styles = StyleSheet.create({
  ReplyBox: {
      backgroundColor: "white",
        borderWidth: 0.1,
        borderColor: '#000',
        elevation: 1,
        shadowOpacity: 1,
        borderRadius: 20,
        marginBottom:0,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'  
    },
})
ReplyBox.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ReplyBox;