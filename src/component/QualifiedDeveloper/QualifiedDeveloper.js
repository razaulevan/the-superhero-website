import React, { useEffect } from 'react';
import { useState } from 'react';
import DeveloperCart from '../DeveloperCart/DeveloperCart';
import ShowData from '../ShowData/ShowData';
import './QualifiedDeveloper.css';

const QualifiedDeveloper = () => {
    const [developers, setDevelopers] = useState([]);
    const [developerCart, setDeveloperCart] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/6e071cfe-aacf-4a3d-a984-3efd60778b38')
            .then(res => res.json())
            .then(data => setDevelopers(data));

    }, [])
    const handleDeveloperCart = (developer) => {

        const newDeveloperCart = [...developerCart, developer];
        setDeveloperCart(newDeveloperCart);
    }
    return (
        <div className="container-div">
            <div className="main-div" >
                {
                    developers.map(developer => <ShowData
                        developer={developer}
                        handleDeveloperCart={handleDeveloperCart}

                    ></ShowData>)
                }
            </div>
            <div className="developer-cart">
                <DeveloperCart developerCart={developerCart}></DeveloperCart>
            </div>

        </div>
    );
};

export default QualifiedDeveloper;