export type BookService = "Editing" | "Writing" | "Design" | "Publishing";

export type BookCategory =
  | "Technology"
  | "Business"
  | "Sci-Fi"
  | "Fiction"
  | "Self-Help";

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  service: BookService;
  category: BookCategory;
  rating: number;
  image: string;
  link: string;
}

export interface SearchOptions {
  query?: string;
  category?: BookCategory | "All";
  service?: BookService | "All";
}

export const BOOKS: Book[] = [
  {
    id: "0132350882",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    description:
      "Even bad code can function, but if code isn't clean, it can bring a development organization to its knees. This handbook presents best practices of cleaning code on the fly and writing robust, maintainable software.",
    service: "Editing",
    category: "Technology",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0132350882-L.jpg",
    link: "https://www.amazon.com/dp/0132350882",
  },
  {
    id: "0135957052",
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "David Thomas, Andrew Hunt",
    description:
      "A classic guide covering software development best practices, career advice, architectural techniques, and pragmatic philosophies to keep code flexible and adaptable.",
    service: "Writing",
    category: "Technology",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/0135957052-L.jpg",
    link: "https://www.amazon.com/dp/0135957052",
  },
  {
    id: "0201633612",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    description:
      "The seminal catalog of 23 fundamental object-oriented software design patterns, illustrating succinct and practical solutions to recurring software engineering problems.",
    service: "Design",
    category: "Technology",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0201633612-L.jpg",
    link: "https://www.amazon.com/dp/0201633612",
  },
  {
    id: "026204630X",
    title: "Introduction to Algorithms",
    author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    description:
      "The comprehensive reference and standard textbook covering a broad spectrum of algorithms in depth, blending rigorous mathematical analysis with practical pseudo-code implementation.",
    service: "Publishing",
    category: "Technology",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/026204630X-L.jpg",
    link: "https://www.amazon.com/dp/026204630X",
  },
  {
    id: "0262510871",
    title: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson, Gerald Jay Sussman, Julie Sussman",
    description:
      "An iconic computer science textbook emphasizing computational principles, abstraction techniques, programming languages, and recursive design using Scheme.",
    service: "Publishing",
    category: "Technology",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/0262510871-L.jpg",
    link: "https://www.amazon.com/dp/0262510871",
  },
  {
    id: "1449373321",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    description:
      "An indispensable resource exploring the fundamental principles, architectures, tradeoffs, and internals of modern distributed data systems, databases, and stream processing engines.",
    service: "Design",
    category: "Technology",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/isbn/1449373321-L.jpg",
    link: "https://www.amazon.com/dp/1449373321",
  },
  {
    id: "0984782850",
    title:
      "Cracking the Coding Interview: 189 Programming Questions and Solutions",
    author: "Gayle Laakmann McDowell",
    description:
      "The definitive interview preparation guide for software engineers, featuring 189 algorithmic questions, detailed walkthroughs, system design guidelines, and behavioral interview strategies.",
    service: "Writing",
    category: "Technology",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0984782850-L.jpg",
    link: "https://www.amazon.com/dp/0984782850",
  },
  {
    id: "0262035618",
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    description:
      "The definitive reference text on deep learning, covering applied mathematics, machine learning basics, deep forward networks, regularization, optimization, and generative models.",
    service: "Publishing",
    category: "Technology",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0262035618-L.jpg",
    link: "https://www.amazon.com/dp/0262035618",
  },
  {
    id: "1718502702",
    title:
      "Python Crash Course: A Hands-On, Project-Based Introduction to Programming",
    author: "Eric Matthes",
    description:
      "A fast-paced and thorough introduction to programming in Python that guides readers through foundational concepts, interactive data visualizations, web applications, and 2D arcade games.",
    service: "Writing",
    category: "Technology",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/1718502702-L.jpg",
    link: "https://www.amazon.com/dp/1718502702",
  },
  {
    id: "0307887898",
    title: "The Lean Startup",
    author: "Eric Ries",
    description:
      "A revolutionary management methodology that encourages businesses to create products faster, test assumptions with minimum viable products, and pivot iteratively based on validated learning.",
    service: "Publishing",
    category: "Business",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0307887898-L.jpg",
    link: "https://www.amazon.com/dp/0307887898",
  },
  {
    id: "0804139296",
    title: "Zero to One: Notes on Startups, or How to Build the Future",
    author: "Peter Thiel, Blake Masters",
    description:
      "An insightful exploration of innovation, technological progress, and startup philosophy, arguing that true breakthroughs create entirely new categories rather than copying existing models.",
    service: "Writing",
    category: "Business",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0804139296-L.jpg",
    link: "https://www.amazon.com/dp/0804139296",
  },
  {
    id: "0066620996",
    title:
      "Good to Great: Why Some Companies Make the Leap... and Others Don't",
    author: "Jim Collins",
    description:
      "Based on rigorous empirical research, this management classic outlines the disciplined leadership, culture, and flywheel principles that allow ordinary companies to achieve enduring greatness.",
    service: "Editing",
    category: "Business",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0066620996-L.jpg",
    link: "https://www.amazon.com/dp/0066620996",
  },
  {
    id: "0374533555",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description:
      "Nobel laureate Daniel Kahneman examines the two systems that drive human cognition: fast, intuitive System 1, and slow, deliberate System 2, revealing the pervasive cognitive biases affecting our choices.",
    service: "Publishing",
    category: "Business",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0374533555-L.jpg",
    link: "https://www.amazon.com/dp/0374533555",
  },
  {
    id: "0857197681",
    title:
      "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
    author: "Morgan Housel",
    description:
      "A collection of 19 short stories exploring the strange ways people think about money, demonstrating that financial success is less about raw intelligence and more about personal behavior.",
    service: "Writing",
    category: "Business",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/0857197681-L.jpg",
    link: "https://www.amazon.com/dp/0857197681",
  },
  {
    id: "1501124021",
    title: "Principles: Life and Work",
    author: "Ray Dalio",
    description:
      "Bridgewater Associates founder Ray Dalio shares the unconventional operating principles, radical truth, and transparency framework behind the success of the world's most successful hedge fund.",
    service: "Design",
    category: "Business",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/1501124021-L.jpg",
    link: "https://www.amazon.com/dp/1501124021",
  },
  {
    id: "0062273205",
    title:
      "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers",
    author: "Ben Horowitz",
    description:
      "Venture capitalist Ben Horowitz offers brutal, practical advice on managing startups through crises, firing executives, leading during downturns, and navigating high-stakes executive decisions.",
    service: "Writing",
    category: "Business",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0062273205-L.jpg",
    link: "https://www.amazon.com/dp/0062273205",
  },
  {
    id: "0307463745",
    title: "Rework",
    author: "Jason Fried, David Heinemeier Hansson",
    description:
      "A pragmatic business manifesto challenging traditional corporate orthodoxies, promoting streamlined operations, productivity, self-funding, and smaller, focused teams.",
    service: "Design",
    category: "Business",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0307463745-L.jpg",
    link: "https://www.amazon.com/dp/0307463745",
  },
  {
    id: "1591847788",
    title: "Hooked: How to Build Habit-Forming Products",
    author: "Nir Eyal",
    description:
      "A guide introducing the four-step Hook Model—Trigger, Action, Variable Reward, and Investment—used by leading technology companies to subtly encourage customer engagement habits.",
    service: "Design",
    category: "Business",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/1591847788-L.jpg",
    link: "https://www.amazon.com/dp/1591847788",
  },
  {
    id: "0525536221",
    title:
      "Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs",
    author: "John Doerr",
    description:
      "Legendary venture capitalist John Doerr reveals how Objectives and Key Results (OKRs) enable organizations of all sizes to maintain focus, align teams, and execute ambitious goals.",
    service: "Editing",
    category: "Business",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0525536221-L.jpg",
    link: "https://www.amazon.com/dp/0525536221",
  },
  {
    id: "0441172717",
    title: "Dune",
    author: "Frank Herbert",
    description:
      "Set on the harsh desert planet Arrakis, this epic masterpiece follows young Paul Atreides as he navigates political betrayal, ecology, religion, and galactic power struggles over the ultimate resource: melange.",
    service: "Publishing",
    category: "Sci-Fi",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0441172717-L.jpg",
    link: "https://www.amazon.com/dp/0441172717",
  },
  {
    id: "0765382032",
    title: "The Three-Body Problem",
    author: "Cixin Liu",
    description:
      "Set against the backdrop of China's Cultural Revolution, a secret military project contacts an alien civilization in decline, sparking interstellar tension and scientific crisis across humanity.",
    service: "Writing",
    category: "Sci-Fi",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/0765382032-L.jpg",
    link: "https://www.amazon.com/dp/0765382032",
  },
  {
    id: "0593135202",
    title: "Project Hail Mary",
    author: "Andy Weir",
    description:
      "Ryland Grace is the sole survivor on a desperate interstellar mission to save humanity from an extinction-level extinction event, armed only with scientific ingenuity and an unexpected ally.",
    service: "Writing",
    category: "Sci-Fi",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/isbn/0593135202-L.jpg",
    link: "https://www.amazon.com/dp/0593135202",
  },
  {
    id: "0441569595",
    title: "Neuromancer",
    author: "William Gibson",
    description:
      "The seminal cyberpunk novel that popularized the concept of cyberspace and the matrix, following washed-up data thief Case on a high-stakes digital heist targeting an elusive artificial intelligence.",
    service: "Design",
    category: "Sci-Fi",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/0441569595-L.jpg",
    link: "https://www.amazon.com/dp/0441569595",
  },
  {
    id: "0553293354",
    title: "Foundation",
    author: "Isaac Asimov",
    description:
      "Psychohistorian Hari Seldon foresees the inevitable collapse of the Galactic Empire and creates a sanctuary of knowledge to preserve humanity's civilization through a thousand-year dark age.",
    service: "Publishing",
    category: "Sci-Fi",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0553293354-L.jpg",
    link: "https://www.amazon.com/dp/0553293354",
  },
  {
    id: "0553380958",
    title: "Snow Crash",
    author: "Neal Stephenson",
    description:
      "A visionary cyberpunk ride featuring pizza delivery hacker Hiro Protagonist, exploring the Metaverse, linguistic computer viruses, Sumerian myth, and anarcho-capitalist corporatism.",
    service: "Design",
    category: "Sci-Fi",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0553380958-L.jpg",
    link: "https://www.amazon.com/dp/0553380958",
  },
  {
    id: "0553418025",
    title: "The Martian",
    author: "Andy Weir",
    description:
      "Stranded alone on Mars after a dust storm forces his crew to evacuate, astronaut Mark Watney must engineer his own survival using chemistry, botany, and relentless humor.",
    service: "Writing",
    category: "Sci-Fi",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0553418025-L.jpg",
    link: "https://www.amazon.com/dp/0553418025",
  },
  {
    id: "0812550706",
    title: "Ender's Game",
    author: "Orson Scott Card",
    description:
      "Child prodigy Ender Wiggin is recruited into an elite orbiting military academy to undergo intense tactical war simulations in preparation for an impending alien invasion.",
    service: "Editing",
    category: "Sci-Fi",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/0812550706-L.jpg",
    link: "https://www.amazon.com/dp/0812550706",
  },
  {
    id: "0553283685",
    title: "Hyperion",
    author: "Dan Simmons",
    description:
      "On the eve of galactic war, seven pilgrims embark on a final pilgrimage to the enigmatic Time Tombs on the planet Hyperion, each sharing their intimate connection to the terrifying creature known as the Shrike.",
    service: "Publishing",
    category: "Sci-Fi",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0553283685-L.jpg",
    link: "https://www.amazon.com/dp/0553283685",
  },
  {
    id: "0451524934",
    title: "1984",
    author: "George Orwell",
    description:
      "A chilling dystopian vision of totalitarian surveillance, historical revisionism, and psychological control under the watchful gaze of Big Brother in the superstate of Oceania.",
    service: "Editing",
    category: "Sci-Fi",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0451524934-L.jpg",
    link: "https://www.amazon.com/dp/0451524934",
  },
  {
    id: "0743273567",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "Set during the roaring twenties on Long Island, narrator Nick Carraway chronicles the lavish parties, romantic obsession, and tragic unraveling of mysterious millionaire Jay Gatsby.",
    service: "Writing",
    category: "Fiction",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/0743273567-L.jpg",
    link: "https://www.amazon.com/dp/0743273567",
  },
  {
    id: "0060935464",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "Set in Depression-era Alabama, young Scout Finch watches her father, lawyer Atticus Finch, defend a Black man falsely accused of a heinous crime in a deeply prejudiced Southern community.",
    service: "Editing",
    category: "Fiction",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/0060935464-L.jpg",
    link: "https://www.amazon.com/dp/0060935464",
  },
  {
    id: "0316769487",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "Sixteen-year-old Holden Caulfield wanders New York City after being expelled from prep school, reflecting with biting wit and vulnerability on phoniness, alienation, and the loss of innocence.",
    service: "Writing",
    category: "Fiction",
    rating: 4.4,
    image: "https://covers.openlibrary.org/b/isbn/0316769487-L.jpg",
    link: "https://www.amazon.com/dp/0316769487",
  },
  {
    id: "0141439513",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "Jane Austen's witty romantic comedy following the spirited Elizabeth Bennet as she navigates class tensions, family expectations, and her evolving feelings toward the aristocratic Mr. Darcy.",
    service: "Publishing",
    category: "Fiction",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0141439513-L.jpg",
    link: "https://www.amazon.com/dp/0141439513",
  },
  {
    id: "0062315005",
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "An enchanting philosophical fable about Santiago, an Andalusian shepherd boy who journeys across the Egyptian desert in search of worldly treasure and discovers his Personal Legend.",
    service: "Writing",
    category: "Fiction",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0062315005-L.jpg",
    link: "https://www.amazon.com/dp/0062315005",
  },
  {
    id: "0060883286",
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    description:
      "The epic multi-generational tale of the Buendía family and the mythical town of Macondo, blending magical realism, historical tragedy, and unforgettable lyricism.",
    service: "Publishing",
    category: "Fiction",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0060883286-L.jpg",
    link: "https://www.amazon.com/dp/0060883286",
  },
  {
    id: "0060850523",
    title: "Brave New World",
    author: "Aldous Huxley",
    description:
      "A profound exploration of a genetically engineered, state-conditioned future society where citizens trade freedom and authentic emotion for engineered happiness and sensory indulgence.",
    service: "Design",
    category: "Fiction",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0060850523-L.jpg",
    link: "https://www.amazon.com/dp/0060850523",
  },
  {
    id: "0399501487",
    title: "Lord of the Flies",
    author: "William Golding",
    description:
      "When a plane crashes on an uninhabited island, a group of British schoolboys attempt to govern themselves, descending rapidly from democratic order into primal savagery.",
    service: "Editing",
    category: "Fiction",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/0399501487-L.jpg",
    link: "https://www.amazon.com/dp/0399501487",
  },
  {
    id: "0307387895",
    title: "The Road",
    author: "Cormac McCarthy",
    description:
      "A father and his young son walk alone through burned, ash-covered post-apocalyptic America toward the coast, sustaining each other with fierce love and moral resilience.",
    service: "Writing",
    category: "Fiction",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0307387895-L.jpg",
    link: "https://www.amazon.com/dp/0307387895",
  },
  {
    id: "1451673310",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    description:
      "In a dystopian future where television dominates and reading is outlawed, fireman Guy Montag burns illicit books until a chance encounter sparks his intellectual rebellion.",
    service: "Design",
    category: "Fiction",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/1451673310-L.jpg",
    link: "https://www.amazon.com/dp/1451673310",
  },
  {
    id: "0735211299",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
    description:
      "A comprehensive, practical framework on how tiny 1% daily changes in behavior, system design, and environment can compound into remarkable life-changing personal and professional results.",
    service: "Writing",
    category: "Self-Help",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/0735211299-L.jpg",
    link: "https://www.amazon.com/dp/0735211299",
  },
  {
    id: "1982137274",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    description:
      "A timeless personal leadership philosophy centered on character ethics, proactive mindset, win-win relationships, empathetic communication, and continuous self-renewal.",
    service: "Publishing",
    category: "Self-Help",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/1982137274-L.jpg",
    link: "https://www.amazon.com/dp/1982137274",
  },
  {
    id: "0671027034",
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    description:
      "First published in 1936, Dale Carnegie's foundational guide offers practical principles for communicating persuasively, handling interpersonal conflict, and motivating others effectively.",
    service: "Editing",
    category: "Self-Help",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0671027034-L.jpg",
    link: "https://www.amazon.com/dp/0671027034",
  },
  {
    id: "1455586692",
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    description:
      "Georgetown professor Cal Newport makes the case that cultivating the ability to focus without distraction on cognitively demanding tasks is a rare superpower in today's knowledge economy.",
    service: "Writing",
    category: "Self-Help",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/1455586692-L.jpg",
    link: "https://www.amazon.com/dp/1455586692",
  },
  {
    id: "1544512287",
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    author: "David Goggins",
    description:
      "Retired Navy SEAL David Goggins shares his astonishing life story from childhood trauma and poverty to endurance athlete, introducing the 40% Rule to push past self-imposed mental limits.",
    service: "Writing",
    category: "Self-Help",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/1544512287-L.jpg",
    link: "https://www.amazon.com/dp/1544512287",
  },
  {
    id: "080701429X",
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description:
      "Psychiatrist Viktor Frankl draws upon his harrowing experiences in Nazi concentration camps to present Logotherapy, explaining how identifying a purpose in life sustains human resilience through suffering.",
    service: "Publishing",
    category: "Self-Help",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/080701429X-L.jpg",
    link: "https://www.amazon.com/dp/080701429X",
  },
  {
    id: "0345472322",
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    description:
      "Stanford psychologist Carol Dweck explains the power of embracing a growth mindset—believing that abilities can be developed through dedication and hard work rather than being fixed at birth.",
    service: "Editing",
    category: "Self-Help",
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/71h937MExWL._SL1500_.jpg",
    link: "https://www.amazon.com/dp/0345472322",
  },
  {
    id: "0062457713",
    title:
      "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
    author: "Mark Manson",
    description:
      "A candid, no-nonsense self-help guide arguing that improving our lives hinges not on turning lemons into lemonade, but on learning how to tolerate and accept life's inevitable struggles.",
    service: "Writing",
    category: "Self-Help",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/0062457713-L.jpg",
    link: "https://www.amazon.com/dp/0062457713",
  },
  {
    id: "1577314808",
    title: "The Power of Now: A Guide to Spiritual Enlightenment",
    author: "Eckhart Tolle",
    description:
      "A transformative spiritual guide emphasizing mindfulness, detachment from the ego-driven mind, and living deeply anchored in the present moment.",
    service: "Design",
    category: "Self-Help",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/1577314808-L.jpg",
    link: "https://www.amazon.com/dp/1577314808",
  },
  {
    id: "0804137382",
    title: "Essentialism: The Disciplined Pursuit of Less",
    author: "Greg McKeown",
    description:
      "A systematic discipline for discerning what is absolutely essential, eliminating everything that is not, and making the highest possible contribution toward the things that truly matter.",
    service: "Design",
    category: "Self-Help",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/0804137382-L.jpg",
    link: "https://www.amazon.com/dp/0804137382",
  },
];

/**
 * Filter books by title, author, description, category, and service.
 */
export function searchBooks(options: SearchOptions = {}): Book[] {
  const { query = "", category = "All", service = "All" } = options;
  const normalizedQuery = query.trim().toLowerCase();

  return BOOKS.filter((book) => {
    const matchesCategory =
      category === "All" || book.category === category;
    const matchesService =
      service === "All" || book.service === service;

    if (!normalizedQuery) {
      return matchesCategory && matchesService;
    }

    const matchesQuery =
      book.title.toLowerCase().includes(normalizedQuery) ||
      book.author.toLowerCase().includes(normalizedQuery) ||
      book.description.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesService && matchesQuery;
  });
}

/**
 * Autocomplete suggestions for book titles and authors based on a search query.
 */
export function getAutocompleteSuggestions(
  query: string,
  limit: number = 8
): { title: string; author: string; id: string; category: BookCategory; image: string }[] {
  if (!query || query.trim().length === 0) return [];

  const normalizedQuery = query.trim().toLowerCase();

  return BOOKS.filter(
    (book) =>
      book.title.toLowerCase().includes(normalizedQuery) ||
      book.author.toLowerCase().includes(normalizedQuery)
  )
    .slice(0, limit)
    .map((book) => ({
      id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
      image: book.image,
    }));
}

/**
 * Get all books by a specific category.
 */
export function getBooksByCategory(category: BookCategory): Book[] {
  return BOOKS.filter((book) => book.category === category);
}

/**
 * Get all books by a specific service type.
 */
export function getBooksByService(service: BookService): Book[] {
  return BOOKS.filter((book) => book.service === service);
}

/**
 * Get unique categories present in the library dataset.
 */
export const BOOK_CATEGORIES: BookCategory[] = [
  "Technology",
  "Business",
  "Sci-Fi",
  "Fiction",
  "Self-Help",
];

/**
 * Get unique services present in the library dataset.
 */
export const BOOK_SERVICES: BookService[] = [
  "Editing",
  "Writing",
  "Design",
  "Publishing",
];
