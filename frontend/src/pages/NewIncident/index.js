import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <Link to="/">
                        <img src={logoImg} alt="Be The Hero"/>
                    </Link>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhamente para que possamos encontrar um herói que consiga resolve-lo </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para a home
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}