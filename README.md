## Test Your Luck (Batanza V1)

A fast, minimalist card-versus-card game inspired by Rock–Paper–Scissors. Pick a card, face the computer, and watch your bank balance rise or fall with every round. Simple rules, quick feedback, and a playful loan mechanic keep the stakes fun.

### What this site is about
- Tap a card to play a round against a random computer card.
- Results are shown in a pop-up with total rounds, and your running score is visible on the page.
- Wins and losses affect your in-game “BANK”. Need a boost? Take a small loan and pay it back with your winnings.
- Your progress (wins/losses/ties and bank) is saved in your browser via localStorage.

## Gameplay
1. Click any card to make your move.
2. The computer picks a move at random.
3. A pop-up shows whether you won, lost, or tied, plus the total rounds played.
4. The BANK updates automatically: +50 for a win, -50 for a loss.

### Rules (card hierarchy)
The three cards beat each other in a loop:
- card1 beats card3
- card3 beats card2
- card2 beats card1

Ties happen when both you and the computer pick the same card.

## Bank and Loans
- Win: BANK +50
- Lose: BANK -50
- Tie: BANK unchanged

Need more funds? Use GET LOAN to add either 200 or 500 to your bank. A short sound plays on loan confirmation.

## Controls
- RESET: Clears wins/losses/ties, BANK, and round counter (localStorage is reset).
- GET LOAN: Opens a small panel where you can add +200 or +500 to your BANK.
- Close (×) on the pop-up: Hides the round result and disables the overlay.

## Persistence
The game stores your data (score and BANK) using browser localStorage, so reloading the page keeps your progress until you hit RESET or clear site data.

## Tech stack
- HTML, CSS, JavaScript (vanilla)
- localStorage for persistence
- Basic audio effects for loan actions

## Project structure
```
testYourLuck/
	index.html       # Main page and markup (buttons, pop-up, audio, etc.)
	batanza.js       # Game logic: rules, scoring, BANK, loans, UI events
	batanza.css      # Styles, layout, and full-screen background
	icons/           # Card images and favicon
	audio/           # Loan sound effects
	README.md        # This file
```

Enjoy the game and test your luck!

## Test Your Luck (Batanza V1) – Türkçe

Hızlı ve minimalist, Taş–Kağıt–Makas esintili bir kart karşılaşma oyunu. Bir kart seç, bilgisayarla kapış ve her elde banka bakiyenin nasıl arttığını veya azaldığını izle. Basit kurallar, anlık geri bildirim ve eğlenceli kredi mekaniğiyle tempolu bir deneyim.

### Bu site ne hakkında
- Rastgele bir bilgisayar kartına karşı oynamak için herhangi bir karta tıkla.
- Sonuçlar toplam el sayısıyla birlikte açılır pencerede gösterilir; anlık skor sayfada görünür.
- Kazanç ve kayıplar oyun içi “BANKA” değerini etkiler. Desteğe mi ihtiyacın var? Küçük bir kredi al ve kazançlarınla geri kapat.
- İlerlemen (kazanma/kaybetme/beraberlik ve banka) tarayıcında localStorage ile kaydedilir.

## Oynanış
1. Hamleni yapmak için herhangi bir karta tıkla.
2. Bilgisayar rastgele bir hamle seçer.
3. Açılır pencere; kazandın mı, kaybettin mi yoksa berabere mi kaldın gösterir ve toplam el sayısını yazar.
4. BANKA otomatik güncellenir: kazanınca +50, kaybedince -50.

### Kurallar (kart hiyerarşisi)
Üç kart birbirini döngüsel olarak yener:
- card1, card3’ü yener
- card3, card2’yi yener
- card2, card1’i yener

İki taraf aynı kartı seçerse beraberlik olur.

## Banka ve Krediler
- Kazan: BANKA +50
- Kaybet: BANKA -50
- Beraberlik: BANKA değişmez

Daha fazla fona mı ihtiyacın var? GET LOAN ile bankana 200 veya 500 ekleyebilirsin. Kredi alımında kısa bir ses çalar.

## Kontroller
- RESET: Kazanma/kaybetme/beraberlik, BANKA ve el sayacını sıfırlar (localStorage temizlenir).
- GET LOAN: BANKA’na +200 veya +500 ekleyebileceğin küçük bir panel açar.
- Açılır penceredeki (×): Sonuç penceresini kapatır ve örtüyü devre dışı bırakır.

## Kalıcılık
Oyun verilerini (skor ve BANKA) tarayıcı localStorage’ında saklar; sayfayı yenilesen de RESET’e basmadığın veya site verilerini temizlemediğin sürece ilerlemen korunur.

## Teknoloji yığını
- HTML, CSS, JavaScript (vanilla)
- Kalıcılık için localStorage
- Kredi işlemleri için basit ses efektleri

## Proje yapısı
```
testYourLuck/
	index.html       # Ana sayfa ve işaretleme (butonlar, açılır pencere, ses vb.)
	batanza.js       # Oyun mantığı: kurallar, skor, BANKA, krediler, UI olayları
	batanza.css      # Stiller, yerleşim ve tam ekran arka plan
	icons/           # Kart görselleri ve favicon
	audio/           # Kredi ses efektleri
	README.md        # Bu dosya
```

İyi eğlenceler ve şansını dene!

