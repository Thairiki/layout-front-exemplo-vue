<template>
  <header class="container-fluid">
    <div class="row">
      <!--Acessibilidade-->
      <section class="container container-acessibilidade">
        <nav class="row">
          <ul class="col-12 nav nav-acessibilidade justify-content-between">
            <li class="nav-item">
              <a class="btn btn-acessibilidade semi-bold" href="#">
                Aumentar Fonte
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-acessibilidade semi-bold" href="#">
                Alto Contraste
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-acessibilidade semi-bold" href="#">
                Mapa do Site
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-acessibilidade semi-bold" href="#">
                Fonte para dislexia
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-acessibilidade semi-bold" href="#">
                Entenda a Acessibilidade
              </a>
            </li>
            <li class="nav-item">
              <div class="btn-acessibilidade">
                <form class="input-group" action="">
                  <input
                    class="form-control semi-bold"
                    type="text"
                    placeholder="Pesquise no Site"
                    name=""
                    id=""
                  />
                  <button class="btn btn-pesquisa">
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </nav>
      </section>
    </div>

    <div class="d-flex flex-column">
      <!--Área Logo -->
      <div class="row area-logo order-1 order-md-0">
        <section class="container">
          <div class="row row-container-logo">
            <!--IMG-LOGO-->
            <div class="col-12 col-lg-6 col-logo d-none d-md-block">
              <div class="row">
                <div class="col-12 col-lg-6 col-img">
                  <img
                    class="img-fluid"
                    src="../assets/img/Ouvidoria-2x.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <!--LOGO-ITENS-->
            <div class="col-12 col-lg-6 col-itens">
              <div class="row row-itens-logo justify-content-between">
                <div class="col-item col-12 col-md-4">
                  <a class="btn-itens-logo" href="#">
                    <span>
                      <svg-icon
                        size="28"
                        type="mdi"
                        :path="cardAccountPhone"
                      ></svg-icon>
                    </span>
                    <span>Ouvidoria e-SIC</span>
                  </a>
                </div>
                <div class="col-item col-12 col-md-4">
                  <a class="btn-itens-logo" href="#">
                    <span>
                      <svg-icon
                        size="28"
                        type="mdi"
                        :path="textBoxSearch"
                      ></svg-icon>
                    </span>
                    <span class="text">Portal Transparência</span>
                  </a>
                </div>
                <div class="col-item col-12 col-md-4">
                  <a class="btn-itens-logo" href="#">
                    <span>
                      <svg-icon size="28" type="mdi" :path="email"></svg-icon>
                    </span>
                    <span>Carta de Serviços ao Cidadão</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!--Menu-->
      <div class="row row-menu order-0 order-md-1">
        <nav class="navbar navbar-expand-md menu-nav">
          <div class="container container-menu">
            <a class="navbar-brand d-md-none" href="#">
              <img
                class="img-fluid"
                src="../assets/img/Ouvidoria.png"
                alt="Logo-Cliente"
              />
            </a>
            <button
              id="icone-menu"
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span><i class="bi bi-list"></i></span>
            </button>
            <div
              class="menu-navbar collapse navbar-collapse w-100"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav w-100 justify-content-between">
                <li class="nav-item dropdown menu-item">
                  <a
                    class="nav-link menu-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="semi-bold"
                      >Prefeitura
                      <i class="seta-dropdown bi bi-chevron-compact-down"></i
                    ></span>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Equipe do Governo</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Fotos da Prefeitura</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Galeria de Prefeitos</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Conheça Nosso Prefeito</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Conheça Nosso Vice Prefeito</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item text-wrap semi-bold"
                        >Competência, estrutura e organizacional</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown menu-item">
                  <a
                    class="nav-link menu-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="semi-bold"
                      >Município
                      <i class="seta-dropdown bi bi-chevron-compact-down"></i
                    ></span>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a href="#" class="dropdown-item semi-bold">Economia</a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold">Simbolos</a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Como Chegar</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Galeria de Obras</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >História do Município</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Conheça Nosso Município</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown menu-item">
                  <a
                    class="nav-link menu-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="semi-bold"
                      >Secretarias<i
                        class="seta-dropdown bi bi-chevron-compact-down"
                      ></i
                    ></span>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Administração</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item text-wrap semi-bold"
                        >Agricultura e Desenvolvimento Economico Sustentável</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Assistência Social</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold">Educação</a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold">Esportes</a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold">Finanças</a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Infraestrutura</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Meio Ambiente, Turismo e Cultura</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item text-wrap semi-bold"
                        >Planejamento, Tecnologia e Informática</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold">Saúde</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item menu-item">
                  <a class="nav-link menu-link semi-bold" href="#">Notícias</a>
                </li>
                <li class="nav-item dropdown menu-item">
                  <a
                    class="nav-link menu-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="semi-bold"
                      >Imprensa<i
                        class="seta-dropdown bi bi-chevron-compact-down"
                      ></i
                    ></span>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a href="#" class="dropdown-item semi-bold">Notícias</a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Agenda da Cidade</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Galeria de Fotos</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Galeria de Vídeos</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown menu-item">
                  <a
                    class="nav-link menu-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="semi-bold"
                      >Contato<i
                        class="seta-dropdown bi bi-chevron-compact-down"
                      ></i
                    ></span>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Ouvidoria E-SIC</a
                      >
                    </li>
                    <li>
                      <a href="#" class="dropdown-item semi-bold"
                        >Telefones Úteis</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!-- CONTEÚDO // Não mexer nessa tag -->
  <slot></slot>
  <!--          -->
  <footer class="container-fluid">
    <!--Área Contato-->
    <section class="row area-contato">
      <div class="container container-contato">
        <div class="row contatos">
          <div class="col-12 col-md-4">
            <span class="contato-titulo">Horário de Atendimento</span>
            <a href="#">
              <span>Segunda à Sexta, 07h às 11h e das 13h às 17h</span>
            </a>
          </div>
          <div class="col-12 col-md-4">
            <span class="contato-titulo">Endereço</span>
            <a href="#">
              <span>Rua das axaleias, 257 - Jardim Botânico - Sinop/MT</span>
            </a>
          </div>
          <div class="col-12 col-md-4">
            <span class="contato-titulo">Fale com a Prefeitura</span>
            <a href="#">
              <span>(66) 3535-3535</span>
            </a>
            <a href="#">
              <span>(66) 9 9999-9999</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!--Mapa do Site-->
    <section class="row area-mapa-site">
      <div class="container container-mapa-site">
        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-md-6">
                <nav class="mapa-site-links">
                  <h3>Imprensa</h3>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Notícias</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Agenda da Cidade</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Galeria de Fotos</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Galeria de Vídeos</a>
                    </li>
                  </ul>
                </nav>
                <nav class="mapa-site-links">
                  <h3>Contato</h3>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Ouvidoria E-SIC</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Telefones Úteis</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-12 col-md-6">
                <nav class="mapa-site-links">
                  <h3>Prefeitura</h3>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Equipe do Governo</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Fotos da Prefeitura</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Galeria de Prefeitos</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Conheça Nosso Prefeito</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"
                        >Conheça Nosso Vice Prefeito</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"
                        >Competência, estrutura e oraganizacional</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-md-6">
                <nav class="mapa-site-links">
                  <h3>Município</h3>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Economia</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Simbolos</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Como Chegar</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Galeria de Obras</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">História do Município</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Hino, Bandeira e Brasão</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Conheça Nosso Município</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-12 col-md-6">
                <nav class="mapa-site-links">
                  <h3>Secretarias</h3>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Administração</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"
                        >Agricultura e Desenvolvimento Economico Sustentável</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Assistência Social</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Educação</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Esportes</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Finanças</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Infraestrutura</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"
                        >Meio Ambiente, Turismo e Cultura</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"
                        >Planejamento, Tecnologia e Informática</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Saúde</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Mapa-Google-->
    <section class="row mapa-sinop">
      <div class="col-12 px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62471.897351707805!2d-55.54140010721364!3d-11.87067924856206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fe80bc27573%3A0x1207800617733e83!2sSinop%2C%20MT!5e0!3m2!1spt-BR!2sbr!4v1645482179348!5m2!1spt-BR!2sbr"
          class="w-100"
          height="320"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>

    <!--Direitos autorais-->
    <section class="row row-direitos-autorais">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 direitos-autorais">
            <span
              >&#169; Ano - Nome do cliente - Todos os direitos
              reservados.</span
            >
          </div>
          <div class="col-12 col-md-2 logoMPX">
            <img src="../assets/img/LogoMPX.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCardAccountPhone, mdiEmail, mdiTextBoxSearch } from "@mdi/js";

export default {
  name: "DefaultLayout",
  components: { SvgIcon },
  setup() {
    return {
      cardAccountPhone: mdiCardAccountPhone,
      email: mdiEmail,
      textBoxSearch: mdiTextBoxSearch,
    };
  },
};
</script>

<style scoped></style>
