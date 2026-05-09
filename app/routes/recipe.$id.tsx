import { Link, useParams } from "react-router-dom";
import recipes from "../data/recipes";

export default function RecipeDetail() {
  const params = useParams();

  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    return <h2>Recipe not found.</h2>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "10px",
        }}
      />

      <h2 style={{ marginTop: "20px" }}>Cooking Instructions</h2>

      <p>{recipe.instructions}</p>

      <Link
        to="/gallery"
        style={{
          display: "inline-block",
          marginTop: "20px",
          textDecoration: "none",
          color: "white",
          backgroundColor: "#333",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
      >
        Back to Gallery
      </Link>
    </div>
  );
}