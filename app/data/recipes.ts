export interface Recipe {
  id: string;
  title: string;
  image: string;
  instructions: string;
}

const recipes: Recipe[] = [
  {
    id: "1",
    title: "Spaghetti Bolognese",
    image:
      "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=1200",
    instructions:
      "Cook pasta. Prepare meat sauce. Combine and serve.",
  },
  {
    id: "2",
    title: "Chicken Curry",
    image:
      "https://images.unsplash.com/photo-1604908554027-1b4b7f63f0c3?q=80&w=1200",
    instructions:
      "Cook chicken with curry sauce. Serve over rice.",
  },
  {
    id: "3",
    title: "Caesar Salad",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200",
    instructions:
      "Mix lettuce, dressing, croutons, and parmesan cheese.",
  },
];

export default recipes;