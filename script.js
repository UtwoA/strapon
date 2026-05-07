const domain = "strapon.ton";

document.getElementById("year").textContent = new Date().getFullYear();

const copyButton = document.getElementById("copyDomainBtn");
const copyHint = document.getElementById("copyHint");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(domain);
    copyHint.textContent = "Домен скопирован: strapon.ton";
  } catch (error) {
    copyHint.textContent = "Не удалось скопировать автоматически. Скопируй вручную: strapon.ton";
  }
});
