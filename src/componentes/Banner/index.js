import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Ola, Mundo!
        </h1>

        <p className={styles.paragrafo}>
          Fortes habilidades na criação de interfaces de usuário responsivas para aplicativos da Web com um olhar atento aos detalhes e uma paixão pela programação. Estou pronto para contribuir para o sucesso do seu projeto.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true} />
          <img
            className={styles.minhaFoto}
            src={minhaFoto}
            alt="Foto do Emanuel"
          />
      </div>
    </div>
  )

}