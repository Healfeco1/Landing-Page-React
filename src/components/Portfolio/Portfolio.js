import React, { useState } from 'react'
import ModalInfo from '../ModalInfo/ModalInfo'
import Hr from '../Hr/Hr'
import './Portfolio.css';

export default function Portfolio() {
    const portfolio = ["cabin.png", "cake.png", "circus.png", "game.png", "safe.png", "submarine.png"];
    const portfolio1 = [{img: "cabin.png", description: "Cabin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."}, 
                        {img: "cake.png", description: "Cake. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."}, 
                        {img: "circus.png", description: "Circus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."}, 
                        {img: "game.png", description: "Game. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."}, 
                        {img: "safe.png", description: "Safe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."}, 
                        {img: "submarine.png", description: "Submarine. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." }];
    // const portfolio = ["cabin.png"];
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState('');

    const setModalData = (img,description) => {
        setShow(true);
        setDescription({img,description});
    }
    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="container pt-5">
                    <h2 className="text-uppercase text-center text-secondary">Portfolio</h2>
                    <Hr className="white"/>
                    <div className="row">
                        {portfolio1.map(i => {
                            return <div className="col-md-6 col-lg-4" key={i.img}>
                                <a className="d-block mx-auto portfolio-item" onClick={() => setModalData(i.img, i.description)}>
                                    <div className="d-flex align-items-center justify-content-center portfolio-item-caption position-absolute h-100 w-100 text-center text-white">
                                        <i className="fa fa-search-plus fa-3x" />
                                    </div>
                                    <img className="img-fluid" src={require(`../../assets/img/portfolio/${i.img}`).default} />
                                </a>
                            </div>
                        })}
                        <ModalInfo 
                            show={show} 
                            onHide={() => setShow(false)}
                            description={description}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
