import {
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  fundoescuro,
  conteudoEscuro,
  textoFundoEscuro,
} from "./variavel";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
};

export const temaEscuro = {
  body: fundoescuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)",
};
