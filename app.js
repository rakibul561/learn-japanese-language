const lessonsData = [
    {
        id: 1, title: "Lesson 1",
        data: [
            { id: 1, japanese: "わたし", romaji: "watashi", bangla: "আমি" },
            { id: 2, japanese: "あなた", romaji: "anata", bangla: "তুমি" },
            { id: 3, japanese: "あのひと", romaji: "ano hito", bangla: "সে" },
            { id: 4, japanese: "あのかた", romaji: "ano kata", bangla: "সে (সম্মানসূচক)" },
            { id: 5, japanese: "さん", romaji: "san", bangla: "জনাব (বড়দের ক্ষেত্রে)" },
            { id: 6, japanese: "ちゃん", romaji: "chan", bangla: "জনাব (ছোটদের ক্ষেত্রে)" },
            { id: 7, japanese: "じん", romaji: "jin", bangla: "জাতীয়তা" },
            { id: 8, japanese: "せんせい", romaji: "sensei", bangla: "শিক্ষক" },
            { id: 9, japanese: "きょうし", romaji: "kyoshi", bangla: "শিক্ষক" },
            { id: 10, japanese: "がくせい", romaji: "gakusei", bangla: "ছাত্র" },
            { id: 11, japanese: "かいしゃいん", romaji: "kaishain", bangla: "কোম্পানির চাকরিজীবী" },
            { id: 12, japanese: "しゃいん", romaji: "shain", bangla: "চাকরিজীবী" },
            { id: 13, japanese: "ぎんこういん", romaji: "ginkoin", bangla: "ব্যাংকার" },
            { id: 14, japanese: "いしゃ", romaji: "isha", bangla: "ডাক্তার" },
            { id: 15, japanese: "けんきゅうしゃ", romaji: "kenkyusha", bangla: "গবেষক" },
            { id: 16, japanese: "だいがく", romaji: "daigaku", bangla: "বিশ্ববিদ্যালয়" },
            { id: 17, japanese: "びょういん", romaji: "byoin", bangla: "হাসপাতাল" },
            { id: 18, japanese: "だれ", romaji: "dare", bangla: "কে" },
            { id: 19, japanese: "どなた", romaji: "donata", bangla: "কে (সম্মানসূচক)" },
            { id: 20, japanese: "さい", romaji: "sai", bangla: "বয়স" },
            { id: 21, japanese: "なんさい", romaji: "nan sai", bangla: "বয়স কত" },
            { id: 22, japanese: "はい", romaji: "hai", bangla: "হ্যাঁ" },
            { id: 23, japanese: "いいえ", romaji: "iie", bangla: "না" }
        ]
    },
    {
        id: 2, title: "Lesson 2",
        data: [
            { id: 1, japanese: "これ", romaji: "kore", bangla: "এটা" },
            { id: 2, japanese: "それ", romaji: "sore", bangla: "সেটা" },
            { id: 3, japanese: "あれ", romaji: "are", bangla: "ওটা" },
            { id: 4, japanese: "どれ", romaji: "dore", bangla: "কোনটা" },
            { id: 5, japanese: "この", romaji: "kono", bangla: "এই" },
            { id: 6, japanese: "その", romaji: "sono", bangla: "সেই" },
            { id: 7, japanese: "あの", romaji: "ano", bangla: "ঐ" },
            { id: 8, japanese: "どの", romaji: "dono", bangla: "কোন" },
            { id: 9, japanese: "ほん", romaji: "hon", bangla: "বই" },
            { id: 10, japanese: "じしょ", romaji: "jisho", bangla: "অভিধান" },
            { id: 11, japanese: "ざっし", romaji: "zasshi", bangla: "পত্রিকা" },
            { id: 12, japanese: "しんぶん", romaji: "shinbun", bangla: "পত্রিকা" },
            { id: 13, japanese: "ノート", romaji: "noto", bangla: "নোটবুক" },
            { id: 14, japanese: "てちょう", romaji: "techo", bangla: "ব্যক্তিগত নোটবুক" },
            { id: 15, japanese: "めいし", romaji: "meishi", bangla: "বিজনেস কার্ড" },
            { id: 16, japanese: "カード", romaji: "kado", bangla: "কার্ড" },
            { id: 17, japanese: "えんぴつ", romaji: "enpitsu", bangla: "পেন্সিল" },
            { id: 18, japanese: "ボールペン", romaji: "borupen", bangla: "বলপেন" },
            { id: 19, japanese: "シャープペンシル", romaji: "shapu-penshiru", bangla: "মেকানিক্যাল পেন্সিল" },
            { id: 20, japanese: "かぎ", romaji: "kagi", bangla: "চাবি" },
            { id: 21, japanese: "とけい", romaji: "tokei", bangla: "ঘড়ি" },
            { id: 22, japanese: "かさ", romaji: "kasa", bangla: "ছাতা" },
            { id: 23, japanese: "かばん", romaji: "kaban", bangla: "ব্যাগ" },
            { id: 24, japanese: "テレビ", romaji: "terebi", bangla: "টেলিভিশন" },
            { id: 25, japanese: "ラジオ", romaji: "rajio", bangla: "রেডিও" },
            { id: 26, japanese: "カメラ", romaji: "kamera", bangla: "ক্যামেরা" },
            { id: 27, japanese: "コンピュータ", romaji: "konpyuta", bangla: "কম্পিউটার" },
            { id: 28, japanese: "くるま", romaji: "kuruma", bangla: "গাড়ি" },
            { id: 29, japanese: "つくえ", romaji: "tsukue", bangla: "টেবিল" },
            { id: 30, japanese: "いす", romaji: "isu", bangla: "চেয়ার" },
            { id: 31, japanese: "みやげ", romaji: "miyage", bangla: "উপহার" },
            { id: 32, japanese: "えいご", romaji: "eigo", bangla: "ইংরেজি ভাষা" },
            { id: 33, japanese: "にほんご", romaji: "nihon-go", bangla: "জাপানি ভাষা" },
            { id: 34, japanese: "ご", romaji: "go", bangla: "ভাষা" },
            { id: 35, japanese: "なん", romaji: "nan", bangla: "কি?" },
            { id: 36, japanese: "そう", romaji: "so", bangla: "তাই" }
        ]
    },
    {
        id: 3, title: "Lesson 3",
        data: [
            { "id": 1, "japanese": "ここ", "romaji": "koko", "bangla": "এখানে" },
            { "id": 2, "japanese": "そこ", "romaji": "soko", "bangla": "সেখানে" },
            { "id": 3, "japanese": "あそこ", "romaji": "asoko", "bangla": "ঐখানে" },
            { "id": 4, "japanese": "どこ", "romaji": "doko", "bangla": "কোথায়" },
            { "id": 5, "japanese": "こちら", "romaji": "kochira", "bangla": "এদিকে" },
            { "id": 6, "japanese": "そちら", "romaji": "sochira", "bangla": "সেদিকে" },
            { "id": 7, "japanese": "あちら", "romaji": "achira", "bangla": "ঐদিকে" },
            { "id": 8, "japanese": "どちら", "romaji": "dochira", "bangla": "কোনদিকে" },
            { "id": 9, "japanese": "きょうしつ", "romaji": "kyoshitsu", "bangla": "শ্রেণিকক্ষ" },
            { "id": 10, "japanese": "しょくどう", "romaji": "shokudo", "bangla": "খাবার ঘর" },
            { "id": 11, "japanese": "じむしょ", "romaji": "jimusho", "bangla": "কার্যালয়" },
            { "id": 12, "japanese": "かいぎしつ", "romaji": "kaigishitsu", "bangla": "সভাকক্ষ" },
            { "id": 13, "japanese": "うけつけ", "romaji": "uketsuke", "bangla": "অভ্যর্থনা ডেস্ক" },
            { "id": 14, "japanese": "ロビー", "romaji": "robi", "bangla": "লবি" },
            { "id": 15, "japanese": "へや", "romaji": "heya", "bangla": "কক্ষ" },
            { "id": 16, "japanese": "トイレ", "romaji": "toire", "bangla": "টয়লেট" },
            { "id": 17, "japanese": "かいだん", "romaji": "kaidan", "bangla": "সিঁড়ি" },
            { "id": 18, "japanese": "エレベーター", "romaji": "erebeta", "bangla": "লিফট" },
            { "id": 19, "japanese": "エスカレーター", "romaji": "esukareta", "bangla": "এসকেলেটর" },
            { "id": 20, "japanese": "じどうはんばいき", "romaji": "jido-hanbaiki", "bangla": "অটোমেটিক বিক্রয় মেশিন" },
            { "id": 21, "japanese": "でんわ", "romaji": "denwa", "bangla": "টেলিফোন" },
            { "id": 22, "japanese": "くに", "romaji": "kuni", "bangla": "দেশ" },
            { "id": 23, "japanese": "かいしゃ", "romaji": "kaisha", "bangla": "কোম্পানি" },
            { "id": 24, "japanese": "うち", "romaji": "uchi", "bangla": "ঘর" },
            { "id": 25, "japanese": "くつ", "romaji": "kutsu", "bangla": "জুতা" },
            { "id": 26, "japanese": "ネクタイ", "romaji": "nekutai", "bangla": "টাই" },
            { "id": 27, "japanese": "ワイン", "romaji": "wain", "bangla": "ওয়াইন" },
            { "id": 28, "japanese": "うরিবা", "romaji": "uriba", "bangla": "কাউন্টার" },
            { "id": 29, "japanese": "ちか", "romaji": "chika", "bangla": "ভূগর্ভ" },
            { "id": 30, "japanese": "かい", "romaji": "kai", "bangla": "তলা" },
            { "id": 31, "japanese": "がい", "romaji": "gai", "bangla": "তলা" },
            { "id": 32, "japanese": "なんがい", "romaji": "nan-gai", "bangla": "কত তলা" },
            { "id": 33, "japanese": "えん", "romaji": "en", "bangla": "ইয়েন (মুদ্রা)" },
            { "id": 34, "japanese": "いくら", "romaji": "ikura", "bangla": "দাম কত" },
            { "id": 35, "japanese": "ひゃく", "romaji": "hyaku", "bangla": "শত" },
            { "id": 36, "japanese": "せん", "romaji": "sen", "bangla": "হাজার" },
            { "id": 37, "japanese": "まん", "romaji": "man", "bangla": "দশ হাজার" },
            { "id": 38, "japanese": "ふん / ぷん", "romaji": "fun / pun", "bangla": "মিনিট" },
            { "id": 39, "japanese": "はん", "romaji": "han", "bangla": "অর্ধ" },
            { "id": 40, "japanese": "なんじ", "romaji": "nan ji", "bangla": "কয়টা বাজে" },
            { "id": 41, "japanese": "なんぷん", "romaji": "nan pun", "bangla": "কত মিনিট" },
            { "id": 42, "japanese": "ごぜん", "romaji": "gozen", "bangla": "সকাল (a.m.)" },
            { "id": 43, "japanese": "ごご", "romaji": "gogo", "bangla": "দুপুর (p.m.)" },
            { "id": 44, "japanese": "あさ", "romaji": "asa", "bangla": "সকাল" },
            { "id": 45, "japanese": "ひる", "romaji": "hiru", "bangla": "দুপুর" },
            { "id": 46, "japanese": "ばん / よる", "romaji": "ban / yoru", "bangla": "সন্ধ্যা / রাত" },
            { "id": 47, "japanese": "おととい", "romaji": "ototoi", "bangla": "গত পরশু" },
            { "id": 48, "japanese": "きのう", "romaji": "kino", "bangla": "গতকাল" },
            { "id": 49, "japanese": "きょう", "romaji": "kyo", "bangla": "আজ" },
            { "id": 50, "japanese": "あした", "romaji": "ashita", "bangla": "আগামীকাল" },
            { "id": 51, "japanese": "あさって", "romaji": "asatte", "bangla": "আগামী পরশু" },
            { "id": 52, "japanese": "けさ", "romaji": "kesa", "bangla": "আজ সকাল" },
            { "id": 53, "japanese": "こんばん", "romaji": "konban", "bangla": "আজ রাত" },
            { "id": 54, "japanese": "やすみ", "romaji": "yasumi", "bangla": "ছুটি" },
            { "id": 55, "japanese": "ひるやすみ", "romaji": "hiruyasumi", "bangla": "দুপুরের ছুটি" },
            { "id": 56, "japanese": "しけん", "romaji": "shiken", "bangla": "পরীক্ষা" },
            { "id": 57, "japanese": "かいぎ", "romaji": "kaigi", "bangla": "সভা" },
            { "id": 58, "japanese": "えいが", "romaji": "eiga", "bangla": "ছবি" },
            { "id": 59, "japanese": "まいあさ", "romaji": "maiasa", "bangla": "প্রতিদিন সকাল" },
            { "id": 60, "japanese": "まいばん", "romaji": "maiban", "bangla": "প্রতিদিন রাত" },
            { "id": 61, "japanese": "まいにち", "romaji": "mainichi", "bangla": "প্রতিদিন" },
            { "id": 62, "japanese": "げつようび", "romaji": "getsuyobi", "bangla": "সোমবার" },
            { "id": 63, "japanese": "かようび", "romaji": "kayobi", "bangla": "মঙ্গলবার" },
            { "id": 64, "japanese": "すいようび", "romaji": "suiyobi", "bangla": "বুধবার" },
            { "id": 65, "japanese": "もくようび", "romaji": "mokuyobi", "bangla": "বৃহস্পতিবার" },
            { "id": 66, "japanese": "きんようび", "romaji": "kinyobi", "bangla": "শুক্রবার" },
            { "id": 67, "japanese": "どようび", "romaji": "doyobi", "bangla": "শনিবার" },
            { "id": 68, "japanese": "にちようび", "romaji": "nichiyobi", "bangla": "রবিবার" },
            { "id": 69, "japanese": "なんようび", "romaji": "nan-yobi", "bangla": "কি বার" },
            { "id": 70, "japanese": "から", "romaji": "kara", "bangla": "থেকে" },
            { "id": 71, "japanese": "まで", "romaji": "made", "bangla": "পর্যন্ত" },
            { "id": 72, "japanese": "と", "romaji": "to", "bangla": "এবং" }
        ]
    },
    {
        id: 4, title: "Lesson 4",
        data: [
            { "id": 1, "japanese": "おきます", "romaji": "okimasu", "bangla": "ঘুম থেকে জাগা" },
            { "id": 2, "japanese": "ねます", "romaji": "nemasu", "bangla": "ঘুমানো" },
            { "id": 3, "japanese": "はたらきます", "romaji": "hatarakimasu", "bangla": "কাজ করা" },
            { "id": 4, "japanese": "やすみます", "romaji": "yasumimasu", "bangla": "বিশ্রাম করা" },
            { "id": 5, "japanese": "べんきょうします", "romaji": "benkyo-shimasu", "bangla": "লেখাপড়া করা" },
            { "id": 6, "japanese": "おわります", "romaji": "owarimasu", "bangla": "শেষ" },
            { "id": 7, "japanese": "デパート", "romaji": "depato", "bangla": "ডিপার্টমেন্ট স্টোর" },
            { "id": 8, "japanese": "ぎんこう", "romaji": "ginko", "bangla": "ব্যাংক" },
            { "id": 9, "japanese": "ゆうびんきょく", "romaji": "yubinkyoku", "bangla": "ডাকঘর" },
            { "id": 10, "japanese": "としょかん", "romaji": "toshokan", "bangla": "লাইব্রেরি" },
            { "id": 11, "japanese": "びじゅつかん", "romaji": "bijutsukan", "bangla": "চিত্রশালা" },
            { "id": 12, "japanese": "いま", "romaji": "ima", "bangla": "এখন" },
            { "id": 13, "japanese": "じ", "romaji": "ji", "bangla": "টা (ঘন্টা)" },
            { "id": 14, "japanese": "ふん / ぷん", "romaji": "fun / pun", "bangla": "মিনিট" },
            { "id": 15, "japanese": "はん", "romaji": "han", "bangla": "আধা" },
            { "id": 16, "japanese": "なんじ", "romaji": "nan ji", "bangla": "কটা বাজে" },
            { "id": 17, "japanese": "なんぷん", "romaji": "nan-pun", "bangla": "কত মিনিট" },
            { "id": 18, "japanese": "ごぜん", "romaji": "gozen", "bangla": "সকাল (a.m)" },
            { "id": 19, "japanese": "ごご", "romaji": "gogo", "bangla": "বিকাল (p.m)" },
            { "id": 20, "japanese": "あさ", "romaji": "asa", "bangla": "সকাল" },
            { "id": 21, "japanese": "ひる", "romaji": "hiru", "bangla": "দুপুর" },
            { "id": 22, "japanese": "ばん / よる", "romaji": "ban / yoru", "bangla": "সন্ধ্যা/রাত" },
            { "id": 23, "japanese": "おととい", "romaji": "ototoi", "bangla": "গত পরশু" },
            { "id": 24, "japanese": "きのう", "romaji": "kino", "bangla": "গতকাল" },
            { "id": 25, "japanese": "きょう", "romaji": "kyo", "bangla": "আজ" },
            { "id": 26, "japanese": "あした", "romaji": "ashita", "bangla": "আগামীকাল" },
            { "id": 27, "japanese": "あさって", "romaji": "asatte", "bangla": "আগামী পরশু" },
            { "id": 28, "japanese": "けさ", "romaji": "kesa", "bangla": "আজ সকাল" },
            { "id": 29, "japanese": "こんばん", "romaji": "konban", "bangla": "আজ রাত" },
            { "id": 30, "japanese": "やすみ", "romaji": "yasumi", "bangla": "ছুটি" },
            { "id": 31, "japanese": "ひるやすみ", "romaji": "hiruyasumi", "bangla": "দুপুরের ছুটি" },
            { "id": 32, "japanese": "しけん", "romaji": "shiken", "bangla": "পরীক্ষা" },
            { "id": 33, "japanese": "かいぎ", "romaji": "kaigi", "bangla": "সভা" },
            { "id": 34, "japanese": "えいが", "romaji": "eiga", "bangla": "ছবি" },
            { "id": 35, "japanese": "まいあさ", "romaji": "maiasa", "bangla": "প্রতিদিন সকাল" },
            { "id": 36, "japanese": "まいばん", "romaji": "maiban", "bangla": "প্রতিদিন রাত" },
            { "id": 37, "japanese": "まいにち", "romaji": "mainichi", "bangla": "প্রতিদিন" },
            { "id": 38, "japanese": "げつようび", "romaji": "getsu-yobi", "bangla": "সোমবার" },
            { "id": 39, "japanese": "かようび", "romaji": "ka-yobi", "bangla": "মঙ্গলবার" },
            { "id": 40, "japanese": "すいようび", "romaji": "sui-yobi", "bangla": "বুধবার" },
            { "id": 41, "japanese": "もくようび", "romaji": "moku-yobi", "bangla": "বৃহস্পতিবার" },
            { "id": 42, "japanese": "きんようび", "romaji": "kin-yobi", "bangla": "শুক্রবার" },
            { "id": 43, "japanese": "どようび", "romaji": "do-yobi", "bangla": "শনিবার" },
            { "id": 44, "japanese": "にちようび", "romaji": "nichi-yobi", "bangla": "রবিবার" },
            { "id": 45, "japanese": "なんようび", "romaji": "nan-yobi", "bangla": "কি বার" },
            { "id": 46, "japanese": "から", "romaji": "kara", "bangla": "হতে / থেকে" },
            { "id": 47, "japanese": "まで", "romaji": "made", "bangla": "পর্যন্ত" },
            { "id": 48, "japanese": "と", "romaji": "to", "bangla": "এবং" }
        ]
    },
    {
        id: 5, title: "Lesson 5",
        data: [
            { "id": 1, "japanese": "いきます", "romaji": "ikimasu", "bangla": "যাওয়া" },
            { "id": 2, "japanese": "きます", "romaji": "kimasu", "bangla": "আসা" },
            { "id": 3, "japanese": "かえります", "romaji": "kaerimasu", "bangla": "ফিরে আসা" },
            { "id": 4, "japanese": "がっこう", "romaji": "gakko", "bangla": "বিদ্যালয়" },
            { "id": 5, "japanese": "スーパー", "romaji": "supa", "bangla": "সুপার মার্কেট" },
            { "id": 6, "japanese": "えき", "romaji": "eki", "bangla": "স্টেশন" },
            { "id": 7, "japanese": "ひこうき", "romaji": "hikoki", "bangla": "বিমান" },
            { "id": 8, "japanese": "ふね", "romaji": "fune", "bangla": "জাহাজ" },
            { "id": 9, "japanese": "でんしゃ", "romaji": "densha", "bangla": "ইলেকট্রিক ট্রেন" },
            { "id": 10, "japanese": "ちかてつ", "romaji": "chikatetsu", "bangla": "মাটির নিচের ট্রেন" },
            { "id": 11, "japanese": "しんかんせん", "romaji": "shinkansen", "bangla": "বুলেট ট্রেন" },
            { "id": 12, "japanese": "バス", "romaji": "basu", "bangla": "বাস" },
            { "id": 13, "japanese": "タクシー", "romaji": "takushi", "bangla": "ট্যাক্সি" },
            { "id": 14, "japanese": "じてんしゃ", "romaji": "jitensha", "bangla": "বাইসাইকেল" },
            { "id": 15, "japanese": "あるいて", "romaji": "aruite", "bangla": "পায়ে হেঁটে" },
            { "id": 16, "japanese": "ひと", "romaji": "hito", "bangla": "ব্যক্তি" },
            { "id": 17, "japanese": "ともだち", "romaji": "tomodachi", "bangla": "বন্ধু" },
            { "id": 18, "japanese": "かれ", "romaji": "kare", "bangla": "ছেলে বন্ধু" },
            { "id": 19, "japanese": "かのじょ", "romaji": "kanojo", "bangla": "মেয়ে বন্ধু" },
            { "id": 20, "japanese": "かぞく", "romaji": "kazoku", "bangla": "পরিবার" },
            { "id": 21, "japanese": "ひとりで", "romaji": "hitori de", "bangla": "একাই" },
            { "id": 22, "japanese": "せんしゅう", "romaji": "senshu", "bangla": "গত সপ্তাহ" },
            { "id": 23, "japanese": "こんしゅう", "romaji": "konshu", "bangla": "এই সপ্তাহ" },
            { "id": 24, "japanese": "らいしゅう", "romaji": "raishu", "bangla": "আগামী সপ্তাহ" },
            { "id": 25, "japanese": "せんげつ", "romaji": "sengetsu", "bangla": "গত মাস" },
            { "id": 26, "japanese": "こんげつ", "romaji": "kongetsu", "bangla": "এই মাস" },
            { "id": 27, "japanese": "らいげつ", "romaji": "raigetsu", "bangla": "আগামী মাস" },
            { "id": 28, "japanese": "きょねん", "romaji": "kyonen", "bangla": "গত বছর" },
            { "id": 29, "japanese": "ことし", "romaji": "kotoshi", "bangla": "এই বছর" },
            { "id": 30, "japanese": "らいねん", "romaji": "rainen", "bangla": "আগামী বছর" },
            { "id": 31, "japanese": "ねん", "romaji": "nen", "bangla": "বছর" },
            { "id": 32, "japanese": "なんねん", "romaji": "nan nen", "bangla": "কত বছর" },
            { "id": 33, "japanese": "がつ", "romaji": "gatsu", "bangla": "মাস" },
            { "id": 34, "japanese": "いちにち", "romaji": "ichinichi", "bangla": "একদিন" },
            { "id": 35, "japanese": "ついたち", "romaji": "tsuitachi", "bangla": "মাসের ১ম দিন" },
            { "id": 36, "japanese": "ふつか", "romaji": "futsuka", "bangla": "২ তারিখ" },
            { "id": 37, "japanese": "みっか", "romaji": "mikka", "bangla": "৩ তারিখ" },
            { "id": 38, "japanese": "よっか", "romaji": "yokka", "bangla": "৪ তারিখ" },
            { "id": 39, "japanese": "いつか", "romaji": "itsuka", "bangla": "৫ তারিখ" },
            { "id": 40, "japanese": "むいか", "romaji": "muika", "bangla": "৬ তারিখ" },
            { "id": 41, "japanese": "なのか", "romaji": "nanoka", "bangla": "৭ তারিখ" },
            { "id": 42, "japanese": "ようか", "romaji": "yoka", "bangla": "৮ তারিখ" },
            { "id": 43, "japanese": "ここのか", "romaji": "kokonoka", "bangla": "৯ তারিখ" },
            { "id": 44, "japanese": "とおか", "romaji": "toka", "bangla": "১০ তারিখ" },
            { "id": 45, "japanese": "じゅうよっか", "romaji": "ju yokka", "bangla": "১৪ তারিখ" },
            { "id": 46, "japanese": "はつか", "romaji": "hatsuka", "bangla": "২০ তারিখ" },
            { "id": 47, "japanese": "にじゅうよっか", "romaji": "ni ju yokka", "bangla": "২৪ তারিখ" },
            { "id": 48, "japanese": "にち", "romaji": "nichi", "bangla": "দিন" },
            { "id": 49, "japanese": "なんにち", "romaji": "nan nichi", "bangla": "কত দিন / কত তারিখ" },
            { "id": 50, "japanese": "いつ", "romaji": "itsu", "bangla": "কখন" },
            { "id": 51, "japanese": "たんじょうび", "romaji": "tanjobi", "bangla": "জন্মদিন" }
        ]
    },
    {
        id: 6, title: "Lesson 6",
        data: [
            { "id": 1, "japanese": "たべます", "romaji": "tabemasu", "bangla": "খাই" },
            { "id": 2, "japanese": "のみます", "romaji": "nomimasu", "bangla": "পান করা" },
            { "id": 3, "japanese": "すいます", "romaji": "suimasu", "bangla": "ধূমপান করা" },
            { "id": 4, "japanese": "みます", "romaji": "mimasu", "bangla": "দেখা" },
            { "id": 5, "japanese": "ききます", "romaji": "kikimasu", "bangla": "শোনা" },
            { "id": 6, "japanese": "よみます", "romaji": "yomimasu", "bangla": "পড়া" },
            { "id": 7, "japanese": "かきます", "romaji": "kakimasu", "bangla": "লেখা" },
            { "id": 8, "japanese": "かいます", "romaji": "kaimasu", "bangla": "কেনা" },
            { "id": 9, "japanese": "とります", "romaji": "torimasu", "bangla": "তোলা" },
            { "id": 10, "japanese": "します", "romaji": "shimasu", "bangla": "করা" },
            { "id": 11, "japanese": "あります", "romaji": "arimasu", "bangla": "আছে (জড় বস্তু)" },
            { "id": 12, "japanese": "ごはん", "romaji": "gohan", "bangla": "খাবার" },
            { "id": 13, "japanese": "あさごはん", "romaji": "asagohan", "bangla": "সকালের খাবার" },
            { "id": 14, "japanese": "ひるごはん", "romaji": "hirugohan", "bangla": "দুপুরের খাবার" },
            { "id": 15, "japanese": "ばんごはん", "romaji": "bangohan", "bangla": "রাতের খাবার" },
            { "id": 16, "japanese": "パン", "romaji": "pan", "bangla": "রুটি" },
            { "id": 17, "japanese": "たまご", "romaji": "tamago", "bangla": "ডিম" },
            { "id": 18, "japanese": "にく", "romaji": "niku", "bangla": "মাংস" },
            { "id": 19, "japanese": "さかな", "romaji": "sakana", "bangla": "মাছ" },
            { "id": 20, "japanese": "やさい", "romaji": "yasai", "bangla": "শাক-সবজি" },
            { "id": 21, "japanese": "くだもの", "romaji": "kudamono", "bangla": "ফল" },
            { "id": 22, "japanese": "みず", "romaji": "mizu", "bangla": "পানি" },
            { "id": 23, "japanese": "おちゃ", "romaji": "ocha", "bangla": "চা" },
            { "id": 24, "japanese": "こうちゃ", "romaji": "kocha", "bangla": "কালো চা" },
            { "id": 25, "japanese": "ぎゅうにゅう", "romaji": "gyunyu", "bangla": "গরুর দুধ" },
            { "id": 26, "japanese": "ジュース", "romaji": "jusu", "bangla": "শরবত" },
            { "id": 27, "japanese": "ビール", "romaji": "biiru", "bangla": "বিয়ার" },
            { "id": 28, "japanese": "さけ", "romaji": "sake", "bangla": "মদ" },
            { "id": 29, "japanese": "たばこ", "romaji": "tabako", "bangla": "সিগারেট" },
            { "id": 30, "japanese": "てがみ", "romaji": "tegami", "bangla": "চিঠি" },
            { "id": 31, "japanese": "レポート", "romaji": "repoto", "bangla": "প্রতিবেদন" },
            { "id": 32, "japanese": "しゃしん", "romaji": "shashin", "bangla": "ছবি" },
            { "id": 33, "japanese": "ビデオ", "romaji": "bideo", "bangla": "ভিডিও" },
            { "id": 34, "japanese": "みせ", "romaji": "mise", "bangla": "দোকান" },
            { "id": 35, "japanese": "にわ", "romaji": "niwa", "bangla": "বাগান" },
            { "id": 36, "japanese": "しゅくだい", "romaji": "shukudai", "bangla": "বাড়ির কাজ" },
            { "id": 37, "japanese": "テニス", "romaji": "tenisu", "bangla": "টেনিস" },
            { "id": 38, "japanese": "サッカー", "romaji": "sakka", "bangla": "ফুটবল" },
            { "id": 39, "japanese": "おはなみ", "romaji": "ohanami", "bangla": "ফুল দেখা" },
            { "id": 40, "japanese": "なに", "romaji": "nani", "bangla": "কি" },
            { "id": 41, "japanese": "いっしょに", "romaji": "issho ni", "bangla": "একসাথে" },
            { "id": 42, "japanese": "ちょっと", "romaji": "chotto", "bangla": "অল্প" },
            { "id": 43, "japanese": "いつも", "romaji": "itsumo", "bangla": "সবসময়" },
            { "id": 44, "japanese": "ときどき", "romaji": "tokidoki", "bangla": "মাঝে মাঝে" },
            { "id": 45, "japanese": "それから", "romaji": "sorekara", "bangla": "তারপর" },
            { "id": 46, "japanese": "ええ", "romaji": "ee", "bangla": "হ্যাঁ" },
            { "id": 47, "japanese": "いいですね", "romaji": "ii desu ne", "bangla": "ভালোই" },
            { "id": 48, "japanese": "わかりました", "romaji": "wakarimashita", "bangla": "বুঝেছি" }
        ]
    }
];

// App State
let currentLesson = null;
let currentStep = 0;
let mode = 'learn'; // 'learn', 'builder', 'match', 'exam'
let score = 0;
let examWords = [];
let examStep = 0;
let matches = [];
let selectedMatch = null;
let voices = [];
let builderSelection = [];
let builderBank = [];

// Challenge Quiz State
let challengeWords = [];
let challengeStep = 0;
let challengeScore = 0;

const MASCOT_URL = 'learning_mascot_1776363887016.png';

// Initialize voices
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
}
window.speechSynthesis.onvoiceschanged = loadVoices;

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const lessonView = document.getElementById('lesson-view');
const challengeScreen = document.getElementById('challenge-screen');
const lessonGrid = document.getElementById('lesson-grid');
const gameContent = document.getElementById('game-content');
const progressBarFill = document.getElementById('progress-bar-fill');
const btnClose = document.getElementById('btn-close');
const navHome = document.getElementById('nav-home');
const navChallenge = document.getElementById('nav-challenge');

function switchView(view) {
    // If in a lesson, ask for confirmation
    if (!lessonView.classList.contains('hidden')) {
        showCustomConfirm('আপনি কি নিশ্চিত যে এই লেসনটি ছেড়ে যেতে চান?', () => {
            // Hide lesson view and proceed
            lessonView.classList.add('hidden');
            switchView(view);
        });
        return;
    }

    // Hide all views
    [homeScreen, lessonView, challengeScreen].forEach(el => el.classList.add('hidden'));
    [navHome, navChallenge].forEach(el => el.classList.remove('active'));

    if (view === 'home') {
        homeScreen.classList.remove('hidden');
        navHome.classList.add('active');
        initHome();
    } else if (view === 'challenge') {
        challengeScreen.classList.remove('hidden');
        navChallenge.classList.add('active');
        initChallenge();
    }
}

function initHome() {
    lessonGrid.innerHTML = '';
    lessonsData.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="lesson-num">Lesson ${lesson.id}</span>
            <h3>${lesson.title}</h3>
            <p>${lesson.data.length}টি শব্দ</p>
            <button class="btn-primary">শিখুন (Start)</button>
        `;
        card.onclick = () => startLesson(lesson.id);
        lessonGrid.appendChild(card);
    });
}

function startLesson(id) {
    // Deep copy and shuffle for randomization
    currentLesson = JSON.parse(JSON.stringify(lessonsData.find(l => l.id === id)));
    currentLesson.data.sort(() => Math.random() - 0.5);
    
    currentStep = 0;
    mode = 'learn';
    score = 0;
    matches = [];
    selectedMatch = null;
    
    homeScreen.classList.add('hidden');
    lessonView.classList.remove('hidden');
    renderGame();
}

function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const jaVoice = voices.find(v => v.lang.includes('ja') || v.lang.includes('JP'));
    if (jaVoice) utterance.voice = jaVoice;
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

function renderGame() {
    const totalLearn = currentLesson.data.length;
    const totalExam = 10;
    const maxSteps = (totalLearn * 2) + totalExam + 1;
    
    let progress = 0;
    if (mode === 'learn') progress = (currentStep / maxSteps) * 100;
    else if (mode === 'builder') progress = ((totalLearn + currentStep) / maxSteps) * 100;
    else if (mode === 'match') progress = ((totalLearn * 2) / maxSteps) * 100;
    else if (mode === 'exam') progress = ((totalLearn * 2 + 1 + examStep) / maxSteps) * 100;

    progressBarFill.style.width = `${progress}%`;

    const word = currentLesson.data[currentStep];

    if (mode === 'learn') {
        speak(word.japanese);
        gameContent.innerHTML = `
            <div class="game-container animate-slide">
                <div class="flashcard">
                    <span class="label">জাপানিজ শব্দ</span>
                    <button class="speak-btn" onclick="speak('${word.japanese}')">🔊</button>
                    <h1 class="jp-text">${word.japanese}</h1>
                    <p class="romaji-text">${word.romaji}</p>
                    <div class="bn-text">${word.bangla}</div>
                </div>
                <button class="btn-primary" onclick="nextStep()">পরবর্তী (Next)</button>
            </div>
        `;
    } else if (mode === 'builder') {
        const options = generateMCQOptions(word);
        gameContent.innerHTML = `
            <div class="game-container animate-slide">
                <h3 class="label-heading">সঠিক অর্থ বেছে নিন (Practice):</h3>
                <div class="jp-preview" onclick="speak('${word.japanese}')">
                    <h1>${word.japanese} 🔊</h1>
                    <p>${word.romaji}</p>
                </div>
                <div class="options-grid">
                    ${options.map(opt => `
                        <button class="option-btn" onclick="checkBuilderAnswer('${opt}', this)">${opt}</button>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (mode === 'match') {
        // ... (match logic remains same)
        const { jpItems, bnItems } = generateSplitMatchData();
        gameContent.innerHTML = `
            <div class="game-container animate-slide">
                <h2 class="question">মিল করুন (Match the Pairs)</h2>
                <div class="match-dual-columns">
                    <div class="match-column">
                        ${jpItems.map(item => `
                            <button id="match-jp-${item.id}" 
                                    class="match-item ${matches.includes(item.id) ? 'matched' : ''} ${selectedMatch?.id === item.id && selectedMatch?.type === 'jp' ? 'selected' : ''}" 
                                    onclick="handleMatch('${item.id}', 'jp', '${item.text}', this)">
                                ${item.text}
                            </button>
                        `).join('')}
                    </div>
                    <div class="match-column">
                        ${bnItems.map(item => `
                            <button id="match-bn-${item.id}" 
                                    class="match-item ${matches.includes(item.id) ? 'matched' : ''} ${selectedMatch?.id === item.id && selectedMatch?.type === 'bn' ? 'selected' : ''}" 
                                    onclick="handleMatch('${item.id}', 'bn', '${item.text}', this)">
                                ${item.text}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    } else if (mode === 'exam') {
        const examWord = examWords[examStep];
        const options = generateMCQOptions(examWord);
        gameContent.innerHTML = `
            <div class="game-container animate-slide">
                <div class="exam-status">প্রশ্ন: ${examStep + 1} / 10</div>
                <h2 class="question">সঠিক অর্থ কোনটি?</h2>
                <div class="jp-preview" onclick="speak('${examWord.japanese}')">
                    <h1>${examWord.japanese} 🔊</h1>
                    <p>${examWord.romaji}</p>
                </div>
                <div class="options-grid">
                    ${options.map(opt => `
                        <button class="option-btn" onclick="checkExamAnswer('${opt}', this)">${opt}</button>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

function checkBuilderAnswer(selected, element) {
    const word = currentLesson.data[currentStep];
    const isCorrect = selected === word.bangla;
    
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    if (isCorrect) {
        element.classList.add('correct');
        showToast(true, "চমৎকার! সঠিক হয়েছে।");
    } else {
        element.classList.add('wrong');
        showToast(false, `ভুল হয়েছে! সঠিক: ${word.bangla}`);
        document.querySelectorAll('.option-btn').forEach(b => {
           if (b.innerText === word.bangla) b.classList.add('correct');
        });
    }
    
    setTimeout(nextStep, 1500);
}

function nextStep() {
    removeToast();
    if (mode === 'learn') {
        mode = 'builder';
    } else if (mode === 'builder') {
        currentStep++;
        if (currentStep >= currentLesson.data.length) {
            mode = 'match';
            currentStep = 0;
        } else {
            mode = 'learn';
        }
    } else if (mode === 'exam') {
        examStep++;
        if (examStep >= 10) {
            showFinalResult();
            return;
        }
    }
    renderGame();
}

function generateSplitMatchData() {
    const subset = currentLesson.data.slice(0, 5);
    return {
        jpItems: subset.map(w => ({ id: w.id, text: w.japanese })).sort(() => Math.random() - 0.5),
        bnItems: subset.map(w => ({ id: w.id, text: w.bangla })).sort(() => Math.random() - 0.5)
    };
}

function handleMatch(id, type, text, element) {
    if (matches.includes(parseInt(id))) return;
    if (type === 'jp') speak(text);

    if (!selectedMatch) {
        selectedMatch = { id, type, element };
        renderGame();
        return;
    }

    if (selectedMatch.type !== type && selectedMatch.id === id) {
        matches.push(parseInt(id));
        selectedMatch = null;
        if (matches.length === Math.min(currentLesson.data.length, 5)) {
            setTimeout(startExam, 1000);
        }
    } else {
        selectedMatch = { id, type, element };
    }
    renderGame();
}

function startExam() {
    mode = 'exam';
    examStep = 0;
    score = 0;
    examWords = [...currentLesson.data].sort(() => 0.5 - Math.random()).slice(0, 10);
    renderGame();
}

function generateMCQOptions(correctWord) {
    const others = currentLesson.data
        .filter(w => w.id !== correctWord.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.bangla);
    return [...others, correctWord.bangla].sort(() => 0.5 - Math.random());
}

function checkExamAnswer(selected, element) {
    const correct = examWords[examStep].bangla;
    const isCorrect = selected === correct;
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    if (isCorrect) {
        element.classList.add('correct');
        score++;
        showToast(true, "চমৎকার! সঠিক হয়েছে।");
    } else {
        element.classList.add('wrong');
        showToast(false, `ভুল হয়েছে! সঠিক: ${correct}`);
        document.querySelectorAll('.option-btn').forEach(b => {
           if (b.innerText === correct) b.classList.add('correct');
        });
    }
    setTimeout(nextStep, 1500);
}

function showToast(isCorrect, message) {
    removeToast();
    const toast = document.createElement('div');
    toast.className = `toast ${isCorrect ? 'success' : 'error'}`;
    toast.innerHTML = `<span>${isCorrect ? '✓' : '✗'}</span> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
}

function removeToast() {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
}

function showFinalResult() {
    const percent = (score / 10) * 100;
    let feedbackMsg = percent >= 80 ? "অসাধারণ হয়েছে!" : (percent >= 50 ? "ভালো হয়েছে!" : "আরো চেষ্টা করতে হবে!");
    let emoji = percent >= 80 ? "🏆" : (percent >= 50 ? "😊" : "🙁");

    gameContent.innerHTML = `
        <div class="game-container animate-slide" style="text-align:center">
            <h1 style="font-size: 5rem">${emoji}</h1>
            <h2 style="color:var(--primary); font-size: 2.5rem">${feedbackMsg}</h2>
            <p style="margin: 1rem 0">আপনি ১০টির মধ্যে ${score}টি সঠিক উত্তর দিয়েছেন।</p>
            <div class="result-card">
                <div class="result-percent">${percent}%</div>
                <div>Score</div>
            </div>
            <button class="btn-primary" onclick="location.reload()">হোম পেজে ফিরে যান</button>
        </div>
    `;
    progressBarFill.style.width = '100%';
}

function showCustomConfirm(message, onConfirm) {
    const modal = document.getElementById('custom-confirm');
    const msgEl = document.getElementById('confirm-msg');
    const btnYes = document.getElementById('confirm-yes');
    const btnNo = document.getElementById('confirm-no');
    
    msgEl.innerText = message;
    modal.classList.remove('hidden');
    
    btnYes.onclick = () => {
        modal.classList.add('hidden');
        onConfirm();
    };
    btnNo.onclick = () => {
        modal.classList.add('hidden');
    };
}

btnClose.onclick = () => {
    showCustomConfirm('আপনি কি নিশ্চিত যে ফিরে যেতে চান?', () => {
        switchView('home');
    });
};

// Challenge Logic
function initChallenge() {
    challengeStep = 0;
    challengeScore = 0;
    
    // Global Pool: Flatten all words from all lessons
    const globalPool = lessonsData.flatMap(l => l.data);
    
    // Pick 10 random words across all lessons
    challengeWords = globalPool.sort(() => 0.5 - Math.random()).slice(0, 10);
    
    document.getElementById('challenge-footer').classList.add('hidden');
    renderChallengeQuiz();
}

function renderChallengeQuiz() {
    const quizContainer = document.getElementById('challenge-quiz');
    const word = challengeWords[challengeStep];
    
    // Generate distractors from the global pool
    const globalPool = lessonsData.flatMap(l => l.data);
    const distractors = globalPool
        .filter(w => w.id !== word.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.bangla);
        
    const options = [...distractors, word.bangla].sort(() => 0.5 - Math.random());
    
    quizContainer.innerHTML = `
        <div class="exam-status">Challenge প্রশ্ন: ${challengeStep + 1} / 10</div>
        <h2 class="question">সঠিক অর্থ কোনটি?</h2>
        <div class="jp-preview" onclick="speak('${word.japanese}')">
            <h1>${word.japanese} 🔊</h1>
            <p>${word.romaji}</p>
        </div>
        <div class="options-grid">
            ${options.map(opt => `
                <button class="option-btn" onclick="checkChallengeAnswer('${opt}', this)">${opt}</button>
            `).join('')}
        </div>
    `;
}

function checkChallengeAnswer(selected, element) {
    const word = challengeWords[challengeStep];
    const isCorrect = selected === word.bangla;
    
    document.querySelectorAll('#challenge-quiz .option-btn').forEach(b => b.disabled = true);
    
    if (isCorrect) {
        element.classList.add('correct');
        challengeScore++;
        showToast(true, "চমৎকার! সঠিক হয়েছে।");
    } else {
        element.classList.add('wrong');
        showToast(false, `ভুল হয়েছে! সঠিক: ${word.bangla}`);
        document.querySelectorAll('#challenge-quiz .option-btn').forEach(b => {
           if (b.innerText === word.bangla) b.classList.add('correct');
        });
    }
    
    setTimeout(() => {
        challengeStep++;
        if (challengeStep < 10) {
            renderChallengeQuiz();
        } else {
            showChallengeResult();
        }
    }, 1500);
}

function showChallengeResult() {
    const quizContainer = document.getElementById('challenge-quiz');
    const percent = (challengeScore / 10) * 100;
    let feedbackMsg = percent >= 80 ? "অসাধারণ চ্যালেঞ্জ শেষ করেছেন!" : (percent >= 50 ? "ভালো হয়েছে!" : "আরো চেষ্টা করুন!");
    let emoji = percent >= 80 ? "🔥" : (percent >= 50 ? "👍" : "💪");

    quizContainer.innerHTML = `
        <div class="game-container animate-slide" style="text-align:center">
            <h1 style="font-size: 5rem">${emoji}</h1>
            <h2 style="color:var(--primary); font-size: 2.2rem">${feedbackMsg}</h2>
            <p style="margin: 1rem 0">আপনি চ্যালেঞ্জে ১০টির মধ্যে ${challengeScore}টি সঠিক উত্তর দিয়েছেন।</p>
            <div class="result-card">
                <div class="result-percent">${percent}%</div>
                <div>Challenge Score</div>
            </div>
            <button class="btn-primary" onclick="switchView('home')">হোম পেজে ফিরে যান</button>
        </div>
    `;
    document.getElementById('challenge-footer').classList.remove('hidden');
}

// Start App
initHome();
loadVoices();
