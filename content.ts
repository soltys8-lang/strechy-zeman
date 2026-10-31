import { City, Service } from './types';

export const SERVICES: Service[] = [
  {
    slug: 'opravy-strech',
    name: 'Opravy střech a zatékání',
    short: 'Zatéká vám nebo střechu poškodila bouře? Najdeme příčinu a střechu opravíme.',
    detail: {
      seoTitle: 'Oprava střechy a zatékání Vyškov, Bučovice, Slavkov | Střechy Zeman',
      seoDescription:
        'Zatéká vám střecha nebo ji poškodila bouře? Opravujeme tašky, šindel i plech na Vyškovsku, Bučovicku a Slavkovsku. Nezávazná cenová nabídka. Tel. 728 349 241.',
      h1: 'Opravy střech a zatékání',
      intro:
        'Zatéká vám do domu nebo střechu poškodila bouře? Najdeme, kudy voda prochází, a opravíme to. Pracujeme na střechách z tašek, šindele i plechu v Brně, Vyškově, Bučovicích, Slavkově u Brna a v celém Jihomoravském kraji.',
      image: {
        src: '/images/man-working-roof.webp',
        alt: 'Pokrývač při práci na plechové střeše',
        width: 1000,
        height: 563,
      },
      sections: [
        {
          title: 'Kdy volat pokrývače',
          items: [
            'mokré skvrny na stropě, ve štítu nebo v podkroví',
            'prasklé, posunuté nebo chybějící tašky',
            'odchlíplý šindel nebo uvolněný plech',
            'poškozené oplechování, ucpané nebo děravé okapy',
            'škody po bouři, vichřici nebo krupobití',
          ],
        },
        {
          title: 'Co opravujeme',
          text: 'Každá krytina stárne a poškozuje se jinak. Proto nejdřív zjistíme příčinu a teprve potom navrhneme opravu.',
          items: [
            'tašky: výměna prasklých kusů a srovnání posunuté krytiny',
            'šindel: oprava poškozených a odchlíplých míst',
            'plech: utěsnění spojů a výměna poškozených částí',
            'okapy a klempířské prvky: oprava a montáž',
          ],
        },
        {
          title: 'Proč opravu neodkládat',
          text: 'Voda, která projde krytinou, se nezastaví. Postupně vlhne izolace, dřevo krovu i stropy pod ním a z malé opravy se může stát větší rekonstrukce. Čím dřív se závada najde, tím menší zásah obvykle stačí.',
        },
      ],
      steps: [
        { title: 'Ozvete se nám', text: 'Zavoláte nebo napíšete, co se děje a kde zatéká. Pomůže i fotka z mobilu.' },
        { title: 'Prohlédneme střechu', text: 'Najdeme místo, kudy voda prochází. Často je jinde, než kde se objevila skvrna.' },
        { title: 'Domluvíme rozsah a cenu', text: 'Řekneme vám, co je potřeba opravit, a dáme vám nezávaznou cenovou nabídku.' },
        { title: 'Střechu opravíme', text: 'Opravíme, co jsme společně domluvili.' },
      ],
      faq: [
        {
          question: 'Proč se skvrna objevila jinde, než kde je střecha poškozená?',
          answer:
            'Voda po průniku krytinou stéká po fólii nebo po dřevě krovu a kape až níž. Poškozené místo proto bývá jinde, než kde se voda objeví v domě.',
        },
        {
          question: 'Co mám dělat, než přijedete?',
          answer:
            'Pod zatékající místo dejte nádobu a odneste věci, které by mohly navlhnout. Na mokrou střechu sami nelezte. Když voda teče kolem elektroinstalace, vypněte příslušný jistič.',
        },
        {
          question: 'Stačí oprava, nebo je potřeba nová krytina?',
          answer:
            'Záleží na stáří a stavu střechy. Po prohlídce vám řekneme, jestli stačí oprava, nebo se vyplatí výměna krytiny.',
        },
        {
          question: 'Kolik oprava střechy stojí?',
          answer:
            'Cena závisí na rozsahu poškození, typu krytiny a přístupu na střechu. Po prohlídce vám dáme nezávaznou cenovou nabídku.',
        },
      ],
      ctaTitle: 'Potřebujete opravit střechu?',
    },
  },
  {
    slug: 'nove-strechy',
    name: 'Nové střechy na klíč',
    short: 'Kompletní střecha od krovu po klempířské prvky. Taška, šindel i plechová krytina.',
    detail: {
      seoTitle: 'Nové střechy na klíč Vyškov, Bučovice, Slavkov | Střechy Zeman',
      seoDescription:
        'Nová střecha na klíč od krovu po klempířské prvky. Taška, šindel i plech v Brně, na Vyškovsku a v celém Jihomoravském kraji. Nezávazná cenová nabídka. Tel. 728 349 241.',
      h1: 'Nové střechy na klíč',
      intro:
        'Stavíte dům nebo chystáte novou střechu? Postaráme se o ni celou, od krovu přes krytinu po klempířské prvky. Pracujeme v Brně, Vyškově, Bučovicích, Slavkově u Brna a v celém Jihomoravském kraji.',
      image: {
        src: '/images/realizace-slavkov-novostavba.webp',
        alt: 'Rozestavěný dům s pojistnou fólií a latěmi na střeše, před ním palety tašek, Slavkov u Brna',
        width: 800,
        height: 600,
      },
      sections: [
        {
          title: 'Co znamená střecha na klíč',
          text: 'Krov, krytinu i klempířské práce máte u jedné firmy, takže nic nedomlouváte zvlášť s tesařem, pokrývačem a klempířem.',
          items: [
            'krov a tesařské konstrukce',
            'pojistná fólie a latě',
            'krytina z tašek, šindele nebo plechu',
            'oplechování, okapy a svody',
          ],
        },
        {
          title: 'Jakou krytinu zvolit',
          text: 'Každá krytina má své výhody. Doporučíme tu, která se hodí k vašemu domu, sklonu střechy a rozpočtu.',
          items: [
            'taška: klasický vzhled a dlouhá životnost, je ale nejtěžší, takže na ni musí být stavěný krov',
            'šindel: lehký a dobře se přizpůsobí členité střeše, potřebuje pod sebou pevné bednění',
            'plech: lehký a vhodný i pro střechy s menším sklonem',
          ],
        },
        {
          title: 'Proč záleží i na tom, co není vidět',
          text: 'O životnosti střechy nerozhoduje jen krytina. Pevný krov střechu nese. Správně položená pojistná fólie a odvětrání ji drží suchou i ve chvíli, kdy vítr zažene déšť nebo sníh pod krytinu.',
        },
      ],
      steps: [
        { title: 'Ozvete se nám', text: 'Zavoláte nebo napíšete, co stavíte. Pokud máte projekt, pošlete nám ho.' },
        { title: 'Projdeme projekt a stavbu', text: 'Podíváme se na projekt nebo přímo na stavbu a probereme krytinu.' },
        { title: 'Domluvíme rozsah a cenu', text: 'Řekneme vám, co všechno střecha obnáší, a dáme vám nezávaznou cenovou nabídku.' },
        { title: 'Střechu postavíme', text: 'Postavíme střechu podle toho, co jsme společně domluvili.' },
      ],
      faq: [
        {
          question: 'Co potřebujete pro cenovou nabídku?',
          answer:
            'Nejvíc pomůže projekt domu. Když ho nemáte, stačí pro orientační nabídku rozměry a představa o krytině. Ostatní upřesníme na místě.',
        },
        {
          question: 'Kdy se mám ozvat?',
          answer:
            'Co nejdřív, ideálně ještě před začátkem stavby. Když o střeše víme dopředu, lépe se domlouvá krytina i termín.',
        },
        {
          question: 'Jak dlouho stavba střechy trvá?',
          answer: 'Záleží na velikosti střechy, krytině a počasí. Termín domluvíme, až budeme znát rozsah.',
        },
        {
          question: 'Kolik nová střecha stojí?',
          answer:
            'Cena závisí na velikosti a členitosti střechy, zvolené krytině a rozsahu klempířských prací. Po zaměření vám dáme nezávaznou cenovou nabídku.',
        },
      ],
      ctaTitle: 'Plánujete novou střechu?',
    },
  },
  {
    slug: 'rekonstrukce-strech',
    name: 'Rekonstrukce a výměna krytiny',
    short: 'Stará krytina dosloužila? Střechu zrekonstruujeme a krytinu vyměníme za novou.',
    detail: {
      seoTitle: 'Rekonstrukce střechy Vyškov, Bučovice, Slavkov | Střechy Zeman',
      seoDescription:
        'Výměna krytiny a rekonstrukce střechy v Brně, na Vyškovsku a v celém Jihomoravském kraji. Taška, šindel i plech. Nezávazná cenová nabídka. Tel. 728 349 241.',
      h1: 'Rekonstrukce střechy a výměna krytiny',
      intro:
        'Stará krytina dosloužila nebo do střechy zatéká na více místech? Střechu zrekonstruujeme a krytinu vyměníme za novou. Pracujeme v Brně, Vyškově, Bučovicích, Slavkově u Brna a v celém Jihomoravském kraji.',
      image: {
        src: '/images/realizace-slavkov-dodavka.webp',
        alt: 'Dodávka Střechy Zeman před domem s taškovou střechou ve Slavkově u Brna',
        width: 800,
        height: 600,
      },
      sections: [
        {
          title: 'Kdy je čas na rekonstrukci',
          items: [
            'zatéká opakovaně nebo na více místech',
            'tašky se drolí nebo praskají',
            'šindel se kroutí a ztrácí posyp',
            'plech rezaví nebo se uvolňují spoje',
            'pod krytinou chybí pojistná fólie nebo je poškozená',
          ],
        },
        {
          title: 'Co rekonstrukce obnáší',
          text: 'Rozsah závisí na tom, v jakém stavu je střecha pod krytinou. Proto si ji nejdřív prohlédneme.',
          items: [
            'sundání staré krytiny',
            'kontrola krovu',
            'nová pojistná fólie a latě',
            'pokládka nové krytiny',
            'nové oplechování a okapy podle potřeby',
          ],
        },
        {
          title: 'Proč vyřešit všechno najednou',
          text: 'Když je stará krytina dole, je nejlepší příležitost zkontrolovat krov a vyřešit oplechování i okapy. Později by to znamenalo znovu sahat na hotovou střechu.',
        },
      ],
      steps: [
        { title: 'Ozvete se nám', text: 'Zavoláte nebo napíšete, co se střechou je. Pomohou i fotky z mobilu.' },
        { title: 'Prohlédneme střechu', text: 'Zjistíme stav krytiny, krovu i klempířských prvků.' },
        { title: 'Domluvíme rozsah a cenu', text: 'Řekneme vám, co je potřeba udělat, a dáme vám nezávaznou cenovou nabídku.' },
        { title: 'Střechu zrekonstruujeme', text: 'Provedeme práce, které jsme společně domluvili.' },
      ],
      faq: [
        {
          question: 'Stačí vyměnit jen krytinu?',
          answer:
            'Někdy stačí nová krytina a latě. Poznáme to po prohlídce, přesný stav někdy až po sundání krytiny. Další postup domluvíme s vámi.',
        },
        {
          question: 'Mohu při rekonstrukci změnit typ krytiny?',
          answer: 'Většinou ano. Záleží na sklonu střechy a na tom, co krov unese.',
        },
        {
          question: 'Dá se v domě při výměně krytiny bydlet?',
          answer:
            'Obvykle ano, protože se pracuje zvenku. U obytného podkroví to může být po dobu otevřené střechy omezené. Konkrétní postup domluvíme podle rozsahu prací.',
        },
        {
          question: 'Kolik rekonstrukce střechy stojí?',
          answer:
            'Cena závisí na velikosti střechy, zvolené krytině a rozsahu prací. Po prohlídce vám dáme nezávaznou cenovou nabídku.',
        },
      ],
      ctaTitle: 'Chystáte rekonstrukci střechy?',
    },
  },
  {
    slug: 'krovy',
    name: 'Krovy a tesařské práce',
    short: 'Tesařské konstrukce a vazby pro nové stavby i rekonstrukce.',
    detail: {
      seoTitle: 'Krovy a tesařské práce Vyškov, Bučovice, Slavkov | Střechy Zeman',
      seoDescription:
        'Tesařské konstrukce a vazby pro nové stavby i rekonstrukce v Brně, na Vyškovsku a v celém Jihomoravském kraji. Nezávazná cenová nabídka. Tel. 728 349 241.',
      h1: 'Krovy a tesařské práce',
      intro:
        'Stavíte nový dům nebo chystáte rekonstrukci? Postavíme vám tesařské konstrukce a vazby. Pracujeme v Brně, Vyškově, Bučovicích, Slavkově u Brna a v celém Jihomoravském kraji.',
      image: {
        src: '/images/krovy.webp',
        alt: 'Dřevěný krov střechy',
        width: 1000,
        height: 666,
      },
      sections: [
        {
          title: 'Co děláme',
          items: [
            'tesařské konstrukce a vazby pro nové stavby i rekonstrukce',
            'krov jako součást nové střechy na klíč',
          ],
        },
        {
          title: 'Co ovlivňuje podobu krovu',
          items: [
            'tvar a rozpětí střechy',
            'váha zvolené krytiny',
            'zatížení sněhem a větrem',
            'využití podkroví',
          ],
        },
        {
          title: 'Proč na krovu tolik záleží',
          text: 'Krov nese krytinu, sníh i nápor větru. Proto se navrhuje na míru domu, krytině i zatížení v daném místě.',
        },
      ],
      steps: [
        { title: 'Ozvete se nám', text: 'Zavoláte nebo napíšete, co potřebujete. Pokud máte projekt, pošlete nám ho.' },
        { title: 'Projdeme projekt a stavbu', text: 'Podíváme se na projekt nebo přímo na stavbu.' },
        { title: 'Domluvíme rozsah a cenu', text: 'Řekneme vám, co je potřeba udělat, a dáme vám nezávaznou cenovou nabídku.' },
        { title: 'Krov postavíme', text: 'Postavíme krov podle toho, co jsme společně domluvili.' },
      ],
      faq: [
        {
          question: 'Co je vazba krovu?',
          answer:
            'Vazba je příčná nosná sestava trámů, která se v krovu pravidelně opakuje. Do zdí domu přenáší váhu krytiny i zatížení sněhem a větrem.',
        },
        {
          question: 'Kdy se mám ozvat?',
          answer:
            'Co nejdřív, ideálně ještě před začátkem stavby nebo rekonstrukce. Krov navazuje na další práce na domě, takže je dobré domluvit termín dopředu.',
        },
        {
          question: 'Unese můj krov těžší krytinu?',
          answer:
            'Záleží na jeho stavu a konstrukci. Ozvěte se ještě před výběrem krytiny, probereme to.',
        },
        {
          question: 'Kolik krov stojí?',
          answer:
            'Cena závisí na velikosti a tvaru střechy a na rozsahu prací. Po prohlídce nebo nad projektem vám dáme nezávaznou cenovou nabídku.',
        },
      ],
      ctaTitle: 'Potřebujete krov nebo tesaře?',
    },
  },
  {
    slug: 'klempirske-prace',
    name: 'Klempířství a okapy',
    short: 'Klempířské práce, montáž a oprava okapů.',
    detail: {
      seoTitle: 'Klempíř a okapy Vyškov, Bučovice, Slavkov | Střechy Zeman',
      seoDescription:
        'Klempířské práce, montáž a oprava okapů a oplechování v Brně, na Vyškovsku a v celém Jihomoravském kraji. Nezávazná cenová nabídka. Tel. 728 349 241.',
      h1: 'Klempířství a okapy',
      intro:
        'Teče vám voda přes okap nebo je poškozené oplechování? Postaráme se o klempířské práce, montáž i opravy okapů. Pracujeme v Brně, Vyškově, Bučovicích, Slavkově u Brna a v celém Jihomoravském kraji.',
      image: {
        src: '/images/realizace-slavkov-dvur.webp',
        alt: 'Taškové střechy s oplechováním komína a střešních oken ve Slavkově u Brna',
        width: 800,
        height: 600,
      },
      sections: [
        {
          title: 'Co děláme',
          items: [
            'okapy a svody: montáž a oprava',
            'oplechování komínů a okapních hran',
            'úžlabí a závětrné lišty',
            'klempířské prvky u nových střech i rekonstrukcí',
          ],
        },
        {
          title: 'Kdy volat klempíře',
          items: [
            'voda přetéká přes okap',
            'okap je prohnutý, děravý nebo odpojený',
            'ze spojů kape',
            'oplechování kolem komína je uvolněné',
            'na fasádě pod okapem jsou mokré skvrny',
          ],
        },
        {
          title: 'Proč jsou okapy důležité',
          text: 'Okapy a oplechování odvádějí vodu pryč od domu. Když nefungují, voda stéká po fasádě, vsakuje se do zdí a může zatékat do střechy. Oprava okapu je přitom mnohem menší zásah než pozdější oprava fasády nebo střechy.',
        },
      ],
      steps: [
        { title: 'Ozvete se nám', text: 'Zavoláte nebo napíšete, co se děje. Pomůže i fotka z mobilu.' },
        { title: 'Prohlédneme okapy a oplechování', text: 'Zjistíme, proč voda neodtéká, jak má.' },
        { title: 'Domluvíme rozsah a cenu', text: 'Řekneme vám, co je potřeba udělat, a dáme vám nezávaznou cenovou nabídku.' },
        { title: 'Práci provedeme', text: 'Provedeme, co jsme společně domluvili.' },
      ],
      faq: [
        {
          question: 'Proč voda přetéká přes okap?',
          answer:
            'Nejčastěji je okap ucpaný listím nebo má špatný spád. Někdy je také příliš malý na plochu střechy, ze které vodu sbírá.',
        },
        {
          question: 'Jak často se mají čistit okapy?',
          answer: 'Alespoň jednou ročně, nejlépe na podzim po opadání listí. Když jsou u domu stromy, i častěji.',
        },
        {
          question: 'Stačí opravit kus okapu, nebo je potřeba vyměnit celý?',
          answer: 'Záleží na jeho stavu. Když je zbytek v pořádku, dají se vyměnit jen poškozené části.',
        },
        {
          question: 'Kolik stojí oprava okapů?',
          answer:
            'Cena závisí na délce okapů, materiálu a přístupu. Po prohlídce vám dáme nezávaznou cenovou nabídku.',
        },
      ],
      ctaTitle: 'Potřebujete klempíře?',
    },
  },
];

export const CITIES: City[] = [
  {
    slug: 'strechy-slavkov-u-brna',
    name: 'Slavkov u Brna',
    locative: 've Slavkově u Brna',
    galleryMatch: 'Slavkov',
    seoTitle: 'Pokrývač Slavkov u Brna, střechy a opravy | Střechy Zeman',
    seoDescription:
      'Pokrývač a tesař pro Slavkov u Brna a okolí. Nové střechy, rekonstrukce a opravy zatékání. Sídlíme kousek od Slavkova, v Křižanovicích. Tel. 728 349 241.',
    h1: 'Střechy Slavkov u Brna',
    intro:
      'Hledáte pokrývače ve Slavkově u Brna? Sídlíme pár kilometrů odtud, v Křižanovicích, a ve Slavkově už jsme střechy dělali. Stavíme nové, rekonstruujeme staré a opravujeme ty, do kterých zatéká.',
    sections: [
      {
        title: 'Starší domy ve Slavkově',
        text: 'U starších domů bývá pod krytinou hůř, než je zvenku vidět. Chybí pojistná fólie, latě dosluhují a krov může mít za sebou roky drobného zatékání. Proto si střechu před opravou prohlédneme a teprve potom navrhneme, co s ní.',
      },
      {
        title: 'Dům v památkové zóně',
        text: 'Historické jádro Slavkova je městskou památkovou zónou. Pokud v ní váš dům leží, je ke změně střechy zpravidla potřeba závazné stanovisko památkové péče. Zeptejte se proto na stavebním úřadě ještě před výběrem krytiny.',
      },
    ],
  },
  {
    slug: 'strechy-krizanovice',
    name: 'Křižanovice',
    locative: 'v Křižanovicích',
    galleryMatch: 'Křižanovice',
    seoTitle: 'Pokrývač a tesař Křižanovice, Bučovice | Střechy Zeman',
    seoDescription:
      'Pokrývač a tesař přímo z Křižanovic. Nové střechy na klíč, rekonstrukce, opravy zatékání, krovy a klempířské práce v Křižanovicích a okolí. Tel. 728 349 241.',
    h1: 'Střechy Křižanovice',
    intro:
      'V Křižanovicích sídlíme, takže k vám to máme nejblíž. Stavíme nové střechy, rekonstruujeme staré, opravujeme ty, do kterých zatéká, a děláme krovy i klempířské práce.',
    sections: [
      {
        title: 'Kde nás najdete',
        text: 'Sídlo máme na adrese Křižanovice 273, mezi Bučovicemi a Slavkovem u Brna. Kromě Křižanovic pracujeme i v okolních obcích a v celém Jihomoravském kraji.',
      },
      {
        title: 'Kdy se na střechu podívat',
        text: 'Nejvíc škod na střeše se ukáže po zimě a po silném větru. Když si všimnete posunuté tašky, uvolněného plechu nebo mokré skvrny pod střechou, ozvěte se. Včas nalezená závada obvykle znamená menší opravu.',
      },
    ],
  },
];
