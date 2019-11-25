import user from './dbconnect';

const findByUserName = (username, callback) => {
  callback(
    null,
    user.findAll({
      where: {
        username: username + ''
      }
    })
  );
};

const getAllUsers = () => {
  return user.findAll();
};

const deleteUser = (name, word) => {
  return user
    .destroy({
      where: {
        username: 'name',
        password: 'word'
      }
    })
    .then(() => {
      console.log('done');
    });
};

export { getAllUsers, findByUserName, deleteUser };
