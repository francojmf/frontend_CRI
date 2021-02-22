import { EnderecosDTO } from "./enderecos.dto";

export interface UsuarioDTO {
  id: string;
  nome: string;
  email: string;
  cpf_ou_cnpj: string;
  tipo: number;
  ativo: number;
  enderecos: EnderecosDTO;
  imageUrl?: string;
}
