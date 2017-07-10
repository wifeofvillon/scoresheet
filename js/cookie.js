class Cookie {
  /**
   * set cookie's key and properties
   * @param  {String} key  cookie's key
   * @param  {JSON} prop cookie's property
   */
  constructor(key, prop) {
    this.key = key;
    this.prop = prop || {};
  }

  /**
   * Read cookie as JSON (with key)
   * @return {JSON} cookie value
   */
  read() {
    return Cookies.getJSON(this.key);
  }

  /**
   * Write cookie (with key)
   * @param  {JSON} value new cookie value
   * @return {String}       cookie value
   */
  write(value) {
    return Cookies.set(this.key, value, this.prop);
  }

  /**
   * Remove Cookie (with key)
   * @return {String} cookie value
   */
  remove() {
    return Cookie.remove(this.key);
  }
}
