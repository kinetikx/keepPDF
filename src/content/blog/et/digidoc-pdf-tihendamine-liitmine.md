---
title: "PDF failide tihendamine ja liitmine DigiDoc4 ja e-Eesti jaoks"
description: "Kuidas valmistada ette PDF-dokumente enne DigiDoc4-s allkirjastamist ja e-teenustesse üleslaadimist. Suuruse piirangud, skaneeritud dokumentide optimeerimine ja privaatsus."
date: 2025-03-02
author: "KeepPDF Meeskond"
category: "juhendid"
tags: ["digidoc", "e-eesti", "pdf tihendamine", "id-kaart", "eesti"]
translationKey: "digidoc-guide"
---

# PDF failide tihendamine ja liitmine DigiDoc4 ja e-Eesti jaoks

Eesti on maailma juhtiv digiriik, kus peaaegu 100% riiklikest ja ärilistest teenustest toimivad digitaalselt. Iga päev allkirjastavad kümned tuhanded inimesed ID-kaardi, Mobiil-ID või Smart-ID abil lepinguid, avaldusi ja aruandeid DigiDoc4 tarkvaras.

Siiski puutuvad paljud kasutajad kokku probleemiga: **skaneeritud või mitmest lehest koosnevad PDF-failid on liiga suured** või ametiasutused (nagu Maksu- ja Tolliamet, Äriregister või kohtud) nõuavad kindlat faili suuruse piirangut.

Selles juhendis vaatleme, kuidas PDF-dokumente enne digiallkirjastamist korrastada, liita ja faili mahtu vähendada — hoides samal ajal andmed 100% turvalisena.

---

## Miks tekib probleem suuremahuliste PDF-failidega?

1. **Skannerite liiga kõrge resolutsioon:** Kui skaneerite lepinguid või arveid 300 või 600 DPI eraldusvõimega, võib 5-leheküljeline dokument võtta 20–40 MB ruumi.
2. **DigiDoc konteiner (.asice / .bdoc):** Kuigi DigiDoc konteiner suudab mahutada suuri faile, muutub allkirjastatud faili e-kirjaga saatmine tihti võimatuks, kuna paljud meiliserverid seavad manuse limiidiks 10 MB või 25 MB.
3. **Riigiportaalide üleslaadimise piirangud:** e-Äriregister, Maksu- ja Tolliamet ning mitmed kohtusüsteemid seavad üksikute failide manustamisel ranged piirangud (tavaliselt 5–10 MB).

---

## Samm-sammuline juhend: PDF-i ettevalmistamine allkirjastamiseks

### 1. Samm: Mitme dokumendi liitmine üheks tervikuks

Kui teil on mitu eraldi faili (näiteks lepingu põhiosa, lisad ja volikiri), on alati mugavam ja selgem liita need enne allkirjastamist üheks failiks.

- Avage KeepPDF-i [PDF-i liitmise tööriist](/et/uhenda-pdf-tasuta).
- Lohistage failid soovitud järjekorras aknasse.
- Klõpsake **Ühenda PDF** ja laadige valmis dokument alla.

### 2. Samm: Faili mahu optimeerimine (tihendamine)

Kui teie liidetud dokument ületab vajaliku mahu, tuleb seda tihendada:

- Kasutage [PDF-i tihendamise tööriista](/et/tihenda-pdf-tasuta).
- Valige sobiv režiim:
  - **Põhiline tihendamine:** säilitab algse teksti ja vektorid, vähendades samal ajal faili struktuuri mahtu.
  - **Tugev tihendamine:** ideaalne skaneeritud paberlepingutele ja piltidega dokumentidele, vähendades mahtu kuni 80%.

### 3. Samm: Lehtede pööramine ja kontroll

Tihti satuvad skaneerimisel mõned lehed tagurpidi. DigiDocis allkirjastatud faili ei saa pärast allkirja andmist enam muuta ilma allkirja kehtetuks muutmata!

- Avage [PDF-i lehtede korrastaja](/et/organize).
- Pöörake valepidi olevad lehed õigeks ja eemaldage vajadusel tühjad lehed.

### 4. Samm: Allkirjastamine DigiDoc4 tarkvaras

Kui PDF on valmis, avage ametlik DigiDoc4 rakendus oma arvutis, lohistage optimeeritud PDF aknasse ja allkirjastage oma ID-kaardi, Mobiil-ID või Smart-ID PIN2 koodiga.

---

## Privaatsus ja GDPR: Miks on brauserisisene töötlemine turvalisem?

Tavalised PDF-tööriistad laadivad teie tundlikud lepingud, finantsdokumendid ja isikuandmed kuskile tundmatusse välismaa serverisse. 

KeepPDF töötab **100% teie veebibrauseris**:
- Ühtegi faili ei saadeta serverisse ega salvestata pilve.
- Kogu tihendamine ja liitmine toimub teie enda seadme mälus (WebAssembly ja JavaScript abil).
- Täielik vastavus GDPR reeglitele ja maksimaalne turvalisus konfidentsiaalsete lepingute puhul.
