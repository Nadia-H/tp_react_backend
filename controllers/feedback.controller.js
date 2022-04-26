const FeedbackModel = require("../models/Feedback.model")

exports.liste_feedbacks = async(req, res)=>{
    const liste = await FeedbackModel.find()
    res.send(liste)
}

exports.afficher_feedbacks = (req, res)=>{
    res.send(req.params.id)
}

exports.ajouter_feedbacks = (req, res)=>{
    res.send(req.body)
}
exports.detail_feedback = (req, res) =>{
    res.send(req.params.id +' ' + req.params.type)
}