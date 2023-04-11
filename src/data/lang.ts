const privateLang = {
  en: {
    "contacts": "contacts",
    "about": "about",
    "skills": "skills",
    "languages": "languages",
    "education": "education",
    "courses": "courses",
    "projects": "projects",

    "Kubatbek Mirzabek": "Kubatbek Mirzabek",
    "frontend developer": "frontend developer",
    "Kyrgyzstan, Bishkek": "Kyrgyzstan, Bishkek",
  } as any,
  ru: {
    "contacts": "контакты",
    "about": "обо мне",
    "skills": "навыки",
    "languages": "языки",
    "education": "образование",
    "courses": "курсы",
    "projects": "проекты",

    "Kubatbek Mirzabek": "Кубатбек Мирзабек",
    "frontend developer": "frontend разработчик",
    "Kyrgyzstan, Bishkek": "Кыргызстан, Бишкек",
  } as any
}

const lang = {} as any;

lang.ru = new Proxy(privateLang.ru, {
  get(target, key) {
    if(target && target[key]) {
      return target[key]
    }
    return key
  }
})

lang.en = new Proxy(privateLang.en, {
  get(target, key) {
    if(target && target[key]) {
      return target[key]
    }
    return key
  }
})

export default lang