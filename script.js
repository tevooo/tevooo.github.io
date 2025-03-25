// Müzik için fonksiyon
function playMusic() {
  const music = document.getElementById('background-music');
  if (music) {
    music.loop = true;
    music.play()
      .then(() => {
        console.log("Müzik başladı, süre:", music.duration, "saniye");
      })
      .catch(error => {
        console.error("Müzik çalma hatası:", error);
      });

    music.addEventListener('ended', () => {
      console.log("Müzik doğal olarak bitti (loop varsa bu çıkmaz).");
    });
    music.addEventListener('pause', () => {
      console.log("Müzik duraklatıldı, mevcut zaman:", music.currentTime);
    });
    music.addEventListener('play', () => {
      console.log("Müzik yeniden oynatılıyor, mevcut zaman:", music.currentTime);
    });
  } else {
    console.error("background-music elementi bulunamadı!");
  }
}

window.addEventListener('DOMContentLoaded', function() {
  console.log("Sayfa yüklendi, müzik için kullanıcı tıklaması bekleniyor...");
});

document.body.addEventListener('click', function () {
  const music = document.getElementById('background-music');
  if (music && music.paused) {
    playMusic();
  }
}, { once: true });

// Geri sayım
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
let countDown = new Date('March 25, 2025 00:00:04').getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;
    document.getElementById('days').innerText = Math.floor(distance / (day));
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
      document.getElementById('timer').classList.add('d-none');
      confetti();
      clearInterval(x);
      _slideSatu();
    }
  }, second);

// Slayt fonksiyonları
const _slideSatu = function () {
  const tap = document.getElementById('tap');
  const slideSatu = document.getElementById('slideSatu');
  const slideCake = document.getElementById('slideCake');
  const cakeTap = document.getElementById('cakeTap');

  slideSatu.classList.remove('d-none');
  slideCake.classList.remove('d-none');
  console.log("Slide Satu gösterildi");

  setTimeout(function () {
    cakeTap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideSatu.classList.replace('animate__slideInDown', 'animate__backOutDown');
      slideCake.classList.replace('animate__bounceIn', 'animate__fadeOut');
      cakeTap.classList.add('d-none');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideSatu.classList.add('d-none');
        slideCake.classList.add('d-none');
        _slideDua();
      }, 1000);
    }, { once: true });
  }, 10000);
};

const _slideDua = function () {
  const tap = document.getElementById('tap');
  const slideDua = document.getElementById('slideDua');
  const teks1 = document.getElementById('teks1');

  slideDua.classList.remove('d-none');
  console.log("Slide Dua gösterildi");

  setTimeout(() => {
    teks1.classList.remove('d-none');
    console.log("teks1 göründü");
    new TypeIt("#teks1", {
      strings: [
        "kirazim balımmmm 🍒,",
        "neonnn gözlümmm, porselen ciltlim, vanilya tanrıçam, güzel bakımlı eşşeğimm, kaçak çayımmm, rehniya çaweminnnn (gözümün nurusuu), jimjimemmmm 💋 ve daha niceleri...",
        " ",
        "en ennn önemlisi değer verdiğim sevebildiğim tek ZEHRA 🤭",
        " ",
        "iyi ki doğdunnnn iyi ki varsın canikomm yeni yaşın senin kadar güzel parlak bir geleceğe vesile olsunnnn öncelikli temmenimiz mutluluk, huzur, başarı, sevdiklerin ile dolu dolu nice mutlu yaşlara öncülük ediyor olması<333",
        " ",
        "kalbinin her ne kadar iyi olduğunu reddediyor bu uzlaşıya yanışmıyor olsan da kalbin en az gözlerin kadar güzel, porselen cildin kadar kusursuz bunun farkına var artık!",
        " ",
        " REELDE ZEHRA PROFİLİN İLE İNSANLARA ZULÜM ETMİYORSAN BAŞKA 😁 BEN KİRAZİMA BAYILIYORUMMM <333"
      ],
      startDelay: 2000,
      speed: 30,
      waitUntilVisible: true,
      afterComplete: function () {
        console.log("teks1 yazımı tamamlandı");
        tap.classList.remove('d-none');
        document.body.addEventListener('click', function () {
          console.log("Slide Dua kapanıyor");
          slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
          slideDua.classList.remove('animate__delay-2s', 'animate__slow');
          tap.classList.add('d-none');
          setTimeout(function () {
            slideDua.classList.add('d-none');
            teks1.classList.add('d-none');
            _slideTiga();
          }, 1000);
        }, { once: true });
      }
    }).go();
  }, 1000);
};

const _slideTiga = function () {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');
  const teks2 = document.getElementById('teks2');

  slideTiga.classList.remove('d-none');
  console.log("Slide Tiga gösterildi");

  setTimeout(() => {
    teks2.classList.remove('d-none');
    console.log("teks2 göründü");
    new TypeIt("#teks2", {
      strings: [
        "sen benim için çok değerlisin bir o kadar da özelsin bende yerin o kadar farklı ki nasıl ifade edilir bilemiyorum... sen benim için her şeysin, hayatın bahşettiği en güzel şeysin iyi ki varsın kirazımmm 💝",
        " ",
        "her ne kadar aramızda ki bu iletişimin bir gün sona ereceği bilinci içinde olsakta son salisesine kadar seninle olmaktan, seninle konuşmaktan, seninle bir şeyler paylaşmaktan, senin yanında olmaktan mutluluk duyacağım 💞",
        " ",
        "iyi ki doğdun iyi ki varsın kirazimmmmm 🍒🍒",
        " ",
        "mutluuu yıllarrrrrrr jimjimemmmm UJJJGELDİN #23🎂"
      ],
      startDelay: 1000,
      speed: 30,
      waitUntilVisible: true,
      afterComplete: function () {
        console.log("teks2 yazımı tamamlandı");
        tap.classList.remove('d-none');
        document.body.addEventListener('click', function () {
          console.log("Slide Tiga kapanıyor");
          slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
          tap.classList.add('d-none');
          setTimeout(function () {
            slideTiga.classList.add('d-none');
            teks2.classList.add('d-none');
            _slideLima();
          }, 1000);
        }, { once: true });
      }
    }).go();
  }, 1000);
};

const _slideLima = function () {
  const tap = document.getElementById('tap');
  const slideLima = document.getElementById('slideLima');
  const trims = document.getElementById('trims');

  if (!slideLima || !trims || !tap) {
    console.error("slideLima, trims veya tap bulunamadı!");
    return;
  }

  slideLima.classList.remove('d-none');
  console.log("Slide Lima gösterildi");

  setTimeout(() => {
    trims.classList.remove('d-none');
    console.log("trims göründü");

    trims.innerHTML = "";
    const text = "iyi ki doğdun, iyi ki varsınnnn seni çok ama çok seviyorum nice mutlu yıllara balimmmm";
    let index = 0;
    const speed = 45;

    function typeText() {
      if (index < text.length) {
        trims.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
      } else {
        console.log("trims yazımı tamamlandı");
        tap.classList.remove('d-none');
        tap.addEventListener('click', function () {
          console.log("tap’a tıklandı, Slide Lima kapanıyor");
          slideLima.classList.add('animate__fadeOut');
          trims.classList.add('animate__fadeOut');
          tap.classList.add('d-none');
          setTimeout(() => {
            trims.classList.add('d-none');
            slideLima.classList.add('d-none');
            slideLima.classList.remove('animate__fadeOut');
            trims.classList.remove('animate__fadeOut');
            _slideFoto();
          }, 1000);
        }, { once: true });
      }
    }

    setTimeout(typeText, 2000);
  }, 1000);
};

const _slideFoto = function () {
  const slideFoto = document.getElementById('slideFoto');
  slideFoto.classList.remove('d-none');
  console.log("Slide Foto gösterildi");

  setTimeout(() => {
    cherryRain();
  }, 5000);
};

// Kiraz Yağmuru Fonksiyonu (Düzeltildi)
function cherryRain() {
  const cherryContainer = document.createElement('div');
  cherryContainer.style.position = 'fixed';
  cherryContainer.style.top = '0';
  cherryContainer.style.left = '0';
  cherryContainer.style.width = '100vw';
  cherryContainer.style.height = '100vh';
  cherryContainer.style.pointerEvents = 'none';
  cherryContainer.style.zIndex = '9999';
  document.body.appendChild(cherryContainer);

  const cherryCount = 550;
  const duration = 20000;
  const interval = duration / cherryCount;

  const fruits = ['🍒', '🍓', '🍊', '🍍', '💞']; // Meyve dizisi
  let cherriesDropped = 0;

  const dropCherry = setInterval(() => {
    if (cherriesDropped < cherryCount) {
      const cherry = document.createElement('span');
      cherry.innerHTML = fruits[Math.floor(Math.random() * fruits.length)]; // Rastgele meyve
      cherry.style.position = 'absolute';
      cherry.style.fontSize = '16px';
      cherry.style.left = Math.random() * 100 + 'vw';
      cherry.style.top = '-50px';
      cherry.style.animation = `fall ${Math.random() * 6 + 2}s linear`;
      cherryContainer.appendChild(cherry);

      cherry.addEventListener('animationend', () => {
        cherry.remove();
      });

      cherriesDropped++;
    } else {
      clearInterval(dropCherry);
    }
  }, interval);

  setTimeout(() => {
    cherryContainer.remove();
  }, duration);
}

// Stil
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fall {
    0% { transform: translateY(-50px); }
    100% { transform: translateY(100vh); }
  }
`;
document.head.appendChild(styleSheet);

// Konfeti fonksiyonu
function confetti() {
  var $window = $(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var runFor = 7000;
  var isRunning = true;

  setTimeout(() => {
    isRunning = false;
  }, runFor);

  var particles = 300,
    spread = 20,
    sizeMin = 10,
    sizeMax = 15 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = .13,
    dyMax = .18,
    dThetaMin = .4,
    dThetaMax = .7 - dThetaMin;

  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i, l, interval, a, b, c, d;
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;

      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        if (a >= c && a < d)
          if (b > d) domain[l] = d;
          else domain.splice(l, 2);
        else if (a < c && b > c)
          if (b <= d) domain[i] = c;
          else domain.splice(i, 0, c, d);
      }

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }
    return spline.sort();
  }

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  function Confetto() {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = randomColor();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      var phi = this.frame % 7777 / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }

  function poof() {
    if (!frame) {
      document.body.appendChild(container);

      var count = 0;

      (function addConfetto() {
        if (isRunning && count++ < particles) {
          var confetto = new Confetto();
          confetti.push(confetto);
          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);

      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  poof();
}
