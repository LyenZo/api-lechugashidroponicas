//RUTAS PARA CONEXIÓN A API
const express = require('express');
const router = express.Router();
const connection = require('./db');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//APP_PR_U
// GET
router.get('/app_pr_u', (req, res) => {
  connection.query('SELECT * FROM app_pr_u', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/app_pr_u/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM app_pr_u WHERE id = ?', id, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/app_pr_u', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO app_pr_u SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/app_pr_u/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE app_pr_u SET ? WHERE id = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/app_pr_u/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM app_pr_u WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CLIENTES
// GET
router.get('/clientes', (req, res) => {
  connection.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/clientes/:idCliente', (req, res) => {
    const idCliente = req.params.idCliente;
    connection.query('SELECT * FROM clientes WHERE idCliente = ?', idCliente, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/clientes', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO clientes SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/clientes/:idCliente', (req, res) => {
  const idCliente = req.params.idCliente;
  const datosActualizados = req.body;
  connection.query('UPDATE clientes SET ? WHERE idCliente = ?', [datosActualizados, idCliente], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/clientes/:idCliente', (req, res) => {
  const idCliente = req.params.idCliente;
  connection.query('DELETE FROM clientes WHERE idCliente = ?', idCliente, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//COMPRAS 
// GET
router.get('/compras', (req, res) => {
  connection.query('SELECT * FROM compras', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/compras/:idCompra', (req, res) => {
    const idCompra = req.params.idCompra;
    connection.query('SELECT * FROM compras WHERE idCompra = ?', idCompra, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/compras', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO compras SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/compras/:idCompra', (req, res) => {
  const idCompra = req.params.idCompra;
  const datosActualizados = req.body;
  connection.query('UPDATE compras SET ? WHERE idCompra = ?', [datosActualizados, idCompra], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/compras/:idCompra', (req, res) => {
  const idCompra = req.params.idCompra;
  connection.query('DELETE FROM compras WHERE idCompra = ?', idCompra, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//COMPRASDET
// GET
router.get('/comprasdet', (req, res) => {
  connection.query('SELECT * FROM comprasdet', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/comprasdet/:idCompraDet', (req, res) => {
    const idCompraDet = req.params.idCompraDet;
    connection.query('SELECT * FROM comprasdet WHERE idCompraDet = ?', idCompraDet, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/comprasdet', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO comprasdet SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/comprasdet/:idCompraDet', (req, res) => {
  const idCompraDet = req.params.idCompraDet;
  const datosActualizados = req.body;
  connection.query('UPDATE comprasdet SET ? WHERE idCompraDet = ?', [datosActualizados, idCompraDet], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/comprasdet/:idCompraDet', (req, res) => {
  const idCompraDet = req.params.idCompraDet;
  connection.query('DELETE FROM comprasdet WHERE idCompraDet = ?', idCompraDet, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CUENTASBANCARIAS
//Espacio para cuentas bancarias, no se haran las funciones aún por seguridad



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EMPLEADOS
// GET
router.get('/empleados', (req, res) => {
  connection.query('SELECT * FROM empleados', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/empleados/:idEmpleado', (req, res) => {
    const idEmpleado = req.params.idEmpleado;
    connection.query('SELECT * FROM empleados WHERE idEmpleado = ?', idEmpleado, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/empleados', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO empleados SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/empleados/:idEmpleado', (req, res) => {
  const idEmpleado = req.params.idEmpleado;
  const datosActualizados = req.body;
  connection.query('UPDATE empleados SET ? WHERE idEmpleado = ?', [datosActualizados, idEmpleado], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/empleados/:idEmpleado', (req, res) => {
  const idEmpleado = req.params.idEmpleado;
  connection.query('DELETE FROM empleados WHERE idEmpleado = ?', idEmpleado, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FORMASPAGO
// GET
router.get('/formaspago', (req, res) => {
  connection.query('SELECT * FROM formaspago', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/formaspago/:idFormaPago', (req, res) => {
    const idFormaPago = req.params.idFormaPago;
    connection.query('SELECT * FROM formaspago WHERE idFormaPago = ?', idFormaPago, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/formaspago', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO formaspago SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/formaspago/:idFormaPago', (req, res) => {
  const idFormaPago = req.params.idFormaPago;
  const datosActualizados = req.body;
  connection.query('UPDATE formaspago SET ? WHERE idFormaPago = ?', [datosActualizados, idFormaPago], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/formaspago/:idFormaPago', (req, res) => {
  const idFormaPago = req.params.idFormaPago;
  connection.query('DELETE FROM formaspago WHERE idFormaPago = ?', idFormaPago, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GASTOS
// GET
router.get('/gastos', (req, res) => {
  connection.query('SELECT * FROM gastos', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/gastos/:idGasto', (req, res) => {
    const idGasto = req.params.idGasto;
    connection.query('SELECT * FROM gastos WHERE idGasto = ?', idGasto, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/gastos', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO gastos SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/gastos/:idGasto', (req, res) => {
  const idGasto = req.params.idGasto;
  const datosActualizados = req.body;
  connection.query('UPDATE gastos SET ? WHERE idGasto = ?', [datosActualizados, idGasto], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/gastos/:idGasto', (req, res) => {
  const idGasto = req.params.idGasto;
  connection.query('DELETE FROM empleados WHERE idGasto = ?', idGasto, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GASTOSDESCRIPCIONES
// GET
router.get('/gastosdescripciones', (req, res) => {
  connection.query('SELECT * FROM gastosdescripciones', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/gastosdescripciones/:idGastoDescripcion', (req, res) => {
    const idGastoDescripcion = req.params.idGastoDescripcion;
    connection.query('SELECT * FROM gastosdescripciones WHERE idGastoDescripcion = ?', idGastoDescripcion, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/gastosdescripciones', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO gastosdescripciones SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/gastosdescripciones/:idGastoDescripcion', (req, res) => {
  const idGastoDescripcion = req.params.idGastoDescripcion;
  const datosActualizados = req.body;
  connection.query('UPDATE gastosdescripciones SET ? WHERE idGastoDescripcion = ?', [datosActualizados, idGastoDescripcion], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/gastosdescripciones/:idGastoDescripcion', (req, res) => {
  const idGastoDescripcion = req.params.idGastoDescripcion;
  connection.query('DELETE FROM gastosdescripciones WHERE idGastoDescripcion = ?', idGastoDescripcion, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GASTOSDET
// GET
router.get('/gastosdet', (req, res) => {
  connection.query('SELECT * FROM gastosdet', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/gastosdet/:idGastoDet', (req, res) => {
    const idGastoDet = req.params.idGastoDet;
    connection.query('SELECT * FROM gastosdet WHERE idGastoDet = ?', idGastoDet, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/gastosdet', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO gastosdet SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/gastosdet/:idGastoDet', (req, res) => {
  const idGastoDet = req.params.idGastoDet;
  const datosActualizados = req.body;
  connection.query('UPDATE gastosdet SET ? WHERE idGastoDet = ?', [datosActualizados, idGastoDet], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/gastosdet/:idGastoDet', (req, res) => {
  const idGastoDet = req.params.idGastoDet;
  connection.query('DELETE FROM gastosdet WHERE idGastoDet = ?', idGastoDet, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIEDADES
// GET
router.get('/variedades', (req, res) => {
  connection.query('SELECT * FROM variedades', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});
// GET ONE
router.get('/variedades/:idVariedad', (req, res) => {
    const idVariedad = req.params.idVariedad;
    connection.query('SELECT * FROM variedades WHERE idVariedad = ?', idVariedad, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});
// CREATE
router.post('/variedades', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO variedades SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});
// UPDATE
router.put('/variedades/:idVariedad', (req, res) => {
  const idVariedad = req.params.idVariedad;
  const datosActualizados = req.body;
  connection.query('UPDATE variedades SET ? WHERE idVariedad = ?', [datosActualizados, idVariedad], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});
// DELETE
router.delete('/variedades/:idVariedad', (req, res) => {
  const idVariedad = req.params.idVariedad;
  connection.query('DELETE FROM variedades WHERE idVariedad = ?', idVariedad, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});
module.exports = router;
