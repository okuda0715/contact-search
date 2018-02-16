const ContactInfo = require('../models').ContactInfo;

module.exports = {
  list(req, res) {
    return ContactInfo
      .all()
      .then(contactinfo => res.status(200).send(contactinfo))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return ContactInfo
    .findById(req.params.id)
    .then(contactinfo => {
      if (!contactinfo) {
        return res.status(404).send({
          message: 'contact Not Found',
        });
      }
      return res.status(200).send(contactinfo);
    })
    .catch(error => res.status(400).send(error));
  },
};
