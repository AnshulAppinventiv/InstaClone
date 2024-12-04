export const UserData = [
  {
    id: 1,
    name: 'Elon Musk',
    username: 'muskelon',
    profile: require('../assets/data/elondp.png'),
    story: {
      time: 10,
      image: require('../assets/data/elonstory.png'),
    },
    post: {
      time: '9h',
      date: '01/05/2023',
      image: require('../assets/data/elonpost.jpg'),
      caption: 'Hi Everyone, Elon musk is here',
      like: 3333,
      comments: [
        {id: 1, username: 'tech_guru', comment: 'This is amazing!'},
        {id: 2, username: 'space_fan', comment: 'Keep going, Elon!'},
      ],
    },
  },
  {
    id: 2,
    name: 'Harsh Beniwal',
    username: 'harshbeniwal',
    profile: require('../assets/data/harshdp.png'),
    story: {
      time: 8,
      image: require('../assets/data/harshs.png'),
    },
    post: {
      time: '4d',
      date: '08/04/2023',
      image: require('../assets/data/harshpost.jpg'),
      caption: 'hi....',
      like: 25,
      comments: [
        {id: 3, username: 'comedy_fan', comment: 'Loved the video!'},
        {id: 4, username: 'funny_vibes', comment: 'Keep it up, Harsh!'},
      ],
    },
  },
  {
    id: 3,
    name: 'Narendra Modi',
    username: 'narendramodi',
    profile: require('../assets/data/modidp.png'),
    story: {
      time: 15,
      image: require('../assets/data/modip.png'),
    },
    post: {
      time: '7h',
      date: '12/05/2023',
      image: require('../assets/data/modipost.jpg'),
      caption: 'Congratulations!! Team India 🇮🇳',
      like: 99,
      comments: [
        {id: 5, username: 'india_love', comment: 'Proud moment!'},
        {id: 6, username: 'patriot', comment: 'Jai Hind!'},
      ],
    },
  },
  {
    id: 4,
    name: 'Sonam Bajwa',
    username: 'sonambajwa',
    profile: require('../assets/data/sonamdp.png'),
    story: {
      time: 13,
      image: require('../assets/data/sonams.png'),
    },
    post: {
      time: '11d',
      date: '12/05/2023',
      image: require('../assets/data/sonampost.jpg'),
      caption: 'No edit, No touch ups...',
      like: 88,
      comments: [
        {id: 7, username: 'fashionista', comment: 'Looking gorgeous!'},
        {id: 8, username: 'style_guru', comment: 'Flawless!'},
      ],
    },
  },
  {
    id: 5,
    name: 'Rohit Sharma',
    username: 'rohitsharma45',
    profile: require('../assets/data/rohitdp.jpg'),
    story: {
      time: '1h',
      image: require('../assets/data/rohitstory.jpg'),
    },
    post: {
      time: '2w',
      date: '12/05/2023',
      image: require('../assets/data/rohitpost.jpg'),
      caption: 'What a series win!!🇮🇳',
      like: 88,
      comments: [
        {id: 9, username: 'fashionista', comment: 'Looking gorgeous!'},
        {id: 10, username: 'style_guru', comment: 'Flawless!'},
      ],
    },
  },
];

export const typeData = [
  {id: 1, image: require('../assets/icon/GridIcon.png')},
  {id: 2, image: require('../assets/icon/TagsIcon.png')},
];
