import { useState, useEffect } from "react";

interface Activity {
  id: number;
  title: string;
  category: string;
  categoryId: string;
  location: string;
  ageRange: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

const STORAGE_KEY = "parentgo_favourites";

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<Activity[]>([]);

  useEffect(() => {
    // Load favourites from localStorage
    const loadFavourites = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setFavourites(parsed || []);
        }
      } catch (error) {
        console.error("Error loading favourites:", error);
        setFavourites([]);
      }
    };

    loadFavourites();
  }, []);

  const saveFavourites = (newFavourites: Activity[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavourites));
      setFavourites(newFavourites);
    } catch (error) {
      console.error("Error saving favourites:", error);
    }
  };

  const addFavourite = (activity: Activity) => {
    const exists = favourites.some((fav) => fav.id === activity.id);
    if (!exists) {
      const newFavourites = [...favourites, activity];
      saveFavourites(newFavourites);
      return true;
    }
    return false;
  };

  const removeFavourite = (activityId: number) => {
    const newFavourites = favourites.filter((fav) => fav.id !== activityId);
    saveFavourites(newFavourites);
  };

  const isFavourite = (activityId: number) => {
    return favourites.some((fav) => fav.id === activityId);
  };

  const toggleFavourite = (activity: Activity) => {
    if (isFavourite(activity.id)) {
      removeFavourite(activity.id);
      return false;
    } else {
      addFavourite(activity);
      return true;
    }
  };

  return {
    favourites,
    addFavourite,
    removeFavourite,
    isFavourite,
    toggleFavourite,
  };
};
