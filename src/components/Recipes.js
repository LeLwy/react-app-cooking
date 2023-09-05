import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Recipes = () => {

    const [meals, setMeals] = useState([]);
    const [searchContent, setSearchContent] = useState("");

    useEffect(() => {

        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchContent)
        .then((res) => setMeals(res.data.meals));
    }, [searchContent])

    return (
        <div className='recipes-search-container'>
            <input 
                type="text" 
                placeholder="Entrez le nom d'un aliment (en anglais)"
                onChange={(e) => setSearchContent(e.target.value)}
            />
            <div className="recipes-container">
                { meals && 
                    meals
                        .map((recipe, index) => (<Card 
                            key={recipe.idMeal} 
                            recipe={ recipe }
                        />))
                }
            </div>
        </div>
    );
};

export default Recipes;