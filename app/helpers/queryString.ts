export default function toQueryString(params: {}) {
  return Object.keys(params)
    .map(key => key + "=" + params[key])
    .join("&");
}
