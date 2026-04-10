const input = document.getElementById("urlInput");
const generate = document.getElementById("generate");
const qrBox = document.getElementById("qrBox");
const downloadBtn = document.getElementById("downloadBtn");
const toggle = document.getElementById("themeToggle");

let qrCode;

generate.addEventListener("click", () => {
  const url = input.value.trim();

  if (!url) return;

  qrBox.innerHTML = "";

  qrCode = new QRCodeStyling({
    width: 200,
    height: 200,
    data: url,
    dotsOptions: {
      color: "#000",
    },
    backgroundOptions: {
      color: "#fff",
    },
  });

  qrCode.append(qrBox);
  downloadBtn.disabled = false;
});

downloadBtn.addEventListener("click", () => {
  if (qrCode) {
    qrCode.download({ name: "qrio", extension: "png" });
  }
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
