Aloitin testaamisen tekemällä sivustolle responsiivisuustestin käyttämällä simuloituja käyttöliittymiä WebPageTest.com nimisen sivun avulla. ![image](https://github.com/user-attachments/assets/3084af82-2211-41d2-a6c6-3bc1b43f8dee)

Seuraavaksi latasin sivun itse omalla MacBook Pro M1 tietokoneella ensin käyttäen Safari-selainta testatakseni eri selainten toimivuutta, sitten pääselaimellani Microsoft Edgellä ja lopuksi vielä Chromen avulla. Kaksi näistä selaimista ovat Chromium-pohjaisia, joten eroja ei minkään selaimen välillä ollut niinkään paljoa, että niistä tarvitsisi erikseen mainita, mutta liitin silti kuvat niistä alle.

Microsoft Edge:
![image](https://github.com/user-attachments/assets/c0c9906c-63fe-4e46-897a-a31c731de554)

Sivu latautui noin kahdessa sekunnissa, joista suurimman osan vei Googlen Firebase-API:n kutsuminen autentikointia varten. Käytössäni ei tällä hetkellä ole Windows-pohjaista konetta, joten en pysty sen toimivuutta testaamaan, mutta kehityksen aikana en huomannut isompia ongelmia kun troubleshoottasimme kaverin kanssa sivuston toimivuutta.

Safari:
![image](https://github.com/user-attachments/assets/b0f726e7-8ff2-4666-a240-4310803ab23d)

Sivusto latautui taas odotetusti hyvin, alle liitin vielä kuvan iPhonen Safari-selaimella tehdystä testistä.
![image](https://github.com/user-attachments/assets/a390db54-182d-4987-8b03-30ec278cd20c)

Alla vielä kuva simuloidusta testiympäristöstä jonka serveri sijaitsee USA:n osavaltiossa, joka osaa hyvin mitata eri päätelaitteiden mahdollisia reunatapauksia.
![image](https://github.com/user-attachments/assets/248d633e-d97a-4d58-b110-9773930676d8)

Kaiken kaikkiaan sivusto toimii hyvin. Pieniä optimisaatioita skriptien kutsumiseen olisi voinut tehdä, esimerkiksi RestAPI-implementaatiossa. RestAPI kutsu itseasiassa menee ystäväni HTTPS-suojatun serverin läpi, joka kutsuu sen oikean APIn ja vastaus peilataan ystäväni serveriltä omalle sivustolleni, sillä huomasin vasta sivuston rakentamisen lopussa, että tämä kyseinen API toimii HTTP, pohjalla, eikä HTTPS, jolloin GitHub-Pages ja selaimet eivät suostu suorittamaan komentoja, jotka eivät ole tarpeeksi huolellisesti suojattu. Saimme sen kuitenkin lopuksi toimimaan tällä pienellä "Proxy" säätämisellä. Ratkaisu ei ole kaunis ja se maksaa luultavasti parikymmentä millisekuntia, mutta se toimii!
