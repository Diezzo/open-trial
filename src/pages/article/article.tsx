import React from "react";
import "./article.scss";
import { NewsRequests } from "../../requests/newsRequests";
import { newsCategory, newsType } from "../../types/basicTypes";

// TODO Для расширения: Добавить загрузку интересных статей по аналогичной категории / из раздела популярное

type articleProps = { match: any };
type articleState = { currentNews: newsType };

export default class article extends React.Component<
  articleProps,
  articleState
> {
  state = {
    currentNews: {
      title: "",
      previewSrc: "",
      previewText: "",
      category: newsCategory.public,
      body: "",
      slug: "",
    },
  };
  async componentDidMount() {
    const newsRequests = new NewsRequests();
    const { slug } = this.props.match.params;
    await newsRequests.loadOneNews(slug).then((r) => {
      this.setState({ currentNews: r });
    });
  }
  render() {
    // TODO Поставить нормальный лоадер и заглушку.
    // TODO Добавить разметку статьи с отображением статей из этой же категории
    return (
      <div className="article">
        {this.state.currentNews.title === "" ? (
          "loading"
        ) : (
          <div className={"article__wrapper"}>
            <div className="article__title">{this.state.currentNews.title}</div>
            <div className="article__imagePreview">
              <img
                src={this.state.currentNews.previewSrc}
                alt={this.state.currentNews.title}
              />
            </div>
            <div className="article__body">{this.state.currentNews.body}</div>
          </div>
        )}
      </div>
    );
  }
}
