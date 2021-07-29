import React from "react";
import "./feed.scss";
import { newsCategory, newsType } from "../../types/basicTypes";
import ArticleCard from "../../components/articleCard/articleCard";
import { NewsRequests } from "../../requests/newsRequests";
import Pagination from "@material-ui/lab/Pagination";
import { Button, ButtonGroup } from "@material-ui/core";

// TODO Для расширения: Добавить загрузку и вывод интересных статей по аналогичной категории / из раздела популярное
// TODO Для расширения: Добавить стейт load при подгрузке/обновлении данных
// TODO Для расширения: Добавить индикацию новых новостей ( сменить получение данных на server sent events)

type feedProps = {};

type feedState = {
  actualNews: newsType[];
  hotNews: newsType[];
  promoNews: newsType[];
  pages: number;
  selectedCategory: newsCategory;
};

export default class feed extends React.Component<feedProps, feedState> {
  state = {
    actualNews: [],
    hotNews: [],
    promoNews: [],
    pages: 0,
    selectedCategory: newsCategory.public,
  };

  //TODO Завернуть реквесты нормально

  async componentDidMount() {
    const newsRequests = new NewsRequests();
    await newsRequests
      .loadNewsByCategory(this.state.selectedCategory, 10, 1)
      .then((r) => {
        this.setState({ actualNews: r });
      });
    await newsRequests
      .getNewsNumberByCategory(newsCategory.public, 10)
      .then((r) => {
        this.setState({ pages: r });
      });
  }

  loadPage = async (event: any, value: number) => {
    const newsRequests = new NewsRequests();
    newsRequests
      .loadNewsByCategory(this.state.selectedCategory, 10, value)
      .then((r) => {
        this.setState({ actualNews: r });
      });
  };
  setCategory = async (category: newsCategory) => {
    const newsRequests = new NewsRequests();
    await newsRequests.loadNewsByCategory(category, 10, 1).then((r) => {
      this.setState({ actualNews: r, selectedCategory: category });
    });
  };
  render() {
    return (
      <div className="feed">
        <h1 className="feed__title">Новостной фид для Опен</h1>

        {/*TODO Завернуть в перебор по энаму*/}
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            variant={
              this.state.selectedCategory === newsCategory.public
                ? "contained"
                : "outlined"
            }
            onClick={() => {
              this.setCategory(newsCategory.public);
            }}
          >
            {newsCategory.public}
          </Button>
          <Button
            variant={
              this.state.selectedCategory === newsCategory.politic
                ? "contained"
                : "outlined"
            }
            onClick={() => {
              this.setCategory(newsCategory.politic);
            }}
          >
            {newsCategory.politic}
          </Button>
          <Button
            variant={
              this.state.selectedCategory === newsCategory.celebrity
                ? "contained"
                : "outlined"
            }
            onClick={() => {
              this.setCategory(newsCategory.celebrity);
            }}
          >
            {newsCategory.celebrity}
          </Button>
        </ButtonGroup>
        <div className="feed__wrapper">
          {this.state.actualNews.map((element) => (
            <ArticleCard article={element} />
          ))}
        </div>
        <div className="feed__pagination">
          <Pagination
            defaultPage={1}
            count={this.state.pages}
            onChange={this.loadPage}
          />
        </div>
      </div>
    );
  }
}
