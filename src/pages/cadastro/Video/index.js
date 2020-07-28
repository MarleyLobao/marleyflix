import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
      <div>
        <PageDefault>
          <h1>Cadastro</h1>

          <Link to="/cadastro/Categoria">
              Cadastrar Categoria
          </Link>
        </PageDefault>
      </div>
    )
  };

  export default CadastroVideo;