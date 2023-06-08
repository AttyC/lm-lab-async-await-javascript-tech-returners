const getResponse = async () => {
  const randomInt = Math.floor(Math.random() * 10);
  try {
    randomInt % 2 === 0
      ? setTimeout(
          () => console.log(`Yay! Promise resolved with response: done`),
          2000
        )
      : setTimeout(
          () => console.log(`Boo. Promise rejected with response: error`),
          2000
        );
  } catch {
    (e) => console.log(e);
  }
};
getResponse();
