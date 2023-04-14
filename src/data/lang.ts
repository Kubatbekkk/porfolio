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

    "about1": "I am a novice <span>frontend developer</span> with extensive experience in developing projects in the learning process.",
    "about2": "In the course of training, I have completed more than a dozen different works as part of <span>The Rolling Scopes School</span> training course.",
    "about3": "I have experience working with various <span>tools</span> and <span>libraries</span>, experience in team development, according to the <span>git-flow</span> methodology.",
    "about4": "My work is highly appreciated, among the other students and the mentors of the school.",

    "Kyrgyz": "Kyrgyz",
    "Russian": "Russian",
    "English": "English",
    "near-native": "near-native",
    "native": "native",
    "upper-intermediate (B2)": "upper-intermediate (B2)",

    "The Rolling Scopes School": "The Rolling Scopes School",
    "Kyrgyz Economic University": "Kyrgyz Economic University",
    "JS/Front-end": "JS/Front-end",
    "Information Technology": "Information Technology",

    "completed": "completed",
    "certificate is pending...": "certificate is pending..."
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

    "about1": "Я начинающий <span>frontend разработчик</span> c большим опытом разработки учебных проектов.",
    "about2": "В процессе обучения мною было выполнено более десятка различных работ, в рамках учебного курса <span>Rolling Scopes School</span>.",
    "about3": "Имеется опыт работы с различными <span>инструментами</span> и <span>библиотеками</span>, опыт командной разработки, согласно методологии <span>git-flow</span>.",
    "about4": "Мои работы имеют высокую оценку, как среди других студентов, так и среди менторов школы.",

    "Kyrgyz": "Кыргызский",
    "Russian": "Русский",
    "English": "Английский",
    "near-native": "второй родной",
    "native": "родной",
    "upper-intermediate (B2)": "выше среднего (B2)",

    "The Rolling Scopes School": "The Rolling Scopes School",
    "Kyrgyz Economic University": "Кыргызский Экономический Университет",
    "JS/Front-end": "JS/Front-end",
    "Information Technology": "Информационные технологии",

    "completed": "завершен",
    "certificate is pending...": "ожидается выдача..."
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