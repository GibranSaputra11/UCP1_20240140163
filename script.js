document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('tabelAnggota');
  if (tbody) {
    const saved = JSON.parse(sessionStorage.getItem('anggota') || '[]');
    const startNo = 4;
    saved.forEach((a, i) => {
      tbody.innerHTML += `<tr><td>${startNo + i}</td><td>${a.nama}</td><td>${a.email}</td><td>${a.minat}</td></tr>`;
    });
  }
});

let anggota = JSON.parse(sessionStorage.getItem('anggota') || '[]');
function simpanData() {
  const namaEl = document.getElementById('nama');
  if (!namaEl) return;
  const nama = namaEl.value.trim();
  const email = document.getElementById('email').value.trim();
  const minat = document.getElementById('minat').value;

  if (!nama || !email || !minat) {
    alert('⚠️ Semua field harus diisi!');
    return;
  }

  const data = { nama, email, minat };
  anggota.push(data);
  sessionStorage.setItem('anggota', JSON.stringify(anggota));

  document.getElementById('detailHasil').innerHTML = `
    <b>Nama:</b> ${nama}<br>
    <b>Email:</b> ${email}<br>
    <b>Minat:</b> ${minat}
  `;
  document.getElementById('hasilInput').style.display = 'block';

  document.getElementById('nama').value = '';
  document.getElementById('email').value = '';
  document.getElementById('minat').value = '';
}

const gambarList = [
  'https://course-net.com/wp-content/uploads/2023/03/sta-je-html.jpeg',
  'https://course-net.com/wp-content/uploads/2025/03/Screenshot-2409.png',
  'https://read.learnyard.com/content/images/2024/07/logo.png',
];
let gambarIndex = 0;

function gantiGambar() {
  gambarIndex = (gambarIndex + 1) % gambarList.length;
  const imgEl = document.getElementById('gambar');
  if (imgEl) imgEl.src = gambarList[gambarIndex];
}

function stopAudio() {
  const audio = document.getElementById('audioPlayer');
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

function infoAudio() {
  alert('Audio: SoundHelix Sample Music\nFormat: MP3\nSumber: soundhelix.com');
}
