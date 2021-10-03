import React, { Component } from "react";
import "./styles.css";

class CategoryList extends React.Component {
    _handleInputEvent(e){
        if(e.key === "Enter"){
            let categoryValue = e.target.value;
            this.props.addCategory(categoryValue);
        }
    }
  render() {
    return (
      <section className="category-list">
        <ul className="category-list_list">
            {this.props.categories.map((category, index)=>{
               return <li key={index} className="category-list_item">{category}</li>
            })}
        </ul>
        <input
          type="text"
          className="category-list_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;
