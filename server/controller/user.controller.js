const User = require('../models/user.model');
const requirelLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/favorite', requirelLogin, async (req, res) => {
    const { pokeId } = req.body
    await User.findByIdAndUpdate({ _id: req.user._id }, { $push: { favorites: pokeId } })
    res.status(201).json('add')
  })

  app.patch('/api/favorite', requirelLogin, async (req, res) => {
    const { pokeId } = req.body
    await User.findByIdAndUpdate({ _id: req.user._id }, { $pull: { favorites: pokeId } })
    res.status(201).json('remove')
  })
}
