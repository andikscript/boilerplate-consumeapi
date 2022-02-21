import { BaseURL } from "../../config/BaseUrl";
import { BaseService } from "../BaseService";

function getSepatu() {
  return BaseService.get(BaseURL.PRODUK);
}

function postSepatu(body) {
  return BaseService.post(BaseURL.PRODUK, body);
}

function updateSepatu(id, body) {
  return BaseService.put(BaseURL.PRODUK_ID(id), body);
}

function deleteSepatu(id) {
  return BaseService.delete(BaseURL.PRODUK_ID(id));
}

export {
  getSepatu,
  postSepatu,
  updateSepatu,
  deleteSepatu,
}