const express = require('express');

const router = express.Router();

const Client = require('../models/Client');

router.route('/')
  .get((req, res) => {
    console.log('req.query: ', req.query);

    const query = Client.find({});

    let pagesize;
    let page;
    let allergy;

    if (req.query.pagesize) {
      pagesize = parseInt(req.query.pagesize);
    }
    if (req.query.page) {
      page = parseInt(req.query.page);
    }
    if (req.query.gender) {
      query.where('gender').equals(req.query.gender);
    }
    if (req.query.minage) {
      query.gt('age', parseInt(req.query.minage));
    }
    if (req.query.maxage) {
      query.lt('age', parseInt(req.query.maxage));
    }
    if (req.query.visitafter) {
      query.gt('lastVisit', parseInt(req.query.visitafter));
    }
    if (req.query.visitbefore) {
      query.gt('lastVisit', parseInt(req.query.visitbefore));
    }
    if (req.query.allergy) {
      query.where('allergies').in(req.query.allergy);
    }

    query
    .skip(page * pagesize || page * 20 || 0)
    .limit(pagesize || 20)

    .then(allClients => res.send(allClients))
    .catch(err => res.status(400).send(err));
  })

  .post((req, res) => {
    console.log('req.body: ', req.body);
    Client.create(req.body)
    .then(client => Client.find({}))
    .then(allClients => res.send(allClients))
    .catch(err => res.status(400).send(err));
  });

router.route('/:id')
   .get((req, res) => {
     Client.findOne({ _id: req.params.id })
     .then((client) => {
       console.log('client: ', client);
       res.send(client);
     })
     .catch(err => res.status(400).send(err));
   })

   .put((req, res) => {
     console.log('req.body: ', req.body);
     Client.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
     .then(updated => Client.find({}))
     .then(allClients => res.send(allClients))
     .catch(err => res.status(400).send(err));
   })

   .delete((req, res) => {
     console.log('req.params.id: ', req.params.id);
     Client.findByIdAndRemove(req.params.id)
     .then(client => Client.find({}))
     .then(allClients => res.send(allClients))
     .catch(err => res.status(400).send(err));
   });

module.exports = router;
