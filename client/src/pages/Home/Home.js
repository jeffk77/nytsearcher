import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem, SaveList } from "../../components/List";
import SaveBtn from "../../components/SaveBtn";
import RemoveBtn from "../../components/RemoveBtn";

class Home extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      let query = {
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      };

      API.articleQuery(query)
        .then(res => {
          const articleDB = res.data.response.docs.map((item) => {
            return item;
          })
          console.log(articleDB);
          this.setState({ articles: res.data.response.docs })
        })
        .catch(err => console.log(err));
    }
  };

  getSavedArticles = () => {
    API.getArticles()
      .then(res => {
        this.setState({ saved: res.data })
      })
      .catch(err => console.log(err));
  };

  saveArticle = (id) => {
    const query = this.state.articles.filter((obj) => {
      return obj._id === id;
    });
    console.log(query);

    API.saveArticle(query)
      .then(res => {
        this.getSavedArticles();
      })
      .catch(err => console.log(err));
  };

  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(res => {
        this.getSavedArticles();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <Jumbotron>
              <h1>
                New York Times Searcher
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="12 md-6">
            <Row>
              <form className="fullwidth ml-3">
                <h3 className="border-bottom">Search</h3>
                <Input
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                  name="topic"
                  placeholder="Topic (required)"
                />
                <Input
                  value={this.state.startYear}
                  onChange={this.handleInputChange}
                  name="startYear"
                  placeholder="Start Year (required)"
                />
                <Input
                  value={this.state.endYear}
                  onChange={this.handleInputChange}
                  name="endYear"
                  placeholder="End Year (required)"
                />
                <FormBtn
                  className="form-group"
                  disabled={!(this.state.topic) && !(this.state.startYear) && !(this.state.endYear)}
                  onClick={this.handleFormSubmit}
                >
                  Search
              </FormBtn>
              </form>
            </Row>
            <Row>
              <h3 className="border-top border-bottom fullwidth ml-3">Saved Articles</h3>
              {!this.state.saved ? (
                <h3 className="text-center fullwidth ml-3">No Saved Articles to Display</h3>
              ) : (
                  <List className="list-overflow-container savedList">
                    {this.state.saved.map(saved => {
                      return (
                        <SaveList
                          title={saved.title}
                          date={saved.date}
                          url={saved.url}
                        >
                          <RemoveBtn onClick={() => this.deleteArticle(saved._id)} />
                        </SaveList>
                      )
                    })}
                  </List>
                )}
            </Row>
          </Col>
          <Col size="12 md-6">
            <h3 className="border-bottom">Articles</h3>
            {!this.state.articles ? (
              <h5 className="text-center">None to Display</h5>
            ) : (
                <List className="list-overflow-container articleList">
                  {this.state.articles.map(articles => {
                    return (
                      <ListItem
                        title={!articles.headline.main ? ("Lorem Ipsum") : (articles.headline.main)}
                        date={articles.pub_date.slice(0, 10)}
                        synopsis={articles.snippet}
                        id={articles._id}>
                        <a href={articles.web_url} className="btn btn-info" rel="noreferrer noopener" target="_blank">
                          Link
                        </a>
                        <SaveBtn onClick={() => this.saveArticle(articles._id)} />
                      </ListItem>
                    )
                  })}
                </List>
              )}
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Home;
