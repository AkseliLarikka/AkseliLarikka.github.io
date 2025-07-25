// --- TIETOKANTA ---
// Kaikki reseptit tallennetaan tähän JavaScript-objektien listaan.
const recipes = [
    {
        id: "nyhtopossu",
        title: "Nyhtöpossu",
        tags: [
            "Pääruoat",
            "Liharuoat",
            "Possu",
            "Uuniruoka",
            "Juhlat",
            "Suolainen",
        ],
        ingredients: [
            {
                heading: null,
                items: ["n. 1 kg:n painoinen pala porsaan niskaa", "suolaa"],
            },
            {
                heading: "Mausteliemi:",
                items: [
                    "3 rkl tomaattipyreetä",
                    "½ l kolajuomaa (ei light)",
                    "1 dl lihalientä",
                    "2 rkl chilitahnaa",
                    "1 tl kanelia",
                    "1 rkl korianterinsiemeniä",
                    "2 tl suolaa",
                    "4 sipulia",
                    "8 valkosipulinkynttä",
                ],
            },
        ],
        instructions: [
            "Ota possu huoneenlämpöön.",
            "Hiero sen pintaan suolaa ja anna lämmetä työpöydällä pari tuntia ennen uuniin laittamista.",
            "Sekoita mausteliemen aineet ja kaada ne pataan. Lisää pataan myös ronskisti leikatut sipulit ja valkosipulit. Upota possu liemeen.",
            "Kuumenna uuni 200 asteeseen.",
            "Kuumenna pata levyllä kiehuvaksi. Nosta kuuma pata uuniin.",
            "Pidä pataa 200-asteessa noin puoli tuntia ja laske lämpötila 120 asteeseen.",
            "Pidä pataa uunissa noin neljä tuntia tai kunnes liha on ylikypsää.",
            "Valele lihan pintaa välillä liemellä, jos se ei uppoa nesteeseen.",
            "<strong>Vinkki:</strong>",
            "Ei vaadi vahtimista, jos kansi on päällä ja liha on suurimmaksi osaksi nesteen alla.",
            "Colaliemi kiehuu kasaan ja karamellisoituu uunissa.",
            "Revi ylikypsä liha säikeiksi ja sekoita kastikkeeseen.",
            "Tarjoile valmis liha salaatin kanssa tai hampurilaisten tai hodarien välissä.",
        ],
        macros: {
            servingSizeInfo: "Koko reseptin arvioidaan tuottavan noin 8 annosta.",
            per100g: {
                calories: "195 kcal",
                protein: "14 g",
                carbs: "8 g",
                fat: "11 g",
            },
            perServing: {
                calories: "365 kcal",
                protein: "26 g",
                carbs: "15 g",
                fat: "21 g",
            },
        },
    },
    {
        id: "elektrolyyttijuoma",
        title: "Elektrolyyttijuoma (itse tehty)",
        tags: [
            "Juomat",
            "Urheilu",
            "Itse tehty",
            "Nopea",
            "Palautuminen",
            "Elektrolyytit",
        ],
        ingredients: [
            {
                heading: null,
                items: [
                    "1 litra vettä",
                    "2 keskikokoisen sitruunan mehu (n. 1 dl)",
                    "0,5 tl suolaa (n. 3 g)",
                    "0,5 tl ruokasoodaa (n. 3 g)",
                    "4 rkl sokeria (n. 50-60 g)",
                ],
            },
        ],
        instructions: [
            "Kiehauta vesi esimerkiksi vedenkeittimessä ja kaada se kuumuutta kestävään kannuun.",
            "Lisää veteen sitruunamehu, suola, ruokasooda ja sokeri.",
            "Sekoita huolellisesti, kunnes sokeri ja suola ovat liuenneet nesteeseen kokonaan.",
            "Anna juoman jäähtyä täysin, ensin huoneenlämmössä ja sitten jääkaapissa.",
            "Säilytä valmista juomaa suljetussa astiassa jääkaapissa.",
            "Nauti juoma vuorokauden kuluessa sen valmistamisesta.",
        ],
        macros: {
            servingSizeInfo:
                "Koko resepti tuottaa noin 1,1 litraa juomaa. Yksi annos on 500 ml.",
            per100ml: {
                calories: "21 kcal",
                protein: "< 0.5 g",
                carbs: "5.4 g",
                fat: "0 g",
            },
            perServing: {
                calories: "105 kcal",
                protein: "0.5 g",
                carbs: "27 g",
                fat: "0 g",
            },
        },
    },
    {
        id: "kikhernecurry",
        title: "Kikhernecurry",
        tags: [
            "Pääruoat",
            "Kasvisruoat",
            "Arkiruoka",
            "Helppo",
            "Nopea",
            "Intialainen",
            "Vegaaninen",
        ],
        ingredients: [
            {
                heading: "4 annosta",
                items: [
                    "1 (100 g) sipuli",
                    "2 valkosipulinkynttä",
                    "1 rkl öljyä",
                    "1 rkl currytahnaa (esim. Patak's Mild Curry)",
                    "1 tlk (400 g) Pirkka Luomu kookosmaitoa",
                    "1 tlk (380/230 g) Pirkka kikherneitä suolaliemessä",
                    "1 tlk (500 g) Pirkka paseerattua tomaattia",
                    "1 tl suolaa",
                    "1/2 tl mustapippuria",
                ],
            },
        ],
        instructions: [
            "Kuori ja hienonna sipuli ja valkosipulinkynnet.",
            "Kuumenna öljy paistokasarissa. Kuullota sipulia ja valkosipulia muutama minuutti.",
            "Lisää currytahna ja kuullota vielä hetki.",
            "Lisää kasariin kookosmaito, valutetut kikherneet ja paseerattu tomaatti.",
            "Kuumenna kiehuvaksi ja keitä miedolla lämmöllä ilman kantta noin 10 minuuttia. Mausta suolalla ja mustapippurilla.",
            "Tarjoa kikhernecurry keitetyn riisin kanssa.",
        ],
        macros: {
            servingSizeInfo: "Resepti on neljälle. Yksi annos on n. 320 g.",
            per100g: {
                calories: "96 kcal",
                protein: "3.1 g",
                carbs: "6.2 g",
                fat: "6.2 g",
            },
            perServing: {
                calories: "308 kcal",
                protein: "10 g",
                carbs: "20 g",
                fat: "20 g",
            },
        },
    },
    {
        id: "mac-and-cheese",
        title: "Mac & Cheese pekonilla",
        tags: ["Pääruoat", "Pastat", "Possu", "Arkiruoka", "Helppo", "Suolainen"],
        ingredients: [
            {
                heading: "3-4 annosta",
                items: [
                    "300g pastaa/makaronia",
                    "150-200g pekonia",
                    "200-300g cheddar-sulatejuustoa",
                ],
            },
        ],
        instructions: [
            "Keitä pasta suolalla maustetussa vedessä pakkauksen ohjeen mukaan.",
            "Paista pekonit kuivalla pannulla rapeiksi.",
            "Nosta pekonit talouspaperin päälle, jotta ylimääräinen rasva imeytyy paperiin.",
            "Valuta pasta ja laita takaisin kattilaan.",
            "Kaada joukkoon sulatejuusto.",
            "Sekoita, tarvittaessa kuumenna miedolla lämmöllä kunnes juusto on sulanut.",
            "Murenna pekonit pastan joukkoon.",
            "Tarjoile heti.",
        ],
        macros: {
            servingSizeInfo:
                "Reseptissä mainittu annoskoko on 4 annosta. Laskelmissa on käytetty 175g pekonia ja 250g juustoa.",
            per100g: {
                calories: "355 kcal",
                protein: "16 g",
                carbs: "30 g",
                fat: "19 g",
            },
            perServing: {
                calories: "665 kcal",
                protein: "30 g",
                carbs: "56 g",
                fat: "36 g",
            },
        },
    },
    {
        id: "lihapullat",
        title: "Kaunottaren ja kulkurin lihapullat",
        tags: [
            "Pääruoat",
            "Liharuoat",
            "Jauheliha",
            "Pastat",
            "Arkiruoka",
            "Suolainen",
        ],
        ingredients: [
            {
                heading: "Lihapullat:",
                items: [
                    "700g jauhelihaa",
                    "1/2 sipuli hienonnettuna",
                    "2 kananmunaa",
                    "1/3 dl vettä",
                    "1/2 dl korppujauhoja",
                    "1/2 tl jauhettua maustepippuria",
                    "1/3 tl valkopippuria",
                    "1/2 tl juustokuminaa",
                    "1/2 tl savupaprikajauhetta",
                    "1 tl suolaa",
                ],
            },
            {
                heading: "Kastike:",
                items: [
                    "1 rkl oliiviöljyä",
                    "1/2 sipuli hienonnettuna",
                    "2-3 valkosipulin kynttä hienonnettuna",
                    "1 tölkki tomaattimurskaa",
                    "2 kanaliemikuutiota",
                    "1 prk ruokakermaa",
                    "1/3 tl juustokuminaa",
                    "1/3 tl savupaprikaa",
                    "1 tl Pizza-yrttisekoitusta (kuiva)",
                    "1/3 tl mustapippurirouhetta",
                    "Suolaa (tarvittaessa)",
                    "Hyppysellinen sokeria (noin 1/3tl)",
                    "8 tippaa omenaviinietikkaa",
                ],
            },
        ],
        instructions: [
            "Tarjoile spagetin kanssa. Keitä spagetti pakkauksen ohjeen mukaan.",
            "<strong>Lihapullat:</strong>",
            "Sekoita kaikki ainekset keskenään ja pyörittele massasta lihapullia. Paista uunin keski-/yläosassa 225 asteessa noin 20 minuuttia.",
            "<strong>Kastike:</strong>",
            "Hienonna sipulit ja kuullota ne oliiviöljyssä kattilassa.",
            "Lisää tomaattimurska, mausteet, kanaliemikuutiot ja ruokakerma.",
            "Keitä hellästi poreillen 5 minuuttia.",
            "Lisää sokeri ja omenaviinietikka. Sokeri ja etikka tasapainottavat ja yhdistävät maut.",
            "Yhdistä valmiit lihapullat ja kastike. Tarjoile spagetin kera.",
        ],
        macros: {
            servingSizeInfo:
                "Laskelma kattaa lihapullat ja kastikkeen, jaettu 5 annokseen (ilman spagettia).",
            per100g: {
                calories: "180 kcal",
                protein: "14 g",
                carbs: "4 g",
                fat: "12 g",
            },
            perServing: {
                calories: "558 kcal",
                protein: "43 g",
                carbs: "12 g",
                fat: "37 g",
            },
        },
    },
    {
        id: "snickers-kakku",
        title: "Snickers-juustokakku",
        tags: ["Jälkiruoat", "Leivonnaiset", "Kakut", "Juhlat", "Makea"],
        ingredients: [
            {
                heading: "Pohja (24cm vuoka)",
                items: ["300g Bastogne-keksiä", "100g voita"],
            },
            {
                heading: "Täyte",
                items: [
                    "500g maustamatonta tuorejuustoa",
                    "150g juoksevaa maapähkinävoita",
                    "150g tomusokeria",
                    "3dl kuohukermaa",
                ],
            },
            {
                heading: "Kuorrute",
                items: ["4 kpl Snickers-patukkaa", "1 dl kuohukermaa"],
            },
            { heading: "Koristelu", items: ["1 kpl Snickers-patukka"] },
        ],
        instructions: [
            "Sulata voi ja murskaa Bastogne-keksit. Sekoita yhteen tasaiseksi. Painele seos n. 24cm irtopohjavuoan pohjalle.",
            "Laita tuorejuustot kulhoon, sekaan maapähkinävoi ja tomusokeri. Vatkaa tasaiseksi.",
            "Lisää kuohukerma ja vatkaa tasaiseksi, mutta älä vaahdota kermaa erikseen.",
            "Kaada täyte vuokaan pohjan päälle ja tasoita pinta.",
            "Kuorrutetta varten laita kulhoon 1 dl kermaa ja 4 paloiteltua Snickers-patukkaa. Sulata vesihauteessa tai varovasti mikrossa.",
            "Kaada sula kuorrute täytteen päälle.",
            "Anna hyytyä jääkaapissa vähintään yön yli, mieluiten vuorokausi. (Voit kokeilla nopeuttaa prosessia pakkasessa).",
            "Ennen tarjoilua, raasta tai paloittele viimeinen Snickers-patukka kakun päälle koristeeksi.",
        ],
        macros: {
            servingSizeInfo: "Koko kakku on jaettu 16 annokseen.",
            per100g: {
                calories: "415 kcal",
                protein: "7 g",
                carbs: "30 g",
                fat: "30 g",
            },
            perServing: {
                calories: "520 kcal",
                protein: "9 g",
                carbs: "38 g",
                fat: "37 g",
            },
        },
    },
    {
        id: "kinder-kakku",
        title: "Kinderkakku",
        tags: ["Jälkiruoat", "Leivonnaiset", "Kakut", "Juhlat", "Makea"],
        ingredients: [
            {
                heading: "Pohja (20-22cm vuoka)",
                items: ["200g Oreo-keksejä", "70g voita"],
            },
            {
                heading: "Täyte",
                items: [
                    "2dl vispikermaa",
                    "400g maustamatonta tuorejuustoa",
                    "0.5dl tomusokeria",
                    "200g Kinder Maxi -suklaata",
                ],
            },
            {
                heading: "Kuorrute ja koristelu",
                items: [
                    "100g maitosuklaata",
                    "0.5dl kuohukermaa",
                    "Valkosuklaata raitoihin",
                    "Kermapursotuksia ja Kinder Maxi -suklaata",
                ],
            },
        ],
        instructions: [
            "<strong>Pohja:</strong>",
            "Murskaa keksit hienoksi ja sekoita sulatetun voin kanssa. Painele tiiviisti leivinpaperilla vuoratun irtopohjavuoan (20-22cm) pohjalle ja laita jääkaappiin odottamaan.",
            "<strong>Täyte:</strong>",
            "Sulata Kinder-suklaa ja jätä sivuun jäähtymään hetkeksi. Vatkaa vispikerma lähes valmiiksi vaahdoksi. Lisää joukkoon tuorejuusto ja tomusokeri ja vatkaa sekaisin. Lisää joukkoon sulatettu, hieman jäähtynyt suklaa ja vatkaa nopeasti tasaiseksi.",
            "Kaada juustokakkutäyte pohjan päälle, levitä tasaiseksi ja laita jääkaappiin hyytymään 4-12 tunniksi. Yleensä yön yli on hyvä.",
            "<strong>Kuorrute:</strong>",
            "Rouhi maitosuklaa pieneksi ja laita kulhoon. Kuumenna kuohukerma kattilassa kiehumispisteeseen, kaada se kulhoon suklaarouheen päälle ja anna olla hetki. Sekoita tasaiseksi ganacheksi.",
            "Levitä kuorrute hyytyneen juustokakun päälle. Sulata vähän valkosuklaata ja tee sillä raitoja kuorrutteen päälle. Voit kuvioida raitoja tikulla.",
            "Viimeistele kakku kermapursotuksilla ja Kinder-suklaapaloilla.",
        ],
        macros: {
            servingSizeInfo: "Koko kakku on jaettu 12 annokseen.",
            per100g: {
                calories: "430 kcal",
                protein: "6 g",
                carbs: "28 g",
                fat: "33 g",
            },
            perServing: {
                calories: "495 kcal",
                protein: "7 g",
                carbs: "32 g",
                fat: "38 g",
            },
        },
    },
    {
        id: "kalakukko",
        title: "Kalakukko",
        tags: [
            "Pääruoat",
            "Kalaruoat",
            "Possu",
            "Perinneruoat",
            "Uuniruoka",
            "Suolainen",
        ],
        ingredients: [
            {
                heading: "Kuori",
                items: [
                    "5 dl vettä",
                    "1 dl vehnäjauhoja",
                    "vajaa kilo (950g) ruisjauhoja",
                    "1 dl voisulaa",
                    "1-2 rkl suolaa",
                ],
            },
            {
                heading: "Täyte",
                items: [
                    "1 kg muikkuja (tai muuta pientä kalaa)",
                    "400 g rasvaista siankylkeä (tai pekonia)",
                    "suolaa (jos et käytä pekonia)",
                ],
            },
        ],
        instructions: [
            "Poista muikuista pää ja sisälmykset, kuivaa kalat hyvin talouspaperilla.",
            "<strong>Taikina:</strong>",
            "Sekoita kylmään veteen suola, vehnäjauhot, voisula sekä suurin osa ruisjauhoista. Vaivaa käsin loput ruisjauhot joukkoon. Taikinasta tulee melko kiinteä.",
            "Jätä pieni pala taikinaa sivuun mahdollista paikkausta varten.",
            "Kauli taikina pyöreäksi, reilu sentin paksuiseksi levyksi, joka ohenee reunoja kohti. Tee siitä mieluummin liian iso kuin liian pieni.",
            "<strong>Täyte:</strong>",
            "Ripottele levyn keskelle vähän ruisjauhoja. Lado päälle kerroksittain muikkuja ja siivutettua siankylkeä. Aloita ja lopeta siankyljellä. Ripottele suolaa kalakerrosten väliin (jos käytät suolatonta siankylkeä).",
            "Taita taikinan reunat huolellisesti täytteen päälle ja muotoile kukoksi märillä käsillä ja veistä apuna käyttäen. Tiivistä saumat hyvin.",
            "Käytä valkoista leivinpaperia, sillä ruskea voi palaa pitkän paiston aikana.",
            "Paista kukkoa ensin 250 asteessa noin 45 minuuttia. Voitele sitten kukko voisulalla, laske uunin lämpötila 125 asteeseen ja jatka paistamista noin 5 tuntia. Jos pinta tummuu liikaa, voit peittää sen foliolla.",
            "Kun otat kukon uunista, kääri se tiiviisti leivinpaperiin ja paksuihin pyyhkeisiin (tai vaikka villapaitaan). Anna vetäytyä ja hautua vähintään 3 tuntia ennen tarjoilua.",
            "<strong>Vinkki:</strong>",
            "Laita kukko uuniin jalat ristissä niin ei vuoda :D",
        ],
        macros: {
            servingSizeInfo: "Koko kalakukko on jaettu 10 annokseen.",
            per100g: {
                calories: "270 kcal",
                protein: "16 g",
                carbs: "22 g",
                fat: "12 g",
            },
            perServing: {
                calories: "810 kcal",
                protein: "48 g",
                carbs: "66 g",
                fat: "36 g",
            },
        },
    },
    {
        id: "karjalanpiirakat",
        title: "Karjalanpiirakat",
        tags: ["Perinneruoat", "Juhlat", "Helppo", "Suolainen"],
        ingredients: [
            {
                heading: "Kuoritaikina",
                items: [
                    "4 dl ruisjauhoja",
                    "2 dl vehnäjauhoja",
                    "1/2 tl suolaa",
                    "2-3 dl kylmää vettä",
                ],
            },
            {
                heading: "Täyte: Riisipuuro",
                items: [
                    "2 dl riisiä",
                    "2 dl vettä",
                    "0,7 l maitoa",
                    "50g voita",
                    "loraus kermaa",
                ],
            },
            {
                heading: "Täyte: Perunamuusi",
                items: ["perunoita", "voita", "maitoa", "suolaa"],
            },
        ],
        instructions: [
            "<strong>Täytteen valmistus:</strong>",
            "Valmista riisipuuro tai perunamuusi. Riisipuuro kannattaa valmistaa edellisenä päivänä. Huuhdo riisit, keitä ja lisää maito pienissä erissä. Älä keitä riisiä täysin kypsäksi, vaan jätä se hieman irtonaiseksi. Lisää käyttövalmiiseen puuroon voisula ja loraus kermaa.",
            "Perunamuusista tulee tehdä kovahko, käyttäen voita, maitoa tai kermaa ja suolaa. Muusia ei tule seisottaa kauan.",
            "Sekoita kuoritaikinan ainekset ensin kulhossa ja vaivaa sitten leivinlaudalla kimmoisaksi. Taikinan tulee olla kovaa. Lisää jauhoja vaivaamisen aikana. Tee taikinasta noin 2 cm paksu tanko ja katkaise se. Sopiva taikina napsahtaa katketessaan. Anna taikinan seistä hetki sitkistyäkseen.",
            "Pidä taikina ja aihiot aina kelmulla peitettynä kuivumisen estämiseksi.",
            "Muotoile taikinatangosta noin 2-2,5 cm halkaisijaltaan olevia palloja. Litistä pallot ja lado ne päällekkäin. Kauli aihioista hyvin ohuita (noin 0,3 mm), pyöreitä pohjia, joiden halkaisija on noin 15 cm.",
            "Lado valmiit pohjat päällekkäin jauhoja välissä käyttäen ja peitä ne. Pohjat voi myös pakastaa.",
            "Levitä täytettä pohjalle 3-4 mm paksusti. Käännä reunat ja rypytä ne keskeltä alkaen. Vältä teräviä kärkiä rypytyksessä.",
            "Paista 280-300 asteisen uunin keskiosalla noin 15-20 minuuttia, mieluiten kiertoilmatoiminnolla.",
            "Voitele piirakat välittömästi paiston jälkeen voisulalla (ei saa kiehua) ja lado ne uunipellille jäähtymään, ei päällekkäin.",
            "Anna jäähtyä täysin. Täyte riittää noin 40 piirakkaan.",
            "Jos pakastat piirakat, voitele ne voilla ennen lämmitystä sulatuksen jälkeen.",
        ],
        macros: {
            servingSizeInfo:
                "Annoskoko on yksi piirakka. Laskelma on tehty riisipuuropohjaisella täytteellä, ja reseptistä tulee 40 piirakkaa.",
            per100g: {
                calories: "185 kcal",
                protein: "5 g",
                carbs: "30 g",
                fat: "5 g",
            },
            perServing: {
                calories: "74 kcal",
                protein: "2 g",
                carbs: "12 g",
                fat: "2 g",
            },
        },
    },
    {
        id: "kinkkupiiras",
        title: "Kinkkupiiras",
        tags: [
            "Leivonnaiset",
            "Piirakat",
            "Liharuoat",
            "Possu",
            "Juhlat",
            "Uuniruoka",
            "Suolainen",
        ],
        ingredients: [
            {
                heading: "Pohja",
                items: [
                    "150g pehmeää voita",
                    "3dl vehnäjauhoja",
                    "3/4dl vettä",
                    "1.5dl juustoraastetta",
                ],
            },
            {
                heading: "Täyte",
                items: [
                    "150-200g kinkkua",
                    "1 sipuli",
                    "1 punainen paprika",
                    "2 kananmunaa",
                    "2dl kermaa tai maitoa",
                    "1/2tl mustapippuria",
                    "1tl paprikaa",
                    "1tl valkosipulijauhetta",
                    "1/2tl chilimaustetta",
                    "ripaus aromisuolaa",
                ],
            },
        ],
        instructions: [
            "Sekoita pohjan ainekset yhteen ja painele taikina noin 20-25 cm pyöreän piirakkavuoan pohjalle ja reunoille.",
            "Esipaista pohjaa 175-asteisessa uunissa 10 minuuttia.",
            "Kuutioi kinkku ja sipuli. Sekoita joukkoon kuutioitu paprika.",
            "Sekoita mausteet keskenään.",
            "Yhdistä kinkku-paprikaseos ja mausteet. Levitä seos esipaistetun pohjan päälle.",
            "Sekoita kananmunat ja kerma/maito keskenään ja kaada seos täytteen päälle.",
            "Paista 175-asteisessa uunissa 30-35 minuuttia.",
        ],
        macros: {
            servingSizeInfo: "Koko piirakka on jaettu 8 annokseen.",
            per100g: {
                calories: "290 kcal",
                protein: "10 g",
                carbs: "14 g",
                fat: "21 g",
            },
            perServing: {
                calories: "390 kcal",
                protein: "14 g",
                carbs: "19 g",
                fat: "28 g",
            },
        },
    },
    {
        id: "focaccia-ja-muunnelmat",
        title: "Focaccia ja muunnelmat",
        tags: ["Leivät", "Lisukkeet", "Juhlat", "Suolainen"],
        ingredients: [
            {
                heading: "Perustaikina",
                items: [
                    "3dl vettä",
                    "1rkl sokeria",
                    "1/2tl suolaa",
                    "1/2tl valkosipulijauhetta",
                    "1ps kuivahiivaa",
                    "6-7dl sämpyläjauhoja",
                    "1/2dl rypsiöljyä TAI 50g margariinia sulatettuna",
                ],
            },
            {
                heading: "Piccolot: Yrttiöljy",
                items: [
                    "1/2dl rypsiöljyä",
                    "3 valkosipulin kynttä murskattuna",
                    "1tl rosmariinia",
                ],
            },
            {
                heading: "Ihailijapannu: Pinnalle",
                items: ["6 aurinkokuivattua tomaattia", "12 mustaa kivetöntä oliivia"],
            },
            {
                heading: "Ihailijapannu: Yrttiöljy",
                items: [
                    "1/2dl aurinkokuivattujen tomaattien öljyä",
                    "1tl kuivattua oreganoa",
                    "2-3 valkosipulin kynttä murskattuna",
                ],
            },
        ],
        instructions: [
            "<strong>Perustaikina:</strong>",
            "Sekoita reilusti kädenlämpöiseen veteen (+42°C) suola, valkosipulijauhe ja sokeri.",
            "Sekoita kuivahiiva osaan jauhoista ja lisää nesteeseen. Lisää loput jauhot vähitellen vaivaten.",
            "Lisää lopuksi öljy tai sula margariini. Vaivaa taikina tasaiseksi.",
            "Anna kohota liinalla peitettynä lämpimässä paikassa noin 20 minuuttia. Laita uuni lämpenemään 225 asteeseen.",
            "<strong>Ohje: Piccolot (12kpl):</strong>",
            "Kaada kohonnut taikina jauhotetulle pöydälle, vaivaa ja muotoile 40 cm pitkäksi tangoksi.",
            "Jaa tanko 12 osaan. Taputtele paloista pyöreitä leipäsiä (halkaisija 10 cm) pellille leivinpaperin päälle.",
            "Anna kohota liinalla peitettynä 20 minuuttia.",
            "Paina kohonneisiin leipiin sormella koloja. Sekoita yrttiöljyn ainekset ja voitele leivät.",
            "Paista 225-asteisen uunin keskitasolla 8-10 minuuttia.",
            "<strong>Ohje: Kauniin Julian ihailijapannu (24 palaa):</strong>",
            "Taputtele tai kauli kohonnut perustaikina uunipellin kokoiseksi levyksi leivinpaperin päälle.",
            "Anna kohota liinalla peitettynä 20 minuuttia.",
            "Leikkaa aurinkokuivatut tomaatit ja puolita oliivit. Sekoita yrttiöljyn ainekset keskenään.",
            "Paina kohonneeseen leipään sormella syviä koloja. Voitele leipä yrttiöljyllä.",
            "Paina koloihin vuorotellen oliiveja ja aurinkokuivattuja tomaatteja.",
            "Paista 225-asteisen uunin keskitasolla 10-12 minuuttia.",
        ],
        macros: {
            servingSizeInfo:
                "Laskelma on tehty 'Kauniin Julian ihailijapannu' -versiolle. Annoskoko on 1 pala, kun leipä jaetaan 24 osaan.",
            per100g: {
                calories: "285 kcal",
                protein: "6 g",
                carbs: "40 g",
                fat: "11 g",
            },
            perServing: {
                calories: "145 kcal",
                protein: "3 g",
                carbs: "20 g",
                fat: "6 g",
            },
        },
    },
    {
        id: "mallaslimppu",
        title: "Mallaslimppu",
        tags: ["Leivät", "Perinneruoat", "Juhlat", "Makea", "Suolainen"],
        ingredients: [
            {
                heading: "3 leipää",
                items: [
                    "1l appelsiinimehua",
                    "3dl ruisjauhoja",
                    "3dl ruisleseitä",
                    "3dl hienonnettuja kaljamaltaita",
                    "2 palaa (50g) hiivaa",
                    "3dl tummaa siirappia",
                    "1rkl suolaa",
                    "10-13dl vehnäjauhoja",
                ],
            },
        ],
        instructions: [
            "Murenna hiiva kädenlämpöiseen appelsiinimehuun.",
            "Lisää nesteeseen kaikki muut ainekset ja sekoita hyvin. Taikina jää hyvin löysäksi.",
            "Anna taikinan kohota liinan alla 90 minuuttia.",
            "Voitele kolme pitkänomaista leipävuokaa ja jaa taikina niihin.",
            "Paista 175-asteisessa uunissa 90 minuuttia.",
            "Kun leivät ovat olleet uunissa tunnin, voitele niiden pinta vedellä ohennetulla siirapilla.",
            "Jäähdytä leivät hyvin ennen leikkaamista.",
        ],
        macros: {
            servingSizeInfo:
                "Reseptistä tulee 3 leipää. Annoskoko on yksi 2 cm paksu viipale (n. 40g). Yhdestä leivästä tulee noin 20 viipaletta.",
            per100g: {
                calories: "260 kcal",
                protein: "7 g",
                carbs: "55 g",
                fat: "1.5 g",
            },
            perServing: {
                calories: "104 kcal",
                protein: "2.8 g",
                carbs: "22 g",
                fat: "0.6 g",
            },
        },
    },
    {
        id: "kasviskeitto",
        title: "Kasviskeitto",
        tags: [
            "Pääruoat",
            "Keitot",
            "Kasvisruoat",
            "Arkiruoka",
            "Helppo",
            "Suolainen",
        ],
        ingredients: [
            {
                heading: "Ainesosat",
                items: [
                    "6 porkkanaa",
                    "1 iso sipuli",
                    "2 rkl öljyä",
                    "8 dl vettä",
                    "1 kasvisliemikuutio",
                    "1/2 dl riisiä",
                    "2 dl kermaa",
                ],
            },
        ],
        instructions: [
            "Kuori ja silppua vihannekset.",
            "Kiehauta vihannekset öljyssä kattilassa.",
            "Kiehauta vesi ja murenna joukkoon kasvisliemikuutio.",
            "Lisää kasvisliemi ja riisi vihannesten joukkoon.",
            "Anna kiehua noin 30 minuuttia, kunnes riisit ovat pehmeitä.",
            "Lisää lopuksi kerma pehmentämään makua.",
            "Sekoita ja kuumenna keitto, mutta älä enää keitä.",
        ],
        macros: {
            servingSizeInfo: "Koko keittoannos on jaettu 4 annokseen.",
            per100g: {
                calories: "75 kcal",
                protein: "1 g",
                carbs: "8 g",
                fat: "4 g",
            },
            perServing: {
                calories: "260 kcal",
                protein: "4 g",
                carbs: "28 g",
                fat: "14 g",
            },
        },
    },
    {
        id: "vappumunkit",
        title: "Vappumunkit",
        tags: ["Jälkiruoat", "Leivonnaiset", "Juhlat", "Makea"],
        ingredients: [
            {
                heading: "16 kpl",
                items: [
                    "2.5dl kädenlämpöistä vettä",
                    "25g hiivaa",
                    "1/2 kananmuna",
                    "1dl sokeria",
                    "1/2rkl vaniljasokeria",
                    "1tl suolaa",
                    "1dl ohrakasta",
                    "6dl vehnäjauhoja",
                    "1/2dl rypsiöljyä",
                ],
            },
        ],
        instructions: [
            "Sekoita hiiva kädenlämpöiseen veteen. Lisää kananmuna.",
            "Sekoita sokerit ja suola keskenään ja lisää nesteeseen.",
            "Yhdistä ohrakas ja vehnäjauhot, lisää taikinaan ja sekoita. Lisää lopuksi öljy.",
            "Anna taikinan kohota liinan alla.",
            "Leivo kohonneesta taikinasta pyöreitä munkkeja ja kohota niitä hetki liinan alla.",
            "Kuumenna rasva (n. 180°C) rautapadassa. Kokeile kuumuutta taikinapalalla; se on sopivaa, kun pala ei painu pohjaan ja ruskistuu minuutissa.",
            "<strong>Varo kuumaa rasvaa!</strong>",
            "Paista 3-4 munkkia kerrallaan. Käännä kun ne ovat kullanruskeita, noin parin minuutin jälkeen.",
            "Nosta kypsät munkit reikäkauhalla talouspaperin päälle valumaan.",
            "Sokeroi lämpimät munkit pyörittelemällä ne sokerissa.",
            "Siirrä kuuma pata jäähtymään turvalliseen paikkaan. Siivilöi jäähtynyt rasva talteen.",
        ],
        macros: {
            servingSizeInfo:
                "Annoskoko on yksi munkki. Laskelma sisältää paistamisessa imeytyneen rasvan ja sokerikuorrutuksen.",
            per100g: {
                calories: "350 kcal",
                protein: "6 g",
                carbs: "50 g",
                fat: "14 g",
            },
            perServing: {
                calories: "262 kcal",
                protein: "4.5 g",
                carbs: "37.5 g",
                fat: "10.5 g",
            },
        },
    },
    {
        id: "kulitsa",
        title: "Kulitsa",
        tags: ["Leivonnaiset", "Pullat", "Juhlat", "Perinneruoat", "Makea"],
        ingredients: [
            {
                heading: "Taikina (2 kpl)",
                items: [
                    "5 dl maitoa",
                    "50g hiivaa",
                    "2 1/2 dl sokeria",
                    "2 tl suolaa",
                    "3 munaa",
                    "1 rkl kardemummaa",
                    "1 rkl vaniljasokeria",
                    "1 sitruunan raastettu kuori",
                    "3 dl rusinoita",
                    "1 dl mantelirouhetta",
                    "200g voita tai margariinia",
                    "noin 16 dl vehnäjauhoja",
                ],
            },
            { heading: "Voiteluun ja pinnalle", items: ["1 muna", "mantelilastuja"] },
        ],
        instructions: [
            "<strong>Valmista ensin taikinajuuri:</strong>",
            "Liuota hiiva kädenlämpöiseen maitoon. Lisää kevyesti vatkaten 3 dl vehnäjauhoista. Anna juuren kuplia peitettynä lämpimässä paikassa 20-30 minuuttia.",
            "Sekoita kuplivaan juureen sokeri, suola, munat, vaniljasokeri, kardemumma, sitruunankuori ja jauhoja vähitellen.",
            "Lisää jauhojen loppuvaiheessa rusinat, mantelirouhe ja pehmeä rasva. Alusta loput jauhot taikinaan, kunnes se on pehmeää ja kimmoisaa.",
            "Jaa taikina kahteen osaan ja ota molemmista paloista vähän taikinaa sivuun koristeita varten.",
            "Voitele kaksi korkeaa, noin 1.8 litran vuokaa ja painele taikinat niihin.",
            "Muotoile sivuun otetuista taikinoista 'XB'-kirjaimet pullien päälle.",
            "Peitä vuoat. Kohota toista lämpimässä ja toista viileässä, jotta voit paistaa ne erikseen.",
            "Voitele kohonnut kulitsa munalla ja ripottele pinnalle mantelilastuja.",
            "Paista 175-asteisen uunin alatasolla noin 40 minuuttia. Peitä pinta leivinpaperilla paiston puolivälissä, jos se tummuu liikaa.",
            "Leikkaa täysin jäähtyneenä.",
        ],
        macros: {
            servingSizeInfo:
                "Reseptistä tulee 2 kulitsaa. Annoskoko on yksi viipale, kun yksi kulitsa jaetaan 12 osaan.",
            per100g: {
                calories: "330 kcal",
                protein: "8 g",
                carbs: "48 g",
                fat: "12 g",
            },
            perServing: {
                calories: "363 kcal",
                protein: "9 g",
                carbs: "53 g",
                fat: "13 g",
            },
        },
    },
    {
        id: "mokkapalat",
        title: "Mokkapalat",
        tags: [
            "Jälkiruoat",
            "Leivonnaiset",
            "Piirakat",
            "Juhlat",
            "Helppo",
            "Makea",
        ],
        ingredients: [
            {
                heading: "Pohja",
                items: [
                    "3 munaa",
                    "3dl sokeria",
                    "1dl maitoa",
                    "2-3rkl kaakaojauhetta",
                    "2tl vaniljasokeria",
                    "4 1/2dl vehnäjauhoja",
                    "2tl leivinjauhetta",
                    "150g sulatettua margariinia",
                ],
            },
            {
                heading: "Kuorrutus",
                items: [
                    "3dl tomusokeria",
                    "2rkl kaakaojauhetta",
                    "1tl vaniljasokeria",
                    "5rkl kylmää kahvia tai vettä",
                    "4-6rkl sulaa margariinia",
                    "nonparelleja",
                ],
            },
        ],
        instructions: [
            "Vatkaa munat ja sokeri vaaleaksi, kuohkeaksi vaahdoksi.",
            "Yhdistä kuivat aineet (kaakaojauhe, vaniljasokeri, vehnäjauhot, leivinjauhe) keskenään.",
            "Sekoita kuivat aineet vuorotellen maidon kanssa muna-sokerivaahtoon. Lisää lopuksi sulatettu margariini.",
            "Kaada taikina leivinpaperilla vuoratulle uunipellille.",
            "Paista 200-asteisessa uunissa 15-20 minuuttia. Anna pohjan jäähtyä.",
            "<strong>Kuorrutus:</strong>",
            "siivilöi tomusokeri, kaakaojauhe ja vaniljasokeri kulhoon. Lisää kahvi/vesi ja sekoita tasaiseksi. Lisää lopuksi sula margariini.",
            "Levitä kuorrutus jäähtyneen pohjan päälle. Koristele nonparelleilla ja anna kuorrutuksen jähmettyä.",
        ],
        macros: {
            servingSizeInfo:
                "Annoskoko on yksi pala, kun pellillinen jaetaan 24 osaan.",
            per100g: {
                calories: "380 kcal",
                protein: "4 g",
                carbs: "55 g",
                fat: "16 g",
            },
            perServing: {
                calories: "228 kcal",
                protein: "2.4 g",
                carbs: "33 g",
                fat: "9.6 g",
            },
        },
    },
    {
        id: "suklainen-mutakakku",
        title: "Suklainen mutakakku",
        tags: ["Jälkiruoat", "Leivonnaiset", "Kakut", "Helppo", "Makea"],
        ingredients: [
            {
                heading: "n. 25cm vuoka",
                items: [
                    "200g tummaa suklaata",
                    "200g voita",
                    "4 kananmunaa",
                    "2dl sokeria",
                    "2.5dl vehnäjauhoja",
                    "1tl leivinjauhetta",
                ],
            },
        ],
        instructions: [
            "Kuumenna uuni 200 asteeseen. Voitele ja jauhoita kakkuvuoka (halkaisija n. 25cm).",
            "Vatkaa munat ja sokeri vaaleaksi vaahdoksi.",
            "Sulata voi ja paloiteltu suklaa vesihauteessa tai varovasti mikrossa. Sekoita tasaiseksi.",
            "Kaada hieman jäähtynyt suklaa-voiseos muna-sokerivaahtoon varovasti sekoittaen.",
            "Yhdistä vehnäjauhot ja leivinjauhe, ja sekoita ne varovasti käännellen taikinaan.",
            "Kaada seos vuokaan.",
            "Paista uunin keskiosassa noin 12 minuuttia. Kakun kuuluu jäädä keskeltä tahmeaksi.",
            "Kakun voi hyvin valmistaa tarjoilua edeltävänä päivänä.",
        ],
        macros: {
            servingSizeInfo: "Koko kakku on jaettu 12 annokseen.",
            per100g: {
                calories: "450 kcal",
                protein: "7 g",
                carbs: "40 g",
                fat: "29 g",
            },
            perServing: {
                calories: "338 kcal",
                protein: "5 g",
                carbs: "30 g",
                fat: "22 g",
            },
        },
    },
    {
        id: "suklaahippukeksit",
        title: "Suklaahippukeksit",
        tags: ["Jälkiruoat", "Leivonnaiset", "Keksit", "Helppo", "Makea"],
        ingredients: [
            {
                heading: "n. 12 kpl",
                items: [
                    "125 g huoneenlämpöistä voita",
                    "1 dl sokeria",
                    "1 dl fariinisokeria",
                    "1 kananmuna",
                    "1 tl vaniljauutetta tai vaniljasokeria",
                    "3 dl vehnäjauhoja",
                    "1/2 tl ruokasoodaa",
                    "1/4 tl suolaa",
                    "150 g tummaa leivontasuklaata tai suklaahippuja",
                ],
            },
        ],
        instructions: [
            "Vatkaa huoneenlämpöinen voi, sokeri ja fariinisokeri sähkövatkaimella tasaiseksi seokseksi.",
            "Vatkaa kananmuna ja vanilja joukkoon.",
            "Yhdistä toisessa kulhossa vehnäjauhot, ruokasooda ja suola.",
            "Rouhi suklaa karkeaksi, jos et käytä valmiita hippuja.",
            "Kääntele kuiva-aineseos ja suklaarouhe voi-sokerivaahtoon, sekoita vain sen verran että ainekset yhdistyvät.",
            "Nostele lusikalla 12 nokareeksi kahdelle leivinpaperilla vuoratulle uunipellille. Jätä leviämisvaraa.",
            "Paista 200-asteisessa uunissa 7-10 minuuttia. Ota keksit uunista, kun ne ovat vielä hieman raa'an näköisiä keskeltä, jotta sisus jää sitkeäksi.",
            "Vedä keksit leivinpapereineen pois kuumalta pelliltä ja anna jäähtyä ennen tarjoamista.",
        ],
        macros: {
            servingSizeInfo: "Annoskoko on yksi keksi. Reseptistä tulee 12 keksiä.",
            per100g: {
                calories: "475 kcal",
                protein: "5 g",
                carbs: "58 g",
                fat: "25 g",
            },
            perServing: {
                calories: "285 kcal",
                protein: "3 g",
                carbs: "35 g",
                fat: "15 g",
            },
        },
    },
    {
        id: "rapeat-kanan-koipireidet-uunijuureksilla",
        title: "Rapeat kanan koipireidet uunijuureksilla",
        tags: [
            "Pääruoat",
            "Kanaruoat",
            "Uuniruoka",
            "Arkiruoka",
            "Helppo",
            "Suolainen",
        ],
        ingredients: [
            {
                heading: "4 annosta",
                items: [
                    "4 kpl kanan koipireisiä",
                    "8 kpl perunaa",
                    "2 kpl porkkanaa",
                    "2 kpl sipulia",
                    "2 rkl öljyä",
                    "1 rkl hunajaa",
                    "1 kpl sitruunan raastettu kuori",
                    "1 tl suolaa",
                    "0.5 tl mustapippuria",
                    "1 oksa tuoretta rosmariinia",
                ],
            },
        ],
        instructions: [
            "Ota kanapalat huoneenlämpöön noin 30 minuuttia ennen paistamista.",
            "Paloittele juurekset ja pyörittele ne öljyssä.",
            "Mausta hunajalla, sitruunankuorella, suolalla ja pippurilla.",
            "Revi rosmariinista lehdet ja sekoita ne juuresten joukkoon.",
            "Laita juurekset uunivuokaan tai -pellille ja nosta kanapalat päälle.",
            "Paista 180-asteisessa uunissa noin tunti.",
            "Anna levähtää hetki ennen tarjoilua.",
        ],
        macros: {
            servingSizeInfo:
                "Resepti on laskettu 4 annokselle, kuten ohjeessa mainitaan. Yksi annos sisältää yhden koipireiden ja neljäsosan juureksista.",
            per100g: {
                calories: "140 kcal",
                protein: "11 g",
                carbs: "10 g",
                fat: "6 g",
            },
            perServing: {
                calories: "630 kcal",
                protein: "50 g",
                carbs: "45 g",
                fat: "27 g",
            },
        },
    },
    {
        id: "calzone",
        title: "Calzone",
        tags: ["Pääruoat", "Pizzat", "Possu", "Uuniruoka", "Suolainen"],
        ingredients: [
            {
                heading: "4 kpl",
                items: [
                    "1 pkt (4 kpl/170 g) pizzataikinaa (pakaste)",
                    "3/4 dl pizzakastiketta",
                    "1/2 pkt (à 210 g) ohuen ohutta saunapalvikinkkua",
                    "2/3 tlk (à 140 g/227 g) pieniä ananaspaloja",
                    "1 1/2 dl mozzarellaraastetta",
                    "n. 1/2 ps (à 150 g) sinihomejuustomurua",
                    "1-2 rkl käsittelyjauhoja tai vehnäjauhoja",
                ],
            },
        ],
        instructions: [
            "Ota pizzataikinat hyvissä ajoin pakkauksen ohjeen mukaan sulamaan.",
            "Jaa pizzataikinapallot kahteen osaan ja muotoile käsin venyttämällä pyöreiksi pohjiksi (halkaisija 16 cm) leivinpaperin päälle. Käytä tarvittaessa käsittelyjauhoja apuna.",
            "Täytä calzonet kahdessa osassa, jotta taikina ei vety.",
            "Levitä pizzakastike taikinan toiselle puolikkaalle, jätä reunoille pari senttiä tyhjää.",
            "Lisää kinkkuviipaleet, valutetut ananaspalat, juustoraaste ja sinihomejuustomuru.",
            "Taita taikina kaksin kerroin taskuksi ja nipistä taikina tiukasti kiinni reunoista.",
            "Kuumenna pelti 250-asteisessa uunissa. Paista calzonet kahdessa erässä.",
            "Siirrä calzonet leivinpapereiden kanssa pellille. Paista hiukan keskitasoa alempana noin 10 minuuttia, kunnes pinta on hiukan ruskistunut.",
        ],
        macros: {
            servingSizeInfo:
                "Annoskoko on yksi calzone. Reseptistä tulee 4 calzonea.",
            per100g: {
                calories: "210 kcal",
                protein: "11 g",
                carbs: "18 g",
                fat: "10 g",
            },
            perServing: {
                calories: "472 kcal",
                protein: "25 g",
                carbs: "40 g",
                fat: "22 g",
            },
        },
    },
    {
        id: "pizzapohja",
        title: "Pizzapohja",
        tags: ["Pizzat", "Perusreseptit", "Suolainen"],
        ingredients: [
            {
                heading: "1 pellillinen",
                items: [
                    "2 1/2 dl vettä",
                    "25 g hiivaa",
                    "3/4 tl suolaa",
                    "n. 5 dl durumvehnäjauhoja",
                    "2 rkl oliiviöljyä",
                ],
            },
        ],
        instructions: [
            "Liuota hiiva kädenlämpöiseen veteen.",
            "Lisää suola, jauhot ja öljy. Sekoita tasaiseksi.",
            "Alusta pizzataikinaa muutama minuutti. Anna kohota liinan alla lämpimässä ja vedottomassa paikassa, kunnes taikina on kaksinkertainen (noin 30 minuuttia).",
            "Kauli kohonnut taikina ohueksi levyksi. Nosta pizzapohja leivinpaperin päälle pellille.",
            "Täytä pizza haluamillasi täytteillä ja paista 250-asteisessa uunissa 10–15 minuuttia.",
        ],
        macros: {
            servingSizeInfo:
                "Laskelma kattaa ainoastaan pizzapohjan ilman täytteitä. Koko pohja on jaettu 8 annokseen (siivuun).",
            per100g: {
                calories: "245 kcal",
                protein: "7 g",
                carbs: "45 g",
                fat: "4 g",
            },
            perServing: {
                calories: "184 kcal",
                protein: "5 g",
                carbs: "34 g",
                fat: "3 g",
            },
        },
    },
    {
        id: "pyttipannu",
        title: "Pyttipannu",
        tags: [
            "Pääruoat",
            "Kotiruoka",
            "Peruna",
            "Makkara",
            "Pannuruoka",
            "Helppo",
            "Suolainen",
        ],
        ingredients: [
            {
                heading: null,
                items: [
                    "1 kg yleisperunoita",
                    "400 g makkaraa (esim. lenkkimakkara)",
                    "2 sipulia",
                    "4-6 kananmunaa",
                    "voita tai öljyä paistamiseen",
                    "suolaa",
                    "mustapippuria",
                ],
            },
        ],
        instructions: [
            "Keitä perunat kuorineen kypsiksi, mieluiten edellisenä päivänä. Anna niiden jäähtyä täysin.",
            "Kuori ja viipaloi tai kuutioi jäähtyneet perunat. Valmistele samalla tavalla myös makkara ja hienonna sipuli.",
            "Kuumenna rasva paistinpannussa. Kuullota sipulisilppua, kunnes se on pehmeää ja läpikuultavaa.",
            "Lisää makkarat pannulle ja paista, kunnes ne ovat saaneet rapean pinnan.",
            "Lisää perunat ja jatka paistamista keskilämmöllä käännellen, kunnes perunat ovat kullanruskeita ja rapeita.",
            "Riko kananmunat pannulle muiden ainesten joukkoon. Sekoita jatkuvasti lastalla, kunnes kananmunat hyytyvät kokkeliksi.",
            "Mausta valmis pyttipannu suolalla ja mustapippurilla maun mukaan.",
            "Tarjoile heti, esimerkiksi ketsupin, majoneesin tai etikkapunajuurien kanssa.",
        ],
        macros: {
            servingSizeInfo:
                "Resepti on jaettu 4 annokseen. Laskelmissa on käytetty 5 kananmunaa.",
            per100g: {
                calories: "190 kcal",
                protein: "8 g",
                carbs: "16 g",
                fat: "10 g",
            },
            perServing: {
                calories: "902 kcal",
                protein: "38 g",
                carbs: "76 g",
                fat: "48 g",
            },
        },
    },
];

// --- SIVUN TOIMINNALLISUUS ---

// Haetaan elementit DOM:sta
const homePage = document.getElementById("home-page");
const recipePage = document.getElementById("recipe-page");
const recipeGrid = document.getElementById("recipe-grid");
const recipeDetailContainer = document.getElementById("recipe-page");
const tagFilterContainer = document.getElementById("tag-filter-container");
const sortSelect = document.getElementById("sort-by-select");
const filterMenu = document.getElementById("filter-menu");
const toggleFilterMenuBtn = document.getElementById("toggle-filter-menu-btn");
const resetFiltersBtn = document.getElementById("reset-filters-btn");

// Oletusarvot suodattimille ja järjestelylle
const defaultCriteria = {
    tags: [],
    sortBy: "title-asc",
};

// Aktiivisten suodattimien ja järjestelyn tila
let activeCriteria = { ...defaultCriteria };

// Funktio, joka näyttää halutun sivun ja piilottaa muut
function showPage(pageId) {
    window.scrollTo(0, 0);
    homePage.classList.add("hidden");
    recipePage.classList.add("hidden");

    if (pageId === "home") {
        homePage.classList.remove("hidden");
    } else if (pageId === "recipe") {
        recipePage.classList.remove("hidden");
    }
}

// Funktio, joka luo reseptikortin
function createRecipeCard(recipe) {
    const tagsHtml = recipe.tags.map((tag) => `<span class="bg-rose-100 text-rose-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">${tag}</span>`).join("");
    return `
    <div class="recipe-card bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer transition-transform duration-200 hover:scale-105" onclick="showRecipeDetail('${recipe.id}')">
        <div class="p-5">
            <h3 class="text-xl font-bold font-display text-gray-800">${recipe.title}</h3>
            <div class="mt-2 flex flex-wrap gap-1">${tagsHtml}</div>
        </div>
    </div>`;
}

// PÄÄFUNKTIO: Renderöi reseptit suodattimien ja järjestyksen mukaan
function renderRecipes() {
    let processedRecipes = [...recipes];

    // 1. Suodatus: Monivalintainen tag-suodatus
    if (activeCriteria.tags.length > 0) {
        processedRecipes = processedRecipes.filter(recipe => activeCriteria.tags.every(tag => recipe.tags.includes(tag)));
    }

    // 2. Järjestely
    const getCalories = (macroObject) => parseInt(macroObject?.calories) || 0;

    processedRecipes.sort((a, b) => {
        switch (activeCriteria.sortBy) {
            case "title-asc":
                return a.title.localeCompare(b.title, 'fi');
            case "title-desc":
                return b.title.localeCompare(a.title, 'fi');
            case "calories-100-asc":
                return getCalories(a.macros.per100g || a.macros.per100ml) - getCalories(b.macros.per100g || b.macros.per100ml);
            case "calories-100-desc":
                return getCalories(b.macros.per100g || b.macros.per100ml) - getCalories(a.macros.per100g || a.macros.per100ml);
            case "calories-serving-asc":
                return getCalories(a.macros.perServing) - getCalories(b.macros.perServing);
            case "calories-serving-desc":
                return getCalories(b.macros.perServing) - getCalories(a.macros.perServing);
            default:
                return 0;
        }
    });

    // 3. Näytä tulokset
    if (processedRecipes.length > 0) {
        recipeGrid.innerHTML = processedRecipes.map(createRecipeCard).join("");
    } else {
        recipeGrid.innerHTML = `<p class="text-center text-gray-500 col-span-full">Ei reseptejä valituilla suodattimilla.</p>`;
    }
}

// Luo tag-valintaruudut
function renderTagFilters() {
    const allTags = [...new Set(recipes.flatMap(recipe => recipe.tags))].sort();
    tagFilterContainer.innerHTML = allTags.map(tag => `
    <div>
      <input type="checkbox" id="tag-${tag}" value="${tag}" class="hidden peer">
      <label for="tag-${tag}" class="px-3 py-1.5 border rounded-full cursor-pointer transition-colors text-sm text-gray-600 border-gray-300 peer-checked:bg-rose-600 peer-checked:text-white peer-checked:border-rose-600 hover:bg-gray-100">
        ${tag}
      </label>
    </div>
  `).join('');

    tagFilterContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const tag = e.target.value;
            if (e.target.checked) {
                activeCriteria.tags.push(tag);
            } else {
                activeCriteria.tags = activeCriteria.tags.filter(t => t !== tag);
            }
            renderRecipes();
        });
    });
}

// Päivittää UI-valinnat (nollausta varten)
function updateUiToMatchCriteria() {
    sortSelect.value = activeCriteria.sortBy;
    tagFilterContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = activeCriteria.tags.includes(checkbox.value);
    });
}

// Näyttää yksittäisen reseptin tiedot
function showRecipeDetail(recipeId) {
    const recipe = recipes.find((r) => r.id === recipeId);
    if (!recipe) return;

    // LISÄTTY: Lisätään uusi merkintä selaimen historiaan
    const state = { page: 'recipe', recipeId: recipeId };
    const title = recipe.title;
    const url = `#${recipeId}`;
    history.pushState(state, title, url);

    const ingredientsHtml = recipe.ingredients.map(group => `
        ${group.heading ? `<h4 class="font-semibold text-lg mt-4 mb-2">${group.heading}</h4>` : ''}
        <ul class="list-disc list-inside space-y-1">${group.items.map(item => `<li>${item}</li>`).join('')}</ul>
    `).join('');

    const instructionsHtml = `<div class="space-y-2">${recipe.instructions.map((step, index) => {
        if (step.startsWith('<strong>')) {
            return `<h5 class="font-semibold text-gray-800 mt-4 mb-1">${step.replace(/<\/?strong>/g, '')}</h5>`;
        } else {
            return `
                <div class="flex items-start ml-4">
                    <input type="checkbox" id="step-${index}" class="form-checkbox h-5 w-5 text-rose-600 rounded mt-1 shrink-0 focus:ring-rose-500" onchange="this.nextElementSibling.classList.toggle('text-gray-400', this.checked); this.nextElementSibling.classList.toggle('line-through', this.checked)">
                    <label for="step-${index}" class="ml-3 text-gray-700 transition-colors">${step}</label>
                </div>`;
        }
    }).join('')}</div>`;

    const tagsHtml = recipe.tags.map(tag => `<span class="bg-rose-100 text-rose-800 text-sm font-medium px-3 py-1 rounded-full">${tag}</span>`).join('');

    let macrosHtml = ""; // Makrojen HTML-generointi pysyy samana...
    // ... (koodi tähän väliin pysyy ennallaan)
    if (recipe.macros) {
        const per100unitData = recipe.macros.per100g || recipe.macros.per100ml;
        const unitLabel = recipe.macros.per100g ? "Per 100g" : "Per 100ml";

        if (per100unitData) {
            macrosHtml = `
                <h3 class="mt-10 mb-3">Ravintoarvot (arvio)</h3>
                <p class="text-sm text-gray-600 mb-4">${recipe.macros.servingSizeInfo}</p>
                <div class="overflow-x-auto rounded-lg border border-gray-200">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ravintoarvo</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${unitLabel}</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Per annos</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr><td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Kalorit</td><td class="px-6 py-4 whitespace-nowrap text-gray-500">${per100unitData.calories}</td><td class="px-6 py-4 whitespace-nowrap text-gray-500">${recipe.macros.perServing.calories}</td></tr>
                            <tr><td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Proteiini</td><td class="px-6 py-4 whitespace-nowrap text-gray-500">${per100unitData.protein}</td><td class="px-6 py-4 whitespace-nowrap text-gray-500">${recipe.macros.perServing.protein}</td></tr>
                            <tr><td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Hiilihydraatit</td><td class="px-6 py-4 whitespace-nowrap text-gray-500">${per100unitData.carbs}</td><td class="px-6 py-4 whitespace-nowrap text-gray-500">${recipe.macros.perServing.carbs}</td></tr>
                            <tr><td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Rasva</td><td class="px-6 py-4 whitespace-nowrap text-gray-500">${per100unitData.fat}</td><td class="px-6 py-4 whitespace-nowrap text-gray-500">${recipe.macros.perServing.fat}</td></tr>
                        </tbody>
                    </table>
                </div>`;
        }
    }

    recipeDetailContainer.innerHTML = `
        <button onclick="history.back()" class="mb-6 inline-flex items-center text-rose-600 hover:text-rose-800 font-medium transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
            Takaisin
        </button>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-display">${recipe.title}</h2>
        <div class="flex flex-wrap gap-2 mb-8">${tagsHtml}</div>
        <div class="prose max-w-none lg:prose-lg prose-h3:font-display prose-h3:text-3xl prose-h3:mb-3 prose-h4:font-display prose-h4:text-xl">
            <h3>Ainekset</h3>${ingredientsHtml}
            <h3 class="mt-10">Valmistusohjeet</h3>${instructionsHtml}
            ${macrosHtml}
        </div>`;
    showPage("recipe");
}

// --- Tapahtumankäsittelijät ---

// Kuuntelee selaimen takaisin/eteenpäin-nappien painalluksia
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page === 'recipe') {
        // Jos tila löytyy, näytä resepti
        showRecipeDetail(event.state.recipeId);
    } else {
        // Jos tilaa ei ole, näytä kotisivu ja poista hash URL:sta
        showPage('home');
        history.replaceState(null, '', window.location.pathname);
    }
});

toggleFilterMenuBtn.addEventListener('click', () => {
    filterMenu.classList.toggle('hidden');
});

sortSelect.addEventListener('change', (e) => {
    activeCriteria.sortBy = e.target.value;
    renderRecipes();
});

resetFiltersBtn.addEventListener('click', () => {
    activeCriteria = {
        tags: [],
        sortBy: 'title-asc'
    };
    history.pushState(null, '', window.location.pathname); // Puhdista myös URL
    updateUiToMatchCriteria();
    renderRecipes();
});

// Alustetaan sivu
function initialize() {
    renderTagFilters();

    // Tarkistetaan, onko URL:ssa reseptin #-tunnistetta
    const recipeIdFromHash = window.location.hash.substring(1);
    const recipeExists = recipes.find(r => r.id === recipeIdFromHash);

    if (recipeIdFromHash && recipeExists) {
        // Jos on, näytä suoraan reseptisivu
        showRecipeDetail(recipeIdFromHash);
    } else {
        // Muuten näytä normaalisti etusivu
        renderRecipes();
    }
}

// Käynnistetään sovellus
document.addEventListener("DOMContentLoaded", initialize);