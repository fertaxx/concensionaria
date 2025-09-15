// Datos de vehículos - Solo Toyota (diferentes modelos)
const vehiculos = [
    {
        id: 1,
        modelo: "Toyota Corolla",
        version: "Base MT",
        año: 2024,
        precio: 389900,
        kilometraje: 0,
        combustible: "Gasolina",
        transmision: "Manual",
        motor: "1.8L 4 cilindros",
        potencia: "139 HP",
        rendimiento: "15.3 km/l ciudad / 20.4 km/l carretera",
        color: "Blanco Perla",
        imagen: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        caracteristicas: [
            'Motor 1.8L Dual VVT-i de 139 HP',
            'Transmisión manual de 6 velocidades',
            'Toyota Safety Sense 2.0',
            'Sistema de audio con pantalla táctil de 7"',
            'Aire acondicionado manual',
            'Cámara de reversa',
            '6 airbags',
            'Llantas de aleación de 16"'
        ],
        equipamiento: {
            exterior: ['Faros LED', 'Espejos eléctricos', 'Manijas cromadas'],
            interior: ['Asientos de tela', 'Volante con controles', 'Computadora de viaje'],
            seguridad: ['Toyota Safety Sense 2.0', 'Control de estabilidad', 'Frenos ABS']
        }
    },
    {
        id: 2,
        modelo: 'Toyota Camry',
        version: 'LE',
        año: 2024,
        precio: 659900,
        kilometraje: 0,
        combustible: 'Gasolina',
        transmision: 'Automática 8 velocidades',
        motor: '2.5L 4 cilindros',
        potencia: '203 HP',
        rendimiento: '12.8 km/l ciudad / 17.0 km/l carretera',
        color: 'Gris Celestial Metálico',
        imagen: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        caracteristicas: [
            'Motor 2.5L 4 cilindros de 203 HP',
            'Transmisión automática de 8 velocidades',
            'Toyota Safety Sense 2.0 completo',
            'Sistema multimedia con pantalla de 9"',
            'Climatizador automático dual',
            'Asientos delanteros calefaccionados',
            'Cargador inalámbrico para smartphone',
            'Llantas de aleación de 17"'
        ],
        equipamiento: {
            exterior: ['Faros LED automáticos', 'Espejos eléctricos plegables', 'Spoiler trasero'],
            interior: ['Asientos SofTex', 'Volante de cuero', 'Iluminación LED interior'],
            seguridad: ['Pre-colisión frontal', 'Alerta de cambio de carril', 'Control crucero adaptativo']
        }
    },
    {
        id: 3,
        modelo: 'Toyota RAV4',
        version: 'LE',
        año: 2024,
        precio: 759900,
        kilometraje: 0,
        combustible: 'Gasolina',
        transmision: 'CVT Automática',
        motor: '2.5L 4 cilindros',
        potencia: '203 HP',
        rendimiento: '11.9 km/l ciudad / 15.3 km/l carretera',
        color: 'Azul Eléctrico Metálico',
        imagen: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        caracteristicas: [
            'SUV compacta con tracción AWD disponible',
            'Motor 2.5L Dynamic Force de 203 HP',
            'Transmisión CVT con modo deportivo',
            'Toyota Safety Sense 2.0 estándar',
            'Capacidad de carga de 1,065 litros',
            'Altura al suelo de 219mm',
            'Sistema multimedia con pantalla de 8"',
            'Llantas de aleación de 17"'
        ],
        equipamiento: {
            exterior: ['Emblemas Hybrid', 'Parrilla exclusiva azul', 'Luces diurnas LED'],
            interior: ['Instrumentos híbridos', 'Asientos Eco-friendly', 'Control de clima eficiente'],
            seguridad: ['Toyota Safety Sense 2.0+', 'Monitor de punto ciego', 'Alerta de tráfico cruzado']
        }
    },
    {
        id: 4,
        modelo: 'Toyota Prius',
        version: 'LE Híbrido',
        año: 2024,
        precio: 589900,
        kilometraje: 0,
        combustible: 'Híbrido',
        transmision: 'eCVT',
        motor: '1.8L + Motor Eléctrico',
        potencia: '121 HP (sistema combinado)',
        rendimiento: '23.8 km/l ciudad / 25.5 km/l carretera',
        color: 'Negro Medianoche Metálico',
        imagen: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        caracteristicas: [
            'Sistema Híbrido Toyota de 4ta generación',
            'Motor 1.8L Atkinson + motor eléctrico',
            'Transmisión eCVT de variación continua',
            'Pantalla Multi-Información de 4.2"',
            'Modo EV para conducción 100% eléctrica',
            'Sistema de frenado regenerativo',
            'Indicador de eficiencia Eco',
            'Llantas de bajo rodamiento de 15"'
        ],
        equipamiento: {
            exterior: ['Emblemas Hybrid', 'Parrilla exclusiva azul', 'Luces diurnas LED'],
            interior: ['Instrumentos híbridos', 'Asientos Eco-friendly', 'Control de clima eficiente'],
            seguridad: ['Toyota Safety Sense 2.0+', 'Monitor de punto ciego', 'Alerta de tráfico cruzado']
        }
    },
    {
        id: 5,
        modelo: 'Toyota Yaris',
        version: 'R XLE',
        año: 2024,
        precio: 329900,
        kilometraje: 0,
        combustible: 'Gasolina',
        transmision: 'CVT Automática',
        motor: '1.5L 4 cilindros',
        potencia: '106 HP',
        rendimiento: '16.9 km/l ciudad / 22.1 km/l carretera',
        color: 'Rojo Supersónico',
        imagen: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        caracteristicas: [
            'Auto compacto ideal para ciudad',
            'Motor 1.5L eficiente de 106 HP',
            'Transmisión CVT suave',
            'Toyota Safety Sense estándar',
            'Sistema multimedia con pantalla de 7"',
            'Aire acondicionado automático',
            'Cámara de reversa',
            'Llantas de aleación de 16"'
        ],
        equipamiento: {
            exterior: ['Faros LED', 'Espejos eléctricos', 'Manijas cromadas'],
            interior: ['Asientos de tela', 'Volante con controles', 'Computadora de viaje'],
            seguridad: ['Toyota Safety Sense', 'Control de estabilidad', 'Frenos ABS']
        }
    },
    {
        id: 6,
        modelo: 'Toyota Avalon',
        version: 'XLE Premium',
        año: 2024,
        precio: 899900,
        kilometraje: 0,
        combustible: 'Gasolina',
        transmision: 'Automática 8 velocidades',
        motor: '3.5L V6',
        potencia: '301 HP',
        rendimiento: '10.6 km/l ciudad / 14.9 km/l carretera',
        color: 'Plata Clásico Metálico',
        imagen: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        caracteristicas: [
            'Sedán full-size premium de lujo',
            'Motor V6 3.5L de 301 HP',
            'Transmisión automática de 8 velocidades',
            'Techo corredizo eléctrico panorámico',
            'Asientos de cuero premium calefaccionados',
            'Sistema de navegación con pantalla de 9"',
            'Llantas de aleación de 18" exclusivas',
            'Control de clima automático dual'
        ],
        equipamiento: {
            exterior: ['Faros LED adaptativos', 'Espejos auto-dimming', 'Antena tipo aleta de tiburón'],
            interior: ['Asientos ventilados', 'Memoria de asiento conductor', 'Volante calefaccionado'],
            seguridad: ['Toyota Safety Sense 2.0+', 'Sistema de visión nocturna', 'Alerta de fatiga del conductor']
        }
    }
];

// Variables globales
let vehiculosFiltrados = [...vehiculos];

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    inicializarApp();
});

function inicializarApp() {
    configurarNavegacion();
    mostrarVehiculos(vehiculos);
    configurarFiltros();
    configurarFormularios();
    configurarAnimaciones();
}

// Configuración de navegación
function configurarNavegacion() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Navegación suave
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Mostrar vehículos en el catálogo
function mostrarVehiculos(vehiculosArray) {
    const grid = document.getElementById('vehiculos-grid');
    if (!grid) return;

    grid.innerHTML = '';

    vehiculosArray.forEach(vehiculo => {
        const vehiculoCard = crearTarjetaVehiculo(vehiculo);
        grid.appendChild(vehiculoCard);
    });

    // Agregar animación de entrada
    setTimeout(() => {
        const cards = grid.querySelectorAll('.vehiculo-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in-up');
            }, index * 100);
        });
    }, 100);
}

function crearTarjetaVehiculo(vehiculo) {
    const card = document.createElement('div');
    card.className = 'vehiculo-card';
    
    // Determinar si es nuevo o seminuevo
    const esNuevo = vehiculo.kilometraje === 0;
    const estadoBadge = esNuevo ? 
        '<div class="estado-badge nuevo">NUEVO</div>' : 
        '<div class="estado-badge seminuevo">SEMINUEVO</div>';
    
    card.innerHTML = `
        <div class="vehiculo-image">
            ${estadoBadge}
            <img src="${vehiculo.imagen}" alt="${vehiculo.modelo}" onerror="this.src='data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 400 200\\" fill=\\"%23bdc3c7\\"><rect x=\\"50\\" y=\\"80\\" width=\\"300\\" height=\\"60\\" rx=\\"8\\"/><circle cx=\\"100\\" cy=\\"160\\" r=\\"20\\"/><circle cx=\\"350\\" cy=\\"160\\" r=\\"20\\"/><rect x=\\"80\\" y=\\"60\\" width=\\"240\\" height=\\"30\\" rx=\\"4\\"/></svg>'">
            <div class="vehiculo-overlay">
                <span class="color-badge">${vehiculo.color}</span>
            </div>
        </div>
        <div class="vehiculo-info">
            <h3>${vehiculo.modelo}</h3>
            <p class="vehiculo-version">${vehiculo.version}</p>
            <div class="vehiculo-precio">$${vehiculo.precio.toLocaleString('es-MX')}</div>
            <div class="vehiculo-specs">
                <span><i class="fas fa-calendar"></i> ${vehiculo.año}</span>
                <span><i class="fas fa-tachometer-alt"></i> ${vehiculo.kilometraje.toLocaleString()} km</span>
                <span><i class="fas fa-gas-pump"></i> ${vehiculo.combustible}</span>
            </div>
            <div class="vehiculo-motor">
                <span><i class="fas fa-cogs"></i> ${vehiculo.motor} - ${vehiculo.potencia}</span>
            </div>
            <div class="vehiculo-rendimiento">
                <span><i class="fas fa-leaf"></i> ${vehiculo.rendimiento}</span>
            </div>
            <div class="vehiculo-caracteristicas">
                ${vehiculo.caracteristicas.slice(0, 2).map(car => `<small>• ${car}</small>`).join('<br>')}
            </div>
            <div class="vehiculo-buttons">
                <button class="btn btn-primary btn-small" onclick="verDetalles(${vehiculo.id})">
                    <i class="fas fa-eye"></i> Ver Detalles
                </button>
                <button class="btn btn-secondary btn-small" onclick="cotizar(${vehiculo.id})">
                    <i class="fas fa-calculator"></i> Cotizar
                </button>
            </div>
        </div>
    `;
    return card;
}

// Configurar filtros de búsqueda
function configurarFiltros() {
    const filtros = ['marca', 'tipo', 'precio'];
    
    filtros.forEach(filtro => {
        const select = document.getElementById(filtro);
        if (select) {
            select.addEventListener('change', filtrarVehiculos);
        }
    });
}

function filtrarVehiculos() {
    const marca = document.getElementById('marca')?.value || '';
    const tipo = document.getElementById('tipo')?.value || '';
    const precio = document.getElementById('precio')?.value || '';

    vehiculosFiltrados = vehiculos.filter(vehiculo => {
        const cumpleMarca = !marca || vehiculo.marca === marca;
        const cumpleTipo = !tipo || vehiculo.tipo === tipo;
        
        let cumplePrecio = true;
        if (precio) {
            const [min, max] = precio.split('-').map(p => parseInt(p.replace('+', '')));
            if (max) {
                cumplePrecio = vehiculo.precio >= min && vehiculo.precio <= max;
            } else {
                cumplePrecio = vehiculo.precio >= min;
            }
        }

        return cumpleMarca && cumpleTipo && cumplePrecio;
    });

    mostrarVehiculos(vehiculosFiltrados);
}

// Funciones para vehículos
function verDetalles(id) {
    const vehiculo = vehiculos.find(v => v.id === id);
    if (!vehiculo) return;

    const esNuevo = vehiculo.kilometraje === 0;
    const estadoBadge = esNuevo ? 
        '<span class="modal-badge nuevo">NUEVO</span>' : 
        '<span class="modal-badge seminuevo">SEMINUEVO</span>';

    const modal = crearModal(`
        <div class="modal-vehiculo">
            <div class="modal-imagen-container">
                <img src="${vehiculo.imagen}" alt="${vehiculo.modelo}" class="modal-imagen">
                <div class="modal-overlay-info">
                    ${estadoBadge}
                    <span class="color-badge">${vehiculo.color}</span>
                </div>
            </div>
            <div class="modal-info">
                <h2>${vehiculo.modelo}</h2>
                <p class="modal-version">${vehiculo.version}</p>
                <div class="precio-grande">$${vehiculo.precio.toLocaleString('es-MX')}</div>
                
                <div class="specs-detalle">
                    <div class="spec-item">
                        <i class="fas fa-calendar"></i>
                        <span>Año: ${vehiculo.año}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>Kilometraje: ${vehiculo.kilometraje.toLocaleString()} km</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-cogs"></i>
                        <span>Motor: ${vehiculo.motor}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-bolt"></i>
                        <span>Potencia: ${vehiculo.potencia}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-gas-pump"></i>
                        <span>Combustible: ${vehiculo.combustible}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-exchange-alt"></i>
                        <span>Transmisión: ${vehiculo.transmision}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-leaf"></i>
                        <span>Rendimiento: ${vehiculo.rendimiento}</span>
                    </div>
                </div>

                <div class="equipamiento-detalle">
                    <h4>Equipamiento Completo:</h4>
                    <div class="equipamiento-tabs">
                        <div class="equipamiento-tab">
                            <h5><i class="fas fa-car"></i> Exterior</h5>
                            <ul>
                                ${vehiculo.equipamiento.exterior.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="equipamiento-tab">
                            <h5><i class="fas fa-couch"></i> Interior</h5>
                            <ul>
                                ${vehiculo.equipamiento.interior.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="equipamiento-tab">
                            <h5><i class="fas fa-shield-alt"></i> Seguridad</h5>
                            <ul>
                                ${vehiculo.equipamiento.seguridad.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="caracteristicas-detalle">
                    <h4>Características Destacadas:</h4>
                    <ul>
                        ${vehiculo.caracteristicas.map(car => `<li>${car}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-buttons">
                    <button class="btn btn-primary" onclick="cotizar(${id}); cerrarModal();">
                        <i class="fas fa-calculator"></i> Cotizar Ahora
                    </button>
                    <button class="btn btn-secondary" onclick="agendarPrueba(${id})">
                        <i class="fas fa-car"></i> Agendar Prueba
                    </button>
                </div>
            </div>
        </div>
    `);

    document.body.appendChild(modal);
}

function cotizar(id) {
    const vehiculo = vehiculos.find(v => v.id === id);
    if (!vehiculo) return;

    // Llenar la calculadora con el precio del vehículo
    const precioInput = document.getElementById('precio-vehiculo');
    if (precioInput) {
        precioInput.value = vehiculo.precio;
        
        // Scroll a la sección de financiamiento
        const financiamientoSection = document.getElementById('financiamiento');
        if (financiamientoSection) {
            financiamientoSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Mostrar la calculadora
        abrirCalculadora();
    }
}

function agendarPrueba(id) {
    const vehiculo = vehiculos.find(v => v.id === id);
    if (!vehiculo) return;

    mostrarNotificacion(`¡Excelente elección! Te contactaremos pronto para agendar tu prueba de manejo del ${vehiculo.modelo}`, 'success');
    cerrarModal();
}

// Calculadora de financiamiento
function abrirCalculadora() {
    const calculadora = document.getElementById('calculadora');
    if (calculadora) {
        calculadora.style.display = 'block';
        calculadora.scrollIntoView({ behavior: 'smooth' });
    }
}

function calcularPago() {
    const precio = parseFloat(document.getElementById('precio-vehiculo')?.value) || 0;
    const enganche = parseFloat(document.getElementById('enganche')?.value) || 0;
    const plazo = parseInt(document.getElementById('plazo')?.value) || 12;
    
    if (precio <= 0) {
        mostrarNotificacion('Por favor ingresa un precio válido', 'error');
        return;
    }

    if (enganche >= precio) {
        mostrarNotificacion('El enganche no puede ser mayor o igual al precio del vehículo', 'error');
        return;
    }

    const montoFinanciar = precio - enganche;
    const tasaAnual = 0.089; // 8.9% anual
    const tasaMensual = tasaAnual / 12;
    
    // Fórmula de pago mensual
    const pagoMensual = (montoFinanciar * tasaMensual * Math.pow(1 + tasaMensual, plazo)) / 
                       (Math.pow(1 + tasaMensual, plazo) - 1);
    
    const totalPagar = pagoMensual * plazo + enganche;
    const interesTotal = totalPagar - precio;

    const resultado = document.getElementById('resultado-calculo');
    if (resultado) {
        resultado.innerHTML = `
            <h4>Resultado del Financiamiento</h4>
            <div class="resultado-item">
                <strong>Pago Mensual: $${pagoMensual.toLocaleString('es-MX', {minimumFractionDigits: 2})}</strong>
            </div>
            <div class="resultado-item">
                Monto a Financiar: $${montoFinanciar.toLocaleString('es-MX')}
            </div>
            <div class="resultado-item">
                Total a Pagar: $${totalPagar.toLocaleString('es-MX', {minimumFractionDigits: 2})}
            </div>
            <div class="resultado-item">
                Intereses: $${interesTotal.toLocaleString('es-MX', {minimumFractionDigits: 2})}
            </div>
            <div class="resultado-nota">
                <small>*Cálculo estimado. Sujeto a aprobación crediticia.</small>
            </div>
        `;
    }
}

// Configurar formularios
function configurarFormularios() {
    const contactoForm = document.getElementById('contacto-form');
    if (contactoForm) {
        contactoForm.addEventListener('submit', manejarContacto);
    }
}

function manejarContacto(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const datos = {
        nombre: document.getElementById('nombre')?.value,
        email: document.getElementById('email')?.value,
        telefono: document.getElementById('telefono')?.value,
        interes: document.getElementById('interes')?.value,
        mensaje: document.getElementById('mensaje')?.value,
        terminos: document.getElementById('terminos')?.checked
    };

    // Validaciones
    if (!datos.nombre || !datos.email || !datos.telefono || !datos.interes) {
        mostrarNotificacion('Por favor completa todos los campos obligatorios', 'error');
        return;
    }

    if (!datos.terminos) {
        mostrarNotificacion('Debes aceptar los términos y condiciones', 'error');
        return;
    }

    if (!validarEmail(datos.email)) {
        mostrarNotificacion('Por favor ingresa un email válido', 'error');
        return;
    }

    // Simular envío
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
        mostrarNotificacion('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Funciones de utilidad
function crearModal(contenido) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="cerrarModal()">
                <i class="fas fa-times"></i>
            </button>
            ${contenido}
        </div>
    `;

    // Cerrar modal al hacer click fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    // Agregar estilos del modal si no existen
    if (!document.querySelector('#modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 90%;
                max-height: 90%;
                overflow-y: auto;
                position: relative;
                animation: slideIn 0.3s ease;
            }
            .modal-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #7f8c8d;
                z-index: 1;
            }
            .modal-vehiculo {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                padding: 2rem;
                min-width: 600px;
            }
            .modal-imagen {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 8px;
            }
            .precio-grande {
                font-size: 2rem;
                font-weight: 700;
                color: #e74c3c;
                margin: 1rem 0;
            }
            .specs-detalle {
                margin: 1.5rem 0;
            }
            .spec-item {
                display: flex;
                align-items: center;
                margin-bottom: 0.5rem;
            }
            .spec-item i {
                margin-right: 0.5rem;
                color: #3498db;
                width: 20px;
            }
            .caracteristicas-detalle h4 {
                margin-bottom: 1rem;
                color: #2c3e50;
            }
            .caracteristicas-detalle ul {
                list-style: none;
                padding: 0;
            }
            .caracteristicas-detalle li {
                padding: 0.25rem 0;
                padding-left: 1rem;
                position: relative;
            }
            .caracteristicas-detalle li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #27ae60;
                font-weight: bold;
            }
            .modal-buttons {
                display: flex;
                gap: 1rem;
                margin-top: 2rem;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @media (max-width: 768px) {
                .modal-vehiculo {
                    grid-template-columns: 1fr;
                    min-width: auto;
                    padding: 1rem;
                }
                .modal-buttons {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    return modal;
}

function cerrarModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.innerHTML = `
        <div class="notificacion-content">
            <i class="fas fa-${tipo === 'success' ? 'check-circle' : tipo === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${mensaje}</span>
            <button onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Agregar estilos de notificación si no existen
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notificacion {
                position: fixed;
                top: 100px;
                right: 20px;
                z-index: 10001;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            }
            .notificacion-content {
                display: flex;
                align-items: center;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                color: white;
                gap: 0.5rem;
            }
            .notificacion-success .notificacion-content {
                background: #27ae60;
            }
            .notificacion-error .notificacion-content {
                background: #e74c3c;
            }
            .notificacion-info .notificacion-content {
                background: #3498db;
            }
            .notificacion button {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                margin-left: auto;
                padding: 0.25rem;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }

    document.body.appendChild(notificacion);

    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notificacion.parentElement) {
            notificacion.remove();
        }
    }, 5000);
}

// Configurar animaciones
function configurarAnimaciones() {
    // Intersection Observer para animaciones al scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos para animar
    const elementsToAnimate = document.querySelectorAll('.servicio-card, .vehiculo-card, .contacto-form');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Funciones adicionales para mejorar la experiencia
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Agregar botón de scroll to top
function agregarBotonScrollTop() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
    button.className = 'scroll-top-btn';
    button.onclick = scrollToTop;
    
    const styles = document.createElement('style');
    styles.textContent = `
        .scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--secondary-color);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: var(--shadow);
            transition: var(--transition);
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
        }
        .scroll-top-btn.visible {
            opacity: 1;
            visibility: visible;
        }
        .scroll-top-btn:hover {
            background: var(--primary-color);
            transform: translateY(-2px);
        }
    `;
    
    document.head.appendChild(styles);
    document.body.appendChild(button);

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}

// Inicializar botón de scroll cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(agregarBotonScrollTop, 1000);
});

// Funciones para los botones del hero
document.addEventListener('DOMContentLoaded', () => {
    const verCatalogoBtn = document.querySelector('.hero-buttons .btn-primary');
    const cotizarBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    if (verCatalogoBtn) {
        verCatalogoBtn.addEventListener('click', () => {
            document.getElementById('vehiculos')?.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (cotizarBtn) {
        cotizarBtn.addEventListener('click', () => {
            document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
