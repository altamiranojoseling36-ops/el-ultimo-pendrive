// ==========================================
// FUNCIÓN PARA DESCIFRAR EL CÓDIGO DEL VIRUS
// ==========================================
function descifrarCodigo() {
    // 1. Buscamos la cajita oculta del HTML usando su ID
    const cajaPista = document.getElementById("pista-oculta");
    
    // 2. Cambiamos su estilo de 'none' (oculto) a 'block' (visible)
    cajaPista.style.display = "block";
    
    // 3. Le inyectamos el texto del código de desactivación
    cajaPista.innerHTML = "🔓 ¡Pista encontrada! El código de desactivación es: <strong>SAFE_MODE_2026</strong>";
}