const speakerContainer = document.getElementById('speaker-container');
const speakers = [
  {
    image: './images/simon-powell-speaker.webp',
    name: 'Simon Powell',
    status: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    experience: 'Benkler studies commons-based peer production, and published his seminal book.The Wealth of Networks in 206.',
  },

  {
    image: './images/robyn-brown-speaker.webp',
    name: 'Robyn Brown',
    status: 'Director of Art Centre Nabi and a board member of NewYork',
    experience: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanties, and the arts.',
  },

  {
    image: './images/matthew-lyons-speaker.webp',
    name: 'Matthew Lyons',
    status: 'Distinguished Scientist at MIT Computer Science and Artificial Intelligence Laboratory',
    experience: ' Matthew focuses on the power of mindset and published her influential book, Mindset: The New Psychology of Success, in 2019.',
  },

  {
    image: './images/britney-swanson-speaker.webp',
    name: 'Britney Swanson',
    status: 'Smithson Professor of Finance at Stanford Graduate School of Business',
    experience: ' Britney explores the impact of the long tail phenomenon and authored the influential book, The Long Tail: Why the Future of Business Is Selling Less of More, in 2018.',
  },

  {
    image: './images/zukerberg.jpg',
    name: 'Mark ZukerBerg',
    status: 'Mark Zuckerberg, an American technology entrepreneur, is widely known as the co-founder and CEO of Facebook.',
    experience: 'With his visionary leadership, Zuckerberg has played a pivotal role in shaping the way people connect and communicate online.',
  },

  {
    image: './images/elon-musk-speaker.jpg',
    name: 'Elon Musk',
    status: 'Elon Musk is a prominent entrepreneur and business magnate known for his involvement in various ventures and industries',
    experience: 'Elon Musk has founded and co-founded several successful companies, including Tesla, SpaceX, Neuralink.',
  },

];

function createSpeaker() {
  speakers.forEach((speaker) => {
    const data = `
        <div class="col speaker-card" >
        <div class="row">
            <figure class="col-5 d-flex justify-content-end">
                <img src="./images/orange-tech-image.png" class="chess-square-image position-relative" alt="">
                <img src=${speaker.image} class="w-75 rounded-2 " alt="">
            </figure>
            <div class="col-7">
                <div class="speaker-about-container">
                    <h2 class="speaker-name">${speaker.name}</h2>
                    <span class="speaker-status">${speaker.status}</span>
                    <div class="small-line"></div>
                    <p class="mt-3 speaker-experience">
                    ${speaker.experience}
                    </p>
                </div>
            </div>
        </div>
    </div>
        `;
    speakerContainer.innerHTML += data;
  });
}

createSpeaker();