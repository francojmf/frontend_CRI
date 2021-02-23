import { EnderecosDTO } from "./enderecos.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";
import { ItemDTO } from "./item.dto";

export interface PedidosDTO {
  id: string;
  endereco: EnderecosDTO;
  itens: ItemPedidoDTO[];
  item: ItemDTO[];
}
