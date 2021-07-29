import { newsCategory, newsType } from "../types/basicTypes";

const defaultNewsPlugPublic: newsType = {
  title: "Lorem Ipsum",
  previewSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3uRDcx8eXsUSDAUfYGuK7k_Gn54Lzt_cBg&usqp=CAU",
  previewText:
    'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
  category: newsCategory.public,
  body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  slug: "asdgfk-Lorem-Ipsum",
};
const defaultNewsPlugPolitic: newsType = {
  title: "Lorem Ipsum",
  previewSrc:
    "https://i.insider.com/60e9a6bbca74780018ae8bf1?width=1136&format=jpeg",
  previewText:
    'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
  category: newsCategory.politic,
  body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  slug: "asdgfk-Lorem-Ipsum",
};

const newsArrayPublic: newsType[] = [];
const newsArrayPolitic: newsType[] = [];

for (let i = 0; i < 10; i++) {
  newsArrayPublic.push(defaultNewsPlugPublic);
}
for (let i = 0; i < 10; i++) {
  newsArrayPolitic.push(defaultNewsPlugPolitic);
}

// TODO Для расширения: добавить запрос для запроса произвольного количества новостей
export class NewsRequests {
  loadOneNews: (slug: string) => Promise<newsType> = async (slug) => {
    try {
      // TODO Для расширения: поставить фетч реальных данных
    } catch (e) {}
    return defaultNewsPlugPublic;
  };

  loadNewsByCategory: (
    category: newsCategory,
    newsPerPage: number,
    targetPage: number
  ) => Promise<newsType[]> = async (category, newsPerPage, targetPage) => {
    try {
      // TODO Для расширения: поставить фетч реальных данных
    } catch (e) {}
    if (category === newsCategory.public) {
      return newsArrayPublic;
    } else if (category === newsCategory.politic) {
      return newsArrayPolitic;
    } else {
      return [];
    }
  };
  getNewsNumberByCategory: (
    category: newsCategory,
    newsPerPage: number
  ) => Promise<number> = async (category, newsPerPage) => {
    try {
      // TODO Для расширения: поставить фетч реальных данных
    } catch (e) {}
    return 10;
  };
}
