module.exports = logic => (
  async (req, res) => {
    const startTime = Date.now();
    try {
      const data = await logic(req);
      const took = Date.now() - startTime;
      return res.status(data.status).send(Object.assign({}, data, { took }));
    } catch (ex) {
      const errors = [
        {
          status: ex.value,
          title: ex.message.title,
          details: ex.message.details
        }
      ];
      const took = Date.now() - startTime;
      return res.status(ex.value).send({ errors, took });
    }
  }
);
