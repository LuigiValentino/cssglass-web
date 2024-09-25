document.addEventListener('DOMContentLoaded', function () {
    const transparenciaInput = document.getElementById('transparencia');
    const desenfoqueInput = document.getElementById('desenfoque');
    const colorInput = document.getElementById('color');
    const bordeInput = document.getElementById('borde');
    const colorFondoInput = document.getElementById('color-fondo');
    const radioBordeInput = document.getElementById('radio-borde');
    const sombraCajaInput = document.getElementById('sombra-caja');
    const ventanaGlassmorph = document.getElementById('ventana-glassmorph');
    const cssGenerado = document.getElementById('css-generado');
    const sassGenerado = document.getElementById('sass-generado');
    const tailwindGenerado = document.getElementById('tailwind-generado');
    const copiarTodoBtn = document.getElementById('copiar-todo');

    function actualizarVistaPrevia() {
        const transparencia = transparenciaInput.value;
        const desenfoque = desenfoqueInput.value;
        const color = colorInput.value;
        const borde = bordeInput.value;
        const colorFondo = colorFondoInput.value;
        const radioBorde = radioBordeInput.value;
        const sombraCaja = sombraCajaInput.value;

        const colorDeFondo = `rgba(${parseInt(colorFondo.slice(1, 3), 16)}, ${parseInt(colorFondo.slice(3, 5), 16)}, ${parseInt(colorFondo.slice(5, 7), 16)}, ${transparencia})`;

        const codigoCSS = `
.ventana-glassmorph {
background: ${colorDeFondo};
backdrop-filter: blur(${desenfoque}px);
border: ${borde}px solid ${color};
border-radius: ${radioBorde}px;
box-shadow: 0 4px ${sombraCaja}px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease-in-out;
}
        `;
        const codigoSASS = `
.ventana-glassmorph
background: ${colorDeFondo}
backdrop-filter: blur(${desenfoque}px)
border: ${borde}px solid ${color}
border-radius: ${radioBorde}px
box-shadow: 0 4px ${sombraCaja}px rgba(0, 0, 0, 0.1)
transition: all 0.3s ease-in-out
        `;
        const codigoTailwind = `
<div class="bg-[rgba(${parseInt(colorFondo.slice(1, 3), 16)},${parseInt(colorFondo.slice(3, 5), 16)},${parseInt(colorFondo.slice(5, 7), 16)},${transparencia})] backdrop-blur-[${desenfoque}px] border-[${borde}px] border-[${color}] rounded-[${radioBorde}px] shadow-[0_4px_${sombraCaja}px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out"></div>
        `;

        ventanaGlassmorph.style.background = colorDeFondo;
        ventanaGlassmorph.style.backdropFilter = `blur(${desenfoque}px)`;
        ventanaGlassmorph.style.border = `${borde}px solid ${color}`;
        ventanaGlassmorph.style.borderRadius = `${radioBorde}px`;
        ventanaGlassmorph.style.boxShadow = `0 4px ${sombraCaja}px rgba(0, 0, 0, 0.1)`;

        cssGenerado.value = codigoCSS.trim();
        sassGenerado.value = codigoSASS.trim();
        tailwindGenerado.value = codigoTailwind.trim();
    }

    transparenciaInput.addEventListener('input', actualizarVistaPrevia);
    desenfoqueInput.addEventListener('input', actualizarVistaPrevia);
    colorInput.addEventListener('input', actualizarVistaPrevia);
    bordeInput.addEventListener('input', actualizarVistaPrevia);
    colorFondoInput.addEventListener('input', actualizarVistaPrevia);
    radioBordeInput.addEventListener('input', actualizarVistaPrevia);
    sombraCajaInput.addEventListener('input', actualizarVistaPrevia);

    document.getElementById('copiar-css').addEventListener('click', function () {
        copiarAlPortapapeles(cssGenerado.value);
    });

    document.getElementById('copiar-sass').addEventListener('click', function () {
        copiarAlPortapapeles(sassGenerado.value);
    });

    document.getElementById('copiar-tailwind').addEventListener('click', function () {
        copiarAlPortapapeles(tailwindGenerado.value);
    });

    copiarTodoBtn.addEventListener('click', function () {
        const todoElCodigo = `
CSS:
${cssGenerado.value}

SASS:
${sassGenerado.value}

Tailwind:
${tailwindGenerado.value}
        `;
        copiarAlPortapapeles(todoElCodigo);
    });

    function copiarAlPortapapeles(texto) {
        navigator.clipboard.writeText(texto).then(() => {
            alert('Copiado al portapapeles');
        });
    }

    actualizarVistaPrevia();
});