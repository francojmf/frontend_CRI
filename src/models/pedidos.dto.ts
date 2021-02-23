import { EnderecosDTO } from "./enderecos.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";
import { ItemDTO } from "./item.dto";

export interface PedidosDTO {
  [x: string]: any;
  endereco: EnderecosDTO;
  itens: ItemPedidoDTO[];
  item: ItemDTO[];
}
