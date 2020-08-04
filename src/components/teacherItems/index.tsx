import React from 'react'

import wppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface TeacherItemsProps {
    imgURL: string;
    teacherName: string;
    teaching: string;
    about: string;
    price: string;
}

const TeacherItem:React.FC<TeacherItemsProps> = (props) => {
    return(
        <article className="teacher-item">
                    <header>
                        <img src={props.imgURL} alt="Imagem Professor"/>
                        <div>
                            <strong>{props.teacherName}</strong>
                            <span>{props.teaching}</span>
                        </div>
                    </header>

                    <p>
                        {props.about}
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong> {props.price}</strong>
                        </p>
                        <button type="button">
                            <img src={wppIcon} alt="Whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>

                </article>
    )
}

export default TeacherItem;