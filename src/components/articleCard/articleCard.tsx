import React from "react";
import "./articleCard.scss";
import { newsType } from "../../types/basicTypes";
import { Link } from "react-router-dom";

// TODO Для расширения: Добавить HOC для генерации bem классов
// TODO Для расширения: Добавить проверку типа новости для коррекции внешнего вида карточки

type ArticleCardProps = { article: newsType };
type ArticleCardState = {};

export default class ArticleCard extends React.Component<
  ArticleCardProps,
  ArticleCardState
> {
  render() {
    const { previewSrc, category, title, slug, previewText } =
      this.props.article;
    return (
      <div className="ArticleCard">
        <img src={previewSrc} className="ArticleCard__image" alt={title} />
        {/*TODO Для расширения, добавить модификатор цвета для каждой категории*/}
        <div className="ArticleCard__category">{category}</div>
        <div className="ArticleCard__title">{title}</div>
        <div className="ArticleCard__previewText">{previewText}</div>
        <Link to={`article/${slug}`}>Открыть статью</Link>
      </div>
    );
  }
}
