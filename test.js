function getPromiseForUserData() {
  return new Promise((resolve) => {
    fetchDataFromServerAsync().then(function (user) {
      resolve(user);
    });
  });
}

async function getPromiseForUserData() {
  const user = await fetchDataFromServerAsync;
  return user;
}

const promise = getPromiseForUserData();
s