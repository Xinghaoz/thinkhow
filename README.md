## thinkhow

## Setup the environment
- `sudo apt-get install nodejs`
- `sudo apt-get install npm`

Install nvm (Node.js verion manager) (from: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server):
- `sudo apt-get update`
- `sudo apt-get install build-essential libssl-dev`

in https://github.com/creationix/nvm find the instruction to install the latest version, at this time:
- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash`

To find out the versions of Node.js that are available for installation, you can type:
- `nvm ls-remote`

install express:
- `sudo npm install express -g`

Setup the first project:
- `express -e nodejs-demo`
- `cd nodejs-demo && npm install`
- `nodejs app`  Here is "nodejs" instead of "node"

- `cd nodejs-demo`
- `sudo npm install`

Run the program:
- `npm start` (express > 3.x)
- `nodejs app.js` (express version 2.x)

Test whether it is running or not:
- `sudo apt-get install curl`
- `curl localhost:3000`
