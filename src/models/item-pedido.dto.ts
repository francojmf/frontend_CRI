import { RefDTO } from "./ref.dto";
import { PedidosDTO } from "./pedidos.dto";

export interface ItemPedidoDTO {
  nome: string;
  med_a: number;
  med_b: number;
  med_c: number;
  med_d: number;
  med_e: number;
  med_f: number;
  descricao: string;
  pedido: number;
  produto: number;
}
