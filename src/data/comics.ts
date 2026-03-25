export interface Comic {
  id: number;
  title: string;
  writer: string;
  artist: string;
  price: number;
  category: string;
  description: string;
  image: string;
  inStock: boolean;
}

export const comics: Comic[] = [
  {
    id: 1,
    title: "The Dark Knight Returns",
    writer: "Frank Miller",
    artist: "Frank Miller",
    price: 19.99,
    category: "DC",
    description: "Batman comes out of retirement to fight crime one last time.",
    image: "/src/data/images/placeholder.png",
    inStock: true,
  },
  {
    id: 2,
    title: "Spider-Man: Blue",
    writer: "Jeph Loeb",
    artist: "Tim Sale",
    price: 14.99,
    category: "Marvel",
    description: "A heartfelt love letter to Gwen Stacy.",
    image: "/src/data/images/placeholder.png",
    inStock: true,
  },
  {
    id: 3,
    title: "Watchmen",
    writer: "Alan Moore",
    artist: "Dave Gibbons",
    price: 24.99,
    category: "DC",
    description: "Who watches the watchmen? A groundbreaking graphic novel.",
    image: "/src/data/images/placeholder.png",
    inStock: true,
  },
  {
    id: 4,
    title: "Saga Vol. 1",
    writer: "Brian K. Vaughan",
    artist: "Fiona Staples",
    price: 12.99,
    category: "Independent",
    description: "An epic space opera about love and family.",
    image: "/src/data/images/placeholder.png",
    inStock: false,
  },
];