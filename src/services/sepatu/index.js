import { BaseService } from "../BaseService";

function getSepatu() {
  return BaseService.get('/v2/produk');
}

function postSepatu(body) {
  return BaseService.post('/v2/produk', body);
}

function updateSepatu(id, body) {
  return BaseService.put(`/v2/produk/${id}`, body);
}

function deleteSepatu(id) {
  return BaseService.delete(`/v2/produk/${id}`);
}

export {
  getSepatu,
  postSepatu,
  updateSepatu,
  deleteSepatu,
}