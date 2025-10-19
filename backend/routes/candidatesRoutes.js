const express = require('express');
const { addCandidate, updateStatus, getCandidates, deleteCandidate } = require('../controllers/candidatesControllers');
const candidateRouter = express.Router();

//create new candidate
candidateRouter.post('/create-candidate', addCandidate);

// get all candidates
candidateRouter.get('/get-candidates', getCandidates);

//update status
candidateRouter.put('/:id/status', updateStatus);

// DELETE 
candidateRouter.delete('/:id', deleteCandidate);


module.exports = candidateRouter;
