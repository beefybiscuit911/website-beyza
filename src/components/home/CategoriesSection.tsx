import { Link } from "react-router-dom";
import categoryArts from "@/assets/category-arts.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryMusic from "@/assets/category-music.jpg";
import categoryStem from "@/assets/category-stem.jpg";
import categoryOutdoor from "@/assets/category-outdoor.jpg";
import categoryDance from "@/assets/category-dance.jpg";

const categories = [
  {
    id: "arts",
    name: "Arts & Crafts",
    description: "Painting, drawing, ceramics and more",
    image: categoryArts,
    color: "bg-coral-light/30",
    count: 85,
  },
  {
    id: "sports",
    name: "Sports",
    description: "Football, basketball, swimming and more",
    image: categorySports,
    color: "bg-teal-light/30",
    count: 120,
  },
  {
    id: "music",
    name: "Music",
    description: "Piano, guitar, singing and more",
    image: categoryMusic,
    color: "bg-sunshine-light/30",
    count: 65,
  },
  {
    id: "stem",
    name: "STEM",
    description: "Coding, robotics, science and more",
    image: categoryStem,
    color: "bg-lavender/30",
    count: 90,
  },
  {
    id: "outdoor",
    name: "Outdoor",
    description: "Camping, hiking and more",
    image: categoryOutdoor,
    color: "bg-mint/30",
    count: 45,
  },
  {
    id: "dance",
    name: "Dance",
    description: "Ballet, hip-hop, gymnastics and more",
    image: categoryDance,
    color: "bg-coral-light/30",
    count: 55,
  },
];

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Discover Activity Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find perfect activities across a wide range of interests and age groups for your children
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/activities?category=${category.id}`}
              className="group card-hover"
            >
              <div className={`rounded-2xl p-4 ${category.color} transition-all duration-300`}>
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-card shadow-soft">
                  <img
                    src={category.image}
                    alt={`${category.name} activities for children`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {category.count} activities
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
