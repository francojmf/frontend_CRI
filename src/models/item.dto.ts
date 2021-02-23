import { RefDTO } from "./ref.dto";

export interface ItemDTO {
  instante: string;
  quantidade: number;
  produto: RefDTO;
}
