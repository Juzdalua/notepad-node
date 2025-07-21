export const getCurrentDate = (): string => {
  const now = new Date();
  now.setHours(now.getHours() + 9);
  return now.toISOString().slice(0, 10);
  // return new Date().toISOString().slice(0, 10);
};

export const toCamelCase = (object: any) => {
  let newObject: any = {};
  var keys = Object.keys(object);
  const toCamelCase = (message: string) => {
    message = message.toLowerCase();
    message = message.replace(/-/gi, ' ');
    message = message.replace(/_/gi, ' ');
    let messages = message.split(' ').map((e, i) => {
      if (i > 0) {
        e = e.substring(0, 1).toUpperCase() + e.substring(1);
      }
      return e;
    });
    return messages.join('');
  };
  for (let i = 0; i < keys.length; i++) {
    newObject[toCamelCase(keys[i])] = object[keys[i]];
  }
  return newObject;
};

export const getKSTTimestamp = (ms: number): string => {
  const date = new Date(ms + 9 * 60 * 60 * 1000);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hour = String(date.getUTCHours()).padStart(2, '0');
  const minute = String(date.getUTCMinutes()).padStart(2, '0');
  const second = String(date.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
