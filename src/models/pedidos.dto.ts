import { EnderecosDTO } from "./enderecos.dto";
import { EntregaDTO } from "./entrega.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";
import { ItemDTO } from "./item.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { UsuarioDTO } from "./usuario.dto";

export interface PedidosDTO {
  [x: string]: any;
  endereco: EnderecosDTO;
  itens: ItemPedidoDTO[];
  item: ItemDTO[];
}
