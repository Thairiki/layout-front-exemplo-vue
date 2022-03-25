<template>
  <div class="home">
    <DefaultLayout>
      <main class="container-fluid container-principal">
        <!--Carousel-->
        <div class="row row-carrosel">
          <section class="carrosel-box d-none d-md-block">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/img/vitrine.png"
                    class="d-block w-100"
                    alt="Imagem Cidade"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/img/vitrine.png"
                    class="d-block w-100"
                    alt="Imagem Cidade"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/img/vitrine.png"
                    class="d-block w-100"
                    alt="Imagem Cidade"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span aria-hidden="true">
                  <!--<i class="icone-anterior bi bi-chevron-left"</i>>-->
                  <svg
                    class="icone-anterior"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
                    />
                    <path
                      fill="#000"
                      stroke="#000"
                      stroke-width=".5"
                      d="M24.81 18.715l.185-.168c-.167-.184-.393-.297-.64-.297s-.473.113-.64.297h0l-.004.004-3.96 4.514-.364.415h.146c-.022.088-.033.179-.033.27 0 .127.022.253.065.372.042.116.105.224.188.315l3.958 4.513h0l.004.003c.167.184.393.297.64.297s.473-.113.64-.296c.084-.09.148-.2.19-.317.044-.119.065-.245.065-.372s-.021-.254-.064-.372c-.043-.117-.106-.225-.189-.315L21.64 23.75l3.357-3.827c.082-.09.146-.199.188-.316.043-.118.065-.244.065-.372 0-.127-.022-.253-.065-.371-.043-.118-.107-.227-.19-.318l-.184.17zm0 0c.06.065.108.144.14.234l-1.051-.234c.127-.138.288-.215.456-.215.167 0 .329.077.456.215z"
                    />
                  </svg>
                </span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span aria-hidden="true">
                  <svg
                    class="icone-proximo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"
                    />
                    <path
                      fill="#000"
                      stroke="#000"
                      stroke-width=".5"
                      d="M22.19 29.285l-.185.168c.167.184.394.297.64.297.247 0 .473-.113.641-.297h0l.003-.003 3.96-4.515.364-.415h-.146c.022-.088.033-.179.033-.27 0-.127-.022-.253-.064-.371-.043-.117-.106-.225-.189-.316l-3.958-4.512h0l-.003-.004c-.168-.184-.394-.297-.641-.297s-.473.113-.64.296c-.084.09-.148.2-.19.318-.043.118-.065.244-.065.371s.022.254.064.372c.043.117.106.225.189.316l3.358 3.827-3.358 3.828c-.082.09-.146.198-.188.315-.043.118-.065.245-.065.372s.022.253.065.372c.043.117.107.227.19.317l.184-.17zm0 0c.126.139.288.215.455.215.168 0 .33-.076.456-.215l-.912-1.04c-.059.064-.107.143-.14.233-.032.09-.049.188-.049.287 0 .099.017.196.05.286.032.09.08.17.14.234z"
                    />
                  </svg>
                </span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section>
        </div>

        <!--Menu-Serviços-->
        <div class="row row-servicos">
          <nav class="container container-servicos">
            <div class="row slider-menu">
              <div class="col-2 slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 1</span>
                </a>
              </div>
              <div class="col-2 slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 2</span>
                </a>
              </div>
              <div class="col-2 slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 3</span>
                </a>
              </div>
              <div class="col-2 slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 4</span>
                </a>
              </div>
              <div class="col-2 slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 5</span>
                </a>
              </div>
              <div class="col-2 slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 6</span>
                </a>
              </div>
              <div class="col-2 slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 7</span>
                </a>
              </div>
              <div class="col-2 slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 8</span>
                </a>
              </div>
              <div class="col-2 slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 9</span>
                </a>
              </div>
              <div class="col-2 my-auto slider-item">
                <a
                  class="btn-servicos btn d-flex flex-column semi-bold justify-content-center"
                  href="#"
                >
                  <span><i class="bi bi-square-half"></i></span>
                  <span class="px-1">Serviço 10</span>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <!--Noticias-->
        <div class="row row-noticias">
          <section class="container container-noticias">
            <!--Título-->
            <div class="row">
              <div class="col-12 titulos">
                <h2>Notícias</h2>
              </div>
            </div>

            <!--Cards Noticias-->
            <div class="row row-card-noticia">
              <div class="col-12 col-md-6 col-card-noticia">
                <a href="#" class="card card-noticia">
                  <span class="data-badge">13/04/2020</span>
                  <div class="efeito-zoom">
                    <figure>
                      <img
                        src="../assets/img/foto-center.png"
                        alt=""
                        class="card-img-top"
                      />
                    </figure>
                  </div>
                  <div class="card-body">
                    <h3 class="card-text">
                      Ted Sarandos nomeado co-CEO da Netflix
                    </h3>
                  </div>
                </a>
              </div>
              <div class="col-12 col-md-6 col-card-noticia">
                <a href="#" class="card card-noticia">
                  <span class="data-badge">14/04/2020</span>
                  <div class="efeito-zoom">
                    <figure>
                      <img
                        src="../assets/img/foto-center2.png"
                        alt=""
                        class="card-img-top"
                      />
                    </figure>
                  </div>
                  <div class="card-body">
                    <h3 class="card-text">
                      O aplicativo de meditação Calm está tendo seu próprio
                      programa HBO Max cheio de celebridades
                    </h3>
                  </div>
                </a>
              </div>
            </div>

            <!--Slider Notícias-->
            <div class="row row-slider-noticia">
              <div class="container container-slider-noticias">
                <div class="row slick-noticias">
                  <div
                    class="col-3 col-slider-noticia"
                    v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                    :key="item"
                  >
                    <div class="box-card-noticias">
                      <a href="" class="card-noticia-slider">
                        <span class="data-badge-slider">13/04/2020</span>
                        <img
                          src="../assets/img/image.png"
                          alt=""
                          class="card-img-top"
                        />
                        <div class="card-body body-slider-noticia">
                          <h3 class="card-text">
                            Spaceflight Inc. lança novo veículo de transferência
                            orbital para foguete via satélite
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Botão Notícias-->
            <div class="row">
              <div class="container container-botao">
                <div class="row row-botao">
                  <div class="col-12 btn-mais-noticias">
                    <button class="btn">Veja mais Notícias</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!--Área Banner-->
        <div class="row area-banners">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 banners">
                <figure class="figure">
                  <img
                    src="../assets/img/banner01.png"
                    class="figure-img img-fluid"
                    alt="..."
                  />
                </figure>
              </div>
              <div class="col-12 col-md-6 banners">
                <figure class="figure">
                  <img
                    src="../assets/img/banner01.png"
                    class="figure-img img-fluid"
                    alt="..."
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <!--Galeria de Fotos-->
        <section class="row galeria-fotos">
          <div class="container container-galeria-fotos">
            <div class="row">
              <div class="col-12 titulos">
                <h2>Galeria de fotos</h2>
                <span></span>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="row slider-galeria">
              <div
                class="col-4 card card-galeria-fotos"
                v-for="item in [1, 2, 3, 4]"
                :key="item"
              >
                <a href="#">
                  <span class="data-badge">13/04/2020</span>
                  <figure class="efeito-zoom">
                    <img
                      class="card-img"
                      src="../assets/img/foto-galeria.png"
                      alt=""
                    />
                  </figure>
                  <div class="card-body">
                    <span class="card-text"
                      >Como escolher o cliente certo para o seu negócio
                      fotográfico?</span
                    >
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="row botao-galeria-fotos">
            <div class="container container-botao">
              <div class="row row-botao">
                <div class="col-12 btn-mais-noticias">
                  <button class="btn">Veja mais galerias</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--Calendário de Eventos-->
        <section class="row calendario">
          <div class="col-12">
            <div class="row">
              <div class="container">
                <div class="row titulo-calendario">
                  <div class="col-12 titulos">
                    <h2>Calendário de Eventos</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Cards-Calendário-->
          <div class="col-12">
            <div
              class="row row-calendario row-cols-1 row-cols-sm-2 row-cols-lg-4"
            >
              <div class="col" v-for="item in [1, 2, 3, 4]" :key="item">
                <div class="card align-items-center">
                  <a class="card-calendario" href="#">
                    <div class="card-header titulos">
                      <h3>13 de dezembro 2020</h3>
                      <span>A partir das 16:30</span>
                    </div>
                    <figure>
                      <img
                        class="img-fluid"
                        src="../assets/img/agenda1.png"
                        alt=""
                      />
                    </figure>
                    <div class="card-body">
                      <p class="card-text">
                        Como escrever conteúdo sobre suas fotos
                      </p>
                    </div>
                    <div class="card-footer">
                      Rua das Azaleias, 257 - Jardim Botânico - Sinop/MT
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!--BTN Veja mais Eventos-->
          <div class="row botao-galeria-fotos">
            <div class="container container-botao">
              <div class="row row-botao">
                <div class="col-12 btn-mais-noticias">
                  <button class="btn">Veja mais eventos</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--Galeria de Vídeos e Obras -->
        <section class="row">
          <div class="container">
            <div class="row galeria-video-obra">
              <!--Card Galeria de Video-->
              <div class="col-12 col-md-6">
                <div class="row row-galeria-video">
                  <div class="col-12 titulos">
                    <h2>Galeria de Vídeos</h2>
                  </div>

                  <div class="col-12">
                    <a href="#" class="card card-galeria-video">
                      <div class="player-video ratio ratio-16x9">
                        <iframe
                          src="https://www.youtube.com/embed/xowvJ2DfHuk"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div class="card-body">
                        <div class="card-text">
                          <p>Como a escrita influencia sua marca pessoal?</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="col-12 btn-mais-noticias">
                    <button class="btn">Veja mais vídeos</button>
                  </div>
                </div>
              </div>

              <!--Galeria de Obras -->
              <div class="col-12 col-md-6">
                <div class="row row-galeria-obra">
                  <div class="col-12 titulos">
                    <h2>Galeria de Obras</h2>
                  </div>

                  <div class="col-12">
                    <a href="#" class="card card-galeria-obra">
                      <span class="data-badge">13/04/2020</span>
                      <div class="efeito-zoom">
                        <figure>
                          <img
                            src="../assets/img/galeria-obra.png"
                            alt=""
                            class="card-img-top"
                          />
                        </figure>
                      </div>
                      <div class="card-body">
                        <div class="card-text">
                          <p>Por que não usamos sites prontos</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="col-12 btn-mais-noticias">
                    <button class="btn">Veja mais obras</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--banner da Cidade -->
        <section class="row banner-cidade">
          <div class="col-12">
            <div class="container-fluid container-banner-cidade">
              <div class="row row-card-banner-cidade">
                <div class="col-12 col-xl-8 col-xxl-7 card-banner-cidade">
                  <div class="card banner-conheca">
                    <div class="row">
                      <div class="col-12 banner-cidade-hearder">
                        <span>Conheça a </span>
                        <span>Melhor Cidade do Brasil</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 banner-cidade-body">
                        <span
                          >É a sua cidade! Onde tem tudo o que você
                          precisa.</span
                        >
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 banner-cidade-buttons">
                        <button>Conheça a Cidade</button>
                        <button type="button" disabled>
                          Conheça a Economia
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 banner-cidade-thumbnail">
            <img
              class="thumbnail w-100 img-fluid thumbnail-banner,"
              src="../assets/img/image-5.png"
              alt="image"
            />
          </div>
        </section>
      </main>
    </DefaultLayout>
  </div>
</template>

<script>
// @ is an alias to /src

import DefaultLayout from "@/layouts/DefaultLayout";
export default {
  name: "Home",
  components: {
    DefaultLayout,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
