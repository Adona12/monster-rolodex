import React from "react"
import './search-box.styles.css'


export const SearchBox=(props)=>(
    <input className="search" onChange={props.handleChange} type="search" placeholder={props.placeholder}/>
)