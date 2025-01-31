// Obtemos os elementos do slider
const xSlider = document.getElementById('xSlider');
const ySlider = document.getElementById('ySlider');
// Obtemos o círculo que representa o ponto no gráfico
const dataPoint = document.getElementById('dataPoint');

// Definimos limites do eixo X no SVG (em pixels)
const xMinPixel = 40;  // Onde o eixo X começa no SVG
const xMaxPixel = 480; // Onde o eixo X termina no SVG
const yMinPixel = 20;  // Onde o eixo Y começa no SVG
const yMaxPixel = 250; // Onde o eixo Y termina no SVG

// Função para calcular o valor de Y com base em X (usando a parábola y = x²)
function calculateY(x) {
  return yMaxPixel - (x * x) / 100; // Ajuste para que o valor se encaixe na altura do gráfico
}

// Precisamos converter o valor do slider (0 a 100) em coordenadas do SVG.
function updatePointPosition() {
  const xValue = xSlider.value;
  const yValue = ySlider.value;

  const rangeSlider = 100; // Tamanho máximo do slider
  const pixelRange = xMaxPixel - xMinPixel; // Distância em pixels do eixo

  // Regra de 3: valor % slider -> pixel no SVG
  const newX = xMinPixel + (xValue / rangeSlider) * pixelRange;

  // A posição de Y é diretamente definida pelo slider de Y
  const newY = yMaxPixel - (yValue / rangeSlider) * (yMaxPixel - yMinPixel);

  // Movemos o ponto para esse X e Y
  dataPoint.setAttribute('cx', newX);
  dataPoint.setAttribute('cy', newY);
}

// Quando carregamos a página, atualizamos a posição inicial
updatePointPosition();

// Escutamos mudanças nos sliders
xSlider.addEventListener('input', updatePointPosition);
ySlider.addEventListener('input', updatePointPosition);
