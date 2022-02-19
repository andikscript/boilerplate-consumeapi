import { BaseService } from "../BaseService";

function getSepatu() {
  return BaseService.get('/v2/produk');
}

function postSepatu(body) {
  BaseService.post('/v2/produk', body);
}

export {
  getSepatu,
  postSepatu
}