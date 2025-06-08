function mostrar(id) {
  const secciones = document.querySelectorAll('.contenido');
  secciones.forEach(sec => sec.hidden = true);
  document.getElementById(id).hidden = false;
}
