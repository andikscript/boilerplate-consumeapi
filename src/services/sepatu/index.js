import { BaseService } from "../BaseService";

function getSepatu() {
  return BaseService.get('/produk');
}

function postSepatu(body) {
  return BaseService.post('/produk', body);
}

function updateSepatu(id, body) {
  return BaseService.put(`/produk/${id}`, body);
}

function deleteSepatu(id) {
  return BaseService.delete(`/produk/${id}`);
}

export {
  getSepatu,
  postSepatu,
  updateSepatu,
  deleteSepatu,
}