const data = require('./data.json');

module.exports = function (app) {
  app.get("/clients", function (req, res) {

    res.json(data);

  });

  app.get("/clients/:id", function (req, res) {

    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client)
      return res.status(204).json();

    res.json(client);

  });

  app.post("/clients", function (req, res) {

    const { name, phone } = req.body;

    // save logic

    res.json({ name, phone });

  });

  app.put("/clients/:id", function (req, res) {

    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();


    // Update client name
    const { name } = req.body;

    client.name = name;

    res.json(client);

  });

  app.delete("/clients/:id", function (req, res) {

    const { id } = req.params;
    const clientFiltered = data.filter(cli => cli.id != id);

    res.json(clientFiltered);

  });
}