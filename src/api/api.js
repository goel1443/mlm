import axios from "axios";

// Vue.use(store)

export default class ApiClass {
  // live links
  // static baseUrl = "https://node.gdcchain.com/api/";
  // static vueUrl = "https://validator.gdcchain.com/";

  // local links
  static baseUrl = "http://192.168.1.33:5000/";
  static vueUrl = "http://192.168.1.33:8080/userpanel";

  //******************************* Post api *******************************************//

  static postRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    return axios
      .post(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  //******************************* Get api *******************************************//

  static getRequest(apiUrl, isToken = true, headers = null, params = null) {
    return axios
      .get(this.baseUrl + apiUrl, this.config(isToken, headers, params))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  //******************************** Update api ********************************************** */

  //******************* if form data with image ************************ */

  static updateFormRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    baseParam = { _method: "PUT" };
    if (params != null) {
      // var baseParam = $.extend(params, baseParam)
      var baseParam = Object.assign(params, baseParam);
    }
    return axios
      .post(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, baseParam)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }
  //******************* form data in json format ************************ */

  static updateRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    return axios
      .put(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  //*********************************** Delete api *************************************************** */

  static deleteRequest(apiUrl, isToken = true, headers = null, params = null) {
    return axios
      .delete(this.baseUrl + apiUrl, this.config(isToken, headers, params))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  //******************************* Configrations of header and parameters ******************************* */

  static config(isToken = true, headers = null, parameters = null) {
    var defaultHeaders = {
      Accept: "application/json",
    };
    var merge = {};
    if (isToken) {
      var token = { Authorization: "Bearer " + localStorage.getItem("token") };
      merge = Object.assign(defaultHeaders, token);
    }
    merge = Object.assign(defaultHeaders, headers);
    return {
      headers: merge,
      params: parameters,
    };
  }

  //********************************* If the unautherntication Error..... ************************************** */

  static unauthenticateRedirect() {
    localStorage.clear();
    location.replace("/");
  }
}
