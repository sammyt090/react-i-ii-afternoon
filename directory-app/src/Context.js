import React, {Component} from 'react'



export default function Context(props){
    return<div>
        
        <h1>{props.people.name.first} {props.people.name.last}</h1>

        <p><b>From:</b> {props.people.city}</p>
        <p><b>Job Title:</b> {props.people.title}</p>
        <p><b>Employer:</b> {props.people.employer}</p>

        <h4>Favorite Movies:</h4>
        <p>1. {props.people.favoriteMovies[0]}</p>
        <p>2. {props.people.favoriteMovies[1]}</p>
        <p>3. {props.people.favoriteMovies[2]}</p>
    </div>
    
}