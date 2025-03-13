// ini javascript

console.log('javascript is working'); 

// ini javascript

// ini untuk form
document.getElementById("messageForm").addEventListener("button", function(event) {
    event.preventDefault();

    // Ambil nilai dari form
    const name = document.getElementById("name-input").value;
    const date = document.getElementById("date-input").value;  // Pastikan ID-nya sesuai
    const gender = document.querySelector('input[name="gender-input"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Belum dipilih';
    const message = document.getElementById("message-input").value;

    // Tampilkan hasil di sebelah kanan
    document.getElementById("resultName").innerText = name;
    document.getElementById("resultDate").innerText = date;
    document.getElementById("resultGender").innerText = gender;
    document.getElementById("resultMessage").innerText = message;

    // Tampilkan waktu saat ini
    document.getElementById("currentTime").innerText = new Date().toLocaleString();
});

let bannerIndex = 0;
showBanner();

// function to change banner
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}


function showBanner() {
    const banners = document.getElementsByClassName('banner-img');
    console.log(banners);

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Loop
    for (let i=0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // show banner
    banners[bannerIndex].style.display = 'block';
}

// set interval to change banner
setInterval(nextBanner, 3000);