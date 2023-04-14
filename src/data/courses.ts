import html from '../assets/img/html-css.jpeg'
import jsFront from '../assets/img/js-frontjs.png'
import noSert from '../assets/img/no-sert.jpg'


const courses = [
  {
    year: "2022",
    where: "Udemy (John Smilga)",
    profession: "HTML&CSS Tutorial and Projects 2022",
    picture: html,
    isNoSetr: false,
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-f32f7b4d-dfeb-4ef4-816e-d0a7a165509a.jpg",
  },
  {
    year: "2022-2023",
    where: "The Rolling Scopes School",
    profession: "JavaScript/Front-end 2022Q3",
    picture: jsFront,
    isNoSetr: false,
    url: "https://app.rs.school/certificate/ghvtva4f",
  },
  {
    year: "2023-2023",
    where: "The Rolling Scopes School",
    profession: "React 2023Q1",
    picture: noSert,
    isNoSetr: true,
  },
]
export default courses