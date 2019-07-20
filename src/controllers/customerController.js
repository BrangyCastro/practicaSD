const controller = {};

controller.init = (req, res) => {
  res.render('index');
}

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM cliente', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO cliente set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/client');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM cliente WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE cliente set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/client');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM cliente WHERE id = ?', [id], (err, rows) => {
      res.redirect('/client');
    });
  });
}

module.exports = controller;
