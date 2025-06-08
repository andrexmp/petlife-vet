function mostrar(id) {
  const secciones = document.querySelectorAll('.contenido');
  secciones.forEach(sec => sec.hidden = true);
  document.getElementById(id).hidden = false;
}

function cargarVeterinarios() {
  return JSON.parse(localStorage.getItem('veterinarios')) || [];
}

function guardarVeterinarios(vets) {
  localStorage.setItem('veterinarios', JSON.stringify(vets));
}

function mostrarRegistro() {
  document.getElementById('login-container').hidden = true;
  document.getElementById('registro-container').hidden = false;
}

function mostrarLogin() {
  document.getElementById('registro-container').hidden = true;
  document.getElementById('login-container').hidden = false;
}

function registrarVeterinario() {
  const usuario = document.getElementById('registroUsuario').value;
  const pass = document.getElementById('registroPass').value;
  if (usuario && pass) {
    const vets = cargarVeterinarios();
    vets.push({ usuario, pass });
    guardarVeterinarios(vets);
    alert('Veterinario registrado');
    mostrarLogin();
  } else {
    alert('Completa usuario y contraseña');
  }
}

function login() {
  const usuario = document.getElementById('loginUsuario').value;
  const pass = document.getElementById('loginPass').value;
  const tipo = document.getElementById('tipoUsuario').value;

  if (tipo === 'veterinario') {
    const vets = cargarVeterinarios();
    const ok = vets.find(v => v.usuario === usuario && v.pass === pass);
    if (!ok) {
      alert('Credenciales inválidas');
      return;
    }
  }

  localStorage.setItem('sesionTipo', tipo);
  document.getElementById('panel').hidden = false;
  document.getElementById('login-container').hidden = true;
  mostrar('inicio');
}
