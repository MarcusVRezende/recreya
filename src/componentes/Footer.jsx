import React from 'react';
import logoFooter from '../assets/footer.png'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import '../styles/footer.css'


const Footer = ()  => {
    return (

        <footer className='rodape'>

            <a href="/">
                <div className='foto-footer'>
                    <img src ={logoFooter} alt = "logo footer" className='foto' />
                </div>
            </a>

            <div className='secao-contatos'>
                <h1 className=' titulo-footer'> Contatos </h1>
                <p className='contatos'> (61) 9xxxx-xxxx</p>
                <p className='contatos'> (61) email@gmail.com</p>
                <p className='contatos'> Brasilia - DF</p>
            </div>

            <div className='secao-extras'>
                <p>Transformando festas infatis em momentos mágicos e inesquecíveis</p>
                <div className='contatos'>
                    <div className='Instagram'> 
                        <a href="https://www.instagram.com/recreya/">
                        <FaInstagram />
                        </a>
                    </div>
                    <div className='whatsapp'> 
                        <a href="https://www.instagram.com/recreya/">
                        <FaWhatsapp />
                        </a>
                    </div>
                </div>
                <p>Representanet Legal:</p>
                <p>Yasmin Daniele Cassiano Vieira</p>
            </div>

        </footer>
    );

}; export default Footer;