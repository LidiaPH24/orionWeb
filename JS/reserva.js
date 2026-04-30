 function abrirModal() {
      document.getElementById('modalReserva').style.display = 'flex';
    }

    function cerrarModal() {
      document.getElementById('modalReserva').style.display = 'none';
    }

    function anularReserva() {
      alert('Tu viaje ha sido anulado correctamente');
      cerrarModal();
    }