const strictUriEncode = (string: string): string => encodeURIComponent(string).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

export default strictUriEncode;
