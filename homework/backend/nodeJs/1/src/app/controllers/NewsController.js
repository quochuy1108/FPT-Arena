class NewsController {
  index(req, res) {
    // [GET] /news
    res.render('news');
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send('Node Js');
  }
}

module.exports = new NewsController();
