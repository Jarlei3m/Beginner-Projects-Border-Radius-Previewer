const copyBtn = document.querySelector('button.copy');
const inputBoxes = document.querySelectorAll('.input');

const mainBox = document.querySelector('.box');

// border-top-left-radius: 50px;
inputBoxes.forEach(box => {
    box.addEventListener('change', () => {

        mainBox.style.cssText += `
            border-${box.id}-radius: ${box.value}px 
        ` 
    })
})

function copyCss() {

    if(mainBox.style.cssText != '') {
        const copyMsg = document.querySelector('small');
        const hiddenInput = document.createElement('input');
        document.body.appendChild(hiddenInput);

        hiddenInput.value = mainBox.style.cssText;
    
        hiddenInput.select();
        document.execCommand('copy');
        hiddenInput.remove();
        
        copyMsg.classList.add('show');

        function removeMsg() {
            copyMsg.classList.remove('show');
        }
        
        setTimeout(removeMsg, 3000);
    }
}
