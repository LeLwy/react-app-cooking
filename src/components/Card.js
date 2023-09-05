import React from 'react';

const Card = ({ recipe }) => {

    const getIngredientList = (recipe) => {

        let ingredientList = [];

        Object.entries(recipe).slice(9, 29).forEach(item => ingredientList.push(item[1]));

        return ingredientList;
    }

    return (
        <div className='meal-card'>
            <h3>{ recipe.strMeal }</h3>
            <p>Origine : { recipe.strArea }</p>
            <img src={recipe.strMealThumb} alt={"Photo " + recipe.strMeal} />
            <ul>
                {
                    getIngredientList(recipe).map((ingredient, index) => ingredient ? <li key={index}>{ingredient}</li> : null)
                }
            </ul>
            <p>{recipe.strInstructions}</p>
        </div>
    );
};

export default Card;