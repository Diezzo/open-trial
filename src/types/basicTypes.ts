// TODO для расширения: добавить категории, добавить смежные категории
// TODO для расширения: добавить параметр 'newsType' новостей для различных вариантов отображения

export type newsType = {
  category: newsCategory;
  previewSrc: string;
  previewText: string;
  title: string;
  body: string;
  slug: string;
};
export enum newsCategory {
  public = "Общее",
  politic = "Политика",
  celebrity = "Звезды",
}
