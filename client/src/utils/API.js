import axios from "axios";

const apikey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  articleQuery: function (req, res) {
    // NY Times API get request
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",
      {
        params: {
          apikey: apikey,
          q: req.topic,
          begin_date: req.startYear + "0101",
          end_date: req.endYear + "1231"
        }
      })
  },

  getArticles: function () {
    return axios.get("/api/saved")
  },

  deleteArticle: function (id) {
    return axios.delete(`/api/articles/${id}`)
  },

  saveArticle: function (query) {
    let article = query[0];

    var newArticle = {
      title: article.headline.main,
      date: article.pub_date.slice(0, 10),
      url: article.web_url
    };

    console.log(newArticle);
    return axios.post("/api/saved", newArticle)
  }
};