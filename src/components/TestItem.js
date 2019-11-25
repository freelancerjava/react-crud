import React from 'react';
import './TestItem.css';

const TestItem = ({ items, deleteItem, curItem }) => {

    const listItem = items.map((item,key) => {
        return item.age > 20 ? (
            <div className={'test'} key={item.id}>
                <div>Name: {item.name}</div>
                <div>Age: {item.age}</div>
                <div>Sex: {item.sex}</div>
                <button onClick={() => { deleteItem(item.id) }}>Delete</button>
                <button onClick={() => { curItem={name: item.name, age: item.age , sex: item.sex} }}>Edit</button>
            </div>
        ) : null;
    });
    return (
        <div className={'navbar'}>
            {listItem}
        </div>
    );

};


export default TestItem;
