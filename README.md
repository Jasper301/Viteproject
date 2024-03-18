
# Project Title

projekti on healthdiary


## tietokanta kuvaus sekä käyttöliittymän Screenshots

![App Screenshot](https://cdn.discordapp.com/attachments/1206882097143349258/1218945932775788674/image.png?ex=660982dd&is=65f70ddd&hm=e7160d8406ca4d1fd166f1b68d3031e7fe1e628d0c71adc78801db2848a68030&)

![App Screenshot](https://cdn.discordapp.com/attachments/1206882097143349258/1218948027298086934/image.png?ex=660984d0&is=65f70fd0&hm=d806a2a3d1c9dcecd0af42147d625ea4fbd150236ff4949773274f2573960c4b&)

![App Screenshot](https://cdn.discordapp.com/attachments/1206882097143349258/1218948082700652584/image.png?ex=660984dd&is=65f70fdd&hm=e6e8d966f1ec544440366a580f3493186ee8711f4da2bddc01c7e6add66ea1ea&)

![App Screenshot](https://cdn.discordapp.com/attachments/1206882097143349258/1218948512931381278/image.png?ex=66098544&is=65f71044&hm=0b58abd8c7e3298fc749d60cbee8d98549b728870efebe3159726139a8401bb5&)


![App Screenshot](https://cdn.discordapp.com/attachments/1206882097143349258/1218948580971384904/image.png?ex=66098554&is=65f71054&hm=cf9d66751d11857f159a406bb5e8ce158ed9d74733fc1743b8a37665c0a90f3c&)




## ##linkki käytössä olevaan back-end-sovellukseen/APIin linkki API-dokumentaatioon (apidoc)

Käytin Matin esimerkki palvelin backendiä, sillä en julkistanut omaa backendiä.

 https://hyte-server-teacher.northeurope.cloudapp.azure.com/
## listaus ja kuvaus kaikista toiminnallisuuksista, mitä olet toteuttanut

backendiin ei ole tehty mitään muutoksia.


Login-sivu: Tämä sivu tarjoaa käyttäjälle mahdollisuuden kirjautua sisään syöttämällä käyttäjänimen ja salasanan. lisäsin login sivulle myös validoinnit eli käyttäjä jos klikkaa login kun kaikki kentät on tyhjiä niin siitä tulee alertti tai jos salsana tai username on väärin siitä tulee alertti ja kun käyttäjä kirjautuu onnistuneesti sisään siitä tulee alertti. login sivulla on myös "register" josta klikkaamalla pääsee register sivulle tekemään käyttäjän.

Rekisteröintisivu: Tämä sivu mahdollistaa uuden käyttäjätilin luomisen syöttämällä tarvittavat tiedot, kuten käyttäjänimi, sähköpostiosoite ja salasana. lisäsin myös tähän sivulle niin että kun käyttäjä rekisteröityy niin hänen userid tallennetaan localstorageen, ja lisäsin tälle rekisteröintisivulle muutamat validoinnit, siten että käyttäjä ei voi rekiseröityä jos käyttäjänimi ei ole 4-20 tai sähköpostiosoite ei ole oikeassa muodossa tai salasana ei ole 8-12

Styling HTML-sivustoja: Tyylitit HTML-sivuja muotoilemalla niitä CSS:llä, tyylitin login sivun kokonaan uudestaan ja lisäsin sinne background kuvan, sekä muokkasin login buttonia ja muokkasin myös username sekä password kohtaa että niissä on reunat ja erottuu selkeesti. Login sivun on myös lisättä varjostusta jotta sivu näyttäisi hienommalta.  home.html sivua on myös tyylitelty jonkin verran. kaikki napit on tyylitetty sekä navbar on uudessa uskossa ja sivulla on myös background kuva. jotta sivustosta välittyisi "healthdiary" kuva. register sivu on tyylitelty aika samanlaiseksi kuin login screen sivu. mutta kiteytettynä niin jokaista sivua tyylitelty aika paljon, varjoja lisätty ja bordereita lisätty eri kohtiin.

Home-sivu (home.html): Tämä sivu toimii pääsivuna, joka näytetään kirjautuneille käyttäjille. jossa käyttäjä voi hakea "käyttäjä tiedot" joka avaa taulukon ja käyttäjä voi painaa "info" nappia josta näkee tiedot dialogissa, samassa taulukossa on myös "delete" nappi josta käyttäjä voi poistaa oman käyttäjänsä mutta ei muiden. Käyttäjä voi myös hakea "hae entries" joka hakee tiedot milloin käyttäjä on luotu ja käyttäjän painon sekä muuta kivaa, mutta valitettavasti tämä dialogi ei enään toimi kun käytin https://hyte-server-teacher.northeurope.cloudapp.azure.com/. Lisäsin myös Update nappulan johon "kirjautunut käyttähjä" voisi päivittää käyttäjänimen sekä email, mutta valitettavasti tämä toiminto ei toiminut ihan loppuun asti, sillä kun painoi "update" nappia niin tuli jokin id errori ettei sellaista id olisi edes tietokannassa, mutta tarkistin tämän ja kyseinen id oli siellä, mutta en vain älynnyt missä vika olisi, joten en saanut sitä toimimaan kunnolla. tältä pääsivulta pääsee myös "info" sivulle klikkaamalla "info" kohtaa nav baarista sekä pääsee takaisin home sivulle klikkaamalla "home" 

Info-sivu (info.html): Tämä sivu sisältää yleistä tietoa sekä yhteystiedot, tältä sivulta pääsee myös pää sivulle painamalla "home" navigaato baarista

Logout-toiminto: toiminto mahdollistaa kirjautuneen käyttäjän kirjautumisen ulos sivustolta. logout nappi toimii sekä info.html välilehdellä, sekä home.html sivustolla ja molemmista se heittää takaisin login screeniin.




## ,mahdolliset bugit/onglemat

bugeja ei tiedossa (en ole kerennyt etsimään.)

onglemat: en saanut update nappi toimimaan valitti userid ettei sitä olisi, mutta tarkistin tietokannasta että se kyseinen userid kenen käyttäjänimeä sekä salasanaa koitin vaihtaa oli siellä. mutta en saanut korajttua sitä, voi olla että siinä on ollut jokin pieni juttu vain mitä en huomannut, alkoi silmät olemaan ristissä jo koodaamisesta :D

## referenssit, käytetyt tutoriaalit, grafiikkakirjastot, tms.


chat gpt käytetty erroreitten kanssa apuna selvittämään erroreita.
