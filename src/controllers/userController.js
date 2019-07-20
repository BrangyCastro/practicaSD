const controller = {};

controller.listUser = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM usuario', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('user', {
        dataUser: customers
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO usuario set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/user');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM usuario WHERE id = ?", [id], (err, rows) => {
      res.render('user_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE usuario set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/user');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM usuario WHERE id = ?', [id], (err, rows) => {
      res.redirect('/user');
    });
  });
}

module.exports = controller;
