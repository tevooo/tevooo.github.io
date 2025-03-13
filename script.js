// Müzik için fonksiyon
function playMusic() {
  const music = document.getElementById('background-music');
  music.play().catch(error => console.log("Müzik çalma hatası:", error));
}
window.addEventListener('DOMContentLoaded', function() {
  playMusic();
});
document.body.addEventListener('click', playMusic, { once: true });

const content = document.getElementById('content');
const timer = document.getElementById('timer');

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
let countDown = new Date('March 01, 2025 23:59:59').getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;
    document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor(distance % (day) / (hour)),
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
      timer.classList.add('d-none');
      confetti();
      clearInterval(x);
      _slideSatu();
    }
  }, second);

const _slideSatu = function () {
  const tap = document.getElementById('tap');
  const slideSatu = document.getElementById('slideSatu');
  const slideCake = document.getElementById('slideCake');
  const cakeTap = document.getElementById('cakeTap');

  slideSatu.classList.remove('d-none');
  slideCake.classList.remove('d-none');

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

  slideDua.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
      slideDua.classList.remove('animate__delay-2s', 'animate__slow');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideDua.classList.add('d-none');
        _slideTiga();
      }, 1000);
    }, { once: true });
  }, 5000);
};

const _slideTiga = function () {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');

  slideTiga.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideTiga.classList.add('d-none');
        _slideLima();
      }, 1000);
    }, { once: true });
  }, 5000);
};

const _slideLima = function () {
  const slideLima = document.getElementById('slideLima');
  const trims = document.getElementById('trims');
  slideLima.classList.remove('d-none');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slideLima.addEventListener('animationend', () => {
    slideLima.classList.add('animate__delay-3s');
    slideLima.classList.replace('animate__bounceIn', 'animate__fadeOut');
    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');
    setTimeout(() => {
      trims.classList.add('d-none');
      slideLima.classList.add('d-none');
      _slideFoto();
    }, 4000);
  }, { once: true });
};

const _slideFoto = function () {
  const slideFoto = document.getElementById('slideFoto');
  slideFoto.classList.remove('d-none');

  setTimeout(() => {
    cherryRain();
  }, 5000);
};

// Özelleştirilmiş metinler
new TypeIt("#teks1", {
  strings: [
    "kirazimm balımmmm 🍒,",
    "benimmm neonnn gözlümmm, porselen ciltlim, vanilya tanrıçam, güzel bakımlı eşşeğimm, kaçak çayımmm, rehniya çaweminnnn, jimjimemmm 💋",
	" ",
    "iyi ki doğdunnnn iyi ki varsın hayatimmmm. yeni yaşın sana mutluluk, huzur, başarı, sevdiklerin ile dolu dolu nice mutlu yaşlara vesile olsun💝",
	" ",
	"kalbinin her ne kadar iyi olduğunu reddediyor olsan da kalbin en az gözlerin kadar güzel, porselen cildin kadar kusursuz.",
	" "
	  ],
  startDelay: 2000,
  speed: 100,
  waitUntilVisible: true
}).go();

new TypeIt("#teks2", {
  strings: [
    "sen benim için çok değerlisin bir o kadar özelsin, iyi ki tanıştık iyi ki varsınnnn 🥳🥳",
	" ",
	"her ne kadar aramızda ki bu iletişimin bir gün sona ereceği bilinci içinde olsakta son salisesine kadar seninle olmaktan mutluluk duyacağım ❤",
	" ",
    "tekrardan iyi doğdun iyi ki varsın kirazimmmmm🍒🍒",
	" ",
    "mutluuu yıllarrrrrrr 🎈🎂"
  ],
  startDelay: 1000,
  speed: 85,
  waitUntilVisible: true
}).go();

new TypeIt("#trims", {
  strings: ["iyi doğdun iyi ki varsın seni çok seviyorum nice mutlu yıllara <333"],
  startDelay: 1100,
  speed: 75,
  loop: false,
  waitUntilVisible: true
}).go();


// Kiraz Yağmuru
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

  const cherryCount = 50;
  const duration = 5000;
  const interval = duration / cherryCount;

  let cherriesDropped = 0;

  const dropCherry = setInterval(() => {
    if (cherriesDropped < cherryCount) {
      const cherry = document.createElement('span');
      cherry.innerHTML = '🍒';
      cherry.style.position = 'absolute';
      cherry.style.fontSize = '24px';
      cherry.style.left = Math.random() * 100 + 'vw';
      cherry.style.top = '-50px';
      cherry.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
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

const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fall {
    0% { transform: translateY(-50px); }
    100% { transform: translateY(100vh); }
  }
`;
document.head.appendChild(styleSheet);

// Konfeti
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

  var runFor = 5000;
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
