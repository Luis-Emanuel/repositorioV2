import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá sou NT o brabo!
      </h3>

      <img
        src={fotoSobreMim}
        alt="Foto bala"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Fortes habilidades na criação de interfaces de usuário responsivas para aplicativos da Web com um olhar atento aos detalhes e uma paixão pela programação. Estou pronto para contribuir para o sucesso do seu projeto.
      </p>
      <p className={styles.paragrafo}>
        Fortes habilidades na criação de interfaces de usuário responsivas para aplicativos da Web com um olhar atento aos detalhes e uma paixão pela programação. Estou pronto para contribuir para o sucesso do seu projeto.
      </p>
      <p className={styles.paragrafo}>
        Fortes habilidades na criação de interfaces de usuário responsivas para aplicativos da Web com um olhar atento aos detalhes e uma paixão pela programação. Estou pronto para contribuir para o sucesso do seu projeto.
      </p>
      <p className={styles.paragrafo}>
        Fortes habilidades na criação de interfaces de usuário responsivas para aplicativos da Web com um olhar atento aos detalhes e uma paixão pela programação. Estou pronto para contribuir para o sucesso do seu projeto.
      </p>
      <p className={styles.paragrafo}>
        Fortes habilidades na criação de interfaces de usuário responsivas para aplicativos da Web com um olhar atento aos detalhes e uma paixão pela programação. Estou pronto para contribuir para o sucesso do seu projeto.
      </p>
      <p className={styles.paragrafo}>
        Fortes habilidades na criação de interfaces de usuário responsivas para aplicativos da Web com um olhar atento aos detalhes e uma paixão pela programação. Estou pronto para contribuir para o sucesso do seu projeto.
      </p>
      <p className={styles.paragrafo}>
        Fortes habilidades na criação de interfaces de usuário responsivas para aplicativos da Web com um olhar atento aos detalhes e uma paixão pela programação. Estou pronto para contribuir para o sucesso do seu projeto.
      </p>
      <p className={styles.paragrafo}>
        Fortes habilidades na criação de interfaces de usuário responsivas para aplicativos da Web com um olhar atento aos detalhes e uma paixão pela programação. Estou pronto para contribuir para o sucesso do seu projeto.
      </p>
    </PostModelo>
  )
}