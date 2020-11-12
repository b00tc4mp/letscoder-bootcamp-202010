const fs = require("fs");
const { validateCallback, validateId } = require("./helpers/validations");
const path = require("path");

//const retrieveUser = (id, callback) => {
module.exports = (id, callback) => {
  // sync validations
  validateId(id);
  validateCallback(callback);

  fs.readFile(path.join(__dirname, `../data/users/${id}.json`), "utf8", (error, json) => {
      if (error) return callback(new Error(`the id: ${id} was not found`));

        json = JSON.parse(json);

        delete json.password; // return json with no password

        callback(null, json);
    }
  )
}

// Another approach that checks firstly the permission to access the file we need:

/*
module.exports = (id, callback) => {
    validateId(id)
    validateCallback(callback)

    const filePath = path.join(__dirname, `../data/users/${id}.json`)

    --// fs.access method is used to test the permissions of a file/directory. The second param denotes the permissions, fs.F_OK by default //--

    fs.access(filePath, fs.F_OK, error => {
        if (error) return callback(new Error(`user with id ${id} not found`))

        fs.readFile(filePath, 'utf8', (error, json) => {
            if (error) return callback(error)

            const user = JSON.parse(json)

            delete user.password

            callback(null, user)
        })
    })
}
*/
