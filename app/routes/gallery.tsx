import { Link } from "react-router-dom";
import recipes from "../data/recipes";

export default function Gallery() {
  return (
    <div>
      <h1>Recipe Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{recipe.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}