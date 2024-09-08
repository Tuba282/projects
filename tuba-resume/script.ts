function saveEdits() {
  let editElem: any = document.querySelectorAll("edit");
  let userVersion: any = editElem.innerHTML;
  localStorage.setItem("userEdits", userVersion);
}

function changeImage(): void {
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const existingImage = document.getElementById('existingImage') as HTMLImageElement;
            existingImage.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
}

  