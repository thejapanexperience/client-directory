const express = require('express');

const router = express.Router();

const Generic = require('../models/Generic');

router.route('/')
  .get((req, res) => {
    Generic.find({})
    .then(allGenerics => res.send(allGenerics))
    .catch(err => res.status(400).send(err));
  })

  .post((req, res) => {
    Generic.create(req.body.generic)
    .then(generic => Generic.find({}))
    .then(allGenerics => res.send(allGenerics))
    .catch(err => res.status(400).send(err));
  })

  .put((req, res) => {
    Generic.findByIdAndUpdate(req.body.generic._id, { $set: req.body.generic }, { new: true })
    .then(updated => Generic.find({}))
    .then(allGenerics => res.send(allGenerics))
    .catch(err => res.status(400).send(err));
  });


router.route('/:id')
   .get((req, res) => {
     Generic.findOne({ _id: req.params.id })
     .then((generic) => {
       console.log('generic: ', generic);
       res.send(generic);
     })
     .catch(err => res.status(400).send(err));
   })

   .delete((req, res) => {
     console.log('req.params.id: ', req.params.id);
     Generic.findByIdAndRemove(req.params.id)
     .then(generic => Generic.find({}))
     .then(allGenerics => res.send(allGenerics))
     .catch(err => res.status(400).send(err));
   });

module.exports = router;
