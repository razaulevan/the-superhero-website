import React from 'react';
import './DeveloperCart.css'

const DeveloperCart = (props) => {
    // console.log(props);
    const { developerCart } = props;

    console.log(developerCart);
    let totalQuantity = 0;
    let total = 0;


    for (const developer of developerCart) {


        let developerSalary = parseInt(developer.salary)
        total = total + developerSalary;

        if (!developer.quantity) {
            developer.quantity = 1;

        }
        totalQuantity = totalQuantity + developer.quantity;

    }

    return (
        <div>
            <h1>Total Developer:{totalQuantity} </h1>
            <h4>Budget:{total}</h4>
            {
                developerCart.map(developer =>
                    <ul> <div className="cart-items"><div><img src={developer.img} alt="" /></div> <div>{developer.name}</div></div></ul>
                )
            }

        </div>
    );
};

export default DeveloperCart;