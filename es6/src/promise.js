export function sleep(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(time >= 0) {
        resolve(time);
      } else {
        reject(-1);
      }
    },time);
  });
}
