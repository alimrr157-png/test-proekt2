[
  {
    "name": "",
    "age": 0,
    "photo": "url"
  },
  {
    "name": "",
    "age": 0,
    "photo": "url"
  },
  {
    "name": "",
    "age": 0,
    "photo": "url"
  }
]
function validateEmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
}
function moveBlock(position = 0) {
    const smallBlock = document.querySelector(".small-block"); 
    
    if (!smallBlock) return; 

    
    position += 2;
    smallBlock.style.left = `${position}px`;

    
    if (position < 300) {
        
        setTimeout(() => {
            moveBlock(position);
        }, 20); 
    }
}







function validateEmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
}

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

if (gmailButton && gmailInput && gmailResult) {
    gmailButton.addEventListener('click', () => {
        const value = gmailInput.value.trim();

        if (validateEmail(value)) {
            gmailResult.textContent = 'Почта валидна';
            gmailResult.style.color = 'green';
        } else {
            gmailResult.textContent = 'Некорректный адрес Gmail';
            gmailResult.style.color = 'red';
        }
    });
}


function moveBlock(position = 0) {
    const smallBlock = document.querySelector('.small-block');
    const parentBlock = smallBlock ? smallBlock.parentElement : null;

    if (!smallBlock || !parentBlock) return;

    const maxPosition = parentBlock.clientWidth - smallBlock.clientWidth;

    if (position < maxPosition) {
        position += 2;
        if (position > maxPosition) {
            position = maxPosition;
        }
        smallBlock.style.left = `${position}px`;

        setTimeout(() => {
            moveBlock(position);
        }, 20);
    }
}

moveBlock();