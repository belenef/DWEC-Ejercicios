class Poliza {
    // Constructor
    constructor(gama, year, cobertura) {
        this._gama = gama;
        this._year = year;
        this._cobertura = cobertura;
        this._importe = 0;
    }

    // Getters
    get gama() { return this._gama; }
    get year() { return this._year; }
    get cobertura() { return this._cobertura; }
    get importe() { return this._importe; }

    // funcion para calcular el seguro
    calcularSeguro() {
        let base = 300;
        // Gama
        if(this._gama === '1') base *= 1.05;
        else if(this._gama === '2') base *= 1.15;
        else if(this._gama === '3') base *= 1.30;

        // Antigüedad
        const antiguedad = new Date().getFullYear() - this._year;
        base *= (1 + antiguedad * 0.03);

        // Cobertura
        if(this._cobertura === 'Básico') base *= 1.3;
        else if(this._cobertura === 'Completo') base *= 1.5;

        this._importe = Math.round(base);
    }

    // Función para mostrar la información en el HTML
    mostrarInfoHTML() {
        // Crear el modal de Bootstrap
        const modal = new bootstrap.Modal('#modal', {});
        
        // Título
        const titulo = document.querySelector('.modal-title');
        titulo.textContent = 'RESUMEN DE PÓLIZA';
        titulo.className = 'modal-title fs-3 font-bold header col';

        // Cuerpo
        const cuerpo = document.querySelector('.modal-body');
        cuerpo.innerHTML = `
            <p class="font-bold">TIPO: ${this._gama === '1' ? 'Baja' : this._gama === '2' ? 'Media' : 'Alta'}</p>
            <p class="font-bold">AÑO: ${this._year}</p>
            <p class="font-bold">COBERTURA: ${this._cobertura}</p>
            <p class="font-bold">TOTAL: <span class="text-teal-600">${this._importe} €</span></p>
        `;

        // Footer
        const footer = document.querySelector('.modal-footer');
        footer.innerHTML = '';
        const btnCerrar = document.createElement('button');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.classList.add('btn','btn-primary','btn-raised','col');
        btnCerrar.onclick = () => modal.hide();
        footer.appendChild(btnCerrar);

        modal.show();
    }
}