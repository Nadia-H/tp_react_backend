
module.exports = (app)=>{

    const ctrl = require('../controllers/feedback.controller')
    
    app.get('/feedbacks', ctrl.liste_feedbacks)

    app.get('/feedbacks/:id', ctrl.afficher_feedbacks)
    
    app.post('/feedbacks', ctrl.ajouter_feedbacks)
}