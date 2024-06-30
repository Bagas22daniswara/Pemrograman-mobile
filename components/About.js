import React from 'react'
import {Text, View, Stylesheet, Button } from 'react-native';
const About =({navigation}) => {
return(
    <View>
      <Text>"Selamat datang di Aplikasi Daftar Kontak Teman! Kami hadir dengan tujuan memudahkan Anda dalam mengelola dan menjaga hubungan dengan teman-teman terdekat Anda. Dengan fitur-fitur canggih kami, Anda dapat dengan mudah menyimpan, mengatur, dan mengakses informasi kontak secara efisien. Kami berkomitmen untuk menyediakan pengalaman pengguna yang intuitif dan berdaya guna, sehingga setiap percakapan dan pertemuan dengan teman-teman Anda menjadi lebih berarti. Terima kasih telah memilih kami sebagai aplikasi pendukung jaringan sosial Anda. Bersama-sama, mari kita bangun komunitas yang lebih terhubung dan lebih kuat!"</Text>
      <Button title="Go back"  onPress={()=>navigation.goback()}/>
    </View>
);
};
export default About;
