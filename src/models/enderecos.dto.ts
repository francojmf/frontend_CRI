import { CidadeDTO } from "./cidade.dto";
import { UsuarioDTO } from "./usuario.dto";

export interface EnderecosDTO {
  id: UsuarioDTO;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: CidadeDTO;
}
