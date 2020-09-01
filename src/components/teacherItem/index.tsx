import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <main>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/39682040?s=460&u=7e69ebe24e7c137c1b0aab8bf2e4e081fc36caed&v=4"
            alt="Alessandro Rodrigo"
          />
          <div>
            <strong>Alessandro Rodrigo</strong>
            <span>Química</span>
          </div>
        </header>

        <p>
          Entusiasta das melhores tecnologias de química avançada
          <br />
          <br />
          Apaixonado por explodir coisas em laboratórios
        </p>

        <footer>
          <p>
            Preço/Hora <strong>R$ 100,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </main>
  );
}

export default TeacherItem;
