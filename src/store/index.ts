import { createStore } from 'vuex'
import { IState } from "@/types/articles-types";


export default createStore<IState>({
  state: {
    saveLocal: localStorage.getItem('saveLocal') || 'eng',
    companies: [
      {
        name: "Coca-cola",
        imgUrl: "coca-cola-logo-international-trash-award-.jpg",
        antirating: 42
      },
      {
        name: "Pepsi",
        imgUrl: "pepsi-logo-international-trash-award.jpg",
        antirating: 42
      },
      {
        name: "Mars",
        imgUrl: "mars-logo-international-trash-award.jpg",
        antirating: 42
      },
      {
        name: "Mars",
        imgUrl: "mars-logo-international-trash-award.jpg",
        antirating: 42
      },
      {
        name: "Mars",
        imgUrl: "mars-logo-international-trash-award.jpg",
        antirating: 42
      },
      {
        name: "Mars",
        imgUrl: "mars-logo-international-trash-award.jpg",
        antirating: 42
      }
    ],
    articles: [
      {
        id: 1,
        title: "Агат 9 (ЛЭМЗ)",
        imgUrl: "https://retro-computer.ru/Photo/AGAT-9_LEMZ/AGAT-9_LEMZ.jpg?RenditionID=6",
        description: "Взвесь облучает гидродинамический удар - все дальнейшее далеко выходит за рамки текущего исследования и не будет здесь рассматриваться. Поверхность, вследствие квантового характера явления, экстремально представляет собой фотон, при этом дефект массы не образуется. Солитон, по данным астрономических наблюдений, стабилизирует фотон.",
        lois: 42,
        comments: [
          {
            number: 0,
            message: "Нулевой комментарий"
          },
          {
            number: 0,
            message: "Я за ним"
          }
        ]
      },
      {
        id: 2,
        title: "АГАТ-9 «Тошкент» (Алгоритм)",
        imgUrl: "https://retro-computer.ru/Photo/AGAT-9_ALGORITM/AGAT-9_ALGORITM.jpg?RenditionID=6",
        description: "Резонатор квазипериодично вращает фотон. Сверхпроводник вращает изотопный экситон. Изолируя область наблюдения от посторонних шумов, мы сразу увидим, что течение среды экстремально поглощает тахионный гидродинамический удар.",
        lois: 16,
        comments: []
      },
      {
        id: 3,
        title: "Башкирия-2МП",
        imgUrl: "https://retro-computer.ru/Photo/Bashkiria_2MP/Bashkiria_2MP.jpg?RenditionID=6",
        description: "В слабопеременных полях (при флуктуациях на уровне единиц процентов) взрыв стохастично расщепляет межатомный резонатор, тем самым открывая возможность цепочки квантовых превращений. Любое возмущение затухает, если солитон трансформирует газ. Сверхновая отклоняет ускоряющийся лазер, и этот процесс может повторяться многократно.",
        lois: 5,
        comments: []
      }
    ]
  },
  getters: {
  },
  mutations: {
    setLocale(state, payload) {
      state.saveLocal = payload
      localStorage.setItem('saveLocal', payload) // Сохраняем в localStorage
    },
    increment(state, articleId) {
      const articleIndex = state.articles.findIndex(item => item.id === articleId);
      if (articleIndex !== -1) {
        state.articles[articleIndex].lois++;
      }
    },
    decrement(state, articleId) {
      const articleIndex = state.articles.findIndex(item => item.id === articleId);
      if (articleIndex !== -1) {
        state.articles[articleIndex].lois--;
      }
    },
    newComment(state, payload) {

      const { articleId, newComment } = payload;
      const article = state.articles.find(article => article.id === articleId);

      if (article && article.comments) {
        const comment = {
          number: 0,
          message: newComment
        }
        article.comments.push(comment);
      }
    }
  },

  actions: {
  },
  modules: {
  }
})
