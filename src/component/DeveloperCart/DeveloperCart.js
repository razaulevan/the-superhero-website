import React from 'react';
import './DeveloperCart.css'

const DeveloperCart = (props) => {
    // console.log(props);
    const { developerCart } = props;

    // console.log(developerCart);
    let totalQuantity = 0;
    let total = 0;


    for (const developer of developerCart) {

        //eveloper salary
        let developerSalary = parseInt(developer.salary)
        total = total + developerSalary;

        if (!developer.quantity) {
            developer.quantity = 1;

        }
        totalQuantity = totalQuantity + developer.quantity;

    }

    return (
        <div className="total-count">
            <div><h3>Total Developer:{totalQuantity} </h3>
                <h4>Budget:{total}</h4></div>
            <div >
                {
                    developerCart.map(developer =>

                        <ul className="person"> <div className="cart-items"><div ><img src={developer.img} alt="" /></div> <div>{developer.name}</div></div></ul>
                    )
                }</div>

        </div>
    );
};

export default DeveloperCart;