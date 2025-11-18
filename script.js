// Espera a que todo el HTML esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
	
	// Obtiene todos los botones de navegación
	const navButtons = document.querySelectorAll('.nav-btn, .cta-button');
	
	// Obtiene todas las secciones del sitio
	const sections = document.querySelectorAll('.section');
	
	// Agrega evento de click a cada botón
	navButtons.forEach(button => {
		button.addEventListener('click', function() {
			// Obtiene el nombre de la sección a mostrar
			const targetSection = this.getAttribute('data-section');
			
			// Oculta todas las secciones
			sections.forEach(section => {
				section.classList.remove('active');
			});
			
			// Muestra solo la sección seleccionada
			document.getElementById(targetSection).classList.add('active');
			
			// Actualiza los botones (quita 'active' de todos)
			navButtons.forEach(btn => {
				btn.classList.remove('active');
			});
			
			// Marca el botón actual como activo
			this.classList.add('active');
			
			// Scroll suave hacia arriba
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	});
	
	
	
	// Obtiene el formulario
	const contactForm = document.getElementById('contact-form');
	
	// Cuando se envía el formulario
	contactForm.addEventListener('submit', function(e) {
		// Evita que la página se recargue
		e.preventDefault();
		
		// Obtiene los valores del formulario
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const subject = document.getElementById('subject').value;
		const message = document.getElementById('message').value;
		
		// Valida que todos los campos estén llenos
		if (!name || !email || !subject || !message) {
			showMessage('Por favor completa todos los campos', false);
			return;
		}
		
		// Valida formato de email básico
		if (!email.includes('@') || !email.includes('.')) {
			showMessage('Por favor ingresa un email válido', false);
			return;
		}
		
		// Si todo está bien, muestra mensaje de éxito
		showMessage('¡Mensaje enviado con éxito! Te contactaré pronto.', true);
		
		// Limpia el formulario
		contactForm.reset();
		
		// Aquí podrías enviar los datos a un servidor
		console.log('Datos del formulario:', { name, email, subject, message });
	});
	
	
	
	function showMessage(text, isSuccess) {
		const messageDiv = document.getElementById('form-message');
		
		// Muestra el mensaje
		messageDiv.textContent = text;
		messageDiv.classList.remove('hidden', 'success', 'error');
		
		// Aplica el estilo correcto (verde para éxito, rojo para error)
		if (isSuccess) {
			messageDiv.classList.add('success');
		} else {
			messageDiv.classList.add('error');
		}
		
		// Oculta el mensaje después de 5 segundos
		setTimeout(function() {
			messageDiv.classList.add('hidden');
		}, 5000);
	}
	
});