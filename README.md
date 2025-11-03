220404053 - Burak Tuğrul Aşık

## 📂 Proje Yapısı

[cite_start]Proje, standart bir Expo yapısı üzerine kurulmuştur ve laboratuvarda istenen şu ana klasörleri içerir[cite: 10]:

* [cite_start]**`/assets`**: Profil kartlarında kullanılan statik resim dosyalarını (örn: `ada.png`) içerir[cite: 86].
* [cite_start]**`/components`**: Yeniden kullanılabilir bileşenlerin saklandığı klasördür[cite: 54].
    * [cite_start]**`ProfileCard.js`**: İsim, rol ve resim `prop`'larını alan, stil verilmiş [cite: 62] [cite_start]ve dokunma etkileşimine [cite: 110] sahip tekil kart bileşenidir.
* **`App.js`**: Ana uygulama bileşenidir. [cite_start]`SafeAreaView` [cite: 29] [cite_start]ve tüm `ProfileCard` bileşenlerini listeleyen bir `ScrollView` [cite: 99] içerir.

## 🚀 Uygulamayı Çalıştırmak İçin Gerekli Talimatlar

[cite_start]Bu projeyi yerel olarak çalıştırmak için aşağıdaki adımları izleyin[cite: 10]:

1.  **Projeyi klonlayın ve dizine gidin:**
    ```bash
    git clone [SİZİN-GİTHUB-REPO-LİNKİNİZ]
    cd ProfileApp
    ```

2.  **Gerekli bağımlılıkları yükleyin:**
    Proje `react-native-safe-area-context` [cite: 27] gibi özel Expo paketleri içermektedir. Tüm bağımlılıkları doğru kurmak için `npx expo install` komutunu çalıştırın:
    ```bash
    npx expo install
    ```
    (Alternatif olarak `npm install` da kullanılabilir)

3.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npx expo start
    ```

4.  **Cihazınızda çalıştırın:**
    Terminalde görünen QR kodu, telefonunuzdaki **Expo Go** uygulaması [cite: 6] ile tarayın. Uygulama otomatik olarak açılacaktır.
