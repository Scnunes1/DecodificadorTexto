const input = document.getElementById('input');
const output = document.getElementById('output');
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDescriptografar = document.getElementById('btnDescriptografar');
const btnCopiar = document.getElementById('btnCopiar');

const initialImage = document.getElementById('initialImage');
const inputField = document.getElementById('input');

// Function to handle image click and show input field
initialImage.addEventListener('click', function() {
  initialImage.style.display = 'none'; // Hide the image
  inputField.style.display = 'block'; // Show the input field
  inputField.focus(); // Set focus on input field for easy interaction
});

// Função para encriptar o texto
function encriptarTexto(texto) {
  const regras = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
  };

  let textoEncriptado = '';
  for (let i = 0; i < texto.length; i++) {
    if (regras[texto[i]]) {
      textoEncriptado += regras[texto[i]];
    } else {
      textoEncriptado += texto[i];
    }
  }
  return textoEncriptado;
}

// Função para decriptar o texto
function decriptarTexto(texto) {
    const regras = {
      ai: 'a',
      enter: 'e',
      imes: 'i',
      ober: 'o',
      ufat: 'u'
    };
  
    let textoDescriptado = texto;
    for (let chave in regras) {
      let valor = regras[chave];
      textoDescriptado = textoDescriptado.split(chave).join(valor);
    }
    return textoDescriptado;
  }

// Conexão com os botões
btnEncriptar.addEventListener('click', () => {
  const textoInput = input.value.toLowerCase();
  const textoEncriptado = encriptarTexto(textoInput);
  output.value = textoEncriptado;
});

btnDescriptografar.addEventListener('click', () => {
    const textoOutput = input.value;
    output.value='';
    const textoDescriptado = decriptarTexto(textoOutput);
    output.value = textoDescriptado;
  });

btnCopiar.addEventListener('click', () => {
    const textoOutput = output.value;
    navigator.clipboard.writeText(textoOutput);
    
    // Limpar o campo input e escrever o texto copiado
   // input.value = textoOutput;
    output.value='';
  });
