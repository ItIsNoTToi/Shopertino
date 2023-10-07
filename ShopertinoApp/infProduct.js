// import PushNotification from 'react-native-push-notification';

// // Cấu hình
// PushNotification.configure({
//   // Cấu hình khác ở đây
// });

// // Hiển thị thông báo
// PushNotification.localNotification({
//   title: 'Thông báo',
//   message: 'Chào mừng bạn đến với ứng dụng của chúng tôi!',
// });

// // Xử lý sự kiện khi người dùng nhấn vào thông báo
// PushNotification.addEventListener('notification', function (notification) {
//   // Xử lý thông báo ở đây
// });
import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";

const infProduct = () =>
{
    return (
        <ScrollView>
            <View>
                <Text>infProduct</Text>
            </View>
        </ScrollView>
    );
}
export default infProduct;