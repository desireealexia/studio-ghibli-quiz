// Storing questions and answers for the quiz
// Code inspired by: How To Make Quiz Website Using HTML CSS And Javascript
// Source: Codehal
// URL: https://www.youtube.com/watch?v=Vp8x8-reqZA

let quizData = [
  {
    question:
      "In which movie does a young girl named Satsuki and her sister Mei move to the countryside and discover magical creatures?",
    answer: "My Neighbor Totoro",
    options: [
      "Spirited Away",
      "My Neighbor Totoro",
      "Ponyo",
      "Howl's Moving Castle",
    ],
  },
  {
    question:
      "The film 'Kiki's Delivery Service' is set in a fictional European city and follows a young witch who starts a delivery business.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    question: "What is the primary setting of the film 'Castle in the Sky'?",
    answer: "A floating island called Laputa",
    options: [
      "A floating island called Laputa",
      "A bustling metropolis",
      "A magical forest",
      "An underwater kingdom",
    ],
  },
  {
    question: "Which movie features this robot statue?",
    image: "assets/images/question-images/quiz-img-q4-robot.webp",
    alt: "An image of robot with Pazu and Sheeta.",
    answer: "Castle in the Sky",
    options: [
      "Castle in the Sky",
      "The Secret World of Arrietty",
      "The Cat Returns",
      "Nausicaä of the Valley of the Wind",
    ],
  },
  {
    question: "In 'Princess Mononoke,' who is the leader of the boar tribe?",
    answer: "Okkoto",
    options: ["San", "Jigo", "Ashitaka", "Okkoto"],
  },
  {
    question:
      "The protagonist of 'The Wind Rises,' Jiro Horikoshi, is based on a real historical figure.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    question:
      "In 'Nausicaä of the Valley of the Wind,' what is the name of the massive toxic jungle that spreads across the Earth?",
    answer: "Sea of Decay",
    options: [
      "Sea of Decay",
      "Toxic Jungle",
      "Forest of Doom",
      "Fungus Kingdom",
    ],
  },
  {
    question: "What is the name of this character?",
    image: "assets/images/question-images/quiz-img-q8-baron.webp",
    alt: "An image of (living) statue of a cat from Whisper of the Heaart and The Cat Returns.",
    answer: "Baron",
    options: ["Baron", "Muta", "Jiji", "Luna"],
  },
  {
    question:
      "In 'Whisper of the Heart,' what is the name of the antique shop that plays a significant role in the film?",
    answer: "The Baron's Shop",
    options: [
      "The Cat's Store",
      "The Antique Shop of Dreams",
      "The Baron's Shop",
      "The Moonlight Shop",
    ],
  },
  {
    question:
      "'The Tale of the Princess Kaguya' was created using CGI animation.",
    answer: "False",
    options: ["True", "False"],
  },
];
