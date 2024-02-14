import React from 'react';

export const CardItem = ({item}) => {
    return (
        <div className="slide">
            <img src={require(`../../${item.img}`)} alt="skills" />
            <h3>{item.title}</h3>
        </div>
    )
}
